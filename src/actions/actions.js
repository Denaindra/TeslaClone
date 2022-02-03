export const getModelList = () => {
  return {
    type: "GETMODELLIST",
  };
};

export const addModelList = () => {
  return {
    type: "ADDMODDLELIST",
    payload: [
      "Model S",
      "Model 3",
      "Model X",
      "Model Y",
      "Solar Roof",
      "Solar Panels",
    ],
  };
};
