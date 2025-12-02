<template>
  <section v-reveal id="work" class="space-y-8 scroll-mt-24 md:scroll-mt-28">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">Selected Work</h2>
    <div class="space-y-6">
      <div v-reveal class="rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 ring-1 ring-black/5 dark:ring-white/5 shadow-sm">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100">Prozis AI Labs</h3>
            <p class="text-gray-500 dark:text-zinc-400">AI Engineer | 2024–Present</p>
          </div>
          <div class="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">Current</div>
        </div>
        <div class="h-px w-full bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-900 my-4 rounded-full"></div>
        <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-zinc-300">
          <li>Designed and implemented a multi-agent framework for automated business decision making</li>
          <li>Built LLM workflows with tool use, routing, and evaluation loops</li>
          <li>Shipped data-centric pipelines for classification, feedback, and continuous improvement</li>
        </ul>
      </div>

      <div v-reveal="100" class="rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 ring-1 ring-black/5 dark:ring-white/5 shadow-sm">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100">Ebcont</h3>
            <p class="text-gray-500 dark:text-zinc-400">AI Engineer | 2023–2024</p>
          </div>
        </div>
        <div class="h-px w-full bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-900 my-4 rounded-full"></div>
        <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-zinc-300">
          <li>Built semantic search systems for enterprise knowledge bases using ElasticSearch</li>
          <li>Implemented graph neural networks for fraud detection in financial transactions</li>
          <li>Optimized real-time data pipelines handling 50K+ events/second</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
