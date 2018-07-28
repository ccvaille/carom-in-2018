# 环境
## 获取 Flutter SDK
- 获取 flutter 工具包
    - git clone -b beta https://github.com/flutter/flutter.git
- 修改配置
- 打开配置文件
```
vim ~/.bash_profile
```
 - 修改文件
```bash 
export PUB_HOSTED_URL=https://pub.flutter-io.cn //国内用户需要设置
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn //国内用户需要设置
export PATH=`pwd`/flutter/bin:$PATH
```
 - 刷新配置文件
```
source ~/.bash_profile 
```
