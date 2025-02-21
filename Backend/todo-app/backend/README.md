# Todo List Manager Backend

This is the backend for the Todo List Manager application, built using Rust and Actix Web. This backend provides a RESTful API for managing tasks in a todo list.

## Getting Started

### Prerequisites

- Rust (1.50 or later)
- Cargo (comes with Rust)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd todo-app/backend
   ```

2. Build the project:

   ```bash
   cargo build
   ```

### Running the Server

To run the server, execute the following command:

```bash
cargo run
```

The server will start on `http://127.0.0.1:8080`.

### API Endpoints

- `GET /tasks`: Retrieve the list of tasks.
- `POST /tasks`: Add a new task.
- `PATCH /tasks/{id}/complete`: Mark a task as completed.
- `DELETE /tasks/{id}`: Remove a task.

### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

### License

This project is licensed under the MIT License. See the LICENSE file for details.