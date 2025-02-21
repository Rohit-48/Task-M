# Todo List Manager

## Overview

Todo List Manager is a full-stack application that allows users to manage their tasks efficiently. The application consists of a backend built with Rust using Actix Web and a frontend developed with React.

## Project Structure

```
todo-app
├── backend
│   ├── src
│   │   └── main.rs        # Main logic for the backend
│   ├── Cargo.toml         # Rust project configuration
│   └── README.md          # Documentation for the backend
├── frontend
│   ├── src
│   │   ├── components      # React components for the application
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskList.tsx
│   │   │   └── Task.tsx
│   │   ├── services        # API service for backend communication
│   │   │   └── api.ts
│   │   ├── types           # TypeScript types and interfaces
│   │   │   └── index.ts
│   │   ├── App.tsx         # Main React component
│   │   └── main.tsx        # Entry point for the React application
│   ├── package.json        # Frontend project configuration
│   ├── tsconfig.json       # TypeScript configuration
│   └── README.md           # Documentation for the frontend
```

## Getting Started

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Build the Rust project:
   ```bash
   cargo build
   ```

3. Run the server:
   ```bash
   cargo run
   ```

The backend server will start on `http://127.0.0.1:8080`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

The frontend application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.