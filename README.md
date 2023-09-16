# Stack Overflow Application

Welcome to the README for Stack Overflow frontend application. This application serves as the user interface for interacting with the backend server, providing features such as user authentication, displaying questions, answers, and more.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Components](#components)
   - [Answers](#answers)
   - [Questions](#questions)
   - [Auth](#auth)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure

Here's an overview of the project's folder structure:

- **public**: Contains static assets and the HTML template file.
- **src**: Contains the source code of the React application.
  - **components**: Organized by feature, this directory contains various React components.
    - **answers**: Components related to answers.
      - `AddAnswer.js`: Component for adding new answers.
      - `Answers.js`: Component for displaying answers.
      - `answers.css`: CSS styles for answer components.
    - **questions**: Components related to questions.
      - **questionList**: Components for listing questions.
        - `questionList.js`: Component for displaying a list of questions.
        - `questionList.css`: CSS styles for the question list.
      - **questionDetail**: Components for displaying question details.
        - `questionDetail.js`: Component for displaying a single question's details.
        - `questionDetail.css`: CSS styles for the question detail.
      - **askQuestion**: Components for asking new questions.
        - `askQuestion.js`: Component for asking new questions.
        - `askQuestion.css`: CSS styles for the ask question component.
    - **auth**: Components related to authentication.
      - **login**: Components for user login.
        - `login.js`: Component for user login.
        - `login.css`: CSS styles for the login component.
      - **register**: Components for user registration.
        - `register.js`: Component for user registration.
        - `register.css`: CSS styles for the registration component.
  - `App.css`: CSS styles for the main application component.
  - `App.js`: Main application component.
  - `index.css`: Global CSS styles.
  - `index.js`: Entry point for the React application.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package-lock.json` and `package.json`: Dependency management files.
- `README.md`: This file.

## Getting Started

To start using this frontend application, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory:

   ```sh
   cd stack-overflow-clone
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm start
   ```

The application should now be running and accessible in the web browser.

## Usage

This React frontend interacts with the backend API to provide the following features:


## Features:
- Basic login with username only
- Users can post a question
    - A question should have
        - Title
        - Body
        - Relevant tags to the question to make it more searchable
    - Once the community starts answering
        - Users can mark an answer as accepted
        - Users can edit a question
- Another User can answer the question

## Components

### Answers

The "Answers" components include functionalities related to answers:

- `AddAnswer.js`: Component for adding new answers.
- `Answers.js`: Component for displaying answers.
- `answers.css`: CSS styles for answer components.

### Questions

The "Questions" components include functionalities related to questions:

- **questionList**: Components for listing questions.
  - `questionList.js`: Component for displaying a list of questions.
  - `questionList.css`: CSS styles for the question list.

- **questionDetail**: Components for displaying question details.
  - `questionDetail.js`: Component for displaying a single question's details.
  - `questionDetail.css`: CSS styles for the question detail.

- **askQuestion**: Components for asking new questions.
  - `askQuestion.js`: Component for asking new questions.
  - `askQuestion.css`: CSS styles for the ask question component.

### Auth

The "Auth" components include functionalities related to user authentication:

- **login**: Components for user login.
  - `login.js`: Component for user login.
  - `login.css`: CSS styles for the login component.

- **register**: Components for user registration.
  - `register.js`: Component for user registration.
  - `register.css`: CSS styles for the registration component.

## Contributing

TODO

## License

TODO