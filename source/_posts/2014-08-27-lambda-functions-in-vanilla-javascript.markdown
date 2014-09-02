---
layout: post
title: "Ridiculously succinct array manipulation in javascript"
date: 2014-08-27 23:04:57 +0100
comments: true
categories: blog programming javascript
---

Introducing [z.js](/docs/z.js) - a lightweight javascript library that allows you to use a ridiculously succinct syntax for working with javascript arrays, like `[1, 2, 3].map('a * 2').filter('a % 5 == 0');`. They're like lambdas in C# but better.

Here's the code in full:
 
{% codeblock lang:javascript %}

// z() takes a string-lambda and returns a function representing that lambda
var z = function (lambda) {
	if (!(typeof lambda == 'string' || lambda instanceof String))
		return lambda; // if z() is passed a function, it is returned unmodified

	var parts = lambda.split(" => ");
	var inputs;
	var code;

  if (parts.length === 2) {
		inputs = parts[0].split(" ");
		code = parts[1];
	}
	else {
		inputs = "abcdef"; // Implicit parameter names a-f
		code = parts[0];
	}

	code = ' ' + code + ' ';

	return function () {
		var $$ = [];
		var expression = code;
		for (var i = 0; i < inputs.length || i < arguments.length; i++) {
			$$[inputs[i]] = arguments[i];
			// Only finds variables enclosed by spaces or brackets... TODO: proper finding and replacing of variable names.
			expression = expression.split(' ' + inputs[i] + ' ').join("$$['" + inputs[i] + "']");
			expression = expression.split('(' + inputs[i] + ')').join("($$['" + inputs[i] + "'])");
		}
		return eval(expression);
	}
}

{% endcodeblock %}

And to make the standard `Array.prototype` methods support the new string-lambdas:
 
{% codeblock lang:javascript %}

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

{% endcodeblock %}

## Usage

This kind of syntax is best used with functional-type programming with methods like *map* and *filter*. 

{% codeblock lang:javascript %}

var numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// These 3 lines will all do exactly the same thing:
numbers.map(function (a) { return a * 2; }); // plain old javascript
numbers.map("a => a * 2"); // explicit variable names
numbers.map("a * 2"); // implicit variable name of 'a'

// This allows for simple, readable, functional array manipulation.
numbers.filter('a % 2 == 0').map('a * 2').reduce("a + ', ' + b");

{% endcodeblock %}

## Caution!

This method is sketchy and has been built here as a proof of concept. It's significantly slower than normal javascript anonymous functions and has plenty of other serious problems. Enjoy!