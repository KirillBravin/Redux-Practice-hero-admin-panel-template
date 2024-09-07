export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const addingHeroes = (heroes) => {
  return {
    type: "ADDING_HEROES",
    payload: heroes,
  };
};

export const heroesDelete = (heroesToRemove) => {
  return {
    type: "HEROES_DELETE",
    payload: heroesToRemove,
  };
};

export const filterElements = (elements) => {
  return {
    type: "ELEMENT_FILTER",
    payload: elements,
  };
};

export const resetFilter = () => {
  return {
    type: "RESET_FILTER",
  };
};
