import { useStore } from "vuex";
jest.mock("vuex");

import { useFilteredJobs } from "@/store/composable";

describe("Composables", () => {
  describe("UsefilteredJobs", () => {
    useStore.mockReturnValue({
      getters: {
        FILTERED_JOBS: [{ ID: 1 }],
      },
    });
    const results = useFilteredJobs();
    expect(results.value).toEqual([{ id: 1 }]);
  });
});
