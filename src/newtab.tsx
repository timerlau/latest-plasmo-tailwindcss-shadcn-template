// src/newtab.tsx
import { useEffect, useState } from "react"

import { Badge } from "~components/ui/badge"
import { Button } from "~components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~components/ui/card"
import { Separator } from "~components/ui/separator"

import "./style.css"

function IndexNewtab() {
  const [data, setData] = useState("")
  const [count, setCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 模拟加载动画
    setTimeout(() => setIsLoaded(true), 500)
  }, [])

  const inc = () => setCount((c) => c + 1)
  const dec = () => setCount((c) => c - 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* 头部区域 */}
        <div className="text-center space-y-6 mb-12">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge
              variant="outline"
              className="mb-4 animate-in fade-in-0 duration-500">
              🚀 Plasmo Chrome Extension
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent animate-in fade-in-0 duration-700 delay-200">
              Welcome
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in-0 duration-700 delay-400">
              欢迎使用基于{" "}
              <span className="text-primary font-semibold">Plasmo</span> +{" "}
              <span className="text-primary font-semibold">Tailwind CSS</span> +{" "}
              <span className="text-primary font-semibold">shadcn/ui</span>{" "}
              构建的现代化浏览器扩展
            </p>
          </div>
        </div>

        {/* 功能卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* 计数器卡片 */}
          <Card
            className={`animate-in slide-in-from-bottom-4 duration-500 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                计数器
              </CardTitle>
              <CardDescription>简单的状态管理演示</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {count}
              </div>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={dec}
                  variant="outline"
                  size="sm"
                  className="animate-in scale-in-95 duration-200">
                  -1
                </Button>
                <Button
                  onClick={inc}
                  size="sm"
                  className="animate-in scale-in-95 duration-200">
                  +1
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 输入卡片 */}
          <Card
            className={`animate-in slide-in-from-bottom-4 duration-500 delay-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                输入测试
              </CardTitle>
              <CardDescription>交互功能演示</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                onChange={(e) => setData(e.target.value)}
                value={data}
                placeholder="输入一些内容..."
                className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
              />
              {data && (
                <p className="text-sm text-muted-foreground animate-in fade-in-0 duration-300">
                  输入内容:{" "}
                  <span className="text-primary font-medium">{data}</span>
                </p>
              )}
            </CardContent>
          </Card>

          {/* 状态卡片 */}
          <Card
            className={`animate-in slide-in-from-bottom-4 duration-500 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                系统状态
              </CardTitle>
              <CardDescription>扩展运行状态</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    扩展状态
                  </span>
                  <Badge variant="default" className="animate-pulse">
                    运行中
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">版本</span>
                  <Badge variant="secondary">v1.0.0</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    构建时间
                  </span>
                  <Badge variant="outline">
                    {new Date().toLocaleDateString()}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 分隔线 */}
        <Separator className="my-8 animate-in fade-in-0 duration-500 delay-600" />

        {/* 底部信息 */}
        <div
          className={`text-center space-y-4 animate-in fade-in-0 duration-500 delay-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Powered by</span>
            <a
              href="https://www.plasmo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium">
              Plasmo
            </a>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>shadcn/ui</span>
          </div>
          <footer className="text-xs text-muted-foreground">
            Crafted with ❤️ by @创智大叔
          </footer>
        </div>
      </div>

      {/* 浮动装饰元素 */}
      <div className="fixed top-4 right-4 z-20">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-600"></div>
        </div>
      </div>
    </div>
  )
}

export default IndexNewtab
