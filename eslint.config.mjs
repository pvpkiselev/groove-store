import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintNext from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import eslintReactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
    {
        plugins: {
            "@typescript-eslint": tsPlugin,
            prettier: prettierPlugin,
            "react-hooks": eslintReactHooks,
            "@next/next": eslintNext,
        },
        rules: {
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": "error",
        },
    },
];

export default eslintConfig;
