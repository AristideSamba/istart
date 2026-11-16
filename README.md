# ITStart – site vitrine + socle back-office

Monorepo : `frontend/` (React 18 + Vite + React Router) · `backend/` (Spring Boot 3, Java 17) · PostgreSQL (docker-compose).

## Démarrage
```bash
docker compose up -d                 # PostgreSQL
cd backend && ./mvnw spring-boot:run # ou: mvn spring-boot:run  -> http://localhost:8080/api
cd frontend && npm install && npm run dev   # -> http://localhost:5173
```
## Contenu
- Front : Accueil, Services, Contact (formulaire branché sur l'API). Couleurs/typo dans variables CSS dans `frontend/src/styles.css`, textes dans `frontend/src/content.js`, URL de l'API dans `frontend/.env`.
- Back : entités Client, Commande, Facture, Technicien, Materiel, Intervention, ContactMessage. CRUD REST auto via Spring Data REST (`/api/clients`, `/api/commandes`, `/api/factures`, `/api/techniciens`, `/api/materiels`, `/api/interventions`, `/api/contact-messages`).
## À faire pour la suite
- Authentification (Spring Security + JWT), rôles ADMIN / TECHNICIEN / CLIENT, et protection de `/api/**` (aujourd'hui ouvert en dev).
- Dashboards client et admin (nouvelles pages dans `frontend/src/pages`, routes dans `App.jsx`).
- Migrations Flyway à la place de `ddl-auto: update`.
