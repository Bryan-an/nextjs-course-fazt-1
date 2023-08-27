import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Volver</Link>
    </section>
  );
};

export default NotFoundPage;
