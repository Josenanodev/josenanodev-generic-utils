import monthYearString from "./monthYearString";

describe("Month and year string funtionality", () => {
  it("Correctly parses a date object to a translated string", () => {
    expect(monthYearString(new Date(1993, 2, 29), "es_ES")).toBe("marzo 1993");
  });
});
