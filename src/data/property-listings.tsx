import useSWR from "swr";

/**
 * Retrieve property listings
 */
export function usePropertyListings() {
  return useSWR<Required<SimplyRETS.Schemas.Listing>[]>("/properties");
}
