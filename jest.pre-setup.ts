import { loadEnvConfig } from "@next/env";

// Inject `.env.test` environment variables into `process.env`
const projectDir = process.cwd();
loadEnvConfig(projectDir, true, {
  error: console.error,
  info: () => {
    // no-op
  },
});
