// export const LIGHTCONTROLLER_CONFIG = {
//     name: '灯光控制',
//     background: 'assets/img/ledcontroller-bg.webp',
//     widgets: [{
//         name: '取色器',
//         icon: 'iconfont icon-ledcontroller',
//         key: 'rgb',
//         type: 'number'
//     }, {
//         name: '亮度调节',
//         icon: 'iconfont icon-brightness',
//         key: 'brightness',
//         type: 'number'
//     }, {
//         name: '开关',
//         icon: 'iconfont icon-onoff',
//         key: 'turn',
//         type: 'switch'
//     }]
// }

// export const PPTCONTROLLER_CONFIG = {
//     name: 'PPT遥控器',
//     background: 'assets/img/pptcontroller-bg.webp',
//     widgets: [{
//         name: '上翻页',
//         icon: 'iconfont icon-pageup',
//         key: 'pageup',
//         type: 'button'
//     }, {
//         name: '下翻页',
//         icon: 'iconfont icon-pagedown',
//         key: 'pagedown',
//         type: 'button'
//     }, {
//         name: '音量加',
//         icon: 'iconfont icon-volumeup',
//         key: 'volumeup',
//         type: 'button'
//     }, {
//         name: '音量减',
//         icon: 'iconfont icon-volumedown',
//         key: 'volumedown',
//         type: 'button'
//     }, {
//         name: '超链接',
//         icon: 'iconfont icon-hyperlink',
//         key: 'hyperlink',
//         type: 'button'
//     },
//     {
//         name: '全屏',
//         icon: 'iconfont icon-fullscreen',
//         key: 'fullscreen',
//         state: false,
//         type: 'switch'
//     }, {
//         name: '黑屏',
//         icon: 'iconfont icon-Blackscreen',
//         key: 'Blackscreen',
//         state: false,
//         type: 'switch'
//     }, {
//         name: '播放暂停',
//         icon: 'iconfont icon-Pauseplaying',
//         key: 'Pauseplaying',
//         state: false,
//         type: 'switch'
//     }, {
//         name: '标注',
//         icon: 'iconfont icon-cursor',
//         key: 'cursor',
//         state: false,
//         type: 'switch'
//     }, {
//         name: '清除',
//         icon: 'iconfont icon-cleanup',
//         key: 'cleanup',
//         type: 'button'
//     }, {
//         name: '保存',
//         icon: 'iconfont icon-save',
//         key: 'save',
//         type: 'button'
//     },{
//         name: '返回桌面',
//         icon: 'iconfont icon-todesktop',
//         key: 'todesktop',
//         type: 'button'
//     },{
//         name: '撤销',
//         icon: 'iconfont icon-revoke',
//         key: 'revoke',
//         type: 'button'
//     }]
// }

// export const CARCONTROLLER_CONFIG = {
//     name: '小车遥控',
//     background: 'assets/img/carcontroller-bg.webp',
//     widgets: [{
//         name: '摇杆',
//         icon: 'iconfont icon-joy',
//         key: 'joy',
//         type: 'number'
//     }, {
//         name: '按键1',
//         icon: 'iconfont icon-button1',
//         key: 'B1',
//         type: 'button'
//     }, {
//         name: '按键2',
//         icon: 'iconfont icon-button2',
//         key: 'B2',
//         type: 'button'
//     }, {
//         name: '按键3',
//         icon: 'iconfont icon-button3',
//         key: 'B3',
//         type: 'button'
//     }, {
//         name: '按键4',
//         icon: 'iconfont icon-button4',
//         key: 'B4',
//         type: 'button'
//     }]
// }

export const SMARTHOME_CONFIG = {
    name: '智能家居',
    background: 'assets/img/smarthome-bg.webp',
    widgets: [{
        name: '温度',
        icon: 'iconfont icon-temperature',
        unit: '℃',
        key: 'temperature',
        type: 'number'
    }, {
        name: '湿度',
        icon: 'iconfont icon-humidity',
        unit: '%',
        key: 'humidity',
        type: 'number'
    }, {
        name: '烟雾传感器',
        icon: 'iconfont icon-smoke',
        unit: 'mg/m³',
        key: 'smoke',
        type: 'number'
    }, {
        name: '光照强度',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'illuminance',
        type: 'number'
    }, {
        name: 'TVOC',
        icon: 'iconfont icon-pm',
        unit: 'mg/m³',
        key: 'tvoc',
        type: 'number'
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
    }, {
        name: '氛围灯',
        icon: 'iconfont icon-illumination',
        key: 'illumination',
        state: false,
        type: 'switch'
    }, {
        name: 'LED智能灯',
        icon: 'iconfont icon-light',
        key: 'light',
        state: false,
        type: 'switch'
    }, {
        name: '风速控制',
        icon: 'iconfont icon-fan',
        key: 'fan',
        state: false,
        type: 'switch'
    }, {
        name: 'MP3',
        icon: 'iconfont icon-mp3',
        key: 'mp3',
        state: false,
        type: 'switch'
    }, {
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voiceplay',
        state: false,
        type: 'switch'
    }]
}

export const SMARTFARMING_CONFIG = {
    name: '智慧农场',
    background: 'assets/img/smartfarming-bg.webp',
    widgets: [{
        name: '环境温度',
        icon: 'iconfont icon-temperature',
        unit: '℃',
        key: 'temperature',
        type: 'number'
    }, {
        name: '空气湿度',
        icon: 'iconfont icon-humidity',
        unit: '%',
        key: 'humidity',
        type: 'number'
    }, {
        name: '土壤湿度',
        icon: 'iconfont icon-soil_moisture',
        unit: '%',
        key: 'soil_moisture',
        type: 'number'
    }, {
        name: '光照强度',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'illuminance',
        type: 'number'
    }, {
        name: 'CO2',
        icon: 'iconfont icon-co2',
        unit: 'ppm',
        key: 'co2',
        type: 'number'
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
    }, {
        name: '补光灯',
        icon: 'iconfont icon-light',
        key: 'windSpeed',
        state: false,
        type: 'switch'
    }, {
        name: '水泵',
        icon: 'iconfont icon-waterpump',
        key: 'waterpump',
        state: false,
        type: 'switch'
    },
    {
        name: '风速控制',
        icon: 'iconfont icon-fan',
        key: 'fan',
        state: false,
        type: 'switch'
    }, {
        name: '加热器',
        icon: 'iconfont icon-heater',
        key: 'heater',
        state: false,
        type: 'switch'
    }]
}

export const WEATHERSTATION_CONFIG = {
    name: '气象站',
    background: 'assets/img/weatherstation-bg.webp',
    widgets: [{
        name: '风速',
        icon: 'iconfont icon-wind-speed',
        unit: 'm/s',
        key: 'windspeed',
        type: 'number'
    }, {
        name: '风向',
        icon: 'iconfont icon-wind-direction',
        key: 'winddirection',
        state: false,
        type: 'number'
    }, {
        name: '雨量',
        icon: 'iconfont icon-rainfall',
        unit: 'mm',
        key: 'rainfall',
        type: 'number'
    }, {
        name: '环境温度',
        icon: 'iconfont icon-temperature',
        unit: '℃',
        key: 'temperature',
        type: 'number'
    }, {
        name: '环境湿度',
        icon: 'iconfont icon-humidity',
        unit: '%',
        key: 'humidity',
        type: 'number'
    }, {
        name: '气压',
        icon: 'iconfont icon-pressure',
        unit: 'KPa',
        key: 'pressure',
        type: 'number'
    },
    {
        name: '光照强度',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'sun',
        type: 'number'
    }, {
        name: '空气质量',
        icon: 'iconfont icon-pm',
        key: 'pm',
        state: false,
        type: 'number'
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
    }, {
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voiceplay',
        state: false,
        type: 'switch'
    }]
}

export const HEALTH_CONFIG = {
    name: '健康监测',
    background: 'assets/img/health-bg.webp',
    widgets: [{
        name: '心率',
        icon: 'iconfont icon-heartrate',
        unit: 'bpm',
        key: 'heartrate',
        type: 'number'
    }, {
        name: '血氧',
        icon: 'iconfont icon-bloodoxygen',
        unit: 'mol/l',
        key: 'bloodoxygen',
        type: 'number'
    }, {
        name: '血压',
        icon: 'iconfont icon-bloodpressure',
        unit: 'mmHg',
        key: 'bloodpressure',
        type: 'number'
    }, {
        name: '体温',
        icon: 'iconfont icon-temperature',
        unit: '℃',
        key: 'temperature',
        type: 'number'
    }, {
        name: '睡眠状态',
        icon: 'iconfont icon-sleep',
        key: 'sleep',
        type: 'number'
    }, {
        name: '电导率',
        icon: 'iconfont icon-gsr',
        unit: 'μS',
        key: 'gsr',
        type: 'number'
    },
    {
        name: '震动提醒',
        icon: 'iconfont icon-vibrate',
        key: 'vibrate',
        state: false,
        type: 'switch'
    }, {
        name: '屏幕提示',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
    }, {
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voice',
        state: false,
        type: 'switch'
    }]
}

export const ENVIRON_CONFIG = {
    name: '环境监测',
    background: 'assets/img/environment-bg.webp',
    widgets: [{
        name: '温度',
        icon: 'iconfont icon-temperature',
        unit: '℃',
        key: 'entemp',
        type: 'number'
    }, {
        name: '湿度',
        icon: 'iconfont icon-humidity',
        unit: '%',
        key: 'humi',
        type: 'number'
    }, {
        name: '气压',
        icon: 'iconfont icon-pressure',
        unit: 'KPa',
        key: 'pressure',
        type: 'number'
    }, {
        name: '光照',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'sun',
        type: 'number'
    }, {
        name: '空气质量',
        icon: 'iconfont icon-pm',
        unit: 'pm',
        key: 'air',
        type: 'number'
    }, {
        name: '噪音',
        icon: 'iconfont icon-noise',
        unit: 'db',
        key: 'noise',
        type: 'number'
    },
    {
        name: 'PH值',
        icon: 'iconfont icon-ph',
        key: 'ph',
        type: 'number'
    }, {
        name: '水位',
        icon: 'iconfont icon-water-level',
        unit: 'm',
        key: 'waterlevel',
        type: 'number'
    }, {
        name: '水质TDS',
        icon: 'iconfont icon-water',
        unit: 'mg/L',
        key: 'tds',
        type: 'number'
    }, {
        name: '紫外线',
        icon: 'iconfont icon-ultraviolet',
        unit: 'w/㎡',
        key: 'ultraviolet',
        type: 'number'
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
    }, {
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voice',
        state: false,
        type: 'switch'
    }]
}

export const INDUSTRY_CONFIG = {
    name: '工业自动化',
    background: 'assets/img/industry-bg.webp',
    widgets: [
        {
            name: '开关状态',
            icon: 'iconfont icon-switchstate',
            key: 'indonoff',
            type: 'number'
        }, {
            name: '电流',
            icon: 'iconfont icon-current',
            unit: 'A',
            key: 'current',
            type: 'number'
        }, {
            name: '电压',
            icon: 'iconfont icon-voltage',
            unit: 'V',
            key: 'voltage',
            type: 'number'
        }, {
            name: '功率',
            icon: 'iconfont icon-power',
            unit: 'W',
            key: 'powerp',
            type: 'number'
        }, {
            name: '颜色',
            icon: 'iconfont icon-color',
            key: 'colour',
            type: 'number'
        }, {
            name: '重量',
            icon: 'iconfont icon-weight',
            unit: 'kg',
            key: 'weight',
            type: 'number'
        },
        {
            name: '计数',
            icon: 'iconfont icon-count',
            key: 'count',
            type: 'number'
        }, {
            name: '身份信息',
            icon: 'iconfont icon-idinf',
            key: 'idinf',
            state: false,
            type: 'input'
        }, {
            name: '屏幕显示',
            icon: 'iconfont icon-display',
            key: 'inddisplay',
            state: false,
            type: 'input'
        }, {
            name: '语音播报',
            icon: 'iconfont icon-voiceplay',
            key: 'indvoice',
            state: false,
            type: 'switch'
        }, {
            name: '继电器1',
            icon: 'iconfont icon-relay',
            key: 'relay1',
            state: false,
            type: 'switch'
        }, {
            name: '继电器2',
            icon: 'iconfont icon-relay',
            key: 'relay2',
            state: false,
            type: 'switch'
        }, {
            name: '继电器3',
            icon: 'iconfont icon-relay',
            key: 'relay3',
            state: false,
            type: 'switch'
        }, {
            name: '继电器4',
            icon: 'iconfont icon-relay',
            key: 'relay4',
            state: false,
            type: 'switch'
        }]
}
