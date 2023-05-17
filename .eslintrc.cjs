module.exports = {
  ignorePatterns: ['*.d.ts'],
  extends: ['eslint:recommended', 'plugin:import/typescript', 'plugin:astro/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  globals: {
    astroHTML: true
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports'
      }
    ],
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    'astro/no-set-html-directive': 0
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // override/add rules settings here, such as:
        'astro/no-set-html-directive': 'error'
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser'
    }
  ],
  extends: 'standard'
}
