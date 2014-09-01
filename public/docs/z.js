var z = function (lambda) {
	if (!(typeof lambda == 'string' || lambda instanceof String))
		return lambda; // if Z() is passed a function, it is returned unmodified

	var parts = lambda.split(" => ");
	var inputs;
	var code;

    if (parts.length === 2)
	{
		inputs = parts[0].split(" ");
		code = parts[1];
	}
	else
	{
		inputs = "abcdef"; // Implicit parameter names a-f
		code = parts[0];
	}

	code = ' ' + code + ' ';

	return function () {
		var $$ = [];
		var expression = code;
		for (var i = 0; i < inputs.length || i < arguments.length; i++) {
			$$[inputs[i]] = arguments[i];
			expression = expression.split(' ' + inputs[i] + ' ').join("$$['" + inputs[i] + "']");
			expression = expression.split('(' + inputs[i] + ')').join("($$['" + inputs[i] + "'])");
		}
		return eval(expression);
	}
}

Array.prototype.forEachF = Array.prototype.forEach;
Array.prototype.forEach = function (lambda) { return this.forEachF(z(lambda)); }

Array.prototype.everyF = Array.prototype.every;
Array.prototype.every = function (lambda) { return this.everyF(z(lambda)); }

Array.prototype.someF = Array.prototype.some;
Array.prototype.some = function (lambda) { return this.someF(z(lambda)); }

Array.prototype.filterF = Array.prototype.filter;
Array.prototype.filter = function (lambda) { return this.filterF(z(lambda)); }

Array.prototype.findF = Array.prototype.find;
Array.prototype.find = function (lambda) { return this.findF(z(lambda)); }

Array.prototype.findIndexF = Array.prototype.findIndex;
Array.prototype.findIndex = function (lambda) { return this.findIndexF(z(lambda)); }

Array.prototype.keysF = Array.prototype.keys;
Array.prototype.keys = function (lambda) { return this.keysF(z(lambda)); }

Array.prototype.mapF = Array.prototype.map;
Array.prototype.map = function (lambda) { return this.mapF(z(lambda)); }

Array.prototype.reduceF = Array.prototype.reduce;
Array.prototype.reduce = function (lambda) { return this.reduceF(z(lambda)); }

Array.prototype.reduceRightF = Array.prototype.reduceRight;
Array.prototype.reduceRight = function (lambda) { return this.reduceRightF(z(lambda)); }
