<template>
  <div>
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(24,24,27,0.08),rgba(24,24,27,0)_60%)] dark:bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(255,255,255,0.06),rgba(255,255,255,0)_60%)]"></div>
    <NavBar />
    <main class="container mx-auto px-4 py-16 md:py-20 max-w-6xl space-y-24 md:space-y-32">
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
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import FocusSection from './components/FocusSection.vue'
import SystemsSection from './components/SystemsSection.vue'
import WorkSection from './components/WorkSection.vue'
import TechnicalApproach from './components/TechnicalApproach.vue'
import NextSection from './components/NextSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
/* App-level styles (kept minimal; Tailwind via CDN) */
</style>
