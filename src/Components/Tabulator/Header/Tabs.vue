<template>
    <div class="tabulator__list">
        <app-tab-item 
            v-for="city in cities" 
            :key="city.id" 
            :city="city"
            :changeTab="changeTab"
        />
    </div>
</template>

<script>
import TabItem from './TabsItem'
export default {
    props: {
        cities: Array,
        changeTab: Function
    },
    components: {
        'app-tab-item': TabItem
    }
}
</script>

<style lang="scss" scoped>
.tabulator__list{
    display: flex;
}
</style>