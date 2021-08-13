let arr = ['c', 'a', 'z', 'a', 'x', 'a', 'a', 'z', 'c', 'x', 'a', 'x']
let obj = {}
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] in obj) {
    obj[arr[i]]++
  } else {
    obj[arr[i]] = 1
  }
}
let key = ''
let max = obj[arr[0]]
for (let k in obj) {
  if (max < obj[k]) {
    max = obj[k]
    key = k
  }
}
