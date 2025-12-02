<template>
  <section id="focus" class="bg-white rounded-xl shadow-sm p-8">
    <h2 class="text-3xl font-bold mb-8 text-gray-800">Current Focus</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(i, idx) in items" :key="idx" class="space-y-4">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <i :data-feather="i.icon" class="text-blue-600"></i>
        </div>
        <h3 class="text-xl font-semibold">{{ i.title }}</h3>
        <p class="text-gray-600">{{ i.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    icon: 'cpu',
    title: 'Autonomous LLM Agents',
    text:
      'Architecting multi-agent systems for support, internal tools, and decision flows: retrieval, tool use, and self-correction loops wired into real business processes.',
  },
  {
    icon: 'database',
    title: 'Data-Centric Infra',
    text:
      'Building Qdrant- and PostgreSQL-backed pipelines for subject classification, evaluation, and feedback loops across multilingual support logs.',
  },
  {
    icon: 'git-merge',
    title: 'Hybrid Architectures',
    text:
      'Combining neural models with rule-based and probabilistic components to get predictable behavior, not just "vibes that mostly work".',
  },
])
</script>

<style scoped>
</style>

