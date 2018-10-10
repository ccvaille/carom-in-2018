#include <stdio.h>

int main() {
    /* 定义华氏温度、摄氏温度、温度上限、温度下限、步长 */
    int fahr, celsius;
    int max, min, step; 

    max = 300;
    min = 0;
    step = 20;

    fahr = min;
    while(fahr <= max) {
        celsius = 5 * (fahr - 32) / 9;
        printf("%3d\t%6d\n", fahr, celsius);
        fahr = fahr + step;
    }
}