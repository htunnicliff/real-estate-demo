import { RouterContext } from "next/dist/shared/lib/router-context";
import "tailwindcss/tailwind.css";
import "inter-ui/inter.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
