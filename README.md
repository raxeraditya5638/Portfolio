This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

use package
"dependencies": {
"bcryptjs": "^2.4.3",
"framer-motion": "^11.0.5",
"gsap": "^3.12.5",
"mongoose": "^8.1.2",
"next": "14.1.0",
"next-auth": "^4.24.6",
"react": "^18",
"react-dom": "^18"
},
"devDependencies": {
"@types/bcryptjs": "^2.4.6",
"@types/node": "^20",
"@types/react": "^18",
"@types/react-dom": "^18",
"autoprefixer": "^10.0.1",
"eslint": "^8",
"eslint-config-next": "14.1.0",
"postcss": "^8",
"tailwindcss": "^3.3.0",
"typescript": "^5"
}

NEXTAUTH_SECRET=openssl rand -base64 32 replace the ssl text
NEXTAUTH_URL=http://localhost:3000 or site base url
