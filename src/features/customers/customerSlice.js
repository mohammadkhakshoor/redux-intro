const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case "customer/updateName":
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
}
export function createCustomer(fullname, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalID, createAt: new Date().toISOString() },
  };
}
export function updateName(fullname) {
  return {
    type: "customer/updateName",
    payload: fullname,
  };
}
