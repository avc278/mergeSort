function merge(a, b) {
    const arr = [];
    let aCount = 0;
    let bCount = 0;
    while (aCount < a.length && bCount < b.length) {
        if (a[aCount] < b[bCount]) {
            arr.push(a[aCount])
            aCount++
        } else {
            arr.push(b[bCount])
            bCount++
        }
    }
    if (aCount < a.length) {
        for (let i=aCount; i<a.length; i++) {
            arr.push(a[i])
        }
    } else {
        for (let j=bCount; j<b.length; j++) {
            arr.push(b[j])
        }
    }

    return arr;
}

function split(arr) {
    const half = Math.floor(arr.length / 2);
    const firstHalf = [...arr].splice(0, half);
    const secondHalf = [...arr].splice(half);

    return [firstHalf, secondHalf];
};

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else {
        let [lhs, rhs] = split(array);
        lhs = mergeSort(lhs)
        rhs = mergeSort(rhs);
        array = merge(lhs, rhs)
    }

    return array;
}

module.exports = {
    merge,
    mergeSort,
    split
}
