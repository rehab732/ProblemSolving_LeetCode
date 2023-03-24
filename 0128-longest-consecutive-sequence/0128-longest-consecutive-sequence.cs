public class Solution {
    public int LongestConsecutive(int[] nums) {
        int longest=0;
        HashSet<int> set=new HashSet<int>(nums);
        foreach(int num in set)
        {
            if(!set.Contains(num-1))
            {
                int current=num;
                int currentStreak=1;
                while(set.Contains(current+1))
                {
                    current+=1;
                    currentStreak+=1;

                }
                longest=Math.Max(longest,currentStreak);
            }
        }
        return longest;
    }
}