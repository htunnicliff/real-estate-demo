import clsx from "clsx";
import { ListingCard } from "../components/ListingCard";
import Head from "next/head";
import { usePropertyListings } from "../data/property-listings";
import { PageHeader } from "@/components/PageHeader";
import { ListingsGrid } from "@/components/ListingsGrid";

export default function PropertyListingsPage() {
  // Load property listings
  const { data: listings, error } = usePropertyListings();

  return (
    <div className="text-side-black">
      <Head>
        <title>Property Listings</title>
      </Head>

      <PageHeader title="Property Listings" className="sticky top-0 z-10" />

      {error ? (
        <p>An error occured: {error}</p>
      ) : listings ? (
        <ListingsGrid
          listings={listings}
          className="max-w-screen-2xl mx-auto"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
