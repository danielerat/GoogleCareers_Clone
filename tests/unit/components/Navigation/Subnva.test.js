import { mount } from "@vue/test-utils";
import Subnav from "@/components/Navigation/Subnav";

import { useRoute } from "vue-router";
import { useStore } from "vuex";

jest.mock("vuex");
jest.mock("vue-router");

describe("Sub Nav Test", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When User is on Job page", () => {
    it("Displays Job Count", () => {
      useRoute.mockReturnValue({
        name: "JobResults",
      });
      useStore.mockReturnValue({
        getters: {
          FILTER_JOS: [{ id: 16 }, { id: 2 }],
        },
      });

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("When User is on Not on JobSerach page", () => {
    it("Do not display Job Count", () => {
      useRoute.mockReturnValue({
        name: "Home",
      });
      useStore.mockReturnValue({
        getters: {
          FILTER_JOS: [],
        },
      });
      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
