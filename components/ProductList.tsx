import type { Product } from '@/types';

interface ProductProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3>{title}</h3>
    </div>
  );
};

export default ProductList;
