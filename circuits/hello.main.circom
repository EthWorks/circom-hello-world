template Multiplier2 () {

   // Declaration of signals.
   signal input a;
   signal input b;
   signal output c;

   // Statements.
   c <== a * b;
}

component main = Multiplier2();