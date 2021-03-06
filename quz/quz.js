/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	var C = A;
    while(C.tail){
		C = C.tail;
	}
	C.tail = B;
	return A;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var temp = L;
	var newList;
	while(start){
		if(temp.tail == null){
			return  new Error("the start value is error");
		}
		temp = temp.tail;
		start--;
	}

	newList = temp;
	
	while (len > 1) {
	  if (newList.tail === null) {
		return temp;
	  }
	  newList = newList.tail;
	  len--;
	}
	newList.tail = null;
	return temp;
}
