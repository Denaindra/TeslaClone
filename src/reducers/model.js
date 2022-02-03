export default (state = 0, action) => {
  console.log(action.type);
  switch (action.type) {
    case "GETMODELLIST":
      return state;
    case "ADDMODDLELIST":
      state = action.payload;
      return state;

    default:
      return "N/A";
  }
};
