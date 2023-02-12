import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BasePage from '@/containers/BasePage';
import CategoryList from '@/containers/Category';
import Main from '@/containers/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <CategoryList />
        <BasePage />
      </Main>
      <Footer />
    </>
  );
}
