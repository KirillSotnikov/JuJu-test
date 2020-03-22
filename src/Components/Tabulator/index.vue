<template>
    <div class="tabulator">
        <app-tabs 
            :cities="cities" 
            :changeTab="changeTab" 
        />
        <app-content 
            :contentCity="content.city"
            :contentInfo="content.info"
        />
    </div>
</template>

<script>
import fetchAPI from '../../utils/fetchAPI'
import {API_URL, API_KEY} from '../../constants/index'

import Tabs from './Header/Tabs'
import Content from './Body/Content'

export default {
    components: {
        'app-tabs': Tabs,
        'app-content': Content
    },
    data () {
        return {
            cities: [
                {
                    id: 703447,
                    name: 'Kyiv',
                    active: true
                },
                {
                    id: 2643743,
                    name: 'London',
                    active: false
                },
                {
                    id: 5128638,
                    name: 'New York',
                    active: false
                }
            ],
            content: {
                city: '',
                info: {
                    temp: {
                        name: 'Temperature',
                        value: '',
                        suffix: '°C'
                    },
                    pressure: {
                        name: 'Atmospheric pressure',
                        value: '',
                        suffix: 'hPa'
                    },
                    humidity: {
                        name: 'Humidity',
                        value: '',
                        suffix: '%'
                    },
                    windSpeed: {
                        name: 'Wind speed',
                        value: '',
                        suffix: 'meter/sec'
                    },
                    windDir: {
                        name: 'Wind direction',
                        value: '',
                        suffix: '°'
                    }
                }
            }
        }
    },
    methods: {
        async changeTab (id) {
            this.cities.forEach((item, i) => {
                item.id === id ? item.active = true : item.active = false
            })

            this.fetchData(id)
        },

        async fetchData (id = this.cities[0].id) {
            const {main, name, wind} =  await this.fetchWeather(id)

            this.setCityName(name)

            this.setInfo('temp', main.temp)
            this.setInfo('pressure', main.pressure)
            this.setInfo('humidity', main.feels_like)
            
            this.setInfo('windSpeed', wind.speed)
            this.setInfo('windDir', wind.deg)
        },

        async fetchWeather (id) {
            const result = await fetchAPI({
                url: `${API_URL}weather?id=${id}&units=metric&appid=${API_KEY}`
            })
            return result
        },

        setInfo (name, newData) {
            this.content.info[name].value = newData
        },
        setCityName (newName) {
            this.content.city = newName
        }
    },

    mounted () {
        this.fetchData()
    }
}
</script>

<style lang="scss" scoped>
    .tabulator{
        max-width: 500px;
        width: 100%;
        padding-top: 30px;
    }
</style>