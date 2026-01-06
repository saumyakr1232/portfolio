<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Education from '$lib/components/Education.svelte';
  import Achievements from '$lib/components/Achievements.svelte';
  import Contact from '$lib/components/Contact.svelte';
  
  import { personalInfo } from '$lib/data/resume';
</script>

<svelte:head>
  <title>{personalInfo.name} | Software Engineer Portfolio</title>
  <meta name="description" content="{personalInfo.name} - Software Engineer specializing in Python automation, LLM systems, and full-stack development. Building automation tools at Cognizant." />
  <meta name="keywords" content="Software Engineer, Python Developer, FastAPI, React, LLM, LangChain, Full Stack Developer" />
  <meta name="author" content="{personalInfo.name}" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="{personalInfo.name} | Software Engineer Portfolio" />
  <meta property="og:description" content="Software Engineer specializing in Python automation and LLM systems" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{personalInfo.name} | Software Engineer" />
  <meta name="twitter:description" content="Building automation systems and LLM-powered tools" />
</svelte:head>

<Navigation />

<main>
  <Hero />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Education />
  <Achievements />
  <Contact />
</main>
