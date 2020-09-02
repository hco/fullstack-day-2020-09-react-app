const initialState = {
  servingTeam: "blue",
  score: {
    red: 0,
    blue: 0,
  },
};

export const hit = (team) => {
  return {
    type: "HIT",
    team: team,
  };
};

export const reducer = (state = initialState, action = null) => {
  if (action.type === "HIT") {
    if (action.team === state.servingTeam) {
      // you can only score if you are the serving team
      return {
        ...state,
        score: {
          ...state.score,
          [action.team]: state.score[action.team] + 1,
        },
      };
    }

    // The team was not serving, so they don't score a point but become the serving team.
    return {
      ...state,
      servingTeam: action.team,
    };
  }
  return state;
};
