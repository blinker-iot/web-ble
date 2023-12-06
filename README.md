# 蓝牙BLE遥控Arduino设备
注意：本软件需要使用Edge或Chrome等现代浏览器方可正常使用

## PC端
只要PC具备蓝牙功能，使用Edge或Chrome访问 [https://ble.clz.me](https://ble.clz.me)即可使用  

## 移动端
访问 [https://ble.clz.me](https://ble.clz.me)  
仅支持android手机使用，如自带浏览器无法正常使用，请安装Edge或Chrome浏览器

## 设备支持

市面上的大部分BLE串口透传模块均可使用。  
已测试可用模块：HC-42、JDY-18  
已知不可用的模块型号：JDY-10  

## 使用说明

点击连接设备后会搜索附近的设备，选择你要连接的设备，然后选择对应的控制界面。下面对每个界面的通信指令进行说明：  
本软件中通信指令统一格式为：  

```
key:value\n
```

每条指令都以换行符\\n结束  

### led控制界面

| 组件 | key | value | 指令示例 |
| --- | --- | ----- | ---- |
| 取色器 | rgb | 255,255,255 | rgb:0,55,200 |
| 亮度调节 | brightness | 0 \~ 255 | brightness:100 |
| 开关 | turn | on \| off | turn:on |

示例程序：

### 小车遥控

| 组件 | key | value | 指令示例 |
| --- | --- | ----- | ---- |
| 摇杆 | joy | 255,255 | joy:125,125 |
| 按键1 | B1 | press \| pressup | B1:pressup |
| 按键2 | B2 | press \| pressup | B2:press |
| 按键3 | B3 | press \| pressup | B3:pressup |
| 按键4 | B4 | press \| pressup | B4:press |

示例程序：

### 智能家居

| 组件 | key | value | 指令示例 |
| --- | --- | ----- | ---- |
| 温度 | temperature | 数值 | temperature:123 |
| 湿度 | humidity | 数值 | humidity:123 |
| 光照 | illuminance | 数值 | illuminance:press:123 |
| PM2.5 | pressure | 数值 | pressure:123 |
| 二氧化碳 | co2 | 数值 | co2:123 |
| 窗户 | window | on \| off | window:on |
| 通风 | fan | on \| off | fan:on |
| 补光灯 | light | on \| off | light:on |
| 开门 | door | on \| off | door:on |
| 音乐 | music | on \| off | music:on |
| 其他 | custom | on \| off | custom:on |
| 文本编辑 | text | 文本 | text:欢迎光临 |

示例程序：

### 智慧农场

| 组件 | key | value | 指令示例 |
| --- | --- | ----- | ---- |
| 温度 | temperature | 数值 | temperature:100 |
| 湿度 | humidity | 数值 | humidity:100 |
| 光照 | illuminance | 数值 | light:100 |
| 气压 | pressure | 数值 | pressure:100 |
| 风向 | windDirection | 数值 | windDirection:100 |
| 风速 | windSpeed | 数值 | windSpeed:100 |
| 水质 | waterQuality | 数值 | waterQuality:100 |
| 降雨量 | rainfall | 数值 | rainfall:100 |
| 灌溉 | irrigation | on \| off | irrigation:on |
| 通风 | fan | on \| off | fan:on |
| 补光灯 | light | on \| off | light:on |
| 风车 | windmill | on \| off | windmill:on |
| 其他功能 | custom | on \| off | custom:on |
| 文本编辑 | text | 文本 | text:欢迎光临 |

示例程序：

## 源代码

见[GITHUB](https://github.com/coloz/web-ble)

## 赞助商
<img src="https://arduino.me/storage/v1/object/public/image/32e02a817385b818e8fb309817384211.webp" style="max-width: 250px">