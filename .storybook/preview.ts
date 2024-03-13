import { setup, type Preview } from "@storybook/vue3";
import '../src/assets/main.scss'
import { ArrowLeftBold } from '@element-plus/icons-vue'

setup((app) => {
  app.component('arrowLeftBold', ArrowLeftBold)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
