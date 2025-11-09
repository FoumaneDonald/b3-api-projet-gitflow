{
  "name": "b3-api-projet-gitflow",
  "version": "1.0.0",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.ts",
    "lint": "eslint . --ext .js,.ts,.tsx --max-warnings=0",
    "lint:fix": "eslint . --ext .js,.ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{js,ts,tsx,json}\""
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^13.0.0",
    "prettier": "^3.0.0",
    "nodemon": "^3.0.0",
    "typescript": "^5.0.0"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  }
}