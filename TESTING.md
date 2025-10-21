# Testing Documentation

## Running Tests

This project uses [Vitest](https://vitest.dev/) for unit testing.

### Available Commands

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Run tests with coverage report
pnpm test:coverage
```

### Test Structure

- `test/VueMarkdown.test.ts` - Main component tests
- `test/nuxt.test.ts` - Nuxt.js plugin tests
- `test/Meta.test.ts` - Meta information tests
- `test/install.test.ts` - Install function tests
- `test/h-demi.test.ts` - Helper function tests
- `test/integration.test.ts` - Integration tests
- `test/setup.ts` - Test environment setup

### Test Coverage

The test suite covers:

- ✅ Component rendering and props
- ✅ SSR (Server-Side Rendering) support
- ✅ Event emission
- ✅ Markdown parsing integration
- ✅ Nuxt.js plugin functionality
- ✅ Vue 2 & 3 compatibility helpers
- ✅ Installation and meta information

### Mocking

Tests use mocked versions of:

- `@logue/markdown-wasm` - For markdown parsing
- Browser environment (`globalThis.window`) - For SSR testing
- Nuxt.js APIs - For plugin testing

### Configuration

Test configuration is managed in:

- `vitest.config.ts` - Main Vitest configuration
- `tsconfig.vitest.json` - TypeScript configuration for tests
- `test/setup.ts` - Global test setup and mocks
