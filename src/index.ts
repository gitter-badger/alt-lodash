import * as array from './array';
import * as collection from './collection';
import * as date from './date';
import * as func from './function';
import * as lang from './lang';
import * as math from './math';
import * as num from './number';
import * as obj from './object';
import * as str from './string';
import * as seq from './seq';
import * as util from './util';

import {
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	differenceWith,
	drop,
	dropRight,
	dropRightWhile,
	dropWhile,
	first,
	fill,
	findIndex,
	findLastIndex,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
	indexOf,
	initial,
	intersection,
	intersectionBy,
	intersectionWith,
	join,
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAt,
	remove,
	reverse,
	slice,
	sortedIndex,
	sortedIndexOf,
	sortedLastIndexOf,
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	unionBy,
	uniq,
	uniqBy,
	unzip,
	unzipWith,
	without,
	xor,
	zip,
	zipObject,
} from './array';

import {
	countBy,
	each,
	eachRight,
	every,
	filter,
	find,
	findLast,
	flatMap,
	flatMapDeep,
	flatMapDepth,
	forEach,
	forEachRight,
	groupBy,
	includes,
	keyBy,
	map,
	orderBy,
	partition,
	reduce,
	reduceRight,
	reject,
	sample,
	sampleSize,
	shuffle,
	size,
	some,
	sortBy,
} from './collection';

import { now } from './date';

import {
	after,
	ary,
	before,
	bind,
	bindKey,
	curry,
	curryRight,
	debounce,
	delay,
	flip,
	negate,
	once,
	overArgs,
	partial,
	partialRight,
	rearg,
	rest,
	spread,
	unary,
	wrap,
} from './function';

import {
	add,
	ceil,
	divide,
	floor,
	max,
	maxBy,
	mean,
	meanBy,
	min,
	minBy,
	multiply,
	round,
	subtract,
	sum,
	sumBy,
} from './math';

import { clamp, inRange, random } from './number';

import {
	assign,
	assignIn,
	at,
	create,
	defaults,
	entries,
	extend,
	findKey,
	findLastKey,
	forIn,
	forInRight,
	forOwn,
	forOwnRight,
	functions,
	functionsIn,
	get,
	has,
	invert,
	keys,
	keysIn,
	mapKeys,
	merge,
	omit,
	omitBy,
	pick,
	pickBy,
	set,
	toPairs,
	toPairsIn,
	unset,
	update,
	values,
	valuesIn,
} from './object';

import {
	castArray,
	clone,
	cloneDeep,
	conformsTo,
	eq,
	gt,
	gte,
	isArray,
	isArrayBuffer,
	isArrayLike,
	isArrayLikeObject,
	isBoolean,
	isBuffer,
	isDate,
	isElement,
	isEmpty,
	isEqual,
	isError,
	isFinite,
	isFunction,
	isInteger,
	isLength,
	isMap,
	// isMatch,
	isNaN,
	isNative,
	isNil,
	isNull,
	isNumber,
	isObject,
	isObjectLike,
	isPlainObject,
	isRegExp,
	isSafeInteger,
	isSet,
	isString,
	isSymbol,
	isTypedArray,
	isUndefined,
	isWeakMap,
	isWeakSet,
	lt,
	lte,
	// toArray,
	// toInteger,
	// toLength,
	toNumber,
	toSafeInteger,
	toString,
} from './lang';

import { chain2 } from './seq';

import {
	camelCase,
	capitalize,
	endsWith,
	escape,
	escapeRegExp,
	kebabCase,
	lowerCase,
	lowerFirst,
	pad,
	padEnd,
	padStart,
	parseInt,
	repeat,
	replace,
	snakeCase,
	split,
	startCase,
	startsWith,
	toLower,
	toUpper,
	trim,
	trimEnd,
	trimStart,
	upperCase,
	upperFirst,
} from './string';

import {
	attempt,
	cond,
	conforms,
	constant,
	defaultTo,
	flow,
	flowRight,
	identity,
	iteratee,
	noop,
	nthArg,
	over,
	overEvery,
	overSome,
	property,
	range,
	rangeRight,
	stubArray,
	stubFalse,
	stubObject,
	stubString,
	stubTrue,
	times,
	toPath,
	uniqueId,
} from './util';

const _ = {
	//	Array Methods
	...array,

	//	Collection Methods
	...collection,

	//	Date Methods
	...date,

	//	Function Methods
	...func,

	//	Math Methods
	...math,

	//	Number Methods
	...num,

	//	Object Methods
	...obj,

	//	Seq Methods
	...seq,

	//	String Methods
	...str,

	//	Lang Methods
	...lang,

	//	Util Methods
	...util,
};

export {
	//	Array Methods
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	differenceWith,
	drop,
	dropRight,
	dropRightWhile,
	dropWhile,
	first,
	fill,
	findIndex,
	findLastIndex,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
	indexOf,
	initial,
	intersection,
	intersectionBy,
	intersectionWith,
	join,
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAt,
	remove,
	reverse,
	slice,
	sortedIndex,
	sortedIndexOf,
	sortedLastIndexOf,
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	unionBy,
	uniq,
	uniqBy,
	unzip,
	unzipWith,
	without,
	xor,
	zip,
	zipObject,
	// Collection Methods
	countBy,
	each,
	eachRight,
	every,
	filter,
	find,
	findLast,
	flatMap,
	flatMapDeep,
	flatMapDepth,
	forEach,
	forEachRight,
	groupBy,
	includes,
	keyBy,
	map,
	orderBy,
	partition,
	reduce,
	reduceRight,
	reject,
	sample,
	sampleSize,
	shuffle,
	size,
	some,
	sortBy,
	//	Date Methods
	now,
	//	Function Methods
	after,
	ary,
	before,
	bind,
	bindKey,
	curry,
	curryRight,
	debounce,
	delay,
	flip,
	negate,
	once,
	overArgs,
	partial,
	partialRight,
	rearg,
	rest,
	spread,
	unary,
	wrap,
	//	Lang Methods
	castArray,
	clone,
	cloneDeep,
	conformsTo,
	eq,
	gt,
	gte,
	isArray,
	isArrayBuffer,
	isArrayLike,
	isArrayLikeObject,
	isBoolean,
	isBuffer,
	isDate,
	isElement,
	isEmpty,
	isEqual,
	isError,
	isFinite,
	isFunction,
	isInteger,
	isLength,
	isMap,
	// isMatch,
	isNaN,
	isNative,
	isNil,
	isNull,
	isNumber,
	isObject,
	isObjectLike,
	isPlainObject,
	isRegExp,
	isSafeInteger,
	isSet,
	isString,
	isSymbol,
	isTypedArray,
	isUndefined,
	isWeakMap,
	isWeakSet,
	lt,
	lte,
	// toArray,
	// toInteger,
	// toLength,
	toNumber,
	toSafeInteger,
	toString,
	// Math Methods
	add,
	ceil,
	divide,
	floor,
	max,
	maxBy,
	mean,
	meanBy,
	min,
	minBy,
	multiply,
	round,
	subtract,
	sum,
	sumBy,
	//	Number Methods
	clamp,
	inRange,
	random,
	//	Object Methods
	assign,
	assignIn,
	at,
	create,
	defaults,
	entries,
	extend,
	findKey,
	findLastKey,
	forIn,
	forInRight,
	forOwn,
	forOwnRight,
	functions,
	functionsIn,
	get,
	has,
	invert,
	keys,
	keysIn,
	mapKeys,
	merge,
	omit,
	omitBy,
	pick,
	pickBy,
	set,
	toPairs,
	toPairsIn,
	unset,
	update,
	values,
	valuesIn,
	//	Seq Methods
	chain2,
	//	String Methods
	camelCase,
	capitalize,
	endsWith,
	escape,
	escapeRegExp,
	kebabCase,
	lowerCase,
	lowerFirst,
	pad,
	padEnd,
	padStart,
	parseInt,
	repeat,
	replace,
	snakeCase,
	split,
	startCase,
	startsWith,
	toLower,
	toUpper,
	trim,
	trimEnd,
	trimStart,
	upperCase,
	upperFirst,
	//	Util Methods
	attempt,
	cond,
	conforms,
	constant,
	defaultTo,
	flow,
	flowRight,
	identity,
	iteratee,
	noop,
	nthArg,
	over,
	overEvery,
	overSome,
	property,
	range,
	rangeRight,
	stubArray,
	stubFalse,
	stubObject,
	stubString,
	stubTrue,
	times,
	toPath,
	uniqueId,
};

export default _;
