Project Setup Instructions
This project is built with the following technologies:

Node.js version: v16.10.0
Angular version: 13.1
ASP.NET Web API Framework: 4.7.2
SQL Server: 2019
Step 1: Clone the Repository
bash
Copy code
git clone <repository-url>
Step 2: Database Setup
Open the SQL script file provided (<script-file>.sql) and execute it in your local RDBMS (Relational Database Management System).
Step 3: Update API Connection String
Navigate to the API project directory.
Open the web.config file.
Locate the connection string section and update it according to your local database configuration.
Step 4: Build and Run API
Build the API project.
Run the API project using your preferred development environment.
Step 5: Angular Project Setup
Open the Angular project in your preferred code editor (e.g., VS Code).
Open the taskService.ts file.
Update the apiUrl variable with the correct API URL based on your local machine setup.
Step 6: Run Angular Application
Execute the following command in the terminal within the Angular project directory:
ng build

bash
Copy code
ng serve --open
This command will compile and serve the Angular application, and your default web browser will open with the application running.

With these detailed instructions, users should be able to follow the steps seamlessly and set up the project in their local environment.
