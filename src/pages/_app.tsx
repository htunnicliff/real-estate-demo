import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "tailwindcss/tailwind.css";
import { simplyRETSAPI } from "../lib/simply-rets";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        async fetcher(key) {
          const { data } = await simplyRETSAPI().get(key);

          return data;
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
