# Git Branching Strategy

## 🌿 Branch Structure

### **Main Branches**

| Branch | Purpose | Protection | Auto-deploy |
|--------|---------|------------|-------------|
| `main` | Production releases | ✅ Required | ✅ Production |
| `develop` | Integration branch | ✅ Required | ✅ Staging |

### **Feature Branches**

| Pattern | Purpose | Example |
|---------|---------|---------|
| `feature/*` | New features | `feature/user-authentication` |
| `fix/*` | Bug fixes | `fix/login-validation` |
| `hotfix/*` | Critical production fixes | `hotfix/security-patch` |
| `chore/*` | Maintenance tasks | `chore/update-dependencies` |
| `docs/*` | Documentation | `docs/api-documentation` |

## 🚀 Workflow

### **Feature Development**

```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Develop and commit
git add .
git commit -m "feat: add new feature"

# 4. Push and create PR
git push -u origin feature/new-feature
# Create PR: feature/new-feature → develop
```

### **Release Process**

```bash
# 1. Merge develop to main (via PR)
# 2. Tag the release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# 3. Semantic release will handle:
# - Version bumping
# - Changelog generation
# - GitHub releases
```

### **Hotfix Process**

```bash
# 1. Create hotfix from main
git checkout main
git checkout -b hotfix/critical-fix

# 2. Fix and commit
git commit -m "fix: critical production issue"

# 3. Merge to both main and develop
# PR: hotfix/critical-fix → main
# PR: hotfix/critical-fix → develop
```

## 📋 Branch Protection Rules

### **Main Branch**
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Restrict pushes
- ✅ Allow force pushes: ❌
- ✅ Allow deletions: ❌

### **Develop Branch**
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Restrict pushes
- ✅ Allow force pushes: ❌
- ✅ Allow deletions: ❌

## 🏷️ Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### **Types:**
- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance tasks

### **Examples:**
```bash
git commit -m "feat(auth): add JWT authentication"
git commit -m "fix(api): resolve database connection timeout"
git commit -m "docs(readme): update installation instructions"
git commit -m "chore(deps): update dependencies"
```

## 🔄 Branch Lifecycle

### **Feature Branch Lifecycle**
1. **Create** from `develop`
2. **Develop** with regular commits
3. **Push** and create PR
4. **Review** and address feedback
5. **Merge** to `develop`
6. **Delete** feature branch

### **Release Lifecycle**
1. **Feature freeze** on `develop`
2. **Testing** and bug fixes
3. **Merge** `develop` → `main`
4. **Tag** release version
5. **Deploy** to production
6. **Merge** `main` → `develop`

### **Hotfix Lifecycle**
1. **Create** from `main`
2. **Fix** critical issue
3. **Test** thoroughly
4. **Merge** to `main`
5. **Merge** to `develop`
6. **Tag** hotfix version
7. **Deploy** to production

## 🛠️ Useful Commands

### **Branch Management**
```bash
# List all branches
git branch -a

# Switch to branch
git checkout branch-name

# Create and switch to new branch
git checkout -b feature/new-feature

# Delete local branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

### **Cleanup**
```bash
# Clean up merged branches
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d

# Update local branches
git fetch --prune
```

### **Stashing**
```bash
# Stash changes
git stash

# Stash with message
git stash push -m "WIP: working on feature"

# List stashes
git stash list

# Apply stash
git stash pop

# Drop stash
git stash drop
```

## 📊 Branch Naming Conventions

### **Feature Branches**
```
feature/user-authentication
feature/document-templates
feature/ai-integration
feature/payment-processing
```

### **Bug Fixes**
```
fix/login-validation
fix/document-generation
fix/api-timeout
fix/security-vulnerability
```

### **Hotfixes**
```
hotfix/security-patch
hotfix/critical-bug
hotfix/performance-issue
```

### **Chores**
```
chore/update-dependencies
chore/ci-improvements
chore/code-cleanup
```

## 🎯 Best Practices

### **Do's**
- ✅ Always pull latest changes before creating branches
- ✅ Use descriptive branch names
- ✅ Keep branches focused and small
- ✅ Delete merged branches
- ✅ Write clear commit messages
- ✅ Review code before merging

### **Don'ts**
- ❌ Commit directly to `main` or `develop`
- ❌ Use generic branch names like `update` or `fix`
- ❌ Leave branches open for too long
- ❌ Merge without review
- ❌ Force push to protected branches

## 🔧 GitHub Actions Integration

Our GitHub Actions workflows are configured for:

- **CI/CD** on all branches
- **Automated testing** on PRs
- **Code quality checks** on PRs
- **Semantic releases** on `main`
- **Deployment** to staging/production

## 📈 Branch Metrics

Track these metrics for healthy development:

- **PR Review Time**: Target < 24 hours
- **Branch Lifetime**: Target < 1 week
- **Merge Frequency**: Daily integration
- **Test Coverage**: Maintain > 80%
- **Build Success Rate**: Target > 95% 