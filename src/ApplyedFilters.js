import { useProducts } from './Context/ProductsContext';

export function ApplyedFilters() {
  const { applyedFilters, onRemoveFilter } = useProducts();
  return applyedFilters.map((filter) => (
    <h1 onClick={() => onRemoveFilter(filter.id)} key={filter.id}>
      {filter.brand}
    </h1>
  ));
}
