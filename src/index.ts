
/* IMPORT */

import webcrypto from 'tiny-webcrypto';

/* HELPERS */

const makeRNG = ( constructor: Uint8ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor ): (() => number) => {

  let pool: Uint8Array | Uint16Array | Uint32Array | undefined;
  let cursor = 0;

  return (): number => {

    if ( !pool || cursor === pool.length ) { // Replenishing pool

      pool = new constructor ( 65536 / ( constructor.BYTES_PER_ELEMENT * 8 ) );
      cursor = 0;

      webcrypto.getRandomValues ( pool );

    }

    return pool[cursor++];

  };

};

/* MAIN */

const RNG = {
  get8: makeRNG ( Uint8Array ),
  get16: makeRNG ( Uint16Array ),
  get32: makeRNG ( Uint32Array )
};

/* EXPORT */

export default RNG;
