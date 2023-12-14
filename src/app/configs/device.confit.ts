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
        name: '光照',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'illuminance',
        type: 'number'
    }, {
        name: 'PM2.5',
        icon: 'iconfont icon-pm',
        unit: 'ug/m³',
        key: 'pm25',
        type: 'number'
    }, {
        name: '二氧化碳',
        icon: 'iconfont icon-co2',
        unit: 'ppm',
        key: 'co2',
        type: 'number'
    },
    {
        name: '窗户',
        icon: 'iconfont icon-pipe',
        key: 'window',
        state: false,
        type: 'switch'
    }, {
        name: '通风',
        icon: 'iconfont icon-fan',
        key: 'fan',
        state: false,
        type: 'switch'
    }, {
        name: '补光灯',
        icon: 'iconfont icon-light2',
        key: 'light',
        state: false,
        type: 'switch'
    }, {
        name: '开门',
        icon: 'iconfont icon-windmill',
        key: 'door',
        state: false,
        type: 'switch'
    }, {
        name: '音乐',
        icon: 'iconfont icon-windmill',
        key: 'music',
        state: false,
        type: 'switch'
    }, {
        name: '其他',
        icon: 'iconfont icon-setting',
        key: 'custom',
        state: false,
        type: 'switch'
    }, {
        icon: 'iconfont icon-字母',
        key: 'custom',
        state: false,
        type: 'input'
    }]
}

export const FARMING_CONFIG = {
    name: '智慧农场',
    background: 'assets/img/farming-bg.webp',
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
        name: '光照',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'illuminance',
        type: 'number'
    }, {
        name: '气压',
        icon: 'iconfont icon-pressure',
        unit: 'kPa',
        key: 'pressure',
        type: 'number'
    }, {
        name: '风向',
        icon: 'iconfont icon-wind-direction',
        unit: '°',
        key: 'windDirection',
        type: 'number'
    }, {
        name: '风速',
        icon: 'iconfont icon-wind-speed',
        unit: 'm/s',
        key: 'windSpeed',
        type: 'number'
    }, {
        name: '二氧化碳',
        icon: 'iconfont icon-co2',
        unit: 'ppm',
        key: 'co2',
        type: 'number'
    },
    {
        name: '灌溉',
        icon: 'iconfont icon-pipe',
        key: 'irrigation',
        state: false,
        type: 'switch'
    }, {
        name: '通风',
        icon: 'iconfont icon-fan',
        key: 'fan',
        state: false,
        type: 'switch'
    }, {
        name: '补光灯',
        icon: 'iconfont icon-light2',
        key: 'light',
        state: false,
        type: 'switch'
    }, {
        name: '风车',
        icon: 'iconfont icon-windmill',
        key: 'windmill',
        state: false,
        type: 'switch'
    }, {
        name: '其他',
        icon: 'iconfont icon-setting',
        key: 'custom',
        state: false,
        type: 'switch'
    }, {
        icon: 'iconfont icon-字母',
        key: 'custom',
        state: false,
        type: 'input'
    }]
}

export const WEATHER_CONFIG = {
    name: '气象站',
    background: 'assets/img/weather-bg.webp',
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
        name: '光照',
        icon: 'iconfont icon-sun',
        unit: 'LX',
        key: 'illuminance',
        type: 'number'
    }, {
        name: 'PM2.5',
        icon: 'iconfont icon-pm',
        unit: 'ug/m³',
        key: 'pm25',
        type: 'number'
    }, {
        name: '二氧化碳',
        icon: 'iconfont icon-co2',
        unit: 'ppm',
        key: 'co2',
        type: 'number'
    },
    {
        name: '窗户',
        icon: 'iconfont icon-pipe',
        key: 'window',
        state: false,
        type: 'switch'
    }, {
        name: '通风',
        icon: 'iconfont icon-fan',
        key: 'fan',
        state: false,
        type: 'switch'
    }, {
        name: '补光灯',
        icon: 'iconfont icon-light2',
        key: 'light',
        state: false,
        type: 'switch'
    }, {
        name: '开门',
        icon: 'iconfont icon-windmill',
        key: 'door',
        state: false,
        type: 'switch'
    }, {
        name: '音乐',
        icon: 'iconfont icon-windmill',
        key: 'music',
        state: false,
        type: 'switch'
    }, {
        name: '其他',
        icon: 'iconfont icon-setting',
        key: 'custom',
        state: false,
        type: 'switch'
    }, {
        icon: 'iconfont icon-字母',
        key: 'custom',
        state: false,
        type: 'input'
    }]
}