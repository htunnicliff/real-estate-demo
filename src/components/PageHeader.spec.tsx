/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { PageHeader } from "./PageHeader";

describe("<PageHeader />", () => {
  it("renders a title", () => {
    render(<PageHeader title="My title" />);

    expect(
      screen.getByRole("heading", { name: /my title/i })
    ).toBeInTheDocument();
  });

  it("renders JSX titles", () => {
    render(<PageHeader title={<div>Special title</div>} />);

    expect(screen.getByText(/special title/i)).toBeInTheDocument();
  });
});
