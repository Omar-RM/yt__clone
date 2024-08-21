// Remove Duplicates from Sorted Array II

class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length < 3) return nums.length;//-------> If array is short then return length.
            

        int index = 2;

        for (int i = 2; i < nums.length; i++) {
            if (nums[i] != nums[index - 2]) {//----------> Check if current index not is equal to in value n[index-2]
                nums[index++] = nums[i];//---------------> If not equal set value n[index+1] to current n[i] value
            }
        }

        return index;
    }

}