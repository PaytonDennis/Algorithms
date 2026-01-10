function twoSum(nums,target){
    for (let i=0; i < nums.length; ++i)
        for (let j = i +1; j < nums.length; j++)
            if (nums[i] + nums[j] === target)
                return [i,j]
}
// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]


// O(n^2)
function twoSum(nums, target){
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] + nums[j] === target)
                return [i,j]     
}

function twoSum(nums, target){
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1;  j < nums.length; j++)
            if (nums[i] + nums[j] == target)
                return [i,j]
}

function twoSum(nums, target){
    for (i = 0; i < nums.length; i++)
        for (j = i+1; j < nums.length; j++)
    if (nums[i] + nums[j] == target)
        return [i,j]
}

// Hash map solution - O(n)
function twoSumHashMap(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        // Calculate what number we need
        let complement = target - nums[i];
        
        // Check if we've seen it
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store this number and its index
        map.set(nums[i], i);
    }
}


// Find two numbers in array that sum to target (brute force)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            if (nums[j] + nums [j])
                return [i,j]
}



function twoSumMemory(){
let nums = [0,2,3]
let target = 4
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
}

// hashmap
function twoSum(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
            let complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}

// [1,2,3] target = 5
function twoSumHash(nums, target){
    let map = new Map()
    for(let i = 0; i < nums.length; i++ ){
         let complement = target - nums[i]
         if (map.has(complement)){
            return ([map.get(complement),i])
         }
    }
    map.set[nums[i], i]
}


function twoSum(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if(map.has(complement)){
            return([map.get(complement),i])
        }
        map.set(nums[i], i)
    }
}

function twoSum(nums, target){
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)){
            return ([map.get(complement),i])
        }
        map.set(nums[i],i)
    }
}

function twoSum(nums, target){
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let compliment =  target - nums[i]
        if (map.has(compliment)){
            return [map.get(compliment), i]
        }
        map.set(nums[i],i)
    }
}

function twoSum(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}

function twoSum(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}
// [2,4,6] target = 6
function twoSum(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}

function twoSum(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}

function twoSum(nums, target){
   for (let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]

            }
        }
   }
}

// my expllinations:
// So we need to create a function that takes the numbs array and
//  then the target number as parameters then we create a map that
//   will hold our data for us and then we create a line of code that 
// Maps the current number in the array and it's index to the map then
//  we create a for Loop that Loops through the entire array and then we
// create a compliment which will stand for the number we're looking for
//  we make the compliment equal to the target number we're looking for minus
// Dot I which is the current number we are at then we do an if statement
//where if dumbs Dot baps dot has compliment then we will return map.get com's eye,
