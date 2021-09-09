import clsx from "clsx";
import { ListingCard } from "./ListingCard";

export type ListingsGridProps = {
  className?: string;
  listings: Required<SimplyRETS.Schemas.Listing>[] | undefined;
};

/**
 * Display a responsive grid of property listings
 */
export function ListingsGrid({ className, listings }: ListingsGridProps) {
  return (
    <div
      className={clsx(
        className,
        "py-9 px-16", // Padding
        "grid gap-x-14 gap-y-9", // Grid
        "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" // Responsive Columns
      )}
    >
      {listings?.map((listing) => {
        return <ListingCard key={listing.mlsId} listing={listing} />;
      })}
    </div>
  );
}
