import { defineConfig } from 'vituum'
import { resolve } from 'path'

export default defineConfig({
    server: {
        https: true
    },
    templates: {
        latte: {
            globals: {
                template: resolve(process.cwd(), 'src/templates/latte/Layout/Main.latte')
            }
        }
    }
})
