const DNAStrand = require("./complimentaryDNA");


test("returns the correct value 1", () => {
    expect(DNAStrand("ATTGC")).toEqual("TAACG")
    expect(DNAStrand("GTAT")).toEqual("CATA")
})
