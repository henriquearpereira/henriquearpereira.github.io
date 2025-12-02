const { createApp, onMounted, nextTick } = Vue;

const NavBar = {
  name: 'NavBar',
  template: `
    <header class="bg-white shadow sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" class="text-blue-700 font-bold text-xl tracking-tight">HPEREIRA</a>
        <div class="hidden md:flex items-center gap-6">
          <a href="#focus" class="text-gray-600 hover:text-blue-700 font-medium">Focus</a>
          <a href="#work" class="text-gray-600 hover:text-blue-700 font-medium">Work</a>
          <a href="#contact" class="text-gray-600 hover:text-blue-700 font-medium">Contact</a>
        </div>
        <button class="md:hidden" aria-label="Open menu"><i data-feather="menu"></i></button>
      </nav>
    </header>
  `,
};

const HeroSection = {
  name: 'HeroSection',
  template: `
    <section class="flex flex-col md:flex-row items-center gap-12">
      <div class="md:w-2/3 space-y-6">
        <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          AI Systems Architect · LLM-native workflows · Multi-agent reasoning
        </p>
        <h1 class="text-5xl font-bold text-gray-900">
          Designing <span class="text-blue-600">autonomous</span> systems that survive production
        </h1>
        <p class="text-xl text-gray-600">
          AI engineer specializing in architectural patterns for machine reasoning.
          Currently building cognitive systems and data-centric pipelines at Prozis AI Labs.
        </p>
        <div class="flex flex-wrap gap-2 text-sm text-gray-500">
          <span class="px-3 py-1 bg-gray-100 rounded-full">Lead / Staff AI roles</span>
          <span class="px-3 py-1 bg-gray-100 rounded-full">AI infra & agents</span>
          <span class="px-3 py-1 bg-gray-100 rounded-full">Deep-tech collaboration</span>
        </div>
        <div class="flex gap-4 pt-2">
          <a href="#systems" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View Systems</a>
          <a href="#contact" class="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">Contact</a>
        </div>
      </div>
      <div class="md:w-1/3">
        <div class="bg-gradient-to-br from-blue-500 to-blue-700 p-1 rounded-lg w-32 h-40 md:w-40 md:h-52 mx-auto">
          <img src="your-photo.png" alt="Henrique Pereira" class="rounded-lg w-full h-full object-cover" />
        </div>
      </div>
    </section>
  `,
};

const AboutSection = {
  name: 'AboutSection',
  template: `
    <section id="about" class="bg-white rounded-xl shadow-sm p-8 space-y-4">
      <h2 class="text-3xl font-bold text-gray-800">Who I Am</h2>
      <p class="text-gray-700 leading-relaxed">
        I design and ship AI systems end-to-end: from data and infra to agents in production.
        My background spans biomedical engineering, classical ML, and modern LLM stacks.
        I care about failure modes, observability, and whether the thing still works
        three months after the launch hype is gone.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Medium-term, I'm aiming at <span class="font-semibold">Head / Principal AI</span> responsibilities:
        owning architectures, mentoring engineers, and eventually spinning up deep-tech products
        around energy-efficient inference and autonomous tooling.
      </p>
    </section>
  `,
};

const FocusSection = {
  name: 'FocusSection',
  data() {
    return {
      items: [
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
      ],
    };
  },
  template: `
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
  `,
};

const SystemsSection = {
  name: 'SystemsSection',
  data() {
    return {
      projects: [
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
      ],
    };
  },
  template: `
    <section id="systems" class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-800">Systems I Build</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(p, idx) in projects"
          :key="idx"
          class="bg-white rounded-xl shadow-sm p-6 space-y-3"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold">{{ p.title }}</h3>
            <span
              class="text-xs px-2 py-1 rounded-full"
              :class="p.badge.color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'"
            >{{ p.badge.text }}</span>
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
  `,
};

const WorkSection = {
  name: 'WorkSection',
  template: `
    <section id="work" class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-800">Selected Work</h2>
      <div class="space-y-6">
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-6 border-b border-gray-100">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold">Prozis AI Labs</h3>
                <p class="text-gray-500">AI Engineer | 2023–Present</p>
              </div>
              <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Current</div>
            </div>
          </div>
          <div class="p-6">
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Designed and implemented a multi-agent framework for automated business decision making</li>
              <li>Developed a knowledge graph-based recommendation system processing 2M+ products</li>
              <li>Led migration of ML pipelines to Kubernetes, reducing inference latency by 40%</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-6 border-b border-gray-100">
            <h3 class="text-xl font-semibold">Ebcont</h3>
            <p class="text-gray-500">AI Engineer | 2021–2023</p>
          </div>
          <div class="p-6">
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Built semantic search systems for enterprise knowledge bases using ElasticSearch</li>
              <li>Implemented graph neural networks for fraud detection in financial transactions</li>
              <li>Optimized real-time data pipelines handling 50K+ events/second</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
};

const TechnicalApproach = {
  name: 'TechnicalApproach',
  template: `
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
  `,
};

const NextSection = {
  name: 'NextSection',
  template: `
    <section id="next" class="bg-white rounded-xl shadow-sm p-8 space-y-6">
      <h2 class="text-3xl font-bold text-gray-800">Now & Next</h2>
      <div class="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900">Now</h3>
          <p>Scaling support-focused LLM systems and data infra at Prozis AI Labs.</p>
        </div>
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900">Next 3–5 years</h3>
          <p>Take on lead / principal responsibilities, own AI architectures end-to-end, and shape small teams around them.</p>
        </div>
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900">Longer-term</h3>
          <p>Launch deep-tech products around autonomous tools and energy-efficient inference.</p>
        </div>
      </div>
    </section>
  `,
};

const SiteFooter = {
  name: 'SiteFooter',
  props: {
    email: { type: String, default: 'henriquealvesrpereira@gmail.com' },
    github: { type: String, default: '#' },
    linkedin: { type: String, default: '#' },
  },
  template: `
    <footer id="contact" class="bg-gray-900 text-gray-400 py-12">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <h3 class="text-white text-xl font-semibold mb-2">Henrique Pereira</h3>
            <p>AI Systems Architect</p>
          </div>
          <div class="flex space-x-6">
            <a :href="'mailto:' + email" class="hover:text-white transition"><i data-feather="mail"></i></a>
            <a :href="github" class="hover:text-white transition"><i data-feather="github"></i></a>
            <a :href="linkedin" class="hover:text-white transition"><i data-feather="linkedin"></i></a>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2024 Henrique Pereira. All work and thought experiments.</p>
        </div>
      </div>
    </footer>
  `,
};

const App = {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    FocusSection,
    SystemsSection,
    WorkSection,
    TechnicalApproach,
    NextSection,
    SiteFooter,
  },
  setup() {
    onMounted(async () => {
      await nextTick();
      if (window.feather?.replace) {
        window.feather.replace();
      }
    });
    return {};
  },
  template: `
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
  `,
};

createApp(App).mount('#app');
