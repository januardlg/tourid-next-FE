This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Next.js Hybrid Rendering Architecture

app                                 # Routing & Rendering
│
├── (customer)
│    ├── home
│    |   └── page.tsx               # SSG
|    ├── our-trip
|    |   ├── page.tsx               # SSR
|    |   └── [tripId]      
|    |       └──  page.tsx          # SSR
|    ├── my-itinerary    
|         └── page.tsx              # SSR
├── (admin)
│   ├── dashboard
|   |    └── page.tsx                # SSR
|   ├── trip-maintenance
|        └── page.tsx                # SSR
|        └── [tripId]      
|            └──page.tsx            # SSR
└── (auth)
    ├── register
    |   └── page.tsx                # Server shell
    └── login
        └── page.tsx                # Server shell 


feature                              # Business & UI logic
|
├── home                             # static feature                                  
|   ├── containers                   # server component      
|   └── components                   
|
├── our-trip 
|   ├── containers                  # server component         
|   └── components
|       ├── pagination              # client component
|       └── sorting                 # client component
|
├── our-trip-detail
|   ├── containers                  # server component
|   └── components
|       └── checkout                # client component 
|
├── my-itenerary
|   ├── containers                  # server component
|   └── components
|       └── cancel                  # client component 
|
|
├── admin-dashboard                                                    
|   ├── containers                  # server component      
|   └── components                   
|       ├── pagination              # client component
|       └── sorting                 # client component
|
├── trip-maintenance                                                  
|   ├── containers                  # server component      
|   └── components                   
|       ├── edit                    # client component
|       └── detail                  # client component
|
├── register                                                           
|   ├── containers                   # server shell      
|   └── components                   
|       └── form                     # client component
├── login                                                           
    ├── containers                   # server shell      
    └── components        
        └── form                     # client component
        
