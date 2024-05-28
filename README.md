# NextAuthV5 NextJs14 Starter Template

Welcome to the NextAuthV5 NextJs14 Starter Template! This project is designed to help you kickstart your Next.js application with modern authentication features, including OAuth login and MongoDB integration. It leverages the latest server components provided by NextAuth V5 for a seamless authentication flow.

## Features

- **Next.js 14**: Utilizes the latest features and improvements of Next.js.
- **NextAuth V5**: Integrates NextAuth V5 for robust and secure authentication.
- **MongoDB**: Uses MongoDB as the database for storing user information.
- **OAuth Login**: Supports OAuth login for easy and secure user authentication.
- **Server Components**: Incorporates modern server components for efficient server-side rendering and state management.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/janhbnr/NextAuthV5-NextJs14-Starter-Template.git
   cd NextAuthV5-NextJs14-Starter-Template

2. **Install dependencies:**
    ```bash
    pnpm install

3. **Set up environment variables:**
  Create a .env.local file in the root directory and add the following variables:
    ```env
    MONGODB_URI=
    AUTH_SECRET=
    AUTH_URL=http://localhost:3000/
    
    AUTH_GITHUB_ID=
    AUTH_GITHUB_SECRET=
    
    AUTH_GOOGLE_ID=
    AUTH_GOOGLE_SECRET=

4. **Run the development server:**
    ```bash
    pnpm run dev --turbo
