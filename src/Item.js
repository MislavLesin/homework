import { Link } from 'react-router-dom';
import { URL } from './App';

export function Item({ item }) {
  const imgPath = item.Details.Media.ThumbnailImagePath;
  const fullUrl = `${URL}${imgPath}`;

  return (
    <Link to={`/details/${item.DealID}`}>
      <div className="mb-4 ml-9 h-[270px] w-[240px] border-b-2 px-5">
        <div className="relative">
          <img src={fullUrl} alt="Jacket" className=" h-[180] w-[210]"></img>
          <span className="absolute bottom-0 left-[-38px] w-[38px] bg-black text-white">
            -15%
          </span>
        </div>
        <div>
          <h1 className="overflow-hidden text-left font-[.9rem] uppercase tracking-[.16px] text-black">
            {item.Brand.Name}
          </h1>
          <h3 className="font-[.9rem] tracking-[.16px]">
            {item.DealClassification.MainCategory.Name}
          </h3>

          <span className="w-fit pr-4 text-[#e13232]">
            {item.Pricing.DiscountedPrice.FormattedString +
              item.Pricing.DiscountedPrice.Currency}
          </span>
          <span className="w-fit line-through">
            {item.Pricing.Price.FormattedString + item.Pricing.Price.Currency}
          </span>
        </div>
      </div>
    </Link>
  );
}
