/* eslint-disable @next/next/no-img-element */
import { printUSD } from "@/lib/currency";
import { useLocalStorage } from "@/lib/local-storage-state";
import clsx from "clsx";
import { DateTime } from "luxon";
import { HeartOutlineIcon } from "./icons/heart-outline";
import { HeartSolidIcon } from "./icons/heart-solid";

export type ListingCardProps = {
  listing: Required<SimplyRETS.Schemas.Listing>;
  className?: string;
};

/**
 * Simple card that displays property listing summary
 */
export function ListingCard({ listing, className }: ListingCardProps) {
  const { property } = listing;

  const [isFavorite, setIsFavorite] = useLocalStorage(
    `favorite-${listing.mlsId}`,
    false
  );

  const listDate = DateTime.fromISO(listing.listDate).toLocaleString({
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });

  const CurrentFavoriteIcon = isFavorite ? HeartSolidIcon : HeartOutlineIcon;

  const summaryItems = [
    [property.bedrooms.toLocaleString(), "BR"],
    [(property.bathsFull + property.bathsHalf).toLocaleString(), "Baths"],
    [property.area.toLocaleString(), "Sq Ft"],
  ];

  return (
    <div className={clsx(className)}>
      <section aria-label="Property Image" className="mb-4">
        <div
          className="bg-gray-200 rounded-md relative"
          style={{
            aspectRatio: "1 / 1",
          }}
        >
          {listing.photos?.[0] && (
            <img
              className="rounded object-cover h-full"
              src={listing.photos[0]}
              alt={`Photo of property #${listing.mlsId}`}
            />
          )}

          <CurrentFavoriteIcon
            className={clsx(
              "h-10 absolute top-3 right-3 cursor-pointer",
              isFavorite ? "text-side-red" : "text-white"
            )}
            onClick={() => setIsFavorite((value) => !value)}
          />
        </div>
      </section>

      <section
        aria-label="Summary"
        className="mb-3 font-semibold text-xl leading-8 truncate"
      >
        {summaryItems.map((pair) => pair.join(" ")).join(" | ")}
      </section>

      <section
        aria-label="List Price"
        className="mb-1.5 text-2xl font-bold leading-6"
      >
        ${printUSD(listing.listPrice)}
      </section>

      <section aria-label="Address" className="mb-0.5 leading-8">
        {listing.address.full}
      </section>

      <section
        aria-label="Listing Date"
        className="text-sm text-side-gray-light leading-8"
      >
        Listed: {listDate}
      </section>
    </div>
  );
}
