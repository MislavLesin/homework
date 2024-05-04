import { useProducts } from './Context/ProductsContext';

export function FilterByMarkLabels({ brand, selected, id }) {
  const { onCheck } = useProducts();
  return (
    <label className="align flex items-center justify-start px-2 text-sm">
      <input type="checkbox" checked={selected} onChange={() => onCheck(id)} />
      <span>{brand}</span>
    </label>
  );
}
