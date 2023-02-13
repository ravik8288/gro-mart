import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BasePage from '@/containers/BasePage';
import BestSeller from '@/containers/BestSeller';
import CategoryList from '@/containers/Category';
import CategoryLists from '@/containers/CategoryLists';
import Main from '@/containers/Main';
import TopSearch from '@/containers/TopSearch';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <CategoryList />
        <BasePage />
        <CategoryLists />
        <TopSearch />
        <BestSeller />
      </Main>
      <Footer />
    </>
  );
}
