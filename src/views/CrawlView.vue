<template>
  <el-scrollbar height="90vh">
    <main class="wrapper">
      <h1>Intro
        <span @click="back">
          <el-icon :size="12">
            <arrowLeftBold />
          </el-icon>
          Back
        </span>
      </h1>
      <div v-if="error">{{ error }} </div>
      <Loader v-if="loading" :loading="loading" />
      <div class="movie-card">
        {{ crawl }}
      </div>
    </main>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import { CRAWL } from '@/queries/CrawlQuery'
import Loader from '@/components/Loader.vue'

const route = useRoute()
const router = useRouter()

const { result, loading, error } = useQuery(CRAWL(route.params.id))
const crawl  = computed((): string => result.value?.film.openingCrawl ?? '')

const back = () => {
  router.push({ name: 'movies' })
}
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    color: $base-black;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
}
</style>