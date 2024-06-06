<template>
    <div>
        <!-- 引入自定义模板命名时 不能涉及到驼峰命名 不然会报错 -->
        <NuxtLayout name="news"/>
        <h2>新闻列表页</h2>
        <ul>
            <NuxtLink to="/news/details">
                <li v-for="item in 10" :key="item">item</li>
            </NuxtLink>
            
        </ul>
        <p style="cursor: pointer;" @click="routerPush">此条新闻使用useRouter跳转</p>
    </div>
</template>

<script setup>

    const router = useRouter()

    const routerPush = ()=>{
        router.push({
            path: "/news/details" ,
            query:{
                id:1
            }
        })
    }
   
</script>