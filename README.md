# example-ia 🚀

**Playwright test suite** for https://www.saucedemo.com using the Page Object Model (POM) pattern.

![Playwright Tests](https://github.com/oscar6020/example-ia/actions/workflows/playwright.yml/badge.svg)

## Overview

- Tests are written with Playwright Test (TypeScript).
- Uses a simple Page Object Model:
  - `tests/pages/LoginPage.ts`
  - `tests/pages/InventoryPage.ts`
- Example test added: `tests/login.spec.ts` — logs in as `standard_user` and verifies the inventory title is visible.

---

## Setup (local)

1. Install dependencies:

```bash
npm ci
```

2. Install Playwright browsers (required once):

```bash
npx playwright install --with-deps
```

3. Run the test suite:

```bash
npm test
# or
npx playwright test
```

4. Run a single test file:

```bash
npx playwright test tests/login.spec.ts
```

5. Open the HTML report after a run:

```bash
npx playwright show-report
```

---

## CI

A GitHub Actions workflow is configured at `.github/workflows/playwright.yml` to run tests on push and pull requests and upload the HTML report as an artifact.

---

## Contributing

- Add tests under `tests/` and page objects under `tests/pages/`.
- Keep tests small and focused.

---

## License

This repository has no license specified.
