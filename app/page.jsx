import Users from '@/components/users';

export const metadata = {
  title: 'My special home page',
};

const HomePage = () => {
  // server component
  return (
    <section>
      {/* client component */}
      <Users />
    </section>
  );
};

export default HomePage;
