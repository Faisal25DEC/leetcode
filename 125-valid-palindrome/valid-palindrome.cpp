class Solution {
public:
    bool isNonAlphanumericOrSpace(char c){
        if(c==' ')return true;
        return !((c>='0' && c<='9') || (c>='a' && c<='z') || (c>='A' && c<='Z'));
    }
    bool isValidPalindrome(string s){
        int i = 0;
        int j = s.size() -1;
        while(i<=j){
            if(s[i]!=s[j])return false;
            i++;
            j--;
        }
        return true;
    }
    bool isPalindrome(string s) {
        string validString = "";
        for(int i = 0;i<s.size();i++){
            char c = s[i];
            if(!isNonAlphanumericOrSpace(c)){
                validString+= tolower(c);
            }
        }
        cout<<validString;
        return isValidPalindrome(validString);
    }
};