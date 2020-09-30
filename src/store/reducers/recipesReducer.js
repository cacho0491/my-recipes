import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [
    {
      id: 1,
      name: "Pasta Bolognese",
      picture: require("../../assets/bolognese.jpg"),
      preparationTime: 20,
      cookingTime: 50,
      servings: "4",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
    {
      id: 2,
      name: "Pollo con Champinon",
      picture: require("../../assets/polloChampinon.jpg"),
      preparationTime: 30,
      cookingTime: 10,
      servings: "5",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
    {
      id: 3,
      name: "Camarones al Ajillo",
      picture: require("../../assets/polloChampinon.jpg"),
      preparationTime: 30,
      cookingTime: 10,
      servings: "4",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
    {
      id: 4,
      name: "Pollo con Champinon",
      picture: require("../../assets/polloChampinon.jpg"),
      preparationTime: 30,
      cookingTime: 10,
      servings: "8",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
    {
      id: 5,
      name: "Camarones al Ajillo",
      picture: require("../../assets/polloChampinon.jpg"),
      preparationTime: 30,
      cookingTime: 10,
      servings: "2",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
    {
      id: 6,
      name: "Pollo con Champinon",
      picture: require("../../assets/polloChampinon.jpg"),
      preparationTime: 30,
      cookingTime: 10,
      servings: "4",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
    {
      id: 7,
      name: "Camarones al Ajillo",
      picture: require("../../assets/polloChampinon.jpg"),
      preparationTime: 30,
      cookingTime: 10,
      servings: "4",
      instructions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec ut enim sit amet risus commodo rutrum vel et justo.",
      ],
      ingredients: [
        {
          ingredientName: "Spaguetti",
          ingredientQuantity: "200gr",
        },
        {
          ingredientName: "Passata",
          ingredientQuantity: "400ml",
        },
        {
          ingredientName: "Onions",
          ingredientQuantity: "100gr",
        },
        {
          ingredientName: "Grated Cheese",
          ingredientQuantity: "To taste",
        },
      ],
    },
  ],
  search: "",
  searchResult: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        search: action.value,
      };
    case actionTypes.SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        searchResult: action.results,
      };
    case actionTypes.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searchResult: null,
      };
    default:
      return state;
  }
};

export default reducer;
