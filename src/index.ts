
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

function makeBitRNG ( rng: (() => number), bits: number ): (() => 0 | 1) {

  let pool = 0;
  let cursor = bits;

  return (): 0 | 1 => {

    if ( cursor === bits ) { // Replenishing pool

      pool = rng ();
      cursor = 0;

    }

    return ( pool & ( 1 << cursor++ ) ) ? 1 : 0;

  };

};

/* MAIN */

const RNG = {
  get1: makeBitRNG ( makeRNG ( Uint8Array ), 8 ),
  get8: makeRNG ( Uint8Array ),
  get16: makeRNG ( Uint16Array ),
  get32: makeRNG ( Uint32Array ),
  get64: makeRNG ( BigUint64Array )
};

/* EXPORT */

export default RNG;
