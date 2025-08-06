
## 📂 Project Structure – `CYPRESS-E2E-AUTOMATION`

```
CYPRESS-E2E-AUTOMATION/
├── cypress/
│   ├── downloads/                 # Auto-downloaded files during test runs
│   ├── e2e/
│   │   ├── Pages/                 # Page Object Model (modular per feature)
│   │   │   ├── LoginPage.js
│   │   │   ├── SearchPage.js
│   │   │   └── ...
│   │   └── Tests/                 # Test specifications (spec files)
│   │       ├── Login.cy.js
│   │       ├── SeoElements.cy.js
│   │       └── ...
│   ├── fixtures/
│   │   └── Test-Data/            # Structured test data
│   │       ├── File-Uploads/
│   │       ├── Lead-Test-Data/
│   │       ├── SEO-Elements/
│   │       └── State-Data/
│   ├── support/
│   │   ├── commands.js           # Custom reusable Cypress commands
│   │   ├── seocommands.js        # SEO-related custom commands
│   │   └── e2e.js                # Global setup and teardown hooks
├── cypress.config.js             # Cypress configuration file
├── Jenkinsfile                   # CI/CD pipeline config for Jenkins
├── package.json                  # Project dependencies and npm scripts
├── package-lock.json             # Exact versions of installed dependencies
```

---
