function tri(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            var a = parseInt(arr[j])
            var b = parseInt(arr[j + 1])

            if (a > b) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}
