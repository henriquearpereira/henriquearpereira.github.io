<template>
  <section v-reveal class="rounded-2xl p-8 space-y-8 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 ring-1 ring-black/5 dark:ring-white/5 shadow-sm">
    <div class="h-px w-full bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-900 -mt-2 rounded-full"></div>
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">Technical Approach</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-zinc-100">Architecture First</h3>
        <p class="text-gray-700 dark:text-zinc-300">
          I start from interfaces, contracts, and failure modes:
          clear boundaries between components, composable agents, and observability baked in.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-zinc-100">Reasoning Over Data</h3>
        <p class="text-gray-700 dark:text-zinc-300">
          The goal is to build systems that understand context and act:
          not just returning answers, but taking actions and closing loops.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-zinc-100">Data-Centric Mindset</h3>
        <p class="text-gray-700 dark:text-zinc-300">
          I treat datasets, feedback, and eval harnesses as first-class citizens.
          Models change. Good data and measurement let you change them safely.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-zinc-100">Production Reality</h3>
        <p class="text-gray-700 dark:text-zinc-300">
          Latency, cost, and edge cases matter.
          I care about the boring details: logging, retries, fallbacks, and the "what if it fails at 3am" questions.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
