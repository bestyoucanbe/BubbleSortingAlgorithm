var testdata = [2, 32, 45, 12, 15, 17, 8]

var swap = false

function bubbleSort(testdata) {
    for (let i = 0; i < testdata.length; i++) {
        if (i !== (testdata.length - 1)) {
            if (testdata[i] > testdata[i + 1]) {
                console.log("before swap", "i", testdata[i], "i+1", testdata[i + 1])
                storeValueTemporarily = testdata[i]
                testdata[i] = testdata[i + 1]
                testdata[i + 1] = storeValueTemporarily
                swap = true
                console.log("after swap", "i", testdata[i], "i+1", testdata[i + 1])
            }
        }
        console.log("i", i)
        console.log("testdata", testdata)
    }
    return swap
}

var swapped = bubbleSort(testdata)

console.log("was it swapped?", swapped)

