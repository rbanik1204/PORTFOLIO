# Portfolio Backend - Contact Form Email Service

A simple Node.js/Express backend server that handles contact form submissions and sends emails.

## 🚀 Features

- **Contact Form API**: Handles form submissions from your portfolio
- **Email Service**: Sends emails using Gmail SMTP
- **CORS Enabled**: Works with your React frontend
- **Error Handling**: Proper validation and error responses
- **Environment Variables**: Secure configuration

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
# Copy the server-package.json to package.json
cp server-package.json package.json

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

**Important**: For Gmail, you need to use an "App Password", not your regular password.

### 3. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file

### 4. Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## 📧 API Endpoints

### POST `/api/contact`

Sends contact form data via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "Server is running"
}
```

## 🔧 Configuration

- **Port**: Change `PORT` in `.env` file
- **Email Service**: Currently configured for Gmail
- **Recipient**: Emails are sent to `ratulbanik1204@gmail.com`

## 🚨 Security Notes

- Never commit your `.env` file to version control
- Use app passwords, not regular passwords
- Consider rate limiting for production use
- Validate email inputs on both frontend and backend

## 📁 File Structure

```
├── server.js              # Main server file
├── package.json           # Dependencies
├── .env                   # Environment variables (create this)
└── BACKEND_README.md      # This file
```

## 🚀 Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use a proper email service (SendGrid, AWS SES, etc.)
3. Add rate limiting and input sanitization
4. Use HTTPS
5. Consider using a process manager like PM2

## 🐛 Troubleshooting

### Email not sending?
- Check your Gmail app password
- Verify `.env` file exists and has correct values
- Check Gmail security settings

### CORS errors?
- Ensure the server is running on the correct port
- Check that CORS is properly configured

### Port already in use?
- Change the `PORT` in `.env` file
- Kill any existing processes on that port
