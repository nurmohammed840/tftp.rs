import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { remarkCodeHike } from '@code-hike/mdx'
import theme from 'shiki/themes/github-dark.json'

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');
  return {
    esbuild: {
      minify: true
    },
    build: {
      lib: {
        entry: 'src/code/main.js',
        fileName: _ => 'code.js',
        formats: ['es']
      },
      outDir: './src/assets',
      emptyOutDir: false,
    },
    plugins: [
      react(),
      mdx.default({ remarkPlugins: [[remarkCodeHike, { theme }]] }),
    ],
    resolve: {
      alias: {
        'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
  }
})
