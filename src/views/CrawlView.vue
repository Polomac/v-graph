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
      <Loader v-if="isFetching" :loading="isFetching" />
      <div class="movie-card">
        {{ crawl }}
      </div>
    </main>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { CRAWL } from '@/queries/CrawlQuery'
import Loader from '@/components/Loader.vue'
import { useQuery } from 'villus'

const router = useRouter()
const route = useRoute()

const error = ref<any>(null)

const { data, isFetching, onError } = useQuery({
  query: CRAWL,
  variables: { filmId: route.params.id }
})
const crawl  = computed((): string => data.value?.film.openingCrawl ?? '')

onError(err => {
  error.value = err
})

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