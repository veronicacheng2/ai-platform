# Wisdom AI Platform
Welcome to Wisdom, a powerful tool that integrates the ChatGPT API and Replicate API. With this application, users can easily generate code, create videos, and compose music using natural language prompts. 

## Demo
Check out the live demo of Wisdom at [Demo](https://wisdom-ai-platform.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Screenshots](#screenshots)

## Installation

Running the app locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You can run LuxHub locally by following these steps:

1. Clone the repository:

```
git clone https://github.com/veronicacheng2/ai-platform.git
```

2. Open the terminal and install the node modules:

```
npm install
```


3. You will need to create .env and fill in the following variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY,NEXT_PUBLIC_CLERK_SIGN_IN_URL,NEXT_PUBLIC_CLERK_SIGN_UP_URL,NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,OPENAI_API_KEY,REPLICATE_API_TOKEN,DATABASE_URL,STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET,NEXT_PUBLIC_APP_URL

4. Start the server:
```
npm run dev
```

5. The application should now be accessible at http://localhost:3000.

## Features

- User authentication and registration (using Google Account).
- Free Tier and Pro Tier (Each user has 5 free generations, once used up, the user needs to use Stripe for subscribing to the service)
- Integration of external AI APIs enables users to engage in conversations with AI and promptly generate code, music, and video content.

## Screenshots


