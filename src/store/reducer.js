import { actionTypes } from "./actions";

const initialState = {
  loadingCategories: false,
  categories: [],
  errorCategories: null,
  loadingProducts: false,
  selectedCategory: null,
  selectedProductId: null,
  products: [],
  errorProducts: null,
  loadingProduct: false,
  selectedProduct: null,
  errorProduct: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.categoriesRequest:
      return {
        ...state,
        loadingCategories: true,
      };
    case actionTypes.onCategoriesSuccess:
      return {
        ...state,
        loadingCategories: false,
        categories: action.payload.categories,
        errorCategories: null,
      };
    case actionTypes.onCategoriesFailure:
      return {
        ...state,
        loadingCategories: false,
        errorCategories: action.payload.error,
      };
    case actionTypes.productsRequest:
      return {
        ...state,
        loadingProducts: true,
      };
    case actionTypes.onProductsSuccess:
      return {
        ...state,
        loadingProducts: false,
        products: action.payload.products,
        errorProducts: null,
      };
    case actionTypes.onProductsFailure:
      return {
        ...state,
        loadingProducts: false,
        errorProducts: action.payload.error,
        products: [],
      };
    case actionTypes.onCategorySelect:
      return {
        ...state,
        selectedCategory: action.payload.categoryType,
      };
    case actionTypes.onProductSelect:
      return {
        ...state,
        selectedProductId: action.payload.productId,
      };
    case actionTypes.onProductDeselect:
      return { ...state, selectedProductId: null, selectedProduct: null };
    case actionTypes.onProductRequest:
      return { ...state, loadingProduct: true };
    case actionTypes.onProductSuccess:
      return {
        ...state,
        loadingProduct: false,
        selectedProduct: action.payload.product,
      };
    case actionTypes.onProductFailure:
      return {
        ...state,
        loadingProduct: false,
        selectedProduct: null,
        errorProduct: action.payload.error,
      };
    default:
      return state;
  }
}

export default reducer;
