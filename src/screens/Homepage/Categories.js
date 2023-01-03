import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, selectCategory } from "../../store/actions";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  const loadingCategories = useSelector((store) => store.loadingCategories);
  const errorCategories = useSelector((store) => store.errorCategories);
  const selectedCategory = useSelector((store) => store.selectedCategory);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  if (loadingCategories) {
    return "Loading Categories...";
  }

  if (errorCategories) {
    return "Error Categories";
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        marginTop: 56,
        marginBottom: 56,
      }}
    >
      {categories.map((category, index) => (
        <div
          onClick={() => dispatch(selectCategory(category))}
          key={index}
          style={{
            padding: "10px 30px",
            backgroundColor:
              category === selectedCategory ? "yellowGreen" : "#A045E7",
            fontWeight: "bold",
            color: "#fff",
            borderRadius: 16,
            cursor: "pointer",
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default Categories;
