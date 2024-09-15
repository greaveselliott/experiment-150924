import type { CodegenConfig } from "@graphql-codegen/cli";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3b2xubm90c2F0Y2lxaWp2ZmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NzExOTcsImV4cCI6MjAyMDU0NzE5N30.2ULVHWEAl6pjeG-zKS3qnj9A93CHTMXaS5cFlbMuUJE";

const config: CodegenConfig = {
  schema: [
    {
      "https://vwolnnotsatciqijvfkm.supabase.co/graphql/v1": {
        headers: {
          apiKey: API_KEY,
        },
      },
    },
  ],
  documents: ["src/**/*.(ts|tsx)"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
