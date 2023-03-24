public class Solution {
    public bool IsValid(string s) {
      
         Stack<char> pattern = new Stack<char>();
         Dictionary<char, char> brackets = new Dictionary<char, char>()
            {
                { '(', ')' },
                { '{', '}' },
                { '[', ']' }
            };

            foreach (char c in s)
            {
                if (brackets.ContainsKey(c))
                {
                    pattern.Push(brackets[c]);
                }
                else
                {
                    if (pattern.Count == 0 ||  pattern.Pop()!= c) return false;
                }
            }
            return pattern.Count==0;
    }
    }
