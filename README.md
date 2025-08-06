# LegalDocs Automation Tool

A bespoke, AI-augmented document automation platform designed for law firms, starting with use cases from M&A transactions. This project streamlines the manual process of transferring client data (collected via Google Forms) into standardized legal documents (e.g., Asset Purchase Agreements, Bills of Sale, Employment Agreements).

Built for solo practitioners and boutique firms who want to save hours of manual work and focus on what matters — serving clients.

---

## ✨ Key Features

- 🧾 **Legal Document Automation**  
  Dynamically fills client information into multiple legal templates with high accuracy.

- ⚡ **Custom Web Dashboard**  
  Secure front-end for uploading data, managing client files, and generating docs.

- 🤖 **AI-Assisted Mapping (Optional)**  
  Optional LLM-driven field matching and suggestion layer for added convenience.

- 🛠️ **Fast, Modern Stack**  
  Powered by TypeScript, Fastify, PostgreSQL, and modern dev workflows.

- 🔒 **Secure and Private**  
  Built with attorney–client confidentiality in mind. Local-first and cloud-optional deployments.

---

## 🧱 Tech Stack

### Backend

- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Zod](https://github.com/colinhacks/zod) (input validation)
- [Jest](https://jestjs.io/) (testing)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)
- [Husky](https://typicode.github.io/husky/) (Git hooks)
- [Conventional Commits](https://www.conventionalcommits.org/)

### DevOps

- [GitHub Actions](https://github.com/features/actions) (CI/CD)
- [Dotenv](https://github.com/motdotla/dotenv) (env config)
- [Docker](https://www.docker.com/) *(planned)*
- [Codecov](https://codecov.io/) (test coverage)
- [Snyk](https://snyk.io/) (security scanning)

### Frontend *(planned)*

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/) for end-to-end typesafety
- [Clerk/Auth.js](https://clerk.dev/) *(authentication)*

---

## 🧪 Running Locally

```bash
# Install dependencies
yarn install

# Generate .env file from example
cp .env.example .env

# Start the dev server
yarn dev
```

## 🚀 GitHub Actions

This project uses comprehensive GitHub Actions workflows for CI/CD:

### Workflows

- **CI** (`ci.yml`): Runs on every push/PR
  - ✅ Multi-Node.js version testing (18, 20, 22)
  - ✅ TypeScript type checking
  - ✅ ESLint and Prettier validation
  - ✅ Jest testing with coverage
  - ✅ Security audits with Snyk
  - ✅ Build verification

- **Release** (`release.yml`): Automated releases
  - 🚀 Semantic versioning
  - 📦 Automatic changelog generation
  - 🏷️ GitHub releases
  - 🚀 Deployment triggers

- **Code Quality** (`code-quality.yml`): Code analysis
  - 🔍 Complexity analysis
  - 📊 Duplicate code detection
  - 🧹 Unused dependency checks
  - 📝 PR quality reports

- **Database** (`database.yml`): Database operations
  - 🗄️ Schema validation
  - 🔄 Migration checks
  - 🧪 Database tests
  - 📋 Prisma client generation

- **Dependencies** (`dependencies.yml`): Dependency management
  - 🔄 Weekly dependency updates
  - 🔒 Security vulnerability checks
  - 📋 Automated PR creation

### Required Secrets

Add these secrets to your GitHub repository:

```bash
# For security scanning
SNYK_TOKEN=your_snyk_token

# For code coverage (optional)
CODECOV_TOKEN=your_codecov_token
```

<details>
<summary>📁 Project Structure</summary>

```
├── src/
│   ├── api/              # Routes and controllers
│   ├── services/         # Business logic
│   ├── templates/        # Word and PDF legal templates
│   ├── utils/            # Formatters, mappers, etc.
│   └── index.ts          # Entry point
├── __tests__/            # Unit and integration tests
├── jest.config.ts
├── .eslintrc.js
├── .prettierrc
├── package.json
└── README.md
```

</details>

<details>
<summary>📄 Template Format</summary>

```
{{client_name}}
{{purchase_amount}}
{{agreement_date}}
```

</details>

---

## 💼 Use Case

Perfect for:
- Independent attorneys who don't want complex software
- M&A and transaction lawyers with repetitive docs
- Firms handling standardized documents for each client
- Legal teams using Google Forms or custom intake methods

---

## 🔐 Security

- Data processed securely — no document content stored long-term
- Deployed via HTTPS with environment isolation
- GDPR and confidentiality-conscious engineering

---

## 🛣 Roadmap

- Stripe billing and invoicing
- Google Workspace integration
- Secure PDF export
- Drag-and-drop flow builder for attorneys
- Email + DocuSign integration

---

## 📬 Contact

**💡 Why This Exists**

Lawyers shouldn't be spending hours retyping form inputs into Word templates. This tool eliminates that drudgery while preserving the nuance and control attorneys need.

**🏷 License**

This project is under a private license and not currently open-source.
Please contact for demos, licensing, or partnership opportunities.

---

## 👨‍💻 Author

**Great Okonkwo**  
YC-backed engineer | CTO @ WishRoll | Building legal-tech for the modern solo firm  
[LinkedIn](https://linkedin.com/in/greatokonkwo) • [GitHub](https://github.com/greatokonkwo)


