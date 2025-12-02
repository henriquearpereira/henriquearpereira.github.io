<template>
  <section v-reveal id="systems" class="space-y-8 scroll-mt-24 md:scroll-mt-28">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">Systems</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="(p, idx) in projects" :key="idx" v-reveal="idx * 80" class="rounded-2xl p-6 space-y-3 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 ring-1 ring-black/5 dark:ring-white/5 shadow-sm">
        <div class="h-px w-full bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-900 -mt-2 mb-4 rounded-full"></div>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100">{{ p.title }}</h3>
          <span class="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">{{ p.badge.text }}</span>
        </div>
        <p class="text-gray-700 dark:text-zinc-300">{{ p.desc }}</p>
        <ul class="text-sm text-gray-600 dark:text-zinc-400 space-y-1 list-disc pl-5">
          <li v-for="(b, i2) in p.bullets" :key="i2">{{ b }}</li>
        </ul>
        <div class="flex flex-wrap gap-2 pt-2 text-xs text-gray-600 dark:text-zinc-400">
          <span v-for="(c, i3) in p.chips" :key="i3" class="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">{{ c }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'LLM Automation · Multi‑Department Operations',
    badge: { text: 'Production' },
    desc:
      'Agentic workflows for operations at scale: retrieval, tools, and structured actions wired into existing systems — designed to generalize across domains.',
    bullets: [
      'Multi-agent orchestration with tool use and routing.',
      'Retrieval-augmented execution with typed action schemas.',
      'Evaluation harnesses and safe rollout patterns.',
    ],
    chips: ['Agents', 'Tool use', 'RAG', 'Observability'],
  },
  {
    title: 'Tooling · Tokenizers & DSLs',
    badge: { text: 'Side' },
    desc:
      'Experiments with custom tokenizers, compact JSON/DSLs, and machine-friendly formats to squeeze more out of small models.',
    bullets: [
      'Tokenization tuned for LLM behavior and latency.',
      'Deterministic parsing and evaluation-friendly data layouts.',
      'Focus on speed, memory layout, and sequence length reduction.',
    ],
    chips: ['C++', 'Tokenization', 'Compression'],
  },
])
</script>

<style scoped>
</style>
