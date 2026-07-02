# MyPrint — Bug Log

## Format
**Bug:** Description of the bug
**Day:** Which day it appeared
**Root cause:** Why it happened
**Fix:** How it was resolved
**Lesson:** What to do differently next time

---

## Bug 1 — Hero h1 had conflicting Tailwind text size classes
**Day:** 1
**Bug:** Hero headline `h1` was written with `text-[40px] md:text-[40px] text-[28px]` — two non-responsive classes on the same element. Tailwind would apply only one (last wins), and the responsive prefix on the second `text-[40px]` was redundant.
**Root cause:** Copy-paste error during initial write — responsive pattern was applied incorrectly.
**Fix:** Changed to `text-[28px] md:text-[40px]` — mobile-first, single responsive breakpoint.
**Lesson:** Always write mobile-first (`text-[small]`) and then use `md:text-[large]`. Never apply two bare (non-prefixed) text-size classes to the same element.

---

## Bug 2 — create-next-app rejected "MyPrint" directory name
**Day:** 1
**Bug:** `npx create-next-app@latest .` failed with "name can no longer contain capital letters" because the working directory is named "MyPrint".
**Root cause:** npm package name restrictions — capital letters not allowed. `create-next-app` uses the directory name as the package name.
**Fix:** Bootstrapped the project manually (package.json with `"name": "myprint"`, then `npm install`).
**Lesson:** When working in a directory with a capitalized name, always bootstrap manually or create in a temp lowercase dir and move.

---

## Bug 3 — next.config.ts not supported in Next.js 14
**Day:** 1
**Bug:** Initially created `next.config.ts` which is only supported in Next.js 15+. The build would have failed or silently ignored the config.
**Root cause:** Wrote TypeScript config file following Next.js 15 conventions; our pinned version is 14.2.5.
**Fix:** Deleted `next.config.ts`, created `next.config.mjs` with JSDoc type annotation.
**Lesson:** Check the Next.js version before using version-specific features. next.config.ts = Next.js 15+. next.config.mjs or next.config.js = Next.js 14.

---

## Bug 4 — Empty Supabase env vars 500 every route via middleware
**Day:** 2
**Bug:** With `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` left empty in `.env.local`, `next dev` throws `Error: Your project's URL and Key are required to create a Supabase client!` inside `lib/supabase/middleware.ts`. Because the root `middleware.ts` matcher covers nearly every route, this 500s the landing page too, not just auth pages.
**Root cause:** `@supabase/ssr`'s `createServerClient` throws synchronously if the URL/key are falsy, and middleware runs on every request before any page renders — there's no route that can render without a working Supabase client once middleware.ts exists.
**Fix:** Not yet fixed — requires real Supabase project credentials. `npm run build` still passes because Next.js prerenders nothing that touches middleware at build time (the error only fires at request time). Confirmed via `npm run dev` + `curl localhost:3000/` → 500.
**Lesson:** Once middleware.ts references the Supabase client, the entire site is hard-down until real env vars are set — this isn't isolated to auth pages. Get credentials before merging middleware.ts, or the landing page breaks along with everything else. `npm run build` succeeding is NOT sufficient proof the app works — it doesn't execute middleware/server-component code paths that only run per-request.
