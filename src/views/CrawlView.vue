<template>
  <el-scrollbar height="90vh">
    <main class="wrapper">
      <h1>Intro
        <Button @action="back" label="Back"/>
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
import Button from '@/components/Button/Button.vue'

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
}
</style>