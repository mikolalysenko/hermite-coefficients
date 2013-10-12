"use strict"

module.exports = hermitePolynomial

var TABLE = [[1], [0, 1]]

function hermitePolynomial(n) {
  while(n >= TABLE.length) {
    var d = TABLE.length
    var p = TABLE[d-1]
    var q = TABLE[d-2]
    var h = new Array(d+1)
    var c = 1 - d
    h[0] = c * q[0]
    h[d-1] = p[d-2]
    h[d] = p[d-1]
    for(var i=1; i<d-1; ++i) {
      h[i] = p[i-1] + c * q[i]
    }
    TABLE.push(h)
  }
  return TABLE[n]
}