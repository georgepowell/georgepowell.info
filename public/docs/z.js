var Z = function (lambda) {
	var parts = lambda.split(" => ");
	var inputs = parts[0].split(" ");
	var code = parts[1];

	return function () {
		var $$ = [];
		var expression = code;
		for (var i = 0; i < inputs.length; i++) {
			$$[inputs[i]] = arguments[i];
			expression = expression.split(inputs[i]).join("$$['" + inputs[i] + "']");
		}
		return eval(expression);
	}
}