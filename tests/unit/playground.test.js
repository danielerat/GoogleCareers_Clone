import { evenOrOdd } from "@/playground";
describe("Basic Math", () => {
  it("Shouls add two Numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("Sustract two numbers", () => {
    expect(5 - 2).toBe(3);
  });

  describe("Should Test Odd of even", () => {
    it("Indicate the numer is even", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });

  describe("When the number is odd", () => {
    it("Indicate the numer is odd", () => {
      expect(evenOrOdd(4)).toBe("Odd");
    });
  });
});
