#include <stdio.h>

// 统计各个数字、空白符及其他字符出现次数
int main() {
    int c, i, nwhite, nother;
    int ndigit[10];

    nwhite = nother = 0;
    for(i = 0; i < 10; i++) {
        ndigit[i] = 0;
    }  

    while((c = getchar()) != EOF) {
        if(c >= '0' && c <= '9') {
            // c-`0` 可以转换成数字
            ndigit[c-'0']++;
        } else if(c == ' ' || c == '\n' || c == '\t') {
            nwhite++;
        } else {
            nother++;
        }
    }
    
    printf("digits ");
    
        
    for(i = 0; i < 10; i++) {
        printf("\n%d出现次数=%d ", i, ndigit[i]);
    }

    printf(", white space = %d, other= %d \n", nwhite, nother);
        
}