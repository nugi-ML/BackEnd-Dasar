import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  js.configs.recommended,
  daStyle,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
]);
