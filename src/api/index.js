async function fetchCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data;
}

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

async function fetchProductByCategory(category) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await response.json();
  return data;
}

async function fetchProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

export {
  fetchProducts,
  fetchCategories,
  fetchProductByCategory,
  fetchProductById,
};
