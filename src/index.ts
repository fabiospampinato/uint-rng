
/* IMPORT */

import webcrypto from 'tiny-webcrypto';

/* HELPERS */

function makeRNG ( constructor: BigUint64ArrayConstructor ): (() => bigint);
function makeRNG ( constructor: Uint8ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor ): (() => number);
function makeRNG ( constructor: Uint8ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor | BigUint64ArrayConstructor ): (() => bigint | number) {

  let pool: Uint8Array | Uint16Array | Uint32Array | BigUint64Array | undefined;
  let cursor = 0;

  return (): bigint | number => {

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
  get32: makeRNG ( Uint32Array ),
  get64: makeRNG ( BigUint64Array )
};

/* EXPORT */

export default RNG;
