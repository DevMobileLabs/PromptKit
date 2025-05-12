#!/usr/bin/env node

const { execSync } = require('child_process');

// Regex pattern for valid branch names
const BRANCH_NAME_REGEX = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)\/[a-z0-9-]+$/;

/**
 * Gets the current Git branch name.
 * @returns {string} The current branch name.
 * @throws {Error} If there's an error executing the git command.
 */
function getCurrentBranch() {
  try {
    // Execute git command to get the current branch name
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting current branch:', error);
    // Exit the process with an error code
    process.exit(1);
  }
}

/**
 * Checks if the branch name matches the defined regex pattern.
 * @param {string} branchName The branch name to check.
 * @returns {boolean} True if the branch name is valid, false otherwise.
 */
function checkBranchName(branchName) {
  return BRANCH_NAME_REGEX.test(branchName);
}

/**
 * Main function to get the current branch and perform the check.
 */
function main() {
  const currentBranch = getCurrentBranch();

  // Skip check for main, master, or develop branches
  if (currentBranch === 'main' || currentBranch === 'master' || currentBranch === 'develop') {
    console.log(`Skipping branch name check for protected branch: ${currentBranch}`);
    process.exit(0); // Exit successfully
  }

  // If the branch name does not match the pattern
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
    process.exit(1); // Exit with an error code
  }

  // If the branch name is valid (and not a skipped branch)
  console.log(`✅ Branch name "${currentBranch}" is valid.`);
  process.exit(0); // Exit successfully
}

// Run the main function
main();
