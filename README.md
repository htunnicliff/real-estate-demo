# Property Listings Demo

Thanks for the challenge!

View this project live: [`https://real-estate-demo.vercel.app`](https://real-estate-demo.vercel.app)

### Build Commands

```sh
yarn
yarn build
yarn start
```

### Test Commands

```sh
yarn test
```

### Notes

Since the Figma mocks are using a slightly different spacing scale that the default one provided by Tailwind CSS, I had to use several inline styles to get the design close enough to match the specs. Under normal circumstances, I would work to configure Tailwind to use the same spacing scale as the design system within Figma.

For the "favorites" feature, you may notice my implementation somewhat naively sets a key value pair to `MLSID:true` for each item being favorited, and removes it when they are un-favorited. With more time, I would likely keep an array of IDs that were favorited within a single local storage key.

I generated the typings for the SimplyRETS API (found in [`types/simply-rets.d.ts`](./types/simply-rets.d.ts)) using `dtsgenerator` and the OpenAPI schema provided by their API docs. It isn't the cleanest schema, which resulted in me using TypeScript's `Required<T>` generic to enforce some types correctly. The script used to generate these types can be found in [`bin/get-simply-rets-types.js`](./bin/get-simply-rets-types.js).

### Items I Wanted To Complete

- Caching API requests using local storage (I would have added a custom SWR cache provider to read/write from local storage).
- Tests for the local storage hook and currency formatter.
- Pagination and infinite scroll for the API. Given more time, I would have used the `react-virtual` library along with SWR's `useSWRInfinite` hook to handle loading more listings from the offset-based API endpoint.
- Simple "skeleton" cards to render while waiting for the API to return results.
