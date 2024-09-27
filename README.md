# Project Skeleton for Back-End Framework

This repository serves as a template for setting up the back-end framework of future projects. It is designed with a focus on code quality, security, and development efficiency, utilizing a modern tech stack and best practices in software development.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Technology Stack](#technology-stack)
5. [Development Tools and Practices](#development-tools-and-practices)
6. [Cheat Sheet](#cheat-sheet)

## Project Overview

This project is structured as a monorepo using Yarn Workspaces, allowing for the management of multiple packages within a single repository. It is primarily aimed at back-end development, with the potential to integrate front-end packages if needed. The structure and tooling are set up to support scalable and maintainable codebases, facilitating a seamless development experience from the get-go.

### Tech Stack Used

- **Node.js & Express**: For building efficient and scalable web applications.
- **MongoDB & Mongoose**: NoSQL database and ODM for flexible data modeling.
- **dotenv**: Manages environment variables for secure application configuration.
- **Helmet**: Adds security headers to protect from some well-known web vulnerabilities.
- **CORS**: Handles cross-origin resource sharing, allowing or restricting requested resources on a web server based on where the HTTP request was initiated.
- **bcrypt**: For hashing and securing user passwords.
- **JWT (JSON Web Tokens)**: Implements secure and scalable user authentication.
- **Yarn Workspaces**: Manages dependencies for multiple packages in a monorepo setup.

## Installation

To set up the project environment, follow these steps:

1. Clone the repository:
   `git clone <repository-url>`

2. Install dependencies:
   Navigate to the root of the repository and run:

`yarn install`

## Running the Application

- **Backend**: Start the backend service by running:
  `yarn workspace server start`
- **Fron-tend** (not yet implemented): Start the front-end by running:
  `yarn workspace client start`

## Development Tools and Practices

- **TypeScript**: Adds static typing to JavaScript.
- **Prettier**: for ensuring consistent code style.
- **ESLint**: Linting tool for identifying and fixing problems in JavaScript code.
- **Jest**: JavaScript Testing Framework.
- **Husky & lint-staged**: Used for automating code checks before commits.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.
- **Concurrently**: Enables running multiple commands concurrently, useful in monorepos.

## Cheat Sheet

This section serves as a quick reference for developers to perform common tasks within the project. It covers adding new packages, running tests, and ensuring code consistency.

### Adding New Packages

- **To add a new package to a specific workspace:**
  `yarn workspace <workspace-name> add <package-name>`

Replace `<workspace-name>` with the name of the workspace (e.g., `server` or `client`) and `<package-name>` with the name of the package you wish to add.

Since TypeScript is used you will most likely also want to run the following in order to load in the types for the package:

`yarn workspace <workspace-name> add @types/<package-name>`

- **To add a new package to all workspaces:**

`yarn workspaces add <package-name>`

- **To add a package that is used by the entire monorepo (dev dependency):**

`yarn add -W -D <package-name>`

The `-W` flag adds the package to the root workspace, and `-D` marks it as a development dependency.

## Running Tests

- **To run tests across all packages:**
  `yarn workspaces run test`

This command will trigger the test script in each package that has it defined.

- **To run tests in a specific workspace:**

`yarn workspace <workspace-name> test`

Replace `<workspace-name>` with the name of the workspace where you want to run the tests.

## Code Formatting and Linting

- **To lint code across all packages:**

`yarn workspaces run lint`
