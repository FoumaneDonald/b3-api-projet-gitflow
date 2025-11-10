code src/routes/projects.routes.ts

**Action :** Collez le code ci-dessous dans l'éditeur et **sauvegardez**.


http://googleusercontent.com/immersive_entry_chip/1

### ÉTAPE 4 : Modification de `src/server.ts`

Ce fichier doit être mis à jour pour monter le nouveau routeur.

```bash
code src/server.ts

**Action :** Ouvrez l'éditeur, **ajoutez la ligne d'importation** et la ligne `app.use('/projects', projectsRouter);` comme indiqué ci-dessous, et **sauvegardez**.


http://googleusercontent.com/immersive_entry_chip/2

---

### ÉTAPE 5 : Validation et Push (La Fin de la Fonctionnalité)

Une fois les trois fichiers sauvegardés, lancez les commandes Git :

```bash
git add .
git commit -m "feat: Implement POST /projects endpoint with Zod validation (fixes #1)"
git push

**Veuillez exécuter les commandes des Étapes 1 à 5. Le `git push` vous permettra de créer une nouvelle Pull Request pour cette fonctionnalité !**