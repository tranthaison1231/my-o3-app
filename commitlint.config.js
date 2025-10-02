module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Enforce conventional commit format
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style changes (formatting, etc.)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding or modifying tests
        "build", // Build system changes
        "ci", // CI configuration changes
        "chore", // Routine tasks
        "revert", // Revert a previous commit
      ],
    ],
    // Subject line rules
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "subject-max-length": [2, "always", 50],
    "subject-min-length": [2, "always", 3],

    // Header rules
    "header-max-length": [2, "always", 72],

    // Body rules
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 72],

    // Footer rules
    "footer-leading-blank": [2, "always"],

    // Type and scope rules
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lower-case"],

    // Custom rules for your template
    "signed-off-by": [0, "always", "Signed-off-by:"],
  },
  // Custom parser options
  parserPreset: {
    parserOpts: {
      // Allow parsing of ISSUE: and CHANGELOG: sections
      noteKeywords: ["BREAKING CHANGE", "ISSUE", "CHANGELOG"],
    },
  },
};
