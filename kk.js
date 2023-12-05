function palindrome(a) {
    var ch = ""
    var palindrome = false

    for (var i = a.length - 1; i >= 0; i--) {
        ch = ch + a[i]
    }

    if (ch === a) {
        palindrome = true
    }

    if (palindrome) {
        console.log("palindrome")
    } else {
        console.log("n'est pas palindrome")
    }
}
