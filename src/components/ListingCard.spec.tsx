/**
 * @jest-environment jsdom
 */

import { render, screen, within } from "@testing-library/react";
import { ListingCard } from "./ListingCard";

describe("<ListingCard />", () => {
  it("renders expected listing attributes", () => {
    const listing = {
      property: {
        bedrooms: 3,
        bathsFull: 2,
        bathsHalf: 1,
        area: 2251,
      },
      photos: ["http://example.com/image.png"],
      listPrice: 123456,
      address: {
        full: "1234 Main St, Atlanta, GA",
      },
      mlsId: 1234,
    } as Required<SimplyRETS.Schemas.Listing>;

    render(<ListingCard listing={listing} />);

    // Summary
    expect(
      screen.getByText("3 BR | 2.5 Baths | 2,251 Sq Ft")
    ).toBeInTheDocument();

    // Property Image
    expect(screen.queryByRole("img")).toHaveAttribute(
      "src",
      "http://example.com/image.png"
    );

    // List Price
    expect(screen.getByText("$123,456")).toBeInTheDocument();

    // Address
    expect(screen.queryByText("1234 Main St, Atlanta, GA")).toBeInTheDocument();
  });

  it.todo("toggles favorite status");
});
