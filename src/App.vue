<template>
  <div>
    <NavBar />
    <main class="container mx-auto px-4 py-12 max-w-6xl space-y-20">
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <SystemsSection />
      <WorkSection />
      <TechnicalApproach />
      <NextSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import FocusSection from './components/FocusSection.vue'
import SystemsSection from './components/SystemsSection.vue'
import WorkSection from './components/WorkSection.vue'
import TechnicalApproach from './components/TechnicalApproach.vue'
import NextSection from './components/NextSection.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(async () => {
  await nextTick()
  if (window.feather?.replace) {
    window.feather.replace()
  }
})
</script>

<style>
/* App-level styles (kept minimal; Tailwind via CDN) */
</style>

