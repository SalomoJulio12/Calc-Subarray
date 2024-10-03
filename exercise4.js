function arrSum(arr) {
    let maxSum = 0;
    let maxSumArr = [];
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            let tempArr = [];
                for (let j = i; j < arr.length; j++) {
                    sum += arr[j];
                    tempArr.push(arr[j]);
                        if (sum > maxSum) {
                    maxSum = sum;
                    maxSumArr = tempArr;
                }
            }
        }
    return [maxSumArr, maxSum];
}