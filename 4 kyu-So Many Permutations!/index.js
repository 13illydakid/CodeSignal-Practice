/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!


const chai = require('chai');
chai.config.truncateThreshold = 0;
const { deepEqual } = chai.assert;

function doTest (string, expected) {
	const actual = permutations(string);
	deepEqual(actual.sort(), expected.sort(), `for string "${string}"\n`);
}

describe('permutations', function () {
	it('sample tests', function () {
		doTest('a', ['a']);
		doTest('ab', ['ab', 'ba']);

		doTest('aabb', ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
	});
});
*/
