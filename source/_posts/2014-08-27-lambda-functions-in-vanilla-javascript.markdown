---
layout: post
title: "C# Lambda functions in vanilla javascript"
date: 2014-08-27 23:04:57 +0100
comments: true
categories: 
---

Introducing [z.js](/docs/z.js) - a javascript function (under 1kb) that allows you to use C# style lambda statements from vanilla javascript.
 
{% codeblock lang:javascript %}

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

{% endcodeblock %}

## Usage

This kind of syntax is best used with functional-type programming with methods like *map* and *where*. 

{% codeblock lang:javascript %}

console.log(Z("a b c => a + b + c")(1, 2, 3)); // 6


// maps a list from one form to another using a 'processor' function
var map = function(list, processor) {
	var rtn = [];
	for (var i = 0; i < list.length; i++) {
		rtn[i] = processor(list[i]);
	}
	return rtn;
}

// filters a list based on a predicate function
var where = function(list, predicate) {
	var rtn = [];
	for (var i = 0; i < list.length; i++) {
		if(predicate(list[i]))
		    rtn.push(list[i]);
	}
	return rtn;
}


console.log(map([4, 5, 6, 2, 3, 4, 4, 2], Z("a => a * a * a"))); // [64, 125, 216, 8, 27, 64, 64, 8] 
console.log(map([1, 2, 3, 4, 5, 6, 7, 8, 9], Z("a => a % 2 === 0"))); // [false, true, false, true, false, true, false, true, false]
console.log(map(where([1, 2, 3, 4, 5, 6, 7, 8, 9], Z("a => a % 2 === 0")), Z("a => a + ' is even'"))); // ["2 is even", "4 is even", "6 is even", "8 is even"] 

{% endcodeblock %}

## Warning

This is untested and potentially dangerous, or at its very best inefficient. Use with caution!