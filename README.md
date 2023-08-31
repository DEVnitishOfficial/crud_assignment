

# User Management Backend

This project implements a RESTful API using Express.js to handle user-related operations such as registration and login. The user information is stored in a MongoDB database. The backend provides endpoints for user registration and login, along with proper validation and error handling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration
- User login
- MongoDB database integration
- Proper validation and error handling
- Clear and well-structured code with comments

## Technologies Used

- Express.js
- MongoDB
- Mongoose
- JavaScript

## Getting Started

1. Clone the repository:
   
   git clone https://github.com/DEVnitishOfficial/crud_assignment.git

2. Install dependencies:
   
   cd crud_assignment
   npm install

3. Set up your environment variables by creating a `.env` file:
 
   MONGO_URL=your-mongodb-connection-url
   PORT=3000

4. Run the server:
   
   npm start

## API Endpoints

### Register a User

**Endpoint:** POST `/register`

Request Body:
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "secretpassword"
}

Response (Success):
{
  "success": true,
  "message": "User registered successfully",
  "registerData": {
    "_id": "user-id",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "hashed-password",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "__v": 0
  }
}

Response (Error):
{
  "success": false,
  "message": "Error in sending data: error-message"
}

### Login

**Endpoint:** POST `/login`

Request Body:
{
  "email": "johndoe@example.com",
  "password": "secretpassword"
}

Response (Success):
{
  "message": "User Login Successfully, Congrats!!"
}

Response (Error - Wrong Password):
{
  "message": "You Have Entered Wrong Password"
}

Response (Error - No Account):
{
  "message": "No Account Found associated with this email"
}

## Error Handling

The backend application handles errors using appropriate HTTP status codes and provides detailed error messages in the response body. Common errors such as validation failures or database issues are properly handled and returned to the client.

## Contributing

Contributions are welcome! If you find any issues or improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).