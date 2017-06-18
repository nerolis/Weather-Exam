export const loadState = (weather) => {
  try {
    const serializedState = localStorage.getItem('city-');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, weather) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('city-',  serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};