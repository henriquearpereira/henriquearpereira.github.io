<template>
  <section id="systems" class="space-y-8">
    <h2 class="text-3xl font-bold text-gray-800">Systems I Build</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="(p, idx) in projects" :key="idx" class="bg-white rounded-xl shadow-sm p-6 space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold">{{ p.title }}</h3>
          <span class="text-xs px-2 py-1 rounded-full" :class="p.badge.color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'">{{ p.badge.text }}</span>
        </div>
        <p class="text-gray-700">{{ p.desc }}</p>
        <ul class="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li v-for="(b, i2) in p.bullets" :key="i2">{{ b }}</li>
        </ul>
        <div class="flex flex-wrap gap-2 pt-2 text-xs text-gray-500">
          <span v-for="(c, i3) in p.chips" :key="i3" class="px-2 py-1 bg-gray-100 rounded-full">{{ c }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'CS-LLM · Support Automation',
    badge: { text: 'Prozis', color: 'blue' },
    desc:
      'Multi-language LLM stack for customer support: subject classification, action JSON generation, and human-quality replies for complex tickets.',
    bullets: [
      'Fine-tuned Mistral-7B with QLoRA + preference optimization.',
      'Vector search + metadata routing for multi-lingual tickets.',
      'Action schemas that plug directly into internal tools.',
    ],
    chips: ['Mistral-7B', 'Unsloth', 'Qdrant', 'PostgreSQL'],
  },
  {
    title: 'Evaluation & Feedback Loop',
    badge: { text: 'Infra', color: 'gray' },
    desc:
      'Data-centric loop for support conversations: embeddings, labeling heuristics, and dashboards to track drift, failure modes, and model upgrades.',
    bullets: [
      'Dual-embedding setup for subject routing and semantic similarity.',
      'Automatic sampling of "weird" tickets for review.',
      'Versioned experiments and A/B comparison across models.',
    ],
    chips: ['LLM eval', 'Data ops', 'Monitoring'],
  },
  {
    title: 'Tooling · Tokenizers & DSLs',
    badge: { text: 'Side', color: 'gray' },
    desc:
      'Experiments with custom C++ tokenizers, compact JSON representations, and machine-friendly formats to squeeze more out of small models.',
    bullets: [
      'BPE/SentencePiece-style tokenization tuned for LLM behavior.',
      'Data layouts optimized for deterministic parsing and eval.',
      'Focus on speed, memory layout, and sequence length reduction.',
    ],
    chips: ['C++', 'Tokenization', 'Compression'],
  },
])
</script>

<style scoped>
</style>

