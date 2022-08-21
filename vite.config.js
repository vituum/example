import { defineConfig } from 'vituum'
import { resolve } from 'path'
import latte from '@vituum/latte'
import juice from '@vituum/juice'
import posthtml from '@vituum/posthtml'
import tailwind from '@vituum/tailwind'

export default defineConfig({
    integrations: [juice(), posthtml(), tailwind(), latte({
        globals: {
            template: resolve(process.cwd(), 'src/templates/latte/Layout/Main.latte')
        }
    })],
    templates: {
      format: `latte`
    },
    server: {
        https: true
    }
})
