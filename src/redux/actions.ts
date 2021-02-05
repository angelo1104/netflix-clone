const actionTypes = {
  updateTick: "UPDATE_TICK",
  updateUser: "UPDATE_USER",
};

const actions = {
  updateTick(tick: string): object {
    return {
      type: actionTypes.updateTick,
      payload: tick,
    };
  },
  updateUser(user: any): object {
    return {
      type: actionTypes.updateUser,
      payload: user,
    };
  },
};

export { actionTypes, actions };
