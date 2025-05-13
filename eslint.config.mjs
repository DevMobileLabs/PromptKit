/* eslint-disable import/namespace */
// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('expo'),
  ...compat.extends('plugin:prettier/recommended'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn', // Mức độ cảnh báo
        {
          selector: 'default',
          format: ['camelCase'],
          // Cho phép các trường có dấu ngoặc kép (ví dụ: cho các key trong object)
          filter: {
            regex: '^(_|__)(.*)$',
            match: false,
          },
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          // Cho phép PascalCase cho các React Components
          // Cho phép UPPER_CASE cho hằng số toàn cục
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          // Cho phép PascalCase cho các React Functional Components
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          // Có thể thêm 'PascalCase' nếu bạn có các trường hợp đặc biệt, nhưng camelCase là phổ biến nhất cho tham số hàm.
        },
        {
          selector: 'property',
          format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
          // camelCase cho hầu hết các thuộc tính
          // PascalCase cho các React Components được truyền dưới dạng prop
          // snake_case có thể dùng cho các trường hợp đặc biệt (ví dụ: dữ liệu từ API)
          // UPPER_CASE cho các hằng số thuộc tính
          filter: {
            regex: '^(_|__)(.*)$',
            match: false,
          },
        },
        {
          selector: 'method',
          format: ['camelCase'],
          // Các phương thức trong class
        },
        {
          selector: 'typeLike', // Áp dụng cho interface, type alias, enum, class
          format: ['PascalCase'],
          // Tất cả các kiểu dữ liệu, interface, enum, class nên dùng PascalCase
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
          // Thành viên của enum có thể dùng PascalCase hoặc UPPER_CASE
        },
        // Quy tắc riêng cho React Components (biến)
        {
          selector: 'variable',
          format: ['PascalCase'],
          types: ['function'], // Áp dụng cho các biến giữ giá trị là hàm
          filter: {
            regex: '^[A-Z]', // Lọc các biến bắt đầu bằng chữ hoa (thường là React Component)
            match: true,
          },
        },
        // Quy tắc riêng cho Event Handlers
        {
          selector: 'function',
          filter: {
            regex: '^(handle|on)[A-Z]', // Lọc các hàm bắt đầu bằng 'handle' hoặc 'on' theo sau là chữ hoa
            match: true,
          },
          format: ['camelCase'],
          // Đảm bảo các event handler tuân thủ camelCase
        },
        // Quy tắc cho các hằng số (biến)
        {
          selector: 'variable',
          modifiers: ['const'], // Chỉ áp dụng cho hằng số
          format: ['camelCase', 'UPPER_CASE'],
          // Hằng số có thể là camelCase hoặc UPPER_CASE
        },
        {
          selector: 'property',
          modifiers: ['readonly'], // Chỉ áp dụng cho thuộc tính chỉ đọc
          format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
          filter: {
            regex: '^(_|__)(.*)$',
            match: false,
          },
        },
        {
          selector: 'parameter',
          modifiers: ['destructured'],
          format: ['camelCase', 'PascalCase'],
        },
      ],
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [-1, 0, 1, 2],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true,
        },
      ],
    },
  },
  {
    ignores: ['dist/*', 'node_modules/*'],
  },
];
