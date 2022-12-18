// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    let digitsArr = ['0','1','2','3','4','5','6','7','8','9']
    return digitsArr.includes(this.toString());
};