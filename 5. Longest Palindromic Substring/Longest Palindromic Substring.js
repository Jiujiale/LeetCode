/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ''
    let tempres = ''
    let temp = ''
    for(let i = 0; i < s.length; i ++){
        temp = s.substring(i,s.length).split('').reverse().join('')
        if (temp.indexOf(s[i]) > -1){
            tempres = s.substring(i,s.length - temp.indexOf(s[i]))
        }
        if (tempres.length > res.length){
            res = tempres
        }
    }
    return res
};

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome("abcda"))