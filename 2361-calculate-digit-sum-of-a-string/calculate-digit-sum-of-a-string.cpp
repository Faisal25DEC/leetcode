class Solution {
public:
    string digitSum(string s, int k) {
        if(s.size()<=k)return s;

        int cnt = 0;
        int sum = 0;
        string result = "";
        for(int i = 0;i<s.size();i++){
            int digit = s[i]-'0';
            sum+=digit;
            cout<<cnt<<" "<<sum<<endl;

            cnt++;
            if(cnt == k){
                cout<<sum<<endl;
                result += to_string(sum);
                cnt = 0;
                sum = 0;
            }
        }
        if(cnt!=0){

        result+=to_string(sum);
        }
        return digitSum(result,k);
    }
};