#include <stdio.h>

#define MAXLINE 10

int getlines(char line[], int maxline);
void copy(char to[], char from[]);

// 输出一组文本行里面最长文本行
int main() {
    int len; // 当前行长度
    int max; // 目前为止发现的最长行的长度
    char line[MAXLINE]; // 当前的输入行
    char longest[MAXLINE]; // 保存最长的行

    max = 0;

    while ((len = getlines(line, MAXLINE)) > 0) {
        if(len > max) {
            max = len;
            copy(longest, line);
        }
    }

    if(max > 0) {
        printf("%s", longest);
    }

    return 0;
}

int getlines(char s[], int lim) {
    int c, i;
    for(i = 0; i < lim -1 && (c = getchar()) != EOF && c != '\n'; i++) {
        s[i] = c;
    }
    if( c == '\n') {
        s[i] = c;
        i++;
    }
    s[i] = '\0';
    return i;
}

// 显性说明不返回任何值
void copy(char to[], char from[]) {
    int i;
    i = 0;
    while((to[i] = from[i]) != '\0') {
        i++;
    }
}