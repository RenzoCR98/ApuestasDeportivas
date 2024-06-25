import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ApuestasX365',
  description: 'Apuestas Deportivas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} style={{ fontWeight: 'bold', margin: 0, padding: 0, backgroundColor: '#f5f5f5' }}>
        <div style={{ marginTop: '60px', width: '100%' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
