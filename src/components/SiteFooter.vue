<template>
  <footer id="contact" class="bg-gray-900 dark:bg-zinc-950 text-gray-400 py-12 scroll-mt-24 md:scroll-mt-28 border-t border-transparent dark:border-zinc-800/60">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h3 class="text-white text-xl font-semibold mb-2">Henrique Pereira</h3>
          <p>AI Systems Architect</p>
        </div>
        <div class="flex space-x-6">
          <a :href="'mailto:' + email" class="hover:text-white transition"><Mail class="w-5 h-5" /></a>
          <a :href="github" class="hover:text-white transition"><Github class="w-5 h-5" /></a>
          <a :href="linkedin" class="hover:text-white transition"><Linkedin class="w-5 h-5" /></a>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p class="text-gray-500">© {{ year }} Henrique Pereira. All work and thought experiments.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Github, Linkedin } from 'lucide-vue-next'
const year = new Date().getFullYear()

defineProps({
  email: { type: String, default: 'henriquealvesrpereira@gmail.com' },
  github: { type: String, default: 'https://github.com/henriquearpereira' },
  linkedin: { type: String, default: 'https://www.linkedin.com/in/henriquearpereira/' },
})
</script>

<style scoped>
</style>
