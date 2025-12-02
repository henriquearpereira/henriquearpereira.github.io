<template>
  <section v-reveal id="focus" class="bg-white rounded-xl shadow-sm p-8 scroll-mt-24 md:scroll-mt-28">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-zinc-100 tracking-tight">Current Focus</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="(i, idx) in items" :key="idx" v-reveal="idx * 80" class="rounded-2xl p-6 space-y-4 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 ring-1 ring-black/5 dark:ring-white/5 shadow-sm">
        <div class="h-px w-full bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-900 -mt-2 mb-3 rounded-full"></div>
        <div class="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-700 dark:text-zinc-200">
          <component :is="i.icon" class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-zinc-100">{{ i.title }}</h3>
        <p class="text-gray-600 dark:text-zinc-300">{{ i.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Cpu, Database, GitMerge } from 'lucide-vue-next'

const items = ref([
  {
    icon: Cpu,
    title: 'Autonomous LLM Agents',
    text:
      'Architecting multi-agent systems for support, internal tools, and decision flows: retrieval, tool use, and self-correction loops wired into real business processes.',
  },
  {
    icon: Database,
    title: 'Data-Centric Infra',
    text:
      'Building Qdrant- and PostgreSQL-backed pipelines for subject classification, evaluation, and feedback loops across multilingual support logs.',
  },
  {
    icon: GitMerge,
    title: 'Hybrid Architectures',
    text:
      'Combining neural models with rule-based and probabilistic components to get predictable behavior, not just "vibes that mostly work".',
  },
])
</script>

<style scoped>
</style>
