
// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(arayOfNums) {
        let currentSmall;
      for (let i = 0; i < arayOfNums.length; i++)
        if (i === 0) {
            currentSmall = arayOfNums[0];
        }
        else if (arayOfNums[i] < currentSmall) {
            currentSmall = arayOfNums[i];
        }
        return currentSmall;
    }
}