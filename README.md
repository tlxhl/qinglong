# 注意事项

1. 只是搬运互联网上的脚本，仅供学习。
2. 注意看脚本开头注释内容，看脚本注释内容，看脚本注释内容。

# 青龙
内置命令：
```
#拉库
# 添加单个脚本文件
ql raw <file_url>
# 添加单个仓库的指定脚本。repo后面是：地址 白名单 黑名单 依赖 分支
ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch>


#执行任务的几种方式
# 依次执行，如果设置了随机延迟，将随机延迟一定秒数
task <file_path>
# 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日，同时记录在日志文件中
task <file_path> now
# 并发执行，无论是否设置了随机延迟，均立即运行，前台不产生日，直接记录在日志文件中，且可指定账号执行
task <file_path> conc <env_name> <account_number>(可选的)
# 指定账号执行，分组执行，无论是否设置了随机延迟，均立即运行
task <file_path> desi <env_name> <account_number>

#定时兑换的脚本建议设置并发执行，需要互助的不要使用并发，服务器性能差的慎用并发，消耗时间长的建议分组执行。
```

青龙配置文件，环境变量可以参考：
这个变量还是建议从头好好看看。
[https://bbs.zsxwz.com/thread-4635.htm](https://bbs.zsxwz.com/thread-4635.htm)

青龙拉取本仓库：
```
#国内：
ql repo https://ghproxy.com/https://github.com/zsxwz/qinglong.git "jd_|jx_|getJDCookie" "backUp" "^jd[^_]|USER|function|utils|sendnotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator.js"

#国外：
ql repo https://github.com/zsxwz/qinglong.git "jd_|jx_|getJDCookie" "backUp" "^jd[^_]|USER|function|utils|sendnotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator.js"

```
拉完库是默认运行的，但是部分脚本在一些情况下最好手动运行，或者看情况要禁用。
部分活动需要设置变量才能正常运行或者助力。
因此注意看脚本开头注释内容。

# 依赖
第一次运行，可能会有依赖的问题，大多数脚本的依赖都差不多，就搬运一下大佬的脚本吧。

```
#国内
#进容器执行,手动装全部依赖:
cd scripts
wget -N https://raw.fastgit.org/zero205/JD_tencent_scf/main/package.json
pnpm i
#或在容器外:
docker exec -it 容器名 bash -c  "cd scripts
wget -N https://raw.fastgit.org/zero205/JD_tencent_scf/main/package.json
pnpm i"

#国外
#进容器执行,手动装全部依赖:
cd scripts
wget -N https://raw.githubusercontents.com/zero205/JD_tencent_scf/main/package.json
pnpm i
#或在容器外:
docker exec -it 容器名 bash -c  "cd scripts
wget -N https://raw.githubusercontents.com/zero205/JD_tencent_scf/main/package.json
pnpm i"

```


# 助力
1. 账号间互助建议看互助研究院：@update_help，修改一下code.sh当中的repo变量为本仓库zsxwz_qinglong或者其他人的仓库。
![code.sh](https://cdn.jsdelivr.net/gh/zsxwz/tuchuang@latest/2021/12/14/681a4362cc227ffdbf08dba8ca629bbd.png)

2. 只有一个人，可以加入大佬的助力池：@JDShareCodebot
3. 部分活动可能助力脚本作者，部分可能换成自己两个助力码，主要是为了把一些脚本的助力池换了。自己账号互助一般是满的，这个一般也助力不到我头上。
4. 多数脚本一般是先账号间互助，然后助力作者。或者ck1助力作者，其他的助力车头。具体的看脚本注释。

# 最后

黑号不负责。
交流群：[https://chat.zsxwz.com/](https://chat.zsxwz.com/)





