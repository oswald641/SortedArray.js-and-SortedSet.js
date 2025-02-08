# Basic information
**SortedArray** is a datastructure that wraps a normal array but keeps it always sorted so many operations can be performed more easily, **SortedSet** is the same as a **SortedArray** but it doesn't allow duplicated elements, it does allow duplicated compared values though.

Personally developed and used to solve [**LeetCode 2349. Design a Number Container System**](https://leetcode.com/problems/design-a-number-container-system/)

# Methods
- [constructor](#constructor)
- [size](#size)
- [insert](#insert)
- [remove](#remove)
- [get](#get)
- [indexOf](#indexof)


## constructor
**Parameter:** A custom compare function (optional)\
**Returns:** An instance of **SortedArray** or **SortedSet**\
**Notes:** If no function is passed, the default comparison will rank numbers in ascending order

## size
**Parameter:** None\
**Returns:** The size of the **SortedArray** or **SortedSet**

## insert
**Parameter:** Value to be inserted\
**Returns:** The same **SortedArray** or **SortedSet** on which insert was used on\
**Time Complexity:** O(n + log(n))\
**Notes:** The insert is done using a **binary search** [O(log(n)] to find an index where the values should be inserted and an **Array.splice()** [depends on js implementation, usually O(n)] to insert the value.

## remove
**Parameter:** Value to be removed\
**Returns:** The same **SortedArray** or **SortedSet** on which remove was used on\
**Time Complexity:** O(n + log(n))\
**Notes:** The remove is done using a **binary search** [O(log(n)] to find an index where the values should be removed and an **Array.splice()** [depends on js implementation, usually O(n)] to remove the value.

## get
**Parameter:** Index of the array/set\
**Returns:** Element in **SortedArray** or **SortedSet** at the position passed as argument\
**Time Complexity:** O(1)

## indexOf
**Parameter:** Value to know the index of\
**Returns:** Index of the first element found (the only one for a **SortedSet**) or -1 if the element was not found\
**Time Complexity:** O(log(n))

# Examples
## Example 1 - insert, remove and size on SortedArray
```js
const sa = new SortedArray();

sa.insert(15).insert(42).insert(7);
console.log(sa.arr);	//[7,15,42]
console.log(sa.size());	//3

sa.insert(15);
console.log(sa.arr);	//[7,15,15,42]
console.log(sa.size());	//4

sa.remove(7);
console.log(sa.arr);	//[15,15,42]

sa.remove(15).remove(42);
console.log(sa.arr);	//[15]

sa.remove(42);
console.log(sa.arr);	//[15]
```

## Example 2 - insert into SortedSet
```js
const ss = new SortedSet();

ss.insert(15).insert(42).insert(7);
console.log(ss.arr);	//[7,15,42]

sa.insert(15);
console.log(sa.arr);	//[7,15,42]
```

## Example 3 - SortedArray with custom compare function
```js
const sa = new SortedArray((a, b) => b - a);

sa.insert(15).insert(42).insert(7);
console.log(sa.arr);	//[42,15,7]
```

## Example 4 - SortedArray with normal arrays as elements
```js
const sa = new SortedArray((a, b) => a[1] - b[1]);

sa.insert(['Alice', 1]).insert(['Bob', 2]);
console.log(sa.arr);	//[['Alice', 1], ['Bob', 2]]

const Alice = sa.get(0);	//Alice is at index 0
sa.remove(Alice);	//the same object is removed from the array
console.log(sa.arr);	//[['Bob'], 2]]
```


## Example 5 - SortedArray with objects as elements
```js
const sa = new SortedArray((a, b) => a.rank - b.rank);

sa.insert({'name': 'Alice', 'rank': 1}).insert({'name': 'Bob', 'rank': 2});
console.log(sa.arr);	//[{name: 'Alice', rank: 1}, {name: 'Bob', rank: 2}]
```
