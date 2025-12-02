<template>
  <footer id="contact" class="bg-gray-900 text-gray-400 py-12">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h3 class="text-white text-xl font-semibold mb-2">Henrique Pereira</h3>
          <p>AI Systems Architect</p>
        </div>
        <div class="flex space-x-6">
          <a :href="'mailto:' + email" class="hover:text-white transition"><i data-feather="mail"></i></a>
          <a :href="github" class="hover:text-white transition"><i data-feather="github"></i></a>
          <a :href="linkedin" class="hover:text-white transition"><i data-feather="linkedin"></i></a>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p>© 2024 Henrique Pereira. All work and thought experiments.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  email: { type: String, default: 'henriquealvesrpereira@gmail.com' },
  github: { type: String, default: '#' },
  linkedin: { type: String, default: '#' },
})
</script>

<style scoped>
</style>

