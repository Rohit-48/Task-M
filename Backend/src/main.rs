use actix_web::{web, App, HttpResponse, HttpServer, Responder, middleware::Logger};
use serde::{Deserialize, Serialize};
use std::sync::Mutex;
use std::io;

#[derive(Debug, Serialize, Deserialize, Clone)]
enum Priority {
    High,
    Medium,
    Low,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Task {
    id: usize,
    title: String,
    description: String,
    priority: Priority,
    completed: bool,
}

#[derive(Debug, Serialize, Deserialize)]
struct TodoList {
    tasks: Vec<Task>,
    next_id: usize,
}

impl TodoList {
    fn new() -> Self {
        TodoList {
            tasks: Vec::new(),
            next_id: 1,
        }
    }

    fn add_task(&mut self, title: String, description: String, priority: Priority) {
        let task = Task {
            id: self.next_id,
            title,
            description,
            priority,
            completed: false,
        };
        self.next_id += 1;
        self.tasks.push(task);
    }

    fn complete_task(&mut self, id: usize) -> bool {
        if let Some(task) = self.tasks.iter_mut().find(|t| t.id == id) {
            task.completed = true;
            return true;
        }
        false
    }

    fn remove_task(&mut self, id: usize) -> bool {
        if let Some(pos) = self.tasks.iter().position(|t| t.id == id) {
            self.tasks.remove(pos);
            return true;
        }
        false
    }

    fn list_tasks(&self) -> &Vec<Task> {
        &self.tasks
    }
}

struct AppState {
    todo_list: Mutex<TodoList>,
}

#[derive(Deserialize)]
struct NewTask {
    title: String,
    description: String,
    priority: String, // Expected to be "High", "Medium", or "Low"
}

async fn get_tasks(data: web::Data<AppState>) -> impl Responder {
    let todo_list = data.todo_list.lock().unwrap();
    HttpResponse::Ok().json(todo_list.list_tasks())
}

async fn add_task(data: web::Data<AppState>, new_task: web::Json<NewTask>) -> impl Responder {
    let mut todo_list = data.todo_list.lock().unwrap();
    let priority = match new_task.priority.as_str() {
        "High" => Priority::High,
        "Medium" => Priority::Medium,
        "Low" => Priority::Low,
        _ => Priority::Low,
    };
    todo_list.add_task(
        new_task.title.clone(),
        new_task.description.clone(),
        priority,
    );
    HttpResponse::Created().json("Task Added")
}

async fn complete_task(data: web::Data<AppState>, path: web::Path<usize>) -> impl Responder {
    let id = path.into_inner();
    let mut todo_list = data.todo_list.lock().unwrap();
    if todo_list.complete_task(id) {
        HttpResponse::Ok().json("Task marked as completed")
    } else {
        HttpResponse::NotFound().json("Task not found")
    }
}

async fn remove_task(data: web::Data<AppState>, path: web::Path<usize>) -> impl Responder {
    let id = path.into_inner();
    let mut todo_list = data.todo_list.lock().unwrap();
    if todo_list.remove_task(id) {
        HttpResponse::Ok().json("Task removed")
    } else {
        HttpResponse::NotFound().json("Task not found")
    }
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    let state = web::Data::new(AppState {
        todo_list: Mutex::new(TodoList::new()),
    });

    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .app_data(state.clone())
            .route("/tasks", web::get().to(get_tasks))
            .route("/tasks", web::post().to(add_task))
            .route("/tasks/{id}/complete", web::patch().to(complete_task))
            .route("/tasks/{id}", web::delete().to(remove_task))
    })
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
