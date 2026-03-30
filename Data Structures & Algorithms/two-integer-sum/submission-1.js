class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const targetMap = {};
        for (let i = 0; i < nums.length; i++) {
            if (targetMap.hasOwnProperty(target - nums[i])) {
                return [i, targetMap[target - nums[i]]];
            }
            targetMap[nums[i]] = i;
        }
    }
}
