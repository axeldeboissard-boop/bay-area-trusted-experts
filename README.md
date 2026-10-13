# Bay Area Trusted Experts

A premium Bay Area consumer discovery site that helps people connect with a curated network of trusted professionals for life events such as buying or selling a home, divorce, inheritance, retirement, and growing a family.

**Live site:** [bayareatrustedexperts.com](https://bayareatrustedexperts.com)

## What is included

- A public, life-event-first discovery experience at `/`
- Accessible flip tiles that reveal recommended approved professionals
- Search that matches visitors to professionals by specialty, role, and life event
- Direct phone, email, and official website/profile links for the approved roster
- An authenticated private member-network experience at `/members`
- A maintainable, single-source professional roster in `client/src/data/approvedProfessionals.ts`

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Wouter
- Express and tRPC
- Drizzle ORM with MySQL/TiDB
- Manus OAuth for the private member area

## Run locally

### Prerequisites

- Node.js 22+
- pnpm 9+
- Environment variables for the database and OAuth-backed member area

### Install and start

```bash
pnpm install
pnpm dev
```

The local development server starts on port 3000 by default.

### Validate the project

```bash
pnpm check
pnpm test
pnpm build
```

## Key project areas

| Path | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Public consumer homepage, life-event tiles, and professional search |
| `client/src/data/approvedProfessionals.ts` | Approved roster, contact data, life-event matching, and official profile links |
| `client/src/pages/MemberNetwork.tsx` | Private member-network experience |
| `server/routers.ts` | Server-side tRPC routes |
| `drizzle/schema.ts` | Database schema for member access |
| `server/approvedProfessionals.test.ts` | Roster and placement safeguards |

## Updating the roster

Only add or update professionals in `client/src/data/approvedProfessionals.ts` when they have been approved for the network. The public search and life-event tiles read from this same data source so the changes stay consistent across the site.

## Media and assets

Image paths use managed `/manus-storage/...` locations. If you replace or add an image, upload the original file to the project's managed storage and update the corresponding `photoUrl` in the roster.

## Environment and secrets

Do not commit `.env` files, `.project-config.json`, OAuth credentials, database URLs, or API keys. Configure those values in the appropriate hosting environment.
