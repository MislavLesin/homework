import { useProducts } from './Context/ProductsContext';
import { Item } from './Item';

export function Items() {
  const { products } = useProducts();
  return (
    <div className="flex flex-wrap space-x-9 p-8">
      {products.map((item) => {
        return <Item item={item} key={item.DealID} />;
      })}
    </div>
  );
}
