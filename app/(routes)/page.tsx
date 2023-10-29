import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

const HomePage = async () => {
  const billboard = await getBillboard('dfa0db1e-a734-4b75-afd4-34f5cf332a94');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} title="Featured Product" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
