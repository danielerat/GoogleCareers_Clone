import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("It Displays company Name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Careers Junkie");
  });
});
