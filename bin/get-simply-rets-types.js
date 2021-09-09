#!/usr/bin/env node
// @ts-check

const { default: axios } = require("axios");
const { default: dtsgenerator, parseSchema, ts } = require("dtsgenerator");
const path = require("node:path");
const fs = require("node:fs/promises");
const yaml = require("yaml");

async function main() {
  // Retrieve OpenAPI Schema
  const { data: schema } = await axios.get(
    "https://docs.simplyrets.com/api/simplyrets-openapi.yaml"
  );

  const namespace = "SimplyRETS";

  // Generate TypeScript types
  const types = await dtsgenerator({
    contents: [parseSchema(yaml.parse(schema))],
    config: {
      target: ts.ScriptTarget.ES2020,
      plugins: {
        "@dtsgenerator/replace-namespace": {
          map: [
            {
              from: ["Paths"],
              to: [`${namespace}Paths`],
            },
            {
              from: ["Components"],
              to: [namespace],
            },
          ],
        },
      },
    },
  });

  // Write to type declaration file
  await fs.writeFile(
    path.resolve(process.cwd(), "./types/simply-rets.d.ts"),
    types
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
