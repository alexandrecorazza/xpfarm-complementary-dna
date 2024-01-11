const { dna } = require("../src/index");

test("should return false if string is empty", () => {
    expect(dna('')).toBe(false);
});