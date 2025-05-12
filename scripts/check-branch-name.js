#!/usr/bin/env node

const { execSync } = require('child_process');

const BRANCH_NAME_REGEX = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)\/[a-z0-9-]+$/;

function getCurrentBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting current branch:', error);
    process.exit(1);
  }
}

function checkBranchName(branchName) {
  return BRANCH_NAME_REGEX.test(branchName);
}

function main() {
  const currentBranch = getCurrentBranch();

  // Skip check for main/master branch
  if (currentBranch === 'main' || currentBranch === 'master') {
    process.exit(0);
  }

  if (!checkBranchName(currentBranch)) {
    console.error(`
❌ Invalid branch name: "${currentBranch}"

Branch name must follow the pattern: <type>/<description>

Types:
  feat:     New feature
  fix:      Bug fix
  docs:     Documentation changes
  style:    Code style changes
  refactor: Code refactoring
  perf:     Performance improvements
  test:     Adding or fixing tests
  build:    Build system changes
  ci:       CI configuration changes
  chore:    Maintenance tasks
  revert:   Reverting changes

Examples:
  feat/add-login-button
  fix/handle-null-response
  docs/update-readme
  style/format-code
  refactor/optimize-performance
    `);
    process.exit(1);
  }
}

main();
