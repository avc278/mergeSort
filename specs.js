const { expect } = require('chai');
const sinon = require('sinon');

const { merge, mergeSort, split } = require('./mergesort');

describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      const arr = [0, 1, 2, 3];
      expect(split(arr)).to.eql([[0, 1],[2, 3]]);
    });
    it('is able to split an array into two halves of uneven lengths', function() {
      const arr = [0, 1, 2, 3, 4];
      expect(split(arr)).to.eql([[0, 1],[2, 3, 4]]);
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      const arr1 = [0, 5];
      const arr2 = [4, 12];
      expect(merge(arr1, arr2)).to.eql([0, 4, 5, 12]);
    });
    it('is able to merge two sorted arrays into one sorted array of uneven length', function(){
      const arr1 = [0, 5];
      const arr2 = [4, 12, 100];
      expect(merge(arr1, arr2)).to.eql([0, 4, 5, 12, 100]);
    });
});

describe('mergeSort function', function(){
    it('is able to mergeSort an empty array', function(){
      const arr = [];
      expect(mergeSort(arr)).to.eql([]);
    });
    it('is able to mergeSort an array of size 1', function(){
      const arr = [5];
      expect(mergeSort(arr)).to.eql([5]);
    });
    it('is able to mergeSort an array', function(){
      const arr = [0, 5, 4, 1];
      expect(mergeSort(arr)).to.eql([0, 1, 4, 5]);
    });
    it('is able to merge two sorted arrays into one sorted array of uneven length', function(){
      const arr = [100, 0, 5, 4, 1];
      expect(mergeSort(arr)).to.eql([0, 1, 4, 5, 100]);
    });
});

// [5, 0, 3, 6]
// [[5, 0], [3, 6]]
// [[[5], [0]], [[3], [6]]]
// [[0, 5], [3, 6]]
// [0, 3, 5, 6]
