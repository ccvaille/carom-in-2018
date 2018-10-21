height = float(input('请输入身高'))
weight = float(input(' 请输入体重'))

num = weight / (height * height)

if num < 18.5:
    print('过轻')
elif num < 24.0:
    print(' 正常')
elif num < 28:
    print(' 过重')
else:
    print('肥胖')
