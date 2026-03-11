function CategoryFilter({ setCategory }) {
  return (
    <div className="buttons">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Food")}>Food</button>
    </div>
  );
}

export default CategoryFilter;