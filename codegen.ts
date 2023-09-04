import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "./src/schema/schema.graphql",
	generates: {
		"./src/types/gen-types.ts": {
			config: {
				useIndexSignature: true,
				constEnums: true,
				enumsAsTypes: true
			},
			plugins: ["typescript", "typescript-resolvers", "typescript-operations"],
		},
	},
};

export default config;
