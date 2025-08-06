/** @type {import('semantic-release').Config} */
const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer', // Reads your commits
    '@semantic-release/release-notes-generator', // Makes release notes
    '@semantic-release/changelog', // Updates CHANGELOG.md
    '@semantic-release/github', // Creates GitHub release
    '@semantic-release/git' // Commits the changelog and package.json bump
  ],
  preset: 'conventionalcommits'
};

module.exports = config; 