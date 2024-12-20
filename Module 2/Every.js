function every(array, predicate) {
    for (let figures of array) {
        if (!predicate(figures)) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));

console.log(every([2, 4, 16], n => n < 10));

console.log(every([], n => n < 10));
