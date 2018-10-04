#include <stdio.h>

int main() {
    int c, length;
    length = 0;
    printf("请输入文本: \n");
    while((c = getchar()) != EOF){
        if(c == '\n') {
            length++;
        }
        printf ("行数为： %d\n", length);
    }
    
}