class SortedArray {
	constructor(compareFunction = (a, b) => a - b) {
		this.arr = [];
		this.compare = compareFunction;
	}
	
	size() {
		return this.arr.length;
	}
	
	insert(n) {
		let [l, r] = [0, this.arr.length];
		if(r === 0) {
			this.arr[0] = n;
			return this;
		}
		let i = l + Math.floor((r - l) / 2);
		while(l < r) {
			if(this.compare(this.arr[i], n) === 0)
				break;
			if(this.compare(this.arr[i], n) < 0)
				l = i + 1;
			else
				r = i;
			i = l + Math.floor((r - l) / 2);
		}
		this.arr.splice(i, 0, n);
		return this;
	}
	
	remove(n) {
		let [l, r] = [0, this.arr.length];
		let i = l + Math.floor((r - l) / 2);
		//n must be contained in the array
		while(l < r) {
			if(this.compare(this.arr[i], n) === 0)
				break;
			if(this.compare(this.arr[i], n) < 0)
				l = i + 1;
			else
				r = i;
			i = l + Math.floor((r - l) / 2);
		}
		if(this.arr[i] === n) {
			this.arr.splice(i, 1);
			return this;
		}
		return this;
	}
	
	get(i) {
		return this.arr[i];
	}
	
	indexOf(n) {
		let [l, r] = [0, this.arr.length];
		let i = l + Math.floor((r - l) / 2);
		while(l < r) {
			if(this.compare(this.arr[i], n) === 0)
				break;
			if(this.compare(this.arr[i], n) < 0)
				l = i + 1;
			else
				r = i;
			i = l + Math.floor((r - l) / 2);
		}
		if(this.arr[i] === n) {
			while(i > 0 && this.arr[i - 1] === n)
				i--;
			return i;
		}
		return -1;
	}
}