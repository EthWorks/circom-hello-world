const snarkjs = require("snarkjs")
const math = require("./math.js")

export const hello = (inputObj: any) => snarkjs.groth16.fullProve(inputObj, "./build/hello.main.wasm", "./build/hello.main.zkey")
