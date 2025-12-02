<template>
  <section class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white space-y-8">
    <h2 class="text-3xl font-bold">Technical Approach</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Architecture First</h3>
        <p>
          I start from interfaces, contracts, and failure modes:
          clear boundaries between components, composable agents, and observability baked in.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Reasoning Over Data</h3>
        <p>
          The goal is to build systems that understand context and act:
          not just returning answers, but taking actions and closing loops.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Data-Centric Mindset</h3>
        <p>
          I treat datasets, feedback, and eval harnesses as first-class citizens.
          Models change. Good data and measurement let you change them safely.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Production Reality</h3>
        <p>
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

