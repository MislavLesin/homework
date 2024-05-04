import { useProducts } from './Context/ProductsContext';
import { useParams } from 'react-router-dom';
import { URL } from './App';
import { DropDownItem } from './DropDownItem';

export function Details() {
  const { allProducts } = useProducts();
  const itemId = useParams();
  const selectedProduct = allProducts
    .filter((product) => product.DealID.toString() === itemId.itemID)
    .at(0);
  const imgPath = selectedProduct.Details.Media.ThumbnailImagePath;
  const fullUrl = `${URL}${imgPath}`;
  return (
    <div className=" ml-10 mt-8 flex w-[80%] justify-between">
      <div className="ml-10">
        <img src={fullUrl} alt="details" className="h-[500px]" />
      </div>

      <div className="mb-10 ml-5 flex w-[50%] flex-col space-y-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold uppercase leading-6">
              {selectedProduct.Brand.Name}
            </h1>
            <p className="mb-[1.5rem] italic leading-5">
              {selectedProduct.Details.DealName}
            </p>
          </div>
          HeartIcon
        </div>
        <div className="text-[1.5rem]  font-bold leading-6">
          {selectedProduct.Pricing.DiscountedPrice.FormattedString +
            selectedProduct.Pricing.DiscountedPrice.Currency}
        </div>
        <div className="mb-[40px] flex h-12 w-[100%] items-center justify-center border-b-[2px] bg-black text-center text-xl text-white">
          Buy button
        </div>
        <DropDownItem
          MainName={'Available Sizes'}
          details={[
            {
              heading: '',
              paragraph: selectedProduct.Details.AvailableSizes.split('|')
                .map((sizes) => sizes)
                .join(' '),
            },
          ]}
        />
        <DropDownItem
          MainName={'Details about product'}
          details={[
            {
              heading: selectedProduct.Details.Description,
              paragraph: selectedProduct.Details.Material,
            },
          ]}
        />
        <DropDownItem
          MainName={'Payment types'}
          details={[
            {
              heading: '',
              paragraph: selectedProduct.Retailer.PaymentTypes.map(
                (type) => type.PaymentType,
              ).join(' '),
            },
          ]}
        />
        <DropDownItem
          MainName={'Cupons'}
          details={[
            {
              heading: selectedProduct.Retailer?.Coupons[0]?.CuponName,
              paragraph:
                selectedProduct.Retailer?.Coupons[0]?.CouponDescription,
            },
          ]}
        />
      </div>
    </div>
  );
}
