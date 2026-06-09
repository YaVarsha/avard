# AVARD Backend Setup

This project includes a Node.js backend for donation submissions.

## Local Run

1. Install dependencies:

```bash
npm install
```

2. Create a backend environment file from `.env.example` and fill:

```env
PORT=4000
CORS_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=avard_ngo
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

3. Start backend:

```bash
npm run dev:api
```

4. Start frontend:

```bash
npm run dev
```

The frontend `.env.local` points donations to:

```env
VITE_DONATION_API_URL=http://localhost:4000/api/donations
```

## Production Hosting

Set these environment variables on your hosting panel:

```env
PORT=4000
CORS_ORIGIN=https://avard.org
MONGODB_URI=your-mongodb-atlas-connection-string
MONGODB_DB_NAME=avard_ngo
GMAIL_USER=your-gmail-address
GMAIL_APP_PASSWORD=your-gmail-app-password
```

Set the frontend environment variable to your deployed backend URL:

```env
VITE_DONATION_API_URL=https://api.avard.org/api/donations
```

## API

- `GET /health`
- `GET /api/donations`
- `POST /api/donations`
- `PATCH /api/donations/:id/status`

Donation data is stored in MongoDB Atlas and donor thank-you emails are sent through Gmail SMTP when `GMAIL_USER` and `GMAIL_APP_PASSWORD` are configured.
