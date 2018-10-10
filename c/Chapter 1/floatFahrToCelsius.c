#include <stdio.h>

int main() {
    int fahr;
    int max, min;

    max = 300;
    min = 0;

    for(fahr = max; fahr >= min; fahr = fahr - 20) {
        printf ("%3d%9.3f\n", fahr, (5.0 / 9.0) * (fahr - 32));
    }
}