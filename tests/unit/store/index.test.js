import { state, mutations } from "@/store";

describe("State", () => {
  it("Keeps track of whether use is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
  it("Stores Job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
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

  describe("Receive jobs", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["job 1", "job 2"]);
      expect(state).toEqual({ jobs: ["job 1", "job 2"] });
    });
  });
});
