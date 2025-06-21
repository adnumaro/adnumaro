/**
 * lint-staged configuration for CodeEvolution
 * Runs ESLint and Prettier on staged files, autofixes, and prevents bad commits.
 * Add more file types as needed.
 */

module.exports = {
  // Lint and fix TypeScript and JavaScript files
  '**/*.{ts,tsx,js,jsx}': [
    'eslint --fix --max-warnings=0',
    'prettier --write',
    'git add'
  ],
  // Format JSON, MD, and YAML files
  '**/*.{json,md,yml,yaml}': [
    'prettier --write',
    'git add'
  ],
  // Format CSS and config files
  '**/*.{css,scss,less}': [
    'prettier --write',
    'git add'
  ],
  // Optionally, optimize images (uncomment if using imagemin or similar)
  // '**/*.{png,jpg,jpeg,webp,svg}': [
  //   'imagemin-lint-staged',
  //   'git add'
  // ]
};

// COMMIT_MESSAGE: chore: set up Husky pre-commit hook and lint-staged for automated checks
```