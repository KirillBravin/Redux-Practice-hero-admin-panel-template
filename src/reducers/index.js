const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };

    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        filters: action.payload,
        heroesLoadingStatus: "idle",
      };

    case "ADDING_HEROES":
      return {
        ...state,
        heroes: [...state.heroes, action.payload].flat(),
        filters: [...state.filters, action.payload].flat(),
        heroesLoadingStatus: "adding hero",
      };

    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };

    case "HEROES_DELETE":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
        filters: state.filters.filter((hero) => hero.id !== action.payload),
        heroesLoadingStatus: "removing hero",
      };

    case "ELEMENT_FILTER":
      return {
        ...state,
        filters: state.heroes.filter((hero) => {
          if (action.payload === hero.element) {
            return true;
          } else if (action.payload === "Все") {
            return true;
          }
          return false;
        }),
        heroesLoadingStatus: "elements filtered",
      };

    case "RESET_FILTER":
      return {
        ...state,
        filters: [...state.heroes],
        heroesLoadingStatus: "filter reset",
      };

    default:
      return state;
  }
};

export default reducer;
