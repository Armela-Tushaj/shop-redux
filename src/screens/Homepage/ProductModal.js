import { useDispatch, useSelector } from "react-redux";

import { deselectProduct } from "../../store/actions";

function ProductModal() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((store) => store.selectedProduct);
  const loadingProduct = useSelector((store) => store.loadingProduct);
  const errorProduct = useSelector((store) => store.errorProduct);
  console.log("selectedProduct: ", selectedProduct);

  function renderLoader() {
    return <div>Loading...</div>;
  }
  function renderError() {
    return <div>Something went wrong</div>;
  }
  function renderModalContent() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: 300,
              height: "auto",
            }}
            alt="product"
            src={selectedProduct.image}
          />
          <div>{selectedProduct.description}</div>
        </div>

        <div
          style={{
            width: 324,
            height: 64,
            backgroundColor: "red",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 16,
            color: "white",
            fontWeight: "700",
            fontSize: 30,
            cursor: "pointer",
          }}
        >
          Add to cart ${selectedProduct.price}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#00000070",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "60%",
          width: "45%",
          borderRadius: 64,
          alignItems: "center",
          padding: 24,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "stretch",
            marginLeft: 32,
          }}
        >
          <div
            onClick={() => dispatch(deselectProduct())}
            style={{
              color: "white",
              backgroundColor: "black",
              width: 32,
              height: 32,
              display: "flex",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: 4,
              cursor: "pointer",
              marginRight: 24,
            }}
          >
            X
          </div>
          {selectedProduct?.title ? <div>{selectedProduct?.title}</div> : null}
        </div>
        {loadingProduct && renderLoader()}
        {errorProduct && renderError()}
        {selectedProduct && renderModalContent()}
      </div>
    </div>
  );
}

export default ProductModal;
