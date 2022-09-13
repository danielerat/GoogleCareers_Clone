import { mount } from "@vue/test-utils";
import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
    },
    slots: {
      // Slot with no name is called default
      default: "<h3>My nested child</h3>",
    },
    ...config,
  });

  it("Renders Child", async () => {
    const slots = {
      default: "<h3>My nested child</h3>",
    };
    const config = { slots };
    const wrapper = mount(Accordion, createConfig(config));
    expect(wrapper.text()).not.toMatch("My nested child"); //component is not yet there(accordion not expended yet)

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click"); //trigger a click
    expect(wrapper.text()).toMatch("My nested child"); //Accordion clicked and now the text is somwhere
  });
  describe("When we do not provide custom child content", () => {
    it("Renders Default Content", async () => {
      const slots = {};
      const config = { slots };
      const wrapper = mount(Accordion, createConfig(config));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch(
        "Whoops, Somebody forgot to populate me yo !"
      );
    });
  });
});
