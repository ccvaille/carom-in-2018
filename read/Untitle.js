var res = '\n';
for (var i = 1; i < 9; i++) {
    for (var j = 1; j < i; j++) {
        res += i + "*" + j + "= " + i * j+ ' ';
    }
    res+='\n';
}