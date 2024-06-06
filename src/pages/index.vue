<template>
    <div>
      <h1>首页</h1>
      <div class="a">
        <p class="b">scss</p>
      </div>
      <el-button type="primary">Primary</el-button>
      <NuxtLink to="/news">进入列表页</NuxtLink>
     
    </div>
</template>

<style lang="scss" scoped>

  h1{
    color: $theme;
  }
  .a{
    .b{
      color: saddlebrown;
    }
  }
</style>