function getOdds(nums) {
    const odds = nums.filter(num => num % 2 !== 0);
    console.log(odds);
}

getOdds([1, 2, 3, 4, 5]);