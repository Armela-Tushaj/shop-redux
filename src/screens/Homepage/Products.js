import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts, selectProduct } from "../../store/actions";
import ProductModal from "./ProductModal";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const loadingProducts = useSelector((store) => store.loadingProducts);
  const errorProducts = useSelector((store) => store.errorProducts);
  const selectedProductId = useSelector((store) => store.selectedProductId);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(getProducts());
    }
    isMounted.current = true;
  }, []);

  if (loadingProducts) {
    return "Loading Products...";
  }

  if (errorProducts) {
    return "Error Products";
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
        {products.map((product, index) => (
          <div
            onClick={() => dispatch(selectProduct(product.id))}
            key={index}
            style={{
              width: 312,
              margin: 16,
              border: "1px solid #000",
              padding: 16,
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: 315, height: 318 }}
              src={product.image}
              alt="product"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignSelf: "stretch",
                alignItems: "center",
              }}
            >
              <div>
                {product.title.length > 20
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </div>
              <div>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedProductId != null ? <ProductModal /> : null}
    </>
  );
}

export default Products;
