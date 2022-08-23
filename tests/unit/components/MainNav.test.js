import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("It Displays company Name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Careers Junkie");
  });

  it("Displays meny items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItems.map((item) => item.text());

    expect(navigationMenuText).toEqual([
      "Team",
      "Locations",
      "Life at Junkies",
      "How we hire",
      "Student",
      "Jos",
    ]);
    // toEqual == toBe just that it gets used with complex objects
  });
});
