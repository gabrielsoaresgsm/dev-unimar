import dynamic from 'next/dynamic';

const Header = dynamic(() => import('components/Header/header'));
const NotistackSnackbar = dynamic(() => import('components/SnackBar'));
const Products = dynamic(() => import('components/Products'));

export default async function Home() {
  return (
    <div>
      <Header />
      <main style={{ overflowX: 'hidden' }}>
        <NotistackSnackbar />
        <Products />
      </main>
    </div>
  );
}
