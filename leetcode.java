class Solution {
    public boolean isPalindrome(int x) {
        // Store the value of x in a temporal variable.
        int temp=x;
        // Variable to store the reverse integer.
        int rev=0;

        while(x>0){
            // gigit variable will store the last number in the integer by using %10.
            int digit = x%10;
            // Store the current value in the reverse variable
            rev=(rev*10)+digit;
            // Divide x by 10 to obtain a smaller integer.
            x=x/10;
        }
        // Return if reverse and temp are same.
        if(rev==temp){
            return true;
        }
       return false;
    }
}