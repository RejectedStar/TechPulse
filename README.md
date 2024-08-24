# TechPulse Digest 🚀

Welcome to **TechPulse Digest**, your go-to web application for staying updated with the latest tech news! 🌐📈

## Overview

**TechPulse Digest** allows users to:
- Sign up with their email 📧
- Choose their favorite tech blogs and news sources 🗞️
- Receive daily emails with the newest articles from selected sources at around 6 am Berlin time 🌅

### Features

- **Easy Signup**: Register quickly with just an email address.
- **Personalized Content**: Select your favorite tech blogs from a curated list.
- **Daily Updates**: Get the latest articles delivered to your inbox every morning.

## Project Structure

- **`frontend/`**: Contains static HTML, CSS, and JavaScript files for the frontend interface.
- **`functions/`**: Contains Firebase Cloud Functions for handling email dispatches.

## Setup Instructions

### 1. Firebase Configuration 🔧

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Click "Add project" and follow the setup steps.

2. **Enable Firestore Database**:
   - Navigate to `Firestore Database` and click `Create Database`.

3. **Enable Firebase Cloud Functions**:
   - Go to `Functions` and enable it.

4. **Set Up SendGrid**:
   - Sign up for a [SendGrid account](https://sendgrid.com/).
   - Retrieve your API key from the SendGrid dashboard.

### 2. Frontend Deployment 🌍

1. **Set Up Firebase**:
   - Update the `firebaseConfig` object in `frontend/index.html` with your Firebase project details.

2. **Deploy Static Files**:
   - Upload the files from the `frontend` folder to your Strato hosting account.

### 3. Cloud Functions Deployment 🚀

1. **Install Firebase CLI**:
   - Install Firebase CLI and initialize functions:
     ```bash
     npm install -g firebase-tools
     firebase login
     firebase init functions
     ```

2. **Install Dependencies**:
   - Navigate to the `functions` directory and install dependencies:
     ```bash
     cd functions
     npm install
     ```

3. **Configure SendGrid API Key**:
   - Set the SendGrid API key in Firebase:
     ```bash
     firebase functions:config:set sendgrid.key="your-sendgrid-api-key"
     ```

4. **Deploy Functions**:
   - Deploy the Cloud Functions:
     ```bash
     firebase deploy --only functions
     ```

## Usage

1. **Visit the Hosted Site**: Access the site at your Strato-hosted URL.
2. **Sign Up**: Enter your email and select your preferred tech blogs.
3. **Receive Daily Emails**: Enjoy daily updates with the latest articles from your chosen sources.

## Contributing 🤝

I welcome contributions to improve TechPulse Digest! Please fork the repository and submit pull requests with your enhancements.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact 📬

For any questions or feedback, feel free to reach out:

- **GitHub**: [github.com/Rejectedstar/TechPulse](https://github.com/Rejectedstar/TechPulse)

Thank you for using TechPulse Digest! Stay informed and stay ahead with the latest in tech. 🚀💡

