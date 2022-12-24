import * as array from './array';
import * as math from './math';
import * as collection from './collection';

import {
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	drop,
	dropRight,
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
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	uniq,
	unzip,
	unzipWith,
	without,
	zip,
	zipObject,
} from './array';

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
} from './collection';

import { castArray } from './lang';

const _ = {
	//	Array Methods
	...array,

	//	Collection Methods
	...collection,

	//	Math Methods
	...math,
};

export {
	//	Array Methods
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	drop,
	dropRight,
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
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	uniq,
	unzip,
	unzipWith,
	without,
	zip,
	zipObject,
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
	//	Lang Methods
	castArray,
};

export default _;
