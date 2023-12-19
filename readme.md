# Yoga Class Registration System

This application provides an online platform for registering to yoga classes, handling batch assignments, and processing monthly payments.

## Features

- User registration with age validation (18-65 years)
- Monthly payment processing simulation
- Batch selection for yoga classes (4 batches per day)
- Full-stack JavaScript application with React, Node.js, Express.js, and MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker and Docker Compose are installed on your machine
- Node.js and npm are installed if you wish to run without Docker

## Technologies

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Containerization**: Docker & Docker Compose

## Local Development

### Clone the repository

```bash
git clone https://github.com/ankiit369/yoga-registration.git
cd yoga-registration
```
#### Backend
Navigate to the backend directory:
```bash
cd yoga-registration
```

#### Frontend
Navigate to the frontend directory:
```bash
cd client
```

### Running with Docker
To run the application with Docker, execute the following command:
```bash
docker-compose up --build
```
This will start all services defined in docker-compose.yml:

- The backend will be available at http://localhost:5000
- The frontend will be available at http://localhost:3000
- MongoDB will be running on its default port 27017

### Manual Setup(without Docker) 

A step-by-step series of examples that tell you how to get a development environment running.

Clone the repository:

```sh
git clone https://github.com/ankiit369/yoga-registration.git
cd yoga-registration
```

#### Install backend dependencies:
```sh
npm install
```

#### Start the backend server:
```sh
npm start
```

#### Navigate to the frontend directory:
```sh
cd client
```

#### Install frontend dependencies:
```sh
npm install
```

#### Start the frontend development server:
```sh
npm start
```

The application should now be running on http://localhost:3000.

## Deployment
For deployment, build the Docker containers and push them to a container registry. Then, deploy them to your chosen cloud provider or on-premises environment.

## Authors
- Ankit Kumar Verma