import { createContext, useContext, useState } from 'react';
import data from '../Data/deals.json';

const ProductsContext = createContext();

const allFilters = data.Deals.Items.map((item) => {
  const filterObj = {
    brand: item.Brand.Name,
    selected: false,
    id: item.Brand.ID,
  };
  return filterObj;
});

const uniqueFilters = Array.from(
  new Set(allFilters.map((filter) => filter.id)),
).map((id) => {
  return allFilters.find((filter) => filter.id === id);
});

function ProductsProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState(data.Deals.Items.slice(0, 72));
  const [filters, setFilters] = useState(uniqueFilters);
  const [searchQuery, setSearchQuery] = useState('');
  const [applyedFilters, setApplyedFilters] = useState(
    filters.filter((filter) => filter.selected === true),
  );

  const searchedFilters =
    searchQuery.length > 0
      ? filters.filter((filterObj) =>
          filterObj.brand.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : filters;

  function handleCheckFilter(id) {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, selected: !filter.selected } : filter,
      ),
    );
  }

  function applyFilters() {
    setApplyedFilters(filters.filter((filter) => filter.selected === true));
  }

  function removeFilter(id) {
    setFilters((filters) =>
      filters.map((filter) =>
        filter.id === id ? { ...filter, selected: false } : filter,
      ),
    );
    setApplyedFilters((applyedFilters) =>
      applyedFilters.filter((filter) => filter.id !== id),
    );
  }
  const filterIDs = applyedFilters.map((filter) => {
    return filter.id;
  });
  const prods =
    applyedFilters.length > 0
      ? products.filter((product) => filterIDs.includes(product.Brand.ID))
      : products;

  function handleSelectProduct(id) {
    setSelectedProduct(products.filter((product) => product.DealID === id));
  }

  return (
    <ProductsContext.Provider
      value={{
        products: prods,
        setProducts,
        filters,
        setFilters,
        searchQuery,
        setSearchQuery,
        onCheck: handleCheckFilter,
        displayFilters: searchedFilters,
        onApplyFilters: applyFilters,
        onRemoveFilter: removeFilter,
        applyedFilters,
        selectedProduct,
        setSelectedProduct: handleSelectProduct,
        allProducts: data.Deals.Items.slice(0, 72),
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error(
      'ProductsContext was used outside of the ProductsProvider!',
    );
  return context;
}

export { ProductsProvider, useProducts };
