import {
  fetchCategories,
  fetchProductByCategory,
  fetchProductById,
  fetchProducts,
} from "../api";

const actionTypes = {
  categoriesRequest: "categoriesRequest",
  onCategoriesSuccess: "onCategoriesSuccess",
  onCategoriesFailure: "onCategoriesFailure",
  productsRequest: "productsRequest",
  onProductsSuccess: "onProductsSuccess",
  onProductsFailure: "onProductsFailure",
  onCategorySelect: "onCategorySelect",
  onProductSelect: "onProductSelect",
  onProductDeselect: "onProductDeselect",
  onProductRequest: "onProductRequest",
  onProductSuccess: "onProductSuccess",
  onProductFailure: "onProductFailure",
};

function getCategories() {
  return async function (dispatch) {
    dispatch(categoriesRequest());
    try {
      const categories = await fetchCategories();
      dispatch(onCategoriesSuccess(categories));
    } catch (error) {
      dispatch(onCategoriesFailure(error));
    }
  };
}

function categoriesRequest() {
  return {
    type: actionTypes.categoriesRequest,
  };
}

function onCategoriesSuccess(categories) {
  return {
    type: actionTypes.onCategoriesSuccess,
    payload: { categories },
  };
}

function onCategoriesFailure(error) {
  return {
    type: actionTypes.onCategoriesFailure,
    payload: { error },
  };
}

function getProducts() {
  return async function (dispatch) {
    try {
      dispatch(productsRequest());
      const products = await fetchProducts();
      dispatch(onProductsSuccess(products));
    } catch (error) {
      dispatch(onProductsFailure(error));
    }
  };
}

function productsRequest() {
  return {
    type: actionTypes.productsRequest,
  };
}

function onProductsSuccess(products) {
  return {
    type: actionTypes.onProductsSuccess,
    payload: { products },
  };
}

function onProductsFailure(error) {
  return {
    type: actionTypes.onCategoriesFailure,
    payload: { error },
  };
}

function selectCategory(categoryType) {
  return async function (dispatch) {
    dispatch(onCategorySelect(categoryType));
    dispatch(productsRequest());
    try {
      const products = await fetchProductByCategory(categoryType);
      dispatch(onProductsSuccess(products));
    } catch (error) {
      dispatch(onProductsFailure(error));
    }
  };
}

function selectProduct(productId) {
  return async function (dispatch) {
    dispatch(onProductSelect(productId));
    dispatch(onProductRequest());
    try {
      const product = await fetchProductById(productId);
      dispatch(onProductSuccess(product));
    } catch (error) {
      dispatch(onProductFailure(error));
    }
  };
}

function onProductRequest() {
  return {
    type: actionTypes.onProductRequest,
  };
}

function onProductSuccess(product) {
  return {
    type: actionTypes.onProductSuccess,
    payload: { product },
  };
}

function onProductFailure(error) {
  return {
    type: actionTypes.onProductFailure,
    payload: { error },
  };
}

function onProductSelect(productId) {
  return {
    type: actionTypes.onProductSelect,
    payload: { productId },
  };
}

function deselectProduct() {
  return {
    type: actionTypes.onProductDeselect,
  };
}

function onCategorySelect(categoryType) {
  return {
    type: actionTypes.onCategorySelect,
    payload: { categoryType },
  };
}

export {
  actionTypes,
  getCategories,
  getProducts,
  selectCategory,
  selectProduct,
  deselectProduct,
};
