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
    },
    {
        name: '照明',
        icon: 'iconfont icon-light',
        key: 'light',
        state: false,
        type: 'switch'
    },
    {
        name: '氛围灯',
        icon: 'iconfont icon-illumination',
        key: 'light2',
        state: false,
        type: 'switch'
    }, {
        name: '风扇',
        icon: 'iconfont icon-fan',
        key: 'fan',
        state: false,
        type: 'switch'
    }, {
        name: '音乐',
        icon: 'iconfont icon-music',
        key: 'music',
        state: false,
        type: 'switch'
    }, {
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voice',
        state: false,
        type: 'button'
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
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
        name: '风扇',
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
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
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
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voice',
        state: false,
        type: 'button'
    }, {
        name: '显示屏',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
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
    }, {
        name: '震动提醒',
        icon: 'iconfont icon-vibrate',
        key: 'vibrate',
        state: false,
        type: 'button'
    }, {
        name: '语音播报',
        icon: 'iconfont icon-voiceplay',
        key: 'voice',
        state: false,
        type: 'button'
    }, {
        name: '屏幕提示',
        icon: 'iconfont icon-display',
        key: 'display',
        state: false,
        type: 'input'
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
        type: 'button'
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
            key: 'power',
            type: 'number'
        }, {
            name: '颜色',
            icon: 'iconfont icon-color',
            key: 'color',
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
            key: 'id',
            state: false,
            type: 'input'
        }, {
            name: '屏幕显示',
            icon: 'iconfont icon-display',
            key: 'display',
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
