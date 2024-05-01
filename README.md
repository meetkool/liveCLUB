# LiveCLUB

LiveCLUB is a streaming platform inspired by Twitch. Users can broadcast live by connecting their OBS software, and it features real-time viewer counts, chat functionality, follower interactions, and more. This platform utilizes technologies like LiveKit for chat and Clerk for user authentication.

## Key Features

- **Broadcasting**: Stream live content by connecting OBS to the application.
- **Viewer Engagement**: Live viewer counts and real-time chat.
- **User Interaction**: Features like following, blocking, slow chat mode, and chat for followers only.
- **Moderation Tools**: Options to enable or disable chat, and manage slow and followers-only chat modes.
- **Search Capability**: Easily find streams and content.
- **User Updates**: Utilizes Clerk WEBHOOKS for user management updates.

## Installation

First, clone the project to your local machine:

```bash
git clone https://github.com/meetkool/livehub.git
```

Navigate to the project directory:

```bash
cd livehub
```

Install the necessary dependencies:

```bash
yarn install
```

Set up the environment variables in a `.env` file:

```
# Clerk settings
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=your_webhook_secret_here

# Database configuration
DATABASE_URL=your_database_url_here

# LiveKit settings
LIVEKIT_API_URL=your_livekit_api_url_here
LIVEKIT_API_KEY=your_livekit_api_key_here
LIVEKIT_API_SECRET=your_livekit_api_secret_here
NEXT_PUBLIC_LIVEKIT_WS_URL=your_livekit_ws_url_here

# Uploading service credentials
UPLOADTHING_SECRET=your_uploadthing_secret_here
UPLOADTHING_APP_ID=your_uploadthing_app_id_here
```

### Set Up Database

Create a free PostgreSQL instance on [neon.tech](https://neon.tech). Then, prepare your database:

```bash
npx prisma generate
npx prisma db push
```

Start the application:

```bash
yarn dev
```

## Future Improvements

- **Authentication**: Plan to migrate from Clerk to NextAuth.js for enhanced authentication flexibility.

This revised documentation should provide a comprehensive guide to setting up and using LiveCLUB, along with a clear roadmap for future enhancements.