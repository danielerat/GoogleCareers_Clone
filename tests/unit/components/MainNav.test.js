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

  describe("When the user is logged out", () => {
    it("Prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("When the user is logged in", () => {
    it("Display User Profile image", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
