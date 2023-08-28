import isSQLDateFormat from "./isSQLDateFormat";

describe("SQL date format checker", () => {
  it("Returns true for 1993-03-29", () => {
    expect(isSQLDateFormat("1993-03-29")).toBe(true);
  });
  it("Returns false for 1993-03-29 00:00:00", () => {
    expect(isSQLDateFormat("1993-03-29 00:00:00")).toBe(false);
  });
  it("Returns false for 1993-03-29T00:00:00", () => {
    expect(isSQLDateFormat("1993-03-29T00:00:00")).toBe(false);
  });
  it("Returns false for 1993-03-29T00:00:00Z", () => {
    expect(isSQLDateFormat("1993-03-29T00:00:00Z")).toBe(false);
  });
  it("Returns false for 1993-03-29T00:00:00+00:00", () => {
    expect(isSQLDateFormat("1993-03-29T00:00:00+00:00")).toBe(false);
  });
  it("Returns false for 1993-03-29T00:00:00.000", () => {
    expect(isSQLDateFormat("1993-03-29T00:00:00.000")).toBe(false);
  });
  it("1993-03-29 this string is not sql date format 1993-03-29", () => {
    expect(isSQLDateFormat("1993-03-29T00:00:00.000")).toBe(false);
  });
});
