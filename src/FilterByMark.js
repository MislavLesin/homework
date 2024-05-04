import { useState } from 'react';
import { useProducts } from './Context/ProductsContext';
import { FilterByMarkCheckLabels } from './FilterByMarkCheckLabels';
import { ApplyedFilters } from './ApplyedFilters';

export function FilterByMark() {
  const [hidden, setIsHidden] = useState(true);
  const { searchQuery, setSearchQuery } = useProducts();

  function handleClick() {
    setIsHidden((h) => setIsHidden(!h));
  }
  return (
    <>
      <div className="relative z-10 m-2 mb-12 ml-10 h-[33px] w-[230px] cursor-pointer border-2 border-black text-center">
        <div onClick={handleClick}>
          Marken <span className="absolute right-4 top-2">&#129171;</span>
        </div>
        <div
          className={`absolute left-[-2px] top-7 w-[230px] border-2 border-black bg-white p-2 ${hidden ? 'hidden' : ''}`}
        >
          <input
            type="text"
            placeholder="Marke suchen..."
            className="h-[2.5rem] w-[100%] border-[.1rem] px-[.375rem] py-[.75rem] text-[#333]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FilterByMarkCheckLabels setIsHidden={setIsHidden} />
        </div>
      </div>
      <ApplyedFilters />
    </>
  );
}
