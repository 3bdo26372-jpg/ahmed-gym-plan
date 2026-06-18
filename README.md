# Ahmed Gym Plan

A static workout viewer built with React, TypeScript, and Vite. There is no backend, account, database, or API configuration.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### 1. Create the repository

1. Sign in to [GitHub](https://github.com).
2. Click **New repository**.
3. Name it `ahmed-gym-plan`, set it to **Public**, and click **Create repository**.
4. Do not add a README, `.gitignore`, or license during creation because this project already contains them.

### 2. Upload the project

Upload the project source, including:

- `public/`
- `src/`
- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `tsconfig.app.json`
- `vite.config.ts`

Do not upload `node_modules/` or `dist/`. GitHub Pages generates the production output during deployment.

Or push it with Git:

```bash
git init
git add .
git commit -m "Build Ahmed Gym Plan"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ahmed-gym-plan.git
git push -u origin main
```

### 3. Vite configuration

`vite.config.ts` already uses `base: './'`, so assets work from a GitHub project subdirectory. No repository-name change is required.

### 4. Build and deploy manually

```bash
npm install
npm run build
npm run deploy
```

`npm run deploy` publishes `dist/` to a `gh-pages` branch.

### 5. Enable GitHub Pages

After `npm run deploy` finishes, open **Settings → Pages**, choose **Deploy from a branch**, select `gh-pages` and `/ (root)`, then click **Save**. GitHub may need a few minutes to publish the first deployment.

### 6. Open the app

The final address will be:

```text
https://YOUR-USERNAME.github.io/ahmed-gym-plan/
```
