import { useRoute } from "vue-router";
import useConfirmRoute from "@/composables/useConfirmRoute";

jest.mock("vue-router");

describe("useConfirmRoute", () => {
  it("Determines if page route mathes specified route", () => {
    useRoute.mockReturnValue({
      name: "Home",
    });
    const routeName = "Home";
    const result = useConfirmRoute(routeName);
    expect(result.value).toBe(true);
  });
});
