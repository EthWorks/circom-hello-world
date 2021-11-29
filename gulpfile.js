const { src, dest } = require('gulp');
const exec = require('gulp-exec');
const path = require("path")

function basename(_path) {
  return path.basename(_path, path.extname(_path));
}

function build(cb) {
  src("./circuits/**/*.main.circom")
    .pipe(exec(file => `cd build && circom ${file.path} --r1cs --wasm`))
    .pipe(exec.reporter())
    .pipe(exec(file => {
      const r1cs = basename(file.path) + ".r1cs"
      const powersOfTauFinal = "../setup/pot16_final.ptau"
      const zkey0 = basename(file.path) + "_0000.zkey"
      const zkeyFinal = basename(file.path) + ".zkey"

      return `cd build && snarkjs zkey new ${r1cs} ${powersOfTauFinal} ${zkey0} && cat /dev/urandom | snarkjs zkey contribute ${zkey0} ${zkeyFinal} -v`
    }))
    .pipe(exec.reporter())


  cb();
}

exports.build = build
exports.default = build
