import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
  return (
    <div style={styles.card}>
      {listing.images?.[0] && (
        <img
          src={listing.images[0]}
          alt={listing.title}
          style={styles.image}
        />
      )}

      <h3>{listing.title}</h3>
      <p>{listing.price} $</p>
      <p>{listing.category}</p>

      <Link to={`/listing/${listing.id}`}>Voir détails</Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "6px"
  }
};
