<template>
  <div class="default-button"
    @click="buttonClick"
    :class="{ 'primary': props.primary, 'rounded': props.rounded }">
    <el-icon :size="12" v-if="withIcon">
      <arrowLeftBold />
    </el-icon>
      {{ label }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  primary?: boolean
  rounded?: boolean
  withIcon?: boolean
  label: string,
}
const props = withDefaults(defineProps<Props>(), {
  primary: false,
  rounded: false,
  withIcon: false,
})

const emit = defineEmits<{
  (e: 'action'): void
}>()

const buttonClick = ():void => {
  emit('action')
}
</script>

<style lang="scss">
.default-button {
    font-size: 14px;
    color: $base-black;
    cursor: pointer;
    background: $dark-blue;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    gap: 4px;
    width: fit-content;
    &:hover {
      background: lighten($dark-blue, 10%);
    }
    &.rounded {
      border-radius: 18px;
    }
    &.primary {
      background: crimson;
      &:hover {
        background: lighten(crimson, 10%);
      }
    }
  }
</style>