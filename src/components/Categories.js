function Categories({ categories, currentCategory, handleCategoryChange }) {
  return (
    <div>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Choisir une catégorie</option>
        {categories.map((category, index) => {
          return currentCategory === category ? (
            <option key={`${category}-${index}`} value={category} selected>
              {category}
            </option>
          ) : (
            <option key={`${category}-${index}`} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <button onClick={() => handleCategoryChange("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
