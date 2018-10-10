
#include <stdio.h>

int main() {
    int c; 
    printf("EOF 的值是：%d \n", EOF);
    printf("请输入文本: \n");
    c = getchar();
    while (c != EOF) {
        printf("你输入的文本是：%c\n", putchar(c));
        // putchar(c);
        c = getchar();
    }
}