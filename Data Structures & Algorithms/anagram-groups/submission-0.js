class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        return Object.values(strs.reduce(function(obj, str) {
            const sortedStr = str.split("").sort().join("");
            if (obj[sortedStr]) {
                obj[sortedStr].push(str);
            } else {
                obj[sortedStr] = [ str ];
            }
            return obj;
        }, {}));
    }
}
