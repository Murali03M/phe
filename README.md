
# TurboRepo Financial Applications

Welcome to TurboRepo Financial Applications! This repository contains two groundbreaking applications developed by our team to revolutionize the way users manage their finances.

## Features

### User App
- Seamlessly manage your finances with our intuitive user interface.
- Add funds to your wallet effortlessly.
- Initiate peer-to-peer transactions using just a phone number.
- Secure authentication system for a seamless login experience.

### Bank Webhook
- Ensures the integrity and security of transactions.
- Verifies and updates transaction details for a smooth user experience.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/turborepo-financial-applications.git
   ```
Install dependencies:

```sh
npm install
Run PostgreSQL:
```

Run PostgreSQL either locally or on the cloud (e.g., Neon.tech):

```sh
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
Copy environment files:
```

Copy over all .env.example files to .env and update them with the correct database URL.

Run database migrations:

Navigate to the packages/db directory and run:

```sh
cd packages/db
npx prisma migrate dev
```

Seed the database:

Run the following command in the same directory:

```sh
npx prisma db seed
```
Run the User App:

Go to the apps/user-app directory and run:

```sh
cd ../apps/user-app
npm run dev
```

Login credentials:

Try logging in using the following credentials:

Phone: 1111111111
Password: murali (See seed.ts for details)


