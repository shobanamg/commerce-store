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
      </div>
      <div className="flex">
        <ProductList items={products} title="Featured Product" />
      </div>
    </Container>
  );
};

export default HomePage;
