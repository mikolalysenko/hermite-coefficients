hermite-coefficients
====================
Returns the coefficients for the nth probabilists' [Hermite polynomial](http://en.wikipedia.org/wiki/Hermite_polynomials) in increasing order.

## Install

    npm install hermite-coefficients

## Example

```javascript
var H = require("hermite-coefficients")
for(var i=0; i<10; ++i) {
  console.log(H(i))
}
```

Prints out:

```javascript
[ 1 ]
[ 0, 1 ]
[ -1, 0, 1 ]
[ 0, -3, 0, 1 ]
[ 3, 0, -6, 0, 1 ]
[ 0, 15, 0, -10, 0, 1 ]
[ -15, 0, 45, 0, -15, 0, 1 ]
[ 0, -105, 0, 105, 0, -21, 0, 1 ]
[ 105, 0, -420, 0, 210, 0, -28, 0, 1 ]
[ 0, 945, 0, -1260, 0, 378, 0, -36, 0, 1 ]
```

### `require("hermite-coefficients")(n)`
Returns the coefficients for the degree n Hermite polynomial.

## Credits
(c) 2013 Mikola Lysenko