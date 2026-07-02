# MyPrint — Environment & Setup

## Node / Runtime
- Node version: 24.15.0 (via npx vercel detection)
- npm version: bundled with Node 24
- Next.js version: 14.2.5
- React version: 18.x
- Tailwind CSS: 3.4.1
- lucide-react: 0.400.0

## Project Location
- Local path: C:\Users\E87304\Desktop\MyPrint
- Package name: myprint (lowercase — directory "MyPrint" caused npm naming conflict)
- Git: initialized, first commit done ("Day 1: project setup + complete landing page")
- GitHub remote: NOT YET SET UP — add remote in Day 2 before pushing

## Vercel
- Project name: my-print (org: virtualsinghs-projects)
- Project ID: prj_GgBAe5DYxcRIfmVuDjsppJE7o3ms
- `.vercel/project.json` present — CLI is linked
- GitHub remote connected: https://github.com/VirtualSingh/MyPrint.git
- Production URL: NEEDS CONFIRMATION from Pushpendra (used as NEXT_PUBLIC_APP_URL and in Supabase redirect URL config)

## Supabase
- Project: NOT YET SET UP / credentials not yet supplied — BLOCKING Day 2 completion
- `.env.local` has placeholder (empty) entries for:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY
  - NEXT_PUBLIC_APP_URL (currently defaulted to http://localhost:3000 — must be overridden with prod URL in Vercel dashboard)
- Confirmed via local testing: leaving these empty makes `next dev` 500 on every route (see BUGS.md Bug 4) because `middleware.ts` runs on all routes and Supabase's client constructor throws on empty URL/key.
- Google OAuth provider: NOT YET CONFIRMED enabled in Supabase dashboard
- `supabase/migrations/0001_users_and_auth_trigger.sql` written but NOT YET RUN — creates public.users table, RLS policies, and the auth.users → public.users trigger

## Razorpay
- Mode: TEST (switch to LIVE on Day 9)
- Keys: NOT YET SET UP — Day 5 task
- Webhook URL configured: No

## Resend
- Domain verified: No — Day 6 task
- From email: TBD

## External Services Status
- [ ] Supabase project created
- [ ] Vercel connected (deployment pending user action)
- [ ] GitHub remote added
- [ ] Razorpay test keys added
- [ ] Resend API key added
- [ ] All env vars set in Vercel dashboard
