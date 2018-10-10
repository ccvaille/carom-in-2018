#include <stdio.h>

int main() {
    int c, count;
    count = 0;
    printf("请输入文本: \n");
    while ((c = getchar()) != EOF)
    {
        if (c != '\n')
        {
            count++;
            printf("count: %d\n", count);
        }
    }
    // TODO
    // 只输出总长度
}