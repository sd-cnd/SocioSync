Sociosync:-
Stay connected, stay synced

Sociosync is a social media web app designed to bring people together and foster meaningful connections. It's built with a focus on user experience, speed, and privacy, leveraging modern technologies like Vite, React, Appwrite, Tailwind CSS, Shadcn/ui, and Tanstack Query.

## Features

Seamless User Experience: Built with performance and responsiveness in mind, Sociosync provides a smooth and enjoyable experience.
Compelling Features: Engage with your network through:
-User authentication.
-Posts
-Search 
-User profiles
-Saved posts

Customized Aesthetics: Tailwind CSS and Shards UI provide a clean and flexible foundation for a visually appealing interface.
Efficient Data Management: Tanstack Query streamlines data fetching and management for a performant and maintainable codebase.
## Tech Stack

Frontend: Vite, React, Tailwind CSS, Shards UI, Tanstack Query
Backend: Appwrite
## Installation and Setup

Clone the repository:
Bash
git clone https://github.com/your-username/sociosync.git
Use code with caution. Learn more
Install dependencies:
Bash
npm install
Use code with caution. Learn more
Set up Appwrite:
Create an Appwrite account and project at https://appwrite.io/.
Obtain your Appwrite project endpoint and API keys.
Create the following Appwrite collections: users, posts, and comments.
Create a .env.local file in the project root and add your Appwrite credentials:

VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_PROJECT_ID='...'
VITE_APPWRITE_STORAGE_ID='...'
VITE_APPWRITE_DATABASE_ID='...'
VITE_APPWRITE_SAVES_COLLECTION_ID='...'
VITE_APPWRITE_USER_COLLECTION_ID='...'
VITE_APPWRITE_POST_COLLECTION_ID='...'
## Running the App

Start the development server:
Bash
npm run dev
Use code with caution. Learn more
Access the app in your browser: http://localhost:5173/

## For deployment of the application:-
VERCEL

## LINKS TO RESOURCES:-
APPWRITE:- https://appwrite.io/
VITE:- https://vitejs.dev/
SHADCN/UI:- https://ui.shadcn.com/
TAILWINDCSS:- https://tailwindcss.com/
TANSTACK QUERY:- https://tanstack.com/query/latest
VERCEL(FOR DEPLOYMENT):- https://vercel.com/