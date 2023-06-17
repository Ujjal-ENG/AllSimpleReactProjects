# Assignment Task from Ovigo Backend

Welcome to the Assignment Task. This project is built with Node.js and Express.js for the backend and for Database using MongoDB Atlas

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- Node.js (v12 or higher)
- MongoDB

# Assignment Task from Ovigo Backend

This is the backend server for the  project. It provides the necessary APIs and functionalities to manage users, bookings, hotels, and more.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- Stripe API

## Prerequisites

Before running the server, make sure you have the following installed:

- Node.js
- MongoDB

## Getting Started



- Set up environment variables:

- Create a `.env` file in the project root directory.
- Add the following environment variables to the file:

  ```
  PORT=<port_number>
  DB_USERNAME=<mongodb_username>
  DB_PASSWORD=<mongodb_password>
  JWT_SECRET_KEY=<jwt_secret_key>
  PAYMENT_KEY=<stripe_payment_key>
  ```

- Start the server:



-The server will be running on `http://localhost:<port_number>`.

## Available Routes


List all the available API routes provided by your server and describe their purpose and functionality. Include information about request methods, required parameters, and expected responses. Specify any authentication or authorization requirements for each route.

- `GET /`: Returns a message indicating that the server is running.
- `GET /health`: Returns a message indicating the server's health status.
- `POST /jwt`: Generates a JSON Web Token (JWT) for user authentication.
- `GET /hotels`: Retrieves hotels based on the specified place name.
- `POST /hotels`: Creates a new hotel entry (requires authentication and admin role).
- `GET /users/admin/:email`: Checks if the specified email belongs to an admin user.
- `GET /users`: Retrieves all users (requires authentication and admin role).
- `POST /users`: Creates a new user.
- `POST /bookings`: Creates a new booking (requires authentication).
- `GET /bookings`: Retrieves all bookings for a specific email (requires authentication).
- `GET /bookings-admin`: Retrieves all bookings (requires authentication and admin role).
- `PATCH /bookings/:id`: Updates the status of a booking (requires authentication).
- `DELETE /bookings/:id`: Deletes a booking (requires authentication).

Note: Please make sure to replace `:email` and `:id` with the actual email and booking ID parameters in the routes.


## Database

The server connects to a MongoDB database using the provided credentials in the `.env` file. The collections used are:

- `Users`: Collection of user information.
- `Hotels`: Collection for hotels information.
- `Bookings`: Collection for selected booking by users.

## Authentication and Authorization

JSON Web Tokens (JWT) are used for user authentication and authorization. The server verifies the JWT sent in the request headers to authenticate the user and determine their role for authorization purposes.

- `verifyJWT`: Middleware function to verify the JWT in the request headers.
- `verifyAdmin`: Middleware function to verify if the user has an admin role.


## Error Handling

The server handles errors by sending appropriate error responses with corresponding status codes and error messages. Error handling middleware is used to centralize error handling and provide consistent responses.

## Conclusion

This project backend server provides a robust API for managing users, hotels, and bookings. It leverages Node.js, Express.js, MongoDB, and JWT to deliver the required functionalities.

For more detailed information about the code and routes, please refer to the source code files.

## Live Server Site Link

You can visit the Live Server Site at [https://assignment-task-ovigo-server.vercel.app/]

## Author

My name is Ujjal Kumar Roy and I recently graduated with a degree in Computer Science and Engineering. I am passionate about web development and love to build things that people can use. In my free time, I enjoy playing cricket and listening to music.

- Facebook: [Ujjal Kumar Roy](https://www.facebook.com/ujjal.roy.7862/)
- LinkedIn: [Ujjal Kumar Roy](https://www.linkedin.com/in/ujjal-kumar-roy/)
- My Portfolio: [https://my-portfolio-c465b.web.app/]

If you have any feedback or suggestions for this project, feel free to contact me at ujjalroy7862@gmail.com
