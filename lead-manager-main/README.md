# Lead Manager

Lead Manager is a web-based tool for lead management, enabling users to add and view leads. It is developed with Next.js, Redux Toolkit, and Tailwind CSS for the frontend, and Express.js for the backend.

## Features

- Create new leads with their name, email, and status.
- See a list of all leads.


## Technologies Used

- Frontend: Next.js, Redux Toolkit, Tailwind CSS, React Hook Form
- Backend: Express.js, MongoDB
- State Management: Redux Toolkit
- API: RTK Query

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Clone the Repository

```sh
git https://github.com/https://github.com/Ashenafi0/lead-manager
cd lead-manager
cd backend
npm install
cd ..
cd frontend
npm install
```

### Set up the Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```
MONGO_URI=your_mongodb_uri
```     
### Start the Application

```sh
cd backend
node index.js
cd ..
cd frontend
npm run dev
```

The application will be running at `http://localhost:3000`.

