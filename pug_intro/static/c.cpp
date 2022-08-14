#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main()
{
    int height[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    int n = sizeof(height) / sizeof(height[0]);
    // cout<<n;
    vector<int> left(n);
    vector<int> right(n);
    // left[0]=height[0];
    int lmax = 0, rmax = 0;
    for (int i = 0; i < n; i++)
    {
        lmax = max(lmax, height[i]);
        left[i]=lmax;
    }
    // right[n-1]=height[n-1];
    for (int i = n - 1; i >= 0; i--)
    {
        rmax = max(rmax, height[i]);
        right[i] = rmax;
    }
    for (int i = 0; i < n; i++)
    {
        cout<<left[i]<<" ";
    }
    cout<<endl;
    for (int i = 0; i < n; i++)
    {
        cout<<right[i]<<" ";
    }
    return 0;
}