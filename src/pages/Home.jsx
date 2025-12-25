import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar";
import ListingCard from "../components/listing/ListingCard";

const ITEMS_PER_PAGE = 20;

export default function Home() {
  const [listings, setListings] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchListings = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      let q = query(
        collection(db, "listings"),
        orderBy("createdAt", "desc"),
        limit(ITEMS_PER_PAGE)
      );

      if (!reset && lastDoc) {
        q = query(q, startAfter(lastDoc));
      }

      const snap = await getDocs(q);

      const results = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setListings((prev) => (reset ? results : [...prev, ...results]));
      setLastDoc(snap.docs[snap.docs.length - 1] || null);
      setHasMore(snap.docs.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Erreur chargement listings:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchListings(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredListings = listings.filter(
    (listing) =>
      listing.title?.toLowerCase().includes(search.toLowerCase()) ||
      listing.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR AVEC RECHERCHE */}
      <Navbar search={search} setSearch={setSearch} />

      <div style={styles.container}>
        <div style={styles.grid}>
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {loading && <p>Chargement...</p>}

        {!loading && hasMore && (
          <button style={styles.loadMore} onClick={() => fetchListings()}>
            Charger plus
          </button>
        )}

        {!loading && filteredListings.length === 0 && (
          <p>Aucune annonce trouvée</p>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  loadMore: {
    display: "block",
    margin: "30px auto",
    padding: "10px 20px",
    cursor: "pointer",
  },
};
