import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton";

describe("Action Button", () => {
  it("Renders Text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
      },
    });
    expect(wrapper.text()).toMatch("Clickable");
  });
  it("Applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
