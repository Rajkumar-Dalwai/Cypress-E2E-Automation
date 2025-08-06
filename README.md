CYPRESS-E2E-AUTOMATION/
├── cypress/
│   ├── downloads/                           → Auto-downloads from test runs
│   ├── e2e/
│   │   ├── Pages/                           → Page Object files (modular per feature)
│   │   │   ├── LoginPage.js
│   │   │   ├── SearchPage.js
│   │   │   └── ...
│   │   └── Tests/                           → Test specs (*.cy.js)
│   │       ├── Login.cy.js
│   │       ├── SeoElements.cy.js
│   │       └── ...
│   ├── fixtures/
│   │   └── Test-Data/                       → Organized test data
│   │       ├── File-Uploads/
│   │       ├── Lead-Test-Data/
│   │       ├── SEO-Elements/
│   │       └── State-Data/
│   ├── support/
│   │   ├── commands.js                      → Custom commands
│   │   ├── seocommands.js                   → SEO-specific commands
│   │   └── e2e.js                           → Global hooks (before/after)
├── cypress.config.js                        → Cypress project configuration
├── Jenkinsfile                              → Jenkins pipeline configuration
├── package.json                             → Project dependencies and scripts
├── package-lock.json                        → Dependency lock file
