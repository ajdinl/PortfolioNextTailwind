import '@/styles/globals.css';
import { Instrument_Serif, Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import ThemeWrapper from '@/app/_components/ThemeWrapper';
import db from '@/db.json';

const display = Instrument_Serif({ subsets: ['latin', 'latin-ext'], weight: '400', style: ['normal', 'italic'], variable: '--font-display' });
const sans = Schibsted_Grotesk({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin', 'latin-ext'], variable: '--font-mono' });

const { fullName, website } = db.info;
const title = `${fullName} | Software Engineer · Ruby on Rails, React, TypeScript`;
const description =
    'Software Engineer with 5+ years of experience building SaaS products with Ruby on Rails, React, Next.js, TypeScript, PostgreSQL and AWS. Open to new opportunities, remote-ready.';

export const metadata = {
    metadataBase: new URL(website),
    title,
    description,
    authors: [{ name: fullName, url: website }],
    creator: fullName,
    alternates: { canonical: '/' },
    verification: { google: 'I0bxza9FsmM34Q21YfY31hluNzPw6hJdo7t7rN1-um4' },
    openGraph: {
        title,
        description,
        url: '/',
        siteName: `${fullName} | Portfolio`,
        locale: 'en_US',
        type: 'profile',
    },
    twitter: { card: 'summary_large_image', title, description },
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f5f2eb' },
        { media: '(prefers-color-scheme: dark)', color: '#0d0f0e' },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
            <body>
                <ThemeWrapper>{children}</ThemeWrapper>
                <Analytics />
            </body>
        </html>
    );
}
