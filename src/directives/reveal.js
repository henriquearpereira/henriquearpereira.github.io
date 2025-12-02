export default {
  mounted(el, binding) {
    const delay = typeof binding.value === 'number' ? binding.value : 0

    const init = () => {
      el.classList.add('reveal-init')
      if (delay) el.style.transitionDelay = `${delay}ms`
    }

    const reveal = () => {
      el.classList.add('reveal-in')
      el.classList.remove('reveal-init')
    }

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    init()

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal()
          io.unobserve(el)
        }
      }
    }, { threshold: 0.12 })

    io.observe(el)
  },
}

