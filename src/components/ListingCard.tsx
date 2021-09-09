/* eslint-disable @next/next/no-img-element */
import { printUSD } from "@/lib/currency";
import clsx from "clsx";
import { DateTime } from "luxon";
import { useState } from "react";
import { HeartOutlineIcon } from "./icons/heart-outline";
import { HeartSolidIcon } from "./icons/heart-solid";

export type ListingCardProps = {
  listing: Required<SimplyRETS.Schemas.Listing>;
  className?: string;
};

export function ListingCard({ listing, className }: ListingCardProps) {
  const { property } = listing;
  const [isFavorite, setIsFavorite] = useState(false);

  const summaryItems = [
    [property.bedrooms, "BR"],
    [property.bathsFull + property.bathsHalf, "Baths"],
    [property.area, "Sq Ft"],
  ];

  const listDate = DateTime.fromISO(listing.listDate).toLocaleString({
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });

  const FavoriteIcon = isFavorite ? HeartSolidIcon : HeartOutlineIcon;

  return (
    <div className={clsx(className)}>
      <section className="mb-4">
        <div
          className="bg-gray-200 rounded-md relative"
          style={{ aspectRatio: "1 / 1" }}
        >
          <img
            className="rounded-md object-cover h-full"
            src={listing.photos[0]}
            alt={`${listing.mlsId}`}
          />
          <FavoriteIcon
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
        className="mb-3 font-semibold text-xl leading-8"
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
