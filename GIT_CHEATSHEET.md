# Git Cheatsheet

## 🚀 Quick Start Commands

### **Daily Workflow**
```bash
# Start your day
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name

# Work and commit
git add .
git commit -m "feat: your feature description"

# Push and create PR
git push -u origin feature/your-feature-name
```

### **Branch Management**
```bash
# List branches
git branch -a

# Switch branches
git checkout branch-name
git checkout -b new-branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

## 📋 Branch Types & Naming

| Type | Pattern | Example | Use Case |
|------|---------|---------|----------|
| Feature | `feature/*` | `feature/user-auth` | New functionality |
| Bug Fix | `fix/*` | `fix/login-error` | Bug fixes |
| Hotfix | `hotfix/*` | `hotfix/security-patch` | Critical fixes |
| Chore | `chore/*` | `chore/update-deps` | Maintenance |
| Docs | `docs/*` | `docs/api-guide` | Documentation |

## 🔄 Common Workflows

### **Feature Development**
```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Work and commit
git add .
git commit -m "feat: add new feature"

# 4. Push and create PR
git push -u origin feature/new-feature
# Create PR: feature/new-feature → develop
```

### **Bug Fix**
```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create fix branch
git checkout -b fix/bug-description

# 3. Fix and commit
git add .
git commit -m "fix: resolve bug description"

# 4. Push and create PR
git push -u origin fix/bug-description
# Create PR: fix/bug-description → develop
```

### **Hotfix (Critical Production Fix)**
```bash
# 1. Start from main
git checkout main
git pull origin main

# 2. Create hotfix branch
git checkout -b hotfix/critical-fix

# 3. Fix and commit
git add .
git commit -m "fix: critical production issue"

# 4. Push and create PRs
git push -u origin hotfix/critical-fix
# Create PR: hotfix/critical-fix → main
# Create PR: hotfix/critical-fix → develop
```

## 🏷️ Commit Message Examples

### **Features**
```bash
git commit -m "feat(auth): add JWT authentication"
git commit -m "feat(docs): implement document templates"
git commit -m "feat(ai): integrate OpenAI for document analysis"
```

### **Bug Fixes**
```bash
git commit -m "fix(api): resolve database connection timeout"
git commit -m "fix(ui): fix login form validation"
git commit -m "fix(security): patch XSS vulnerability"
```

### **Documentation**
```bash
git commit -m "docs(readme): update installation guide"
git commit -m "docs(api): add endpoint documentation"
git commit -m "docs(deployment): add production setup guide"
```

### **Maintenance**
```bash
git commit -m "chore(deps): update dependencies"
git commit -m "chore(ci): improve GitHub Actions"
git commit -m "chore(cleanup): remove unused code"
```

## 🛠️ Useful Commands

### **Stashing**
```bash
# Stash current changes
git stash

# Stash with message
git stash push -m "WIP: working on feature"

# List stashes
git stash list

# Apply latest stash
git stash pop

# Apply specific stash
git stash apply stash@{1}

# Drop stash
git stash drop
```

### **Cleanup**
```bash
# Clean up merged branches
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d

# Update local branches
git fetch --prune

# Reset to remote
git reset --hard origin/branch-name
```

### **Viewing History**
```bash
# View commit history
git log --oneline

# View file history
git log --follow filename

# View branch graph
git log --graph --oneline --all
```

## 🚨 Emergency Commands

### **Undo Last Commit**
```bash
# Keep changes, undo commit
git reset --soft HEAD~1

# Discard changes, undo commit
git reset --hard HEAD~1
```

### **Undo Push**
```bash
# Undo last push (use with caution!)
git revert HEAD
git push origin branch-name
```

### **Recover Deleted Branch**
```bash
# Find the commit hash
git reflog

# Recreate branch
git checkout -b branch-name commit-hash
```

## 📊 Status Commands

### **Check Status**
```bash
# Current status
git status

# Branch status
git branch -v

# Remote status
git remote -v
```

### **Check Differences**
```bash
# See staged changes
git diff --cached

# See unstaged changes
git diff

# See changes in last commit
git show
```

## 🎯 Best Practices

### **Before Starting Work**
1. ✅ Pull latest changes: `git pull origin develop`
2. ✅ Check current branch: `git branch`
3. ✅ Create feature branch: `git checkout -b feature/name`

### **During Development**
1. ✅ Commit frequently with clear messages
2. ✅ Keep commits focused and atomic
3. ✅ Test before committing
4. ✅ Use conventional commit format

### **Before Pushing**
1. ✅ Run tests: `yarn test`
2. ✅ Check linting: `yarn lint`
3. ✅ Review changes: `git diff`
4. ✅ Write clear commit message

### **After Merging**
1. ✅ Delete feature branch locally: `git branch -d feature/name`
2. ✅ Delete feature branch remotely: `git push origin --delete feature/name`
3. ✅ Update develop: `git checkout develop && git pull origin develop` 