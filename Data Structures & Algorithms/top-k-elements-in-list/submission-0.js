class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (k === 0) return [];

        const countMap = {};

        for (let i = 0; i < nums.length; i++) {
            if (countMap[nums[i]]) {
                countMap[nums[i]] += 1;
            } else {
                countMap[nums[i]] = 1;
            }
        }

        const keyValArr = [];

        Object.keys(countMap).forEach((key) => {
            keyValArr.push({ k: key, v: countMap[key] });
        });

        keyValArr.sort((a, b) => a.v - b.v);

        const topKArr = [];

        for (let i = 1; i <= k; i++) {
            topKArr.push(keyValArr[keyValArr.length - i].k);
        }

        return topKArr;
    }
}
