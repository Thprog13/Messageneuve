export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une annonce..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        fontSize: "16px"
      }}
    />
  );
}
