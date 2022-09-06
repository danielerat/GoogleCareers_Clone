import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";
describe("MainNav", () => {
  it("It Displays company Name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Careers Junkie");
  });

  it("Displays meny items for navigation", () => {
    const wrapper = shallowMount(MainNav);
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

  describe("When the user is logged out", () => {
    it("Prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("When the user is logged in", () => {
    it("Display User Profile image", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("Displays subnavigation with addditional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
