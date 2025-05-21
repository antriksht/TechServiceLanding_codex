# REST Express

This is a full-stack application built with React, Express, TypeScript, and Neon DB.

## Tech Stack

**Frontend:**
*   React
*   Vite
*   TypeScript
*   Tailwind CSS
*   Shadcn UI
*   React Query

**Backend:**
*   Express.js
*   Node.js
*   TypeScript

**Database:**
*   Neon (Serverless Postgres)
*   Drizzle ORM

**Authentication:**
*   Passport.js

**Validation:**
*   Zod

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd rest-express
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server (which usually includes both frontend and backend with hot-reloading):

```bash
npm run dev
```

This will typically start the frontend on `http://localhost:5173` and the backend server on a specified port (e.g., `http://localhost:3000`).

### Building for Production

To build the application for production:

```bash
npm run build
```
This command will compile the TypeScript code, bundle the frontend and backend assets, and place them in a `dist` directory.

### Starting the Production Server

After building the project, you can start the production server:

```bash
npm run start
```
This will run the optimized production build of the application.

## Database

This project uses Neon, a serverless Postgres database. Drizzle ORM is used as the query builder and schema management tool.

To push any schema changes (defined in `shared/schema.ts` or similar) to your Neon database, you can use the following command:

```bash
npm run db:push
```

**Note:** Ensure your database connection string is correctly configured in your environment variables before running this command.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details (if one exists in the repository).
