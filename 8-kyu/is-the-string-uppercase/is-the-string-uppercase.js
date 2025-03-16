String.prototype.isUpperCase = function() {
 // check to see if uppercase string is identical to original string
   return this.toUpperCase() === this.toString()
}