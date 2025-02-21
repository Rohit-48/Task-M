# Todo List Manager - Frontend

This is the frontend part of the Todo List Manager application built with React. It interacts with the backend API developed using Actix Web.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd todo-app/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server with:
   ```bash
   npm start
   ```
   This will launch the application in your default web browser at `http://localhost:3000`.

## Project Structure

- `src/components`: Contains React components for the application.
  - `TaskForm.tsx`: Component for adding new tasks.
  - `TaskList.tsx`: Component for displaying the list of tasks.
  - `Task.tsx`: Component representing a single task.

- `src/services`: Contains API service functions for interacting with the backend.
  - `api.ts`: Functions for making API calls.

- `src/types`: Contains TypeScript types and interfaces.
  - `index.ts`: Exports types used throughout the application.

- `src/App.tsx`: Main application component that sets up routing and includes other components.

- `src/main.tsx`: Entry point for the React application.

## API Endpoints

The frontend communicates with the backend API. Ensure the backend server is running to interact with the frontend.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.