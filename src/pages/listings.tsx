import clsx from "clsx";
import { ListingCard } from "../components/ListingCard";
import { usePropertyListings } from "../data/property-listings";

export default function PropertyListingsPage() {
  const { data: listings } = usePropertyListings();

  return (
    <div className="text-side-black">
      <div className="bg-side-gray text-2xl px-16 py-8 font-semibold sticky top-0 z-10">
        Property Listings
      </div>
      <div
        className={clsx(
          "py-9 px-16",
          "grid gap-x-14 gap-y-9",
          "max-w-screen-2xl mx-auto",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}
      >
        {listings &&
          listings.map((listing) => {
            return <ListingCard key={listing.mlsId} listing={listing} />;
          })}
      </div>
    </div>
  );
}
