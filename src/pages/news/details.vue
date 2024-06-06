<template>
    <div>
    <h2>新闻详情页</h2>
    <p>xxxxxxxxxxxx</p>
    </div>
</template>

<script setup>
    const route = useRoute()

    const id  = route.query?.id ?? ''
    console.log('拿到页面的参数id',id)
</script>