# Todo List Application in Rust

A todo list application with Rust backend (Actix-web) and React frontend.

## Execution

- Backend runs on: http://localhost:8080
- Frontend runs on: http://localhost:3000

<div align="center">
  <img src="Screenshot 2025-02-21 095727.png" alt="Todo App Screenshot" width="600"/>
</div>

## API Routes

| Method | Endpoint              | Description      |
|--------|----------------------|------------------|
| GET    | /tasks              | Get all tasks    |
| POST   | /tasks              | Create task      |
| PATCH  | /tasks/:id/complete | Complete task    |
| DELETE | /tasks/:id          | Delete task      |

## Project Structure

```
todo-app/
├── backend/
│   ├── src/
│   │   └── main.rs
│   └── Cargo.toml
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.tsx
    │   └── index.tsx
    └── package.json
```

## Local Development

1. Start the backend server:
   ```bash
   cargo run
   ```

2. Start the frontend development server:
   ```bash
   npm install
   npm start
   ```

## Requirements

- Rust (latest stable)
- Node.js
- npm

## License

MIT
