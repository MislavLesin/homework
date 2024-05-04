import { useProducts } from './Context/ProductsContext';
import { FilterByMarkLabels } from './FilterByMarkLabels';

export function FilterByMarkCheckLabels({ setIsHidden }) {
  const { displayFilters, onApplyFilters } = useProducts();
  function handleClick() {
    setIsHidden(true);
    onApplyFilters();
  }
  return (
    <div>
      <p className="mb-[.4rem] mt-[.45rem] text-left text-[.875rem] font-[700] tracking-[.025rem] text-[#1c1c1c]">
        BELIEBTE MARKEN
      </p>
      <div className="mx-[.2rem] flex max-h-[20rem] flex-col overflow-y-auto">
        {displayFilters.map((filterObj) => (
          <FilterByMarkLabels
            brand={filterObj.brand}
            selected={filterObj.selected}
            id={filterObj.id}
            key={filterObj.id}
          />
        ))}
      </div>
      <button
        className="mt-2 h-[46px] w-[90%] border-[1px] border-black font-[.875rem]"
        onClick={handleClick}
      >
        SPEICHERN
      </button>
    </div>
  );
}
