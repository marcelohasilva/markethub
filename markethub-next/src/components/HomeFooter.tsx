const accountLinks = ["Wishlist", "Cart", "Track Order", "Shipping Details"];
const usefulLinks = ["About Us", "Contact", "Hot Deals", "Promotions", "New Products"];
const helpCenterLinks = [
  "Payments",
  "Refund",
  "Checkout",
  "Shipping",
  "Q&A",
  "Privacy Policy",
];

const HomeFooter = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-[#EBEBEB]">
      <div className="w-full px-4 md:px-8 lg:px-[97px]">
        <div className="grid gap-12 py-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start pt-15">
            <img
              src="/assets/logo.png"
              alt="MarketHub"
              className="h-10 w-auto"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1A1C27]">Account</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#6B7280]">
              {accountLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1A1C27]">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#6B7280]">
              {usefulLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1A1C27]">
              Help Center
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#6B7280]">
              {helpCenterLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
