## 📁 Structure des Dossiers

```
messageneuve/
├── firebaseConfig.js
├── vite.config.js
├── package.json
└── src/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Filters.jsx
    │   └── listing/
    │       ├── ListingCard.jsx
    │       ├── ListingDetail.jsx
    │       └── ListingForm.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── MyListings.jsx
    │   ├── CreateListing.jsx
    │   └── ListingPage.jsx
    ├── services/
    │   ├── authService.js
    │   ├── listingService.js
    │   ├── storageService.js
    │   ├── userService.js
    │   └── reportService.js
    └── utils/
        ├── constants.js
        └── imageCompression.js
```

---

## 📁 Racine du Projet

### `firebaseConfig.js`
Configuration Firebase pour l'authentification, la base de données et le stockage.

### `vite.config.js`
Configuration du bundler Vite pour le développement et le build.

### `package.json`
Liste des dépendances npm du projet.

---

## 🧩 src/components/

### `Navbar.jsx`
Barre de navigation principale de l'application (développé par Khoa).

### `Filters.jsx`
Composant de recherche et filtres par catégories.

### 📂 listing/

#### `ListingCard.jsx`
Carte d'annonce affichée dans le feed principal.

#### `ListingDetail.jsx`
Vue détaillée d'une annonce individuelle.

#### `ListingForm.jsx`
Formulaire pour créer ou éditer une annonce.

---

## 📄 src/pages/

### `Home.jsx`
Page d'accueil avec le feed des annonces et la barre de recherche.

### `MyListings.jsx`
Page listant toutes les annonces de l'utilisateur connecté.

### `CreateListing.jsx`
Page dédiée à la création d'une nouvelle annonce.

### `ListingPage.jsx`
Page détaillée affichant une annonce spécifique avec toutes ses informations.

---

## ⚙️ src/services/ - Logique Firebase

### `authService.js`
Gestion de l'authentification des utilisateurs.

```javascript
export const loginWithGoogle = () => { ... }
export const logout = () => { ... }
```

### `listingService.js`
Opérations CRUD pour les annonces.

```javascript
export const createListing = (data) => { ... }
export const getListings = () => { ... }
export const updateListing = (id, data) => { ... }
export const deleteListing = (id) => { ... }
```

### `storageService.js`
Gestion du stockage et de la compression des images.

```javascript
export const uploadImage = (file) => { ... }  // Avec compression automatique
export const deleteImage = (url) => { ... }
```

### `userService.js`
Gestion des profils utilisateurs.

```javascript
export const createUser = (userData) => { ... }
export const getUserData = (uid) => { ... }
```

### `reportService.js`
Système de signalement des annonces inappropriées.

```javascript
export const reportListing = (listingId, reason) => { ... }
```

---

## 🛠️ src/utils/

### `constants.js`
Définitions des catégories d'annonces, limites de taille et autres constantes de l'application.

### `imageCompression.js`
Utilitaires pour compresser les images avant leur upload vers Firebase Storage.

---

## 🔥 Firebase Collections

### `users/`
Collection contenant les profils des utilisateurs inscrits.

**Structure:**
```javascript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  createdAt: timestamp
}
```

### `listings/`
Collection contenant toutes les annonces publiées.

**Structure:**
```javascript
{
  id: string,
  title: string,
  description: string,
  category: string,
  price: number,
  images: string[], // Max 3 images
  authorId: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### `reports/`
Collection des signalements d'annonces.

**Structure:**
```javascript
{
  id: string,
  listingId: string,
  reportedBy: string,
  reason: string,
  createdAt: timestamp
}
```

---

## ⚠️ Règles Importantes

- **Maximum 3 images par annonce**
- **Taille maximale par image: 2MB** (après compression)
- Compression automatique des images avant upload
- Authentification Google obligatoire pour publier

---