import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://slnwogtfxatipyxsxwph.nhost.run/v1/graphql",

  // 参照するファイル
  documents: "src/components/graphql/*.graphql",

  // 作成する型ファイルの場所
  generates: {
    "src/codegen/generates.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
