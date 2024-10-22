package main

import (
	"dst-management-platform-api/app/auth"
	"dst-management-platform-api/app/setting"
	"dst-management-platform-api/app/tools"
	"dst-management-platform-api/utils"
	"flag"
	"fmt"
	"github.com/gin-gonic/gin"
	static "github.com/soulteary/gin-static"
	"io"
	"runtime"
)

const VERSION string = "0.0.1"

var (
	// flag绑定的变量
	bindPort      int
	consoleOutput bool
	versionShow   bool
)

func main() {
	//一些启动前检查
	initialize()

	r := gin.Default()

	//全局中间件，获取语言
	r.Use(utils.MWlang())
	//静态资源
	r.Use(static.Serve("/", static.LocalFile("C:/Users/admin/WebstormProjects/dst-management-platform-web/dist", true)))

	//用户、鉴权模块
	r = auth.RouteAuth(r)
	//设置模块
	r = setting.RouteSetting(r)
	//工具模块
	r = tools.RouteTools(r)

	// 启动服务器
	err := r.Run(fmt.Sprintf(":%d", bindPort))
	if err != nil {
		fmt.Println(err)
		return
	}
}

func initialize() {
	flag.IntVar(&bindPort, "l", 80, "监听端口，如： -l 8080 (Listening Port, e.g. -l 8080)")
	flag.BoolVar(&consoleOutput, "c", false, "开启控制台日志输出，如： -c (Enable console log output, e.g. -c)")
	flag.BoolVar(&versionShow, "v", false, "查看版本，如： -v (Check version, e.g. -v)")
	flag.Parse()

	if !consoleOutput {
		gin.DefaultWriter = io.Discard
	}
	if versionShow {
		fmt.Println(VERSION + "\n" + runtime.Version())
		return
	}

	//数据库检查
	utils.CreateConfig()
	gin.SetMode(gin.ReleaseMode)
	gin.DisableConsoleColor()
}
