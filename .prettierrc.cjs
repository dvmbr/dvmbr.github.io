module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
