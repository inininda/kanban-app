This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

## TO ADD Scahdcn component

`npx shadcn@latest add button`

## Note:

- In Next.js, component is by default SSR (Server component)
- Server component is component that runs in Server,
- so you can do like access database etc in the component
- cant use client stuff like useState, DOM etc.
- You should have most of your component in server component.
- When user load the page, it doesnt need to load all the javascript dep so the
  page load faster
- good for SEO, because the crawler can already have the entire page content
  downloaded without having to download javascript first
- server component can be async

- client component, component that runs in the client, like user browser. It
  will have access default react personality like DOM access, state etc.
- it's slow in the performance if you over use it
- only use it when necessary
- it's not good for SEO
- You can call client component inside the server component

- Lib folder
- where you created utility file or any file for configuration
- put NEXT_PUBLIC_ prefix so the environment variable accessible on client

- proxy function -> like middleware
- create proxy.ts in the root of the project
- before version 16 it was middleware.ts

## MONGODB

- collection is a group of related data, like table inside sql database
- document is a single record inside collection, in form of json like data
  called bson
- ODM (Object Documemt Mapper)
- ex: mongoose for MongoDB

## Better-auth

- auth provider library
- framework agnostic : a library or tool doesn't depend on a specific framework.
  You can use it with almost any framework—or even without one.


## typescript
- Abstract class is like a base class, you can not create instance out of it but you can extend it
