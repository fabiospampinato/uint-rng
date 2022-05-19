
/* IMPORT */

import {describe} from 'fava';
import RNG from '../dist/index.js';

/* MAIN */

describe ( 'Uint RNG', it => {

  it ( 'cat retrieve a lot of random 8-bits integers', t => {

    for ( let i = 0; i < 100000; i++ ) {

      t.true ( RNG.get8 () < 256 );

    }

  });

  it ( 'cat retrieve a lot of random 16-bits integers', t => {

    for ( let i = 0; i < 100000; i++ ) {

      t.true ( RNG.get16 () < 65536 );

    }

  });

  it ( 'cat retrieve a lot of random 32-bits integers', t => {

    for ( let i = 0; i < 100000; i++ ) {

      t.true ( RNG.get32 () < 4294967296 );

    }

  });

});
