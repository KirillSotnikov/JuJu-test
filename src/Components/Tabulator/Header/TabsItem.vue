<template>
    <div 
        class="tabulator__item" 
        :class="{'tabulator__item-active' : city.active}"
        @click="changeTab(city.id)"
    >
        {{city.name}}
    </div>
</template>

<script>
export default {
    props: {
        city: Object,
        changeTab: Function
    }
}
</script>

<style lang="scss" scoped>
.tabulator__item{
    padding: 5px 15px;
    border: 1px solid black;
    cursor: pointer;
    &-active{
        background: black;
        color: #fff;
    }
}
</style>