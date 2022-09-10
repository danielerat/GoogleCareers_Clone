import { mount } from "@vue/test-utils";

import Headline from "@/components/JosSearch/Headline.vue";

describe("Headline", () => {
  it("Displays Introductory action Verb", () => {
    jest.useFakeTimers();
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });

  // it("Changes action verb at a consistent interval", () => {
  //   jest.useFakeTimers();
  //   mount(Headline);
  //   expect(setInterval).toHaveBeenCalled();
  //   jest.useRealTimers();
  // });
  // it("Swaps action verb after first interval", () => {
  //   jest.useFakeTimers();
  //   const wrapper = mount(Headline);
  //   jest.runOnlyPendingTimers();
  //   const actionPhrase = wrapper.find("[data-test='action-phrase']");
  //   expect(actionPhrase.text()).toBe("Create for everyone");
  //   jest.useRealTimers();
  // });
});
