#!/usr/bin/env sh

# 确保脚本遇到错误抛出
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果时发布到自定义域名
#echo 'www.example.com' > CHAME

git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/kimi009/kimi009.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:kimi009/myNote.git master

cd -