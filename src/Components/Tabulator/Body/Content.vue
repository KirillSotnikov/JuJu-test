<template>
    <div class="tabulator__content">
        <p class="tabulator__city">{{contentCity}}</p>

        <app-info-row 
            :info="contentInfo.temp"
        />
        <app-info-row 
            :info="contentInfo.pressure"
        />
        <app-info-row 
            :info="contentInfo.humidity"
        />
        <app-info-row 
            :info="contentInfo.windSpeed"
        />
        <app-info-row 
            :info="contentInfo.windDir"
        />
    </div>
</template>

<script>
import InfoRow from './InfoRow'
export default {
    props: {
        contentCity: String,
        contentInfo: Object
    },
    components: {
        'app-info-row': InfoRow
    }
}
</script>

<style lang="scss" scoped>
.tabulator{
    &__content{
        padding-top: 10px;
    }
    &__city{
        border-top: 1px solid black;
        padding: 5px;
        background: #d8d8d8;
    }
}
</style>