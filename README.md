<<<<<<< HEAD
# Portfolio
=======
# Portfolio Website

A modern, interactive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark blue theme
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 📧 Contact form with email functionality
- 🚀 Built with React, Vite, and Tailwind CSS

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Email Configuration (Optional)

The contact form is set up to send emails to **anandakrishnanvs121@gmail.com**. 

### Option 1: EmailJS (Recommended)

To enable direct email sending from the form:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (anandakrishnanvs121@gmail.com)
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key (from Account > API Keys)
5. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
6. Restart the dev server

### Option 2: Mailto Fallback

If EmailJS is not configured, the form will use a mailto: link as a fallback, which opens the user's default email client.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React 19
- Vite
- Tailwind CSS 3
- EmailJS (for contact form)
>>>>>>> 8fd09ef ( commit)
