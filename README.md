# AP Plumbing

A professional business website built for AP Plumbing, a licensed plumbing company servicing Los Angeles & San Gabriel Valley. The site allows customers to learn about services, submit reviews, and get in touch — while giving the owner a subtle admin panel to manage reviews.

![Hero](https://github.com/user-attachments/assets/1a93e7c2-446f-4ebf-b30a-0e26c6b5a150)

![Reviews](https://github.com/user-attachments/assets/cace40c7-101a-4681-9d40-ccf4f676bab9)
![Contact](https://github.com/user-attachments/assets/eeffd5f4-8fa7-4382-b22a-4b522dc9cc48)

🔗 [Live Demo](https://ap-plumbing.vercel.app/)

> **Note:** This is a real client project. The admin login is visible in the footer but intentionally subtle — it uses a low opacity link to keep it discreet for the business owner.

## Features

- Responsive single page layout with smooth scroll navigation
- Services section with clickable modal popups for each service
- Customer review system — customers can submit reviews without an account
- Star rating filter to browse reviews by rating
- Admin login subtly placed in the footer — owner can log in and delete reviews
- Contact form with phone number auto-formatting powered by EmailJS
- QR code generated for the owner to share the site with customers

## Tech Stack

- **React** — component-based UI library
- **Firebase Authentication** — admin login for the business owner
- **Firestore** — real time database for storing and retrieving customer reviews
- **EmailJS** — contact form email delivery without a backend
- **Font Awesome** — dynamic icons rendered from a data array
- **CSS** — vanilla CSS with responsive design and animations

## How the Review System Works

- Any customer can submit a review without creating an account
- Reviews are stored in Firestore and displayed in real time
- The owner logs in via a subtle admin link in the footer
- When logged in, a delete button appears on each review card
- Only the authenticated owner can delete reviews

## Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/edwinalexandervargas/ap-plumbing.git
   cd ap-plumbing
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server
   ```bash
   npm start
   ```

## What I Learned

- Implementing Firebase Authentication for role-based access (admin vs public)
- Storing and retrieving real time data with Firestore
- Sending emails from a frontend app without a backend using EmailJS
- Rendering dynamic components by mapping over a data array
- Building a modal system with React state
- Responsive CSS layouts with media queries
- Thinking beyond code — generating a QR code for real world client use
