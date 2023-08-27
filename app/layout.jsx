import Navbar from '@/components/navbar';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Bryan-an',
  description: 'This is the home page of my store',
  keywords: 'store, online, ecommerce',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['italic', 'regular'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
