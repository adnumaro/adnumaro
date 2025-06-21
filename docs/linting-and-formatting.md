# Linting, Formatting, and Pre-commit Workflow

This document describes the linting, formatting, and pre-commit workflow for the **CodeEvolution** project. Adhering to these standards ensures code quality, consistency, and a smooth collaborative experience.

---

## 1. Linting

### ESLint

- **Config:** The project uses a strict ESLint configuration based on `@typescript-eslint/strict`, with custom rules for React, Three.js, and import order.
- **Location:** `.eslintrc.js` at the project root.
- **Key Rules:**
  - TypeScript strictness (`strict`, `no-explicit-any`, etc.)
  - React hooks/exhaustive-deps
  - Three.js memory management (no leaks)
  - Import/order for consistent structure
- **Running Lint:**
  ```bash
  npm run lint
  ```
  or
  ```bash
  pnpm lint
  ```
- **Auto-fix:**
  ```bash
  npm run lint:fix
  ```

---

## 2. Formatting

### Prettier

- **Config:** `.prettierrc` at the project root, enforcing consistent code style (2 spaces, trailing commas, single quotes, etc.).
- **Integration:** Runs automatically on staged files via Husky pre-commit hook.
- **Manual Format:**
  ```bash
  npm run format
  ```

---

## 3. Pre-commit Hooks

### Husky

- **Purpose:** Prevents commits that break linting, formatting, or type checks.
- **Location:** `.husky/` directory at the project root.
- **Pre-commit Workflow:**
  1. **Lint staged files:** Runs ESLint on staged files.
  2. **Format staged files:** Runs Prettier on staged files.
  3. **Type check:** Runs `tsc --noEmit` to ensure type safety.
  4. **Test:** Runs unit and E2E tests (including Playwright if configured).
- **Automatic Setup:** Husky is installed and configured automatically after `npm install` or `pnpm install`.
- **Manual Trigger:**
  ```bash
  npx husky run pre-commit
  ```

---

## 4. CI/CD Enforcement

- All checks (lint, format, type check, tests) are enforced in CI (Vercel and/or GitHub Actions).
- PRs cannot be merged unless all checks pass.

---

## 5. Contributor Workflow

**Before committing:**
1. Stage your changes.
2. Commit as usual (`git commit`). Husky will run all checks.
3. If any check fails, fix the issues and re-stage your changes.

**Recommended:**
- Use your editor's ESLint and Prettier plugins for real-time feedback.
- Run `npm run lint` and `npm run format` before pushing large changes.

---

## 6. Troubleshooting

- **Husky not running?**  
  Run `npx husky install` to re-enable hooks.
- **Prettier/ESLint not formatting?**  
  Check your editor settings and ensure plugins are enabled.
- **Type errors?**  
  Run `npm run type-check` to see all TypeScript errors.

---

## 7. References

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Husky Documentation](https://typicode.github.io/husky/#/)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)

---

## 8. Example Commit Workflow

```bash
git add .
git commit -m "feat: add new 3D scene"
# Husky runs: lint → format → type-check → test
# If all pass, commit is created
```

---

## 9. Contact

For questions or issues with the workflow, contact the project maintainer or open an issue in the repository.

---

**By following this workflow, we ensure a professional, maintainable, and high-quality codebase for CodeEvolution.**

// COMMIT_MESSAGE: docs: add linting, formatting, and pre-commit workflow documentation