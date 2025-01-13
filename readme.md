# Uint RNG

A tiny isomorphic Random Number Generator for generating 1/8/16/32/64-bits unsigned integers.

## Install

```sh
npm install uint-rng
```

## Usage

```ts
import RNG from 'uint-rng';

// Let's generate some random numbers

RNG.get1 (); // => 0
RNG.get8 (); // => 72
RNG.get16 (); // => 23291
RNG.get32 (); // => 1129029
RNG.get64 (); // => 16020485623009486818n
```

## License

MIT © Fabio Spampinato
