# tour.id — Tour Booking Platform (MVP)

tour.id is a modern web application that allows users to browse, filter, and book tour packages seamlessly. This project is built as an MVP (Minimum Viable Product) to explore fullstack patterns using Next.js, combining server-side and client-side capabilities.

---

## Live Demo

Feel free to explore the app and try the full booking flow.

🌐 https://tourid-next-fe.vercel.app/

---

## Features (MVP Scope)

- Browse tour packages  
- Filter tours based on criteria  
- View detailed tour information  
- Checkout tour packages  
- Payment verification flow  
- View booked (checked-out) tours  

---

## Tech Stack & Architecture

### Core Framework
- Next.js (App Router)
  - Server Components + Client Components
  - Route Handlers (BFF pattern)

### State & Data Fetching
- TanStack Query  
  - Server prefetch + client hydration
- Zustand  
  - Lightweight client-side state

### Forms & Validation
- React Hook Form  
- Zod  

### Authentication & Security
- jose  
  - Token handling & verification

---

## Architecture Highlights

This project explores a hybrid frontend architecture:

- Server-side data fetching with prefetching  
  Improves initial load performance

- Client-side interactivity with TanStack Query  
  Keeps UI reactive and fast

- BFF (Backend-for-Frontend) via Next.js Route Handlers  
  - Secure token handling (via cookies)  
  - Prevents exposing sensitive APIs directly to client  

---

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

### Run with Docker
```bash
docker compose up --build
```


## Project Structure

```
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
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
JWT_SECRET=your_secret
```

---
## Why This Project?
#### This project was built to:
- Explore hybrid rendering in Next.js
- Simulate real-world BFF architecture
- Practice state management + data fetching patterns
- Understand secure token handling in modern web apps

### Future Improvements
- Admin dashboard for managing tours
- Pagination & advanced filtering
- CI/CD pipeline & infrastructure setup
- Unit & integration testing
---

