# Intern Dashboard

A simple full stack intern dashboard built with Node.js, Express, and React.

## Features
- Dummy login/signup page (no authentication)
- Dashboard showing:
  - Intern name (from login/signup)
  - Dummy referral code (yourname2025)
  - Total donations raised (varies by name)
  - Rewards/unlockables section (static)

## Getting Started

### Backend
1. Navigate to the `backend` folder:
   ```powershell
   cd backend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the backend server:
   ```powershell
   node index.js
   ```

### Frontend
1. Navigate to the `frontend` folder:
   ```powershell
   cd ../frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the React app:
   ```powershell
   npm start
   ```

## Usage
- Enter any name and email to log in or sign up.
- The dashboard will display your name, a referral code, a unique donation amount, and static rewards.

## Project Structure
- `backend/` - Node.js + Express REST API
- `frontend/` - React app

## License
MIT
