📦 Firestore Database
│
├── 👤 users/
│   └── {userId}
│       ├── email                    → Email du user
│       ├── name                     → Nom complet
│       ├── photoURL                 → Photo profil Google
│       ├── activeListingsCount      → Annonces actives (max 10)
│       ├── totalListings            → Total annonces créées
│       ├── reportCount              → Signalements reçus
│       ├── isReported               → Flag modération user
│       └── createdAt                → Date inscription
│
├── 📦 listings/
│   └── {listingId}
│       ├── userId                   → Propriétaire annonce
│       ├── userName                 → Nom vendeur (dénormalisé)
│       ├── userEmail                → Email vendeur (dénormalisé)
│       ├── title                    → Titre annonce (max 100)
│       ├── description              → Description (max 500)
│       ├── price                    → Prix en $
│       ├── category                 → Catégorie produit
│       ├── images                   → URLs images (max 3)
│       ├── status                   → available/sold/removed
│       ├── soldVia                  → marketplace/autre/null
│       ├── reportCount              → Signalements reçus
│       ├── isReported               → Flag modération annonce
│       ├── createdAt                → Date création
│       └── updatedAt                → Dernière modification
│
├── 🚨 listingReports/
│   └── {reportId}
│       ├── listingId                → Annonce signalée
│       ├── reportedBy               → Qui a signalé
│       ├── reason                   → Raison signalement
│       └── createdAt                → Date signalement
│
├── 🚨 userReports/
│   └── {reportId}
│       ├── reportedUserId           → User signalé
│       ├── reportedBy               → Qui a signalé
│       ├── reason                   → Raison signalement
│       └── createdAt                → Date signalement
│
└── 📊 adminControl/
    └── stats
        ├── totalUsers               → Nombre total users
        ├── totalListings            → Total annonces créées
        ├── activeListings           → Annonces disponibles
        ├── soldListings             → Annonces vendues
        ├── soldViaMarketplace       → Vendues via marketplace
        ├── soldViaOther             → Vendues autrement
        ├── removedListings          → Annonces supprimées
        ├── totalListingReports      → Total signalements annonces
        ├── totalUserReports         → Total signalements users
        └── lastUpdated              → Dernière mise à jour