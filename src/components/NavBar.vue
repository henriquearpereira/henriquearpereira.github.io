<template>
  <header class="bg-white/80 dark:bg-zinc-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b border-gray-200 dark:border-zinc-800">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="#" class="text-gray-900 dark:text-zinc-100 font-bold text-xl tracking-tight">HPEREIRA</a>
      <div class="hidden md:flex items-center gap-6">
        <a href="#focus" class="text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium">Focus</a>
        <a href="#work" class="text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium">Work</a>
        <a href="#contact" class="text-gray-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium">Contact</a>
      </div>
      <div class="flex items-center gap-3">
        <button class="md:hidden" aria-label="Open menu">
          <Menu class="w-6 h-6 text-gray-700 dark:text-zinc-200" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Menu } from 'lucide-vue-next'
</script>

<style scoped>
</style>
