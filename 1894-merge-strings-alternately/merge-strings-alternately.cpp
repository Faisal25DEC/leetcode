class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string res = "";
        for(int i = 0;i<max(word1.size(), word2.size());i++){
            if(i<word1.size() && i<word2.size()){
                string s1(1,word1[i]);
                string s2(1,word2[i]);
                string word = s1+s2;
                cout<<word<<" "<<to_string(word1[i])<<endl;
                res+= word;
            }
            else if(i<word2.size())res+=string(1,word2[i]);
            else if(i<word1.size())res+=string(1,word1[i]);
        }
        return res;
    }
};
