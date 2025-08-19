console.log("Hello, DSA in JavaScript!");
const arr = [2,3,6,8,9,12,-3,5];

function pairfinder(arr, target) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

const target = 9;
const result = pairfinder(arr, target);
console.log(`Pairs that sum to ${target}:`, result);