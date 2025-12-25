import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch, user }) {
  return (
    <nav style={styles.navbar}>
      {/* Logo / Nom */}
      <Link to="/" style={styles.logo}>
        Messageneuve
      </Link>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher une annonce..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Actions */}
      <div style={styles.actions}>
        {/* Ajouter publication */}
        <Link to="/create" style={styles.addBtn}>
          + Publier
        </Link>

        {/* Réglages */}
        <button style={styles.iconBtn} title="Réglages">
          ⚙️
        </button>

        {/* Photo profil */}
        <img
          src={
            user?.photoURL ||
            "https://www.gravatar.com/avatar/?d=mp"
          }
          alt="Profil"
          style={styles.avatar}
        />
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
    color: "#000",
  },
  search: {
    width: "40%",
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  addBtn: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
  },
  iconBtn: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
  },
};
