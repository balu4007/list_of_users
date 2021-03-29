export const Add_User = "Add_User";
export const UserReducer = (state, { type, payload }) => {
  switch (type) {
    case "Add_User":
      return { ...state, Users: [...state.Users, payload] };
    default:
      return state;
  }
};
