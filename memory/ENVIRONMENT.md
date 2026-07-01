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
- Project name: TBD (pending deployment)
- Preview URL: TBD
- Production URL: TBD
- Deployment status: PENDING — user needs to authenticate Vercel CLI

### To deploy (run this in C:\Users\E87304\Desktop\MyPrint):
```bash
npx vercel --prod
```
The CLI will open a browser for authentication on first run. After auth, it will auto-detect Next.js and deploy. No env vars required for Day 1 (landing page is fully static).

### Alternative (GitHub-first):
1. Create a new GitHub repo at github.com/new (name: myprint)
2. `git remote add origin https://github.com/<your-username>/myprint.git`
3. `git push -u origin master`
4. Go to vercel.com/new → Import Git Repository → select the repo → Deploy

## Supabase
- Project: NOT YET SET UP — Day 2 task
- Note: No env vars required yet. Day 2 will add:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY

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
