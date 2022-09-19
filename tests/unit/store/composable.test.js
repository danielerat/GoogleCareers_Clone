import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useuniqueOrganizations,
} from "@/store/composable";

describe("Composables", () => {
  describe("UsefilteredJobs", () => {
    it("Retrieve filtered jobs from store", () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ ID: 1 }],
        },
      });
      const results = useFilteredJobs();
      expect(results.value).toEqual([{ id: 1 }]);
    });
  });
  describe("useUniqueJobType", () => {
    it("Retrieve unique job type from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });
      const results = useUniqueJobTypes();
      expect(results.value).toEqual(new Set(["Full-time"]));
    });
  });
  describe("UseUniqueOrganizations", () => {
    it("Retrieve unique job organizations from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Apple"]),
        },
      });
      const results = useuniqueOrganizations();
      expect(results.value).toEqual(new Set(["Apple"]));
    });
  });
});
