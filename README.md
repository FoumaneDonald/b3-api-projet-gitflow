# Projet API Étudiant — Git Flow / DevOps TP

> Stack: Node.js + Express + TypeScript + Zod  
> Objectif pédagogique: maîtriser le versionning Git Flow, la qualité du code et l’automatisation CI/CD avec GitHub Actions.

## Sommaire

- [Projet API Étudiant — Git Flow / DevOps TP](#projet-api-étudiant--git-flow--devops-tp)
  - [Sommaire](#sommaire)
  - [Objectif du projet](#objectif-du-projet)
  - [Structure du projet](#structure-du-projet)
  - [Installation et exécution](#installation-et-exécution)
  - [Linting \& Formatage](#linting--formatage)
    - [Linter avec ESLint](#linter-avec-eslint)
    - [Formatage avec Prettier](#formatage-avec-prettier)
  - [Husky \& lint-staged (Pre-commit)](#husky--lint-staged-pre-commit)
  - [Workflow Git Flow](#workflow-git-flow)
  - [CI/CD GitHub Actions](#cicd-github-actions)
  - [gitignore \& fichiers exclus](#gitignore--fichiers-exclus)
  - [Auteurs et contributeurs](#auteurs-et-contributeurs)
  - [Commandes utiles](#commandes-utiles)

## Objectif du projet

Ce projet consiste à développer une API REST pour gérer les soumissions de projets étudiants.  
Les données sont stockées dans un simple fichier db.json sans base de données.

L’objectif principal est de :
- Appliquer la méthode Git Flow
- Mettre en place des hooks de validation de code
- Automatiser les revues de code par IA
- Configurer une CI/CD basique avec GitHub Actions

## Structure du projet

```
projet-api/
│
├── src/
│   ├── app.ts
│   ├── server.ts
│   │
│   ├── routes/
│   │   └── projects.routes.ts
│   │
│   ├── controllers/
│   │   └── projects.controller.ts
│   │
│   ├── services/
│   │   └── projects.service.ts
│   │
│   ├── models/
│   │   └── project.schema.ts
│   │
│   ├── utils/
│   │   └── fileManager.ts
│   │
│   ├── middlewares/
│   │   └── errorHandler.ts
│   │
│   └── data/
│       └── db.json
│
├── eslint.config.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Installation et exécution

1. Cloner le projet
```bash
git clone <repo-url>
cd projet-api
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer en mode développement
```bash
npm run dev
```

4. Compiler pour la production
```bash
npm run build
npm start
```

Le serveur démarre par défaut sur http://localhost:3000

## Linting & Formatage

### Linter avec ESLint
```bash
npm run lint
```

Corrige automatiquement les erreurs simples avec l’option --fix.

### Formatage avec Prettier
Prettier est intégré directement via ESLint (eslint-plugin-prettier/recommended).

- Les erreurs de formatage apparaissent comme des erreurs ESLint.
- Vous pouvez corriger tout le code d’un coup :
  ```bash
  npm run lint -- --fix
  ```

## Husky & lint-staged (Pre-commit)

Les hooks Git sont configurés pour bloquer tout commit qui ne respecte pas les standards de qualité.

## Workflow Git Flow

| Branche   | Rôle                                |
| --------- | ----------------------------------- |
| main      | Version stable / release            |
| develop   | Branche d’intégration               |
| feature/* | Branche de développement individuel |
| hotfix/*  | Correctifs urgents sur main         |

Exemple de cycle :
```bash
git switch develop
git switch -c feature/add-post-project
git commit -m "feat: add POST /projects endpoint"
git push origin feature/add-post-project
```

Puis ouvrir une Pull Request vers develop.

## CI/CD GitHub Actions

Deux workflows seront ajoutés dans .github/workflows/ :

| Fichier        | Rôle                                        |
| -------------- | ------------------------------------------- |
| ci.yml         | Linting, build et test automatique          |
| llm-review.yml | Revue de code automatisée (IA) + envoi mail |

## gitignore & fichiers exclus

Le .gitignore empêche certains fichiers d’être commités :

```bash
node_modules/
dist/
.env
.vscode/
.DS_Store
logs/
coverage/
.husky/_/
```

db.json reste inclus dans Git car il sert à simuler une base de données et créer des conflits pour le TP.

## Auteurs et contributeurs

- Équipe B3 Informatique – (Liste les personne du groupe)
- Encadrant : (votre enseignant)
- Technologie choisie : TypeScript + Express + Zod

## Commandes utiles

| Commande                     | Description                      |
| ---------------------------- | -------------------------------- |
| npm run dev                  | Démarre le serveur en TypeScript |
| npm run lint                 | Analyse le code avec ESLint      |
| npm run build                | Compile le projet en JS          |
| npm run start                | Exécute la version compilée      |
| npx husky install            | Installe les hooks Git           |
| git flow feature start <nom> | Crée une nouvelle feature        |
