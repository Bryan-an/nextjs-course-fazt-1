import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Bryan-an',
  description: 'This is the home page of my store',
  keywords: 'store, online, ecommerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
