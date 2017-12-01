<template>
    <div class="home-page">
        <div class="button-group">
            <span><router-link :to="{name: 'exam1', query: {id: 1}}">考试试题一</router-link></span>
            <span><router-link :to="{name: 'exam1', query: {id: 2}}">考试试题二</router-link></span>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .home-page{
        height: 100%;
        width: 100%;
        background: url(../assets/4.jpg) no-repeat;
        background-size: 100%;
    }
    .button-group{
        padding: 0px 15px;
        position: relative;
        transform: translateY(-50%);
        top: 50%;
    }
    .button-group span{
        display: block;
        margin-bottom: 15px;
        width: 100%;
        height: 40px;
        border-radius: 6px;
        color: #656b79;
        background-color: #f6f8fa;
        box-shadow: 0 0 1px #b8bbbf;
    }
    .button-group span a{
        line-height: 40px;
        color: #656b79;
        display: block;
    }
</style>
