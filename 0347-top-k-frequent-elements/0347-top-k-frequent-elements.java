class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> frq=new HashMap<>();
        for(int n: nums)
        {
            frq.put(n,frq.getOrDefault(n,0)+1);
            
        }
        PriorityQueue<Integer> pq=new PriorityQueue<>((a,b) -> frq.get(a) - frq.get(b));
        for(int key: frq.keySet())
        {
            pq.offer(key);
            if(pq.size()>k){
                pq.poll();
            }
        }
        int[] ans=new int[k];
        int i=0;
        while(!pq.isEmpty())
        {
            ans[i]=pq.poll();
            i++;
        }
        return ans;
    }
}