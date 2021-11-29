template Multiplier2 () {

   // Declaration of signals.
   signal private input a;
   signal private input b;
   signal output c;

   // Statements.
   c <== a * b;
}

component main = Multiplier2();