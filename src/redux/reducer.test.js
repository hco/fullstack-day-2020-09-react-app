const { reducer, score } = require("./reducer");
const emptyInitialState = {
  servingTeam: "blue",
  score: {
    red: 0,
    blue: 0,
  },
};
describe("volleyball reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      servingTeam: "blue",
      score: {
        red: 0,
        blue: 0,
      },
    });
  });

  it("should score points for the serving team", () => {
    expect(reducer(emptyInitialState, score("blue")).score).toEqual({
      red: 0,
      blue: 1,
    });
  });

  it("should not score points for the not-serving team", () => {
    expect(reducer(emptyInitialState, score("red")).score).toEqual({
      red: 0,
      blue: 0,
    });
  });

  it("should switch the server on scoring, if the other team served", () => {
    expect(reducer(emptyInitialState, score("red")).servingTeam).toEqual("red");
  });

  it("should not switch the server if the scoring team already serves", () => {
    expect(reducer(emptyInitialState, score("blue")).servingTeam).toEqual(
      "blue"
    );
  });

  it("if the not-starting team scores twice, they should have one point", () => {
    let state = reducer(undefined, {});
    state = reducer(state, score("red"));
    state = reducer(state, score("red"));

    expect(state.score).toEqual({
      blue: 0,
      red: 1,
    });
  });

  it("if starting team scores twice, they should have two points", () => {
    let state = reducer(undefined, {});
    state = reducer(state, score("blue"));
    state = reducer(state, score("blue"));

    expect(state.score).toEqual({
      blue: 2,
      red: 0,
    });
  });

  it("should calculate the correct result for complex games", () => {
    let state = reducer(undefined, {});
    state = reducer(state, score("blue")); // 1:0
    state = reducer(state, score("blue")); // 2:0
    state = reducer(state, score("red")); // 2:0
    state = reducer(state, score("red")); // 2:1
    state = reducer(state, score("red")); // 2:2
    state = reducer(state, score("red")); // 2:3
    state = reducer(state, score("blue")); // 2:3
    state = reducer(state, score("blue")); // 3:3
    state = reducer(state, score("blue")); // 4:3

    expect(state).toEqual({
      score: {
        blue: 4,
        red: 3,
      },
      servingTeam: "blue",
    });
  });
});
