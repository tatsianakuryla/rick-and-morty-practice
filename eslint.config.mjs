import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,jsx}'],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    react: pluginReact,
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
  },
};
