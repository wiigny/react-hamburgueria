export const Input = ({ type, placeholder, setSearch }) => {
  return (
    <input
      type={type}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={placeholder}
    />
  );
};
