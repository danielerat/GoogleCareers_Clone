import { state, mutations } from "@/store";

describe("State", () => {
  it("Keeps track of whether use is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
});
describe("Mutation", () => {
  describe("LOGIN_USER", () => {
    it("Logs The User In", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);

      expect(state.isLoggedIn).toBe(true);
    });
  });
});
