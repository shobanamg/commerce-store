'use client';

import Image from 'next/image';

import Currency from '@/components/ui/Currency';
import IconButton from '@/components/ui/icon-button';
import { Expand, ShoppingCart } from '@/node_modules/lucide-react';
import type { Product } from '@/types';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0]?.url}
          alt="Image"
          fill
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
