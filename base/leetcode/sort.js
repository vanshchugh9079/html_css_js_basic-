/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let arr=nums.filter((element)=>{
    return element!=val;
})
arr.sort();
return arr;
};
console.log(removeElement(a,b));