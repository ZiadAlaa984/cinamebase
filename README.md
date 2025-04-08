Cinema Base - Movie & TV Series Discovery Platform
Project Overview
Cinema Base is a modern, responsive web application built with Next.js, shadcn/ui, and React Query, designed to help users discover movies and TV series. The platform integrates with The Movie Database (TMDB) API to fetch real-time data, offering features like filtering, searching, and detailed media exploration.

🔹 Key Features
✅ Multi-Filter Homepage

Filter by Movies or TV Shows

Sort by Now Playing, Upcoming, Top Rated, Popular

Browse by Genres

✅ Dark/Light Mode Toggle

Smooth theme switching using shadcn/ui and next-themes

✅ Advanced Search Functionality

Search for movies/series by name in the navbar

✅ Dedicated Movie & Series Pages

Movies Page: Filter by genres and categories (Now Playing, Upcoming, etc.)

Series Page: Additional filters like "Airing Today"

✅ Explore Page

Unified search for both movies & series

Filter by genres

✅ Detailed Media Pages

Movie/Series Details: Overview, cast, trailers, and recommendations

Series-Specific Features: Season breakdown with episode lists

Video Integration: Embedded trailers and clips

🛠️ Tech Stack
Frontend: Next.js (App Router)

UI Components: shadcn/ui (Radix + TailwindCSS)

State Management: React Query (for API data fetching & caching)

API: The Movie Database (TMDB)

Styling: TailwindCSS

Dark Mode: next-themes

Deployment: Vercel

🚀 Key Implementation Highlights
1. Dynamic Data Fetching with React Query
Efficiently fetches and caches movie/series data

Reduces unnecessary API calls with stale-while-revalidate strategy

2. Responsive UI with shadcn/ui
Pre-built, accessible components (tabs, dropdowns, cards)

Customizable theme (dark/light mode)

3. Optimized Performance
Lazy loading for images

Server-side rendering (SSR) for SEO-friendly pages

Incremental Static Regeneration (ISR) for frequently updated data

4. Intuitive Navigation & Filtering
URL-based filtering (e.g., /movies?genre=action)

Debounced search for better performance
