const formatter = new Intl.NumberFormat("en-US", {
  currency: "usd",
});

/**
 * Format a numeric value as USD
 */
export function printUSD(value: number) {
  return formatter.format(value);
}
