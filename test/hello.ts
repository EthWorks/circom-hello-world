const { expect } = require("chai")
const { hello } = require("../src/circuit-wrapper.js");

describe("hello", async () => {
    it("works", async () => {
        const output = await hello({ a: 2, b: 3 })
        console.log(output)
        expect(output.publicSignals[0]).to.eq("6")
    })
})

export { }