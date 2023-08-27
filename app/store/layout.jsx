import Link from 'next/link';

export const metadata = {
  title: 'Official Store',
};

const StoreLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Store Section</h3>

        <ul>
          <li>
            <Link href="/store/categories">Categories</Link>
          </li>
          <li>
            <Link href="/store/categories/computers">Computers</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default StoreLayout;
