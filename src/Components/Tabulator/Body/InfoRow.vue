<template>
    <div class="tabulator__row">
        <p class="tabulator__key">{{info.name}}</p>
        <p class="tabulator__value">{{info.value}} {{info.suffix}}</p>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style lang="scss" scoped>
.tabulator{
    &__row{
        display: flex;
        align-items: center;
        border-top: 1px solid black;
        padding: 5px;
    }
    &__key{
        width: 50%;
        font-weight: bold;
    }
    &__value{
        width: 50%;
    }
}
</style>