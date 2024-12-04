function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage
const input = "racecar"; // Example input
console.log(`Is '${input}' a palindrome? ${isPalindrome(input)}`);