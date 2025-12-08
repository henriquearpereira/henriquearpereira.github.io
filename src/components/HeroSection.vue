<template>
  <section v-reveal class="flex flex-col md:flex-row items-center gap-12">
    <div class="md:w-2/3 space-y-6">
      <p v-reveal class="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
        AI Systems Architect · LLM-native workflows · Multi-agent reasoning
      </p>
      <h1 v-reveal="80" class="text-6xl md:text-7xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">
        Designing <span class="text-emerald-600">autonomous</span> systems that survive production
      </h1>
      <p v-reveal="140" class="text-xl text-gray-600 dark:text-zinc-300">
        Architecting AI systems end-to-end: agents, data, and production reality.
      </p>
      <div v-reveal="200" class="flex flex-wrap gap-2 text-sm text-gray-500">
        <span class="px-3 py-1 bg-gray-100 dark:bg-zinc-800 dark:text-zinc-300 rounded-full">Lead / Staff AI roles</span>
        <span class="px-3 py-1 bg-gray-100 dark:bg-zinc-800 dark:text-zinc-300 rounded-full">AI infra & agents</span>
        <span class="px-3 py-1 bg-gray-100 dark:bg-zinc-800 dark:text-zinc-300 rounded-full">Deep-tech collaboration</span>
      </div>
      <div class="flex gap-4 pt-2">
        <a v-reveal="260" href="#contact" class="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 hover:ring-1 hover:ring-emerald-600/20 transition-colors transition-transform duration-200 will-change-transform hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">Contact</a>
        <a v-reveal="320" href="#systems" class="px-6 py-3 border border-gray-300 dark:border-zinc-700 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors transition-transform duration-200 will-change-transform hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">View Systems</a>
      </div>
    </div>
    <div class="md:w-1/3">
      <div class="relative w-32 h-40 md:w-40 md:h-52 mx-auto">
        <div class="absolute -inset-6 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(24,24,27,0.15),rgba(24,24,27,0)_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.08),rgba(255,255,255,0)_70%)] rounded-full"></div>
        <img src="/your-photo.png" alt="Henrique Pereira" class="relative rounded-xl w-full h-full object-cover ring-1 ring-black/10 dark:ring-white/10 shadow-xl transition" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
