# Mac 环境
## 获取 Flutter SDK
### 获取 Flutter 工具包
    - git clone -b beta https://github.com/flutter/flutter.git
### 修改配置
- 打开配置文件
```
vim ~/.bash_profile
```
- 修改文件
```bash 
export PUB_HOSTED_URL=https://pub.flutter-io.cn //国内用户需要设置
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn //国内用户需要设置
export PATH=`Flutter 工具包路径`/flutter/bin:$PATH
```
- 刷新配置文件
```
source ~/.bash_profile 
```
- 检查依赖项
```
flutter doctor
```

## 安装 Xcode
### 配置 Xcode 命令行工具以使用新安装的 Xcode 版本
```
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```
### 确保 Xcode 许可协议是通过打开一次 Xcode
```
sudo xcodebuild -license
```
### 打开模拟器
```
open -a Simulator
```
### 启动应用
```
flutter run
```


## 安装 Android Studio
- https://developer.android.com/studio/index.html
### AVD Manager - Create Virtual Device
