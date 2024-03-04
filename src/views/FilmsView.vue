<template>
  <el-scrollbar height="90vh">
    <main class="wrapper">
      <h1>Movies</h1>
      <Loader v-if="isFetching" :loading="isFetching" />
      <div class="movie-card" v-for="movie in  movies" :key="movie.id" @click="goToCrawl(movie.id)">
        <span><em>Title:</em> <h3 style="display: inline;">{{ movie.title }}</h3></span>
        <span><em>Released:</em> {{ movie.releaseDate }}</span>
        <span><em>Director:</em> {{ movie.director }}</span>
      </div>
    </main>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type IFilm, ALL_MOVIES } from '@/queries/MoviesQuery'
import Loader from '@/components/Loader.vue'
import { useRouter } from 'vue-router'
import { useQuery } from 'villus';

const router = useRouter()
const { data, isFetching, onError } = useQuery({
  query: ALL_MOVIES
})

onError(error => {
  console.log(error)
})

const movies = computed((): IFilm[] => data.value?.allFilms.films ?? [])


const goToCrawl = (id: string): void => {
  router.push({ name: 'crawl', params: { id: id }})
}
</script>

<style lang="scss" scoped>
  main {
    .movie-card {
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2) !important;
        background: $light-blue !important;
      }
    }
  }
</style>