<template>
  <el-scrollbar height="90vh">
    <div class="flex-container">
      <div class="card" v-for="i in 10" :key="i">Card {{ i }}</div>
    </div>
  </el-scrollbar>
</template>

<style lang="scss">
.flex-container {
  margin-top: 60px;
  margin-bottom: 50px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    justify-content: flex-start;
  }

  .card {
    width: calc((100% / 3) - 20px);
    min-width: 320px;
    background: lightpink;
    padding: 10px;
    border-radius: 4px;
    height: 300px;
    justify-self: left;
  }
}
</style>