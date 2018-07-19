# ls:list
- ls: 打印出当前目录的清单
- ls -a: 列出所有文件，包括隐藏文件和隐藏文件夹
- ls -l: 使用长格式列出文件
- ls -t: 按照文件建立时间列出文件 
- ls -alt
# pwd
- pwd: 查看当前工作目录
# cd
- cd dirName: 切换到 dirName目录
- cd .. : 返回上一层
# touch
- touch name: 新建名为 name 的文件
# mkdir:mark directory
- mkdir dirName: 新建 dirName 目录
# cp: copy
- cp 
# mv:移动文件或者将文件重命名
- mv fileName fileName: 重命名文件
- mv fileName ... dirName: 移动文件
# rm:删除文件
- rm -r: 不接收确认提示，直接删除文件
- rm -rf: 循环删除目录及其内容

====================

# echo:输出信息
- echo 'hello world'

# cat:读取文件并写入标准输出
- cat > filename: 把输出输入到文件
- cat >> filename： 把输出追加到文件·
- cat < filename： 把文件内容输出
- `>`: redirects standard output of a command to a file, overwriting previous content.
- `>>`:redirects standard output of a command to a file, appending new content to old content.
- `<`: redirects standard input to a command.

# wc:Word Count
- cat filename | wc: 统计指定文件中的字节数、字数、行数
- wc -c: 字节数 
- wc -l: 统计行数
- wc -w: 统计字数
# |
- `|`: redirects standard output of a command to another command.
- 管道，连接多个命令

# sort：排序
- sorts lines of text alphabetically.
- sort filename: 把文件按字母顺序排序输出

# uniq: unique 去重
- filters duplicate, adjacent lines of text.
- uniq filename: 去重 filename 文件内容

# grep: global regular expression print
- searches for a text pattern and outputs it.
- grep： 区分大小写 
- grep -i：不区分大小写
- grep -R：搜索全局文件，表递归（recursive）
- grep -Rl: 搜索全局文件，并返回匹配结果，l: files with matches

# sed：stream editor 一种在线编辑器
- searches for a text pattern, modifies it, and outputs it.
- sed 's/snow/rain/' filename: 把文件里第一个 rain 替换成 snow 并输出来
- sed 's/snow/rain/g' filename: 把文件里全部 rain 替换成 snow 并输出来
- sed s filename: 把文件里的 s 输出来

============