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


///LeetCode No. 3
class Solution {
    public int lengthOfLongestSubstring(String s) {
        /*
        int maxLength = 0;
        Map<Character , Integer> m = new  HashMap<>();
        for(int right = 0, left=0 ; right< s.length(); right++){
            char currentChar = s.charAt(right);
            if(m.containsKey(currentChar) && m.get(currentChar)>=left){
                left = m.get(currentChar) +1;
            }
            maxLength = Math.max(maxLength, right-left+1);
            m.put(currentChar, right);
            
        }
        return maxLength;
        */
        //Max substring length
        int maxLength= 0;

        //2 Pointers
        // right: final substring.
        // left: start of substring.
        for(int right =0 , left =0  ;right<s.length(); right++){

            // find the index of char starting from left pointer
            int indexFirstAppearance = s.indexOf(s.charAt(right), left);

            // if index is  not equal to right
            if(indexFirstAppearance != right){

                //left will be the index + 1
                left=indexFirstAppearance +1;
            }

            //Find the max by comparing the different between wight and left plus 1 
            maxLength = Math.max(maxLength , right-left+1);
        }
        return maxLength;
    }
}