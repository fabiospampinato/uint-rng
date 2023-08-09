
/* IMPORT */

import benchmark from 'benchloop';
import RNG from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 1_000_000
});

benchmark ({
  name: '1-bit',
  fn: () => {
    RNG.get1 ();
  }
});

benchmark ({
  name: '8-bit',
  fn: () => {
    RNG.get8 ();
  }
});

benchmark ({
  name: '16-bit',
  fn: () => {
    RNG.get16 ();
  }
});

benchmark ({
  name: '32-bit',
  fn: () => {
    RNG.get32 ();
  }
});

benchmark ({
  name: '64-bit',
  fn: () => {
    RNG.get64 ();
  }
});

benchmark.summary ();
