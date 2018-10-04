#include <stdio.h>

#define IN 1  /* 单词内 */
#define OUT 0 /* 单词外 */

// 统计输入的行数、单词数与字符数
int main() {
    int c,
        nl,
        nw,
        nc,
        state;

    state = OUT;
    nl = nw = nc = 0;

    while( (c = getchar()) != EOF) {
        // 统计字符数
        nc++;
        printf("%d % d %d\n", nl, nw, nc);
        if( c == '\n') {
            // 统计行数
            nl++;
            printf("%d % d %d\n", nl, nw, nc);
        }
        if( c == ' ' || c == '\n' || c == '\t') {
            state = OUT;
        } else if(state == OUT) {
            state = IN;
            // 统计单词数
            nw++;
            printf("%d % d %d\n", nl, nw, nc);
        }
    }

}