# BrillGen AI

An interactive web application that generates and modifies web applications using Groq's LLM API. Built with Next.js and TypeScript.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

## Features

- Real-time app generation based on natural language queries
- Content safety checking using LlamaGuard
- Interactive feedback system for iterative improvements
- Version control and history tracking
- Share and export functionality
- Continuous deployment with Netlify

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Groq SDK
- React Syntax Highlighter
- UUID for session management
- Supabase for data storage

## Environment Variables

Required environment variables:
- `GROQ_API_KEY`: Your Groq API key
- `HTML_SIGNING_SECRET`: Secret key for HTML signing
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon key

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables in a `.env` file
4. Run the development server: `npm run dev`

The application will be available at `http://localhost:3000`.

## Deployment

This project is automatically deployed to Netlify when changes are pushed to the master branch.

## Developed by

[BRILLIANT ESYSTEMS LIMITED](https://github.com/BRILLIANT-ESYSTEMS-LIMITED)
