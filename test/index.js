
/* IMPORT */

import {describe} from 'fava';
import RNG from '../dist/index.js';

/* MAIN */

describe ( 'Uint RNG', it => {

  it ( 'can retrieve a lot of random 1-bit integers', t => {

    for ( let i = 0; i < 100_000; i++ ) {

      t.true ( RNG.get1 () < 2 );

    }

  });

  it ( 'can retrieve a lot of random 8-bits integers', t => {

    for ( let i = 0; i < 100_000; i++ ) {

      t.true ( RNG.get8 () < 256 );

    }

  });

  it ( 'can retrieve a lot of random 16-bits integers', t => {

    for ( let i = 0; i < 100_000; i++ ) {

      t.true ( RNG.get16 () < 65536 );

    }

  });

  it ( 'can retrieve a lot of random 32-bits integers', t => {

    for ( let i = 0; i < 100_000; i++ ) {

      t.true ( RNG.get32 () < 4294967296 );

    }

  });

  it ( 'can retrieve a lot of random 64-bit integers', t => {

    for ( let i = 0; i < 100_000; i++ ) {

      t.true ( RNG.get64 () < 18446744073709551616n );

    }

  });

});
