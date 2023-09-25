
# Holiday-Web-App

HolidayApp is a web application for managing and booking holidays. 
It consists of both a backend server and a frontend application.

## Backend Server

The backend server is responsible for handling requests, managing user authentication, and serving data from a MySQL database. It is built using Node.js and Express.

### Prerequisites

Before running the backend server, make sure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

### Installation and Usage

1. Navigate to the `backend` directory in your terminal.

2. Install the required packages by running:

   ```bash
   npm install
   ```

3. Configure the database:
   
   - Create a MySQL database named `holidayapp`.
   - Use the provided SQL script in the `database.sql` file to create the necessary tables and insert sample data.
   
4. Start the server by running:

   ```bash
   npm start
   ```

5. The server will be accessible at [http://localhost:5000](http://localhost:5000).

## Frontend Application

The frontend application is built using Angular and provides a user-friendly interface for browsing and booking holidays.

### Prerequisites

Before running the frontend application, make sure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

### Installation and Usage

1. Navigate to the `frontend` directory in your terminal.

2. Install the required packages by running:

   ```bash
   npm install
   ```

3. Start the development server by running:

   ```bash
   npm start
   ```

4. The application will be accessible at [http://localhost:4200](http://localhost:4200).

## Additional Notes

- The backend server uses the Express framework and serves data from the MySQL database.

- User authentication is implemented for both user and admin roles.

- The frontend application is built using Angular and provides a user-friendly interface for browsing and booking holidays.

- Chart and report generation are supported for admin users.

- Feel free to customize and extend this project to suit your specific requirements.

Enjoy using the Holiday-Web-App!
