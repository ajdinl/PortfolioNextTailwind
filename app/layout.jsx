import '@/styles/globals.css';
import ThemeWrapper from '@/app/_components/ThemeWrapper';

export const metadata = {
    title: 'Ajdin Lojic | Full Stack Web Developer (React, Node.js, Ruby on Rails)',
    description: 'Full Stack Developer skilled in React, Node.js, Ruby on Rails, Next.js & Nest.js. Building scalable, efficient, and user-friendly web applications with modern technologies.',
    keywords: 'Ajdin Lojic, Web Developer, Full Stack Developer, React Developer, Node.js Developer, Ruby on Rails Developer, Next.js Developer, Nest.js Developer, JavaScript, TypeScript, Frontend, Backend, Portfolio',
    author: 'Ajdin Lojic',
    creator: 'Ajdin Lojic',
    publisher: 'Ajdin Lojic',
    googleSiteVerification: 'I0bxza9FsmM34Q21YfY31hluNzPw6hJdo7t7rN1-um4',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Ajdin Lojic | Full Stack Web Developer',
        description: 'Explore Ajdin Lojic’s portfolio showcasing expertise in React, Node.js, Ruby on Rails, Next.js, Express & Nest.js.',
        url: 'https://ajdinlojic.vercel.app/',
        siteName: 'Ajdin Lojic Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    social: {
        linkedIn: {
            url: 'https://www.linkedin.com/in/ajdin-lojic/',
            title: 'Ajdin Lojic | Full Stack Web Developer',
            description: 'Check out my professional portfolio highlighting expertise in React, Node.js, Ruby on Rails, Next.js, Express & Nest.js.',
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <ThemeWrapper>{children}</ThemeWrapper>
            </body>
        </html>
    );
}
