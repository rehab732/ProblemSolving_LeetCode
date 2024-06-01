/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLen = 0;
    let left = 0;
    let set = new Set();

    for (let right = 0; right < n; right++) {
        // If the character is already in the set, remove characters from the left until it's not
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        // Add the character at right pointer to the set
        set.add(s[right]);
        // Update the maximum length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}