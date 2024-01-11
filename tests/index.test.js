const { dna } = require("../src/index");

// it("should return false if string is empty", () => {
//     expect(dna('')).toBe(false);
// });

// it("should return 'T' if string is 'A'", () => {
//     expect(dna('A')).toBe('T');
// });

// it("should return 'A' if string is 'T'", () => {
//     expect(dna('T')).toBe('A');
// });

it("should return 'ATTGC' if string is 'TAACG'", () => {
    expect(dna('TAACG')).toBe('ATTGC');
});



