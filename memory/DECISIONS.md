# MyPrint — Architecture & Product Decisions

## 2026-07-01 — Manual project bootstrap instead of create-next-app
**What:** Used manual package.json + config files instead of `npx create-next-app@latest .`
**Why:** `create-next-app` rejected the directory name "MyPrint" due to npm naming restrictions (capital letters not allowed in package names). Rather than renaming the directory or moving files, we bootstrapped manually with `package.json` using `"name": "myprint"` (lowercase).
**Alternatives considered:** Creating in a temp lowercase directory and moving files — rejected because it would require careful merge with existing markdown/image files in the project root.
**Impact:** Functionally identical to create-next-app. We pinned Next.js to 14.2.5 per the master prompt's stack decision.

---

## 2026-07-01 — next.config.mjs instead of next.config.ts
**What:** Used `.mjs` extension for Next.js config, not `.ts`
**Why:** `next.config.ts` is only supported in Next.js 15+. We are on Next.js 14.2.5.
**Alternatives considered:** Upgrading to Next.js 15 — deferred; the master prompt specifies Next.js 14, and upgrading mid-session adds risk.
**Impact:** Config is plain JS with JSDoc type annotation. Functionally equivalent.

---

## 2026-07-01 — Mobile hamburger menu (opens dropdown, no drawer)
**What:** The mobile nav opens as an inline dropdown below the navbar, not a full-screen drawer/overlay.
**Why:** The session spec says "hamburger icon, no mobile menu needed today — just the icon." We went slightly further (added a functional dropdown) to make the page usable on mobile — a full-screen drawer is Day 2+ scope.
**Alternatives considered:** No menu behavior at all (icon only). Rejected — a non-functional hamburger looks broken.
**Impact:** Mobile users can access nav links and CTA buttons. Full mobile menu styling can be enhanced in Day 2.

---

## 2026-07-01 — ForVendors background color
**What:** Used `#EEF4FD` as the ForVendors section background (applied inline, not via Tailwind class)
**Why:** The design system does not define this exact token. Session spec says "#EEF4FD or #F0F6FF — not the brand blue, just a hint." We used `#EEF4FD` via inline style since it falls outside the Tailwind config tokens.
**Alternatives considered:** Adding a new Tailwind token `bg-vendor-section`. Deferred — avoids expanding the config for a single-use color.
**Impact:** Cosmetic only. The color is correct per spec.

---

## 2026-07-01 — Footer link colors via inline style
**What:** Footer text/link colors use `style={{ color: '#9AA0A6' }}` inline instead of `text-text-tertiary` Tailwind class
**Why:** The dark footer background means Tailwind's `text-text-tertiary` class (which resolves to `#9AA0A6`) should work fine — but the footer background `#1F1F1F` is also applied inline. Used inline style for consistency within the footer component to make the intent explicit.
**Alternatives considered:** Using `text-text-tertiary` throughout. Both approaches produce identical output.
**Impact:** None — cosmetic consistency decision.
