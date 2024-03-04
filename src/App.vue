<template>
  <nav>
    <div class="inner">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/movies">Movies</RouterLink>
    </div>
    <el-icon :size="20" @click="toggleMobile">
      <expand />
    </el-icon>
    <div class="mobile" :class="{ 'opened': mobileOpened }">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/movies">Movies</RouterLink>
    </div>
  </nav>
  <el-config-provider :size="size">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const size = ref<any>('large')
const mobileOpened = ref(false)

const toggleMobile = () => {
  mobileOpened.value = !mobileOpened.value
}


watch(route, () => {
  mobileOpened.value = false
})
</script>

<style lang="scss" scoped>
nav {
  background: #c6e2ff;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 44px;
  overflow: visible;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .inner {
    max-width: 1024px;
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    display: none;
    justify-content: flex-end;
    @media screen and (min-width: 1024px) {
      display: flex;
      gap: 10px;
    }
  }

  .el-icon {
    margin-left: auto;
    margin-right: 10px;
    z-index: 200;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  .mobile {
    position: absolute;
    top: 44px;
    left: 0;
    background: darken(#c6e2ff, 5%);
    width: 0;
    height: 100vh;
    transition: all 0.3s linear;
    overflow: hidden;
    z-index: 100;
    padding: 50px 0;
    display: flex;
    flex-flow: column;
    a {
      margin-bottom: 20px;
    }
    &.opened {
      width: 100%;
      padding: 50px 20px;
    }
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  a {
    color: #337ecc;
    cursor: pointer;
    &:hover {
      color: darken(#337ecc, 20%);
    }
  }
  .router-link-exact-active {
    color: darken(#337ecc, 20%);
  }
}
</style>
