#!/bin/bash

# 定义变量
DMP_HOME="/root"

# 由于install.go里没有安装wget，在启动容器的时候安装；或者在install.go进行安装
apt update
apt install -y wget unzip tzdata

# 从环境变量中获取TZ设置
TZ=$(env | grep TZ | cut -d '=' -f 2)
# 设置时区
echo "Setting timezone to $TZ..."
ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo '$TZ' > /etc/timezone

cd $DMP_HOME || exit
# shellcheck disable=SC2069
exec ./dmp -c -s ./config 2>&1 > $DMP_HOME/dmp.log
