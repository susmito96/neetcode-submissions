class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const countMap = {};

        for (let i = 0; i < s.length; i++) {
            countMap[s[i]] = countMap[s[i]] ? (countMap[s[i]] + 1) : 1;
            countMap[t[i]] = countMap[t[i]] ? (countMap[t[i]] - 1) : -1;
        }

        return !Object.values(countMap).some(v => v !== 0);

        /*
        if (s.length !== t.length) return false;
        const countMap = {
            [s]: {},
            [t]: {}
        };

        for (let i = 0; i < s.length; i++) {
            if (countMap[s].hasOwnProperty(s[i])) {
                countMap[s][s[i]] += 1;
            } else {
                countMap[s][s[i]] = 1;
            }
            if (countMap[t].hasOwnProperty(t[i])) {
                countMap[t][t[i]] += 1;
            } else {
                countMap[t][t[i]] = 1;
            }
        }

        if (Object.keys(countMap[s]).length !== Object.keys(countMap[t]).length) {
            return false;
        }

        for (let k in countMap[s]) {
            if (countMap[s][k] !== countMap[t][k]) {
                return false;
            }
        }

        return true;
    */
    }

}
