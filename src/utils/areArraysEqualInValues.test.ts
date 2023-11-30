import areArraysEqualInValues from "./areArraysEqualInValues";

describe("areArraysEqualInValues", () => {
  it("returns true when arrays are equal in values", () => {
    expect(areArraysEqualInValues([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("returns false when arrays are not equal in values", () => {
    expect(areArraysEqualInValues([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it("returns false when arrays are not equal in length", () => {
    expect(areArraysEqualInValues([1, 2, 3], [1, 2])).toBe(false);
  });

  it("returns false when arrays are not equal in values and length", () => {
    expect(areArraysEqualInValues([1, 2, 3], [1, 2, 4, 5])).toBe(false);
  });

  it("returns true when arrays are equal in values and length but not in same order", () => {
    expect(areArraysEqualInValues([1, 2, 3], [3, 2, 1])).toBe(true);
  });

  it("returns true when arrays are equal in values and length but not in same order, strings types", () => {
    expect(
      areArraysEqualInValues(
        ["1", "a", "2", "3", "aaaa", "aa"],
        ["aa", "3", "aaaa", "2", "1", "a"]
      )
    ).toBe(true);
  });
});
