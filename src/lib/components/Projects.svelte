<script lang="ts">
  import { projects } from '$lib/data/resume';
</script>

<section id="projects" class="relative">
  <div class="container mx-auto px-6 max-w-6xl">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">Projects</span>
      <h2 class="section-title mt-2">
        Featured <span class="gradient-text">Work</span>
      </h2>
      <p class="section-subtitle mx-auto mt-4">
        Automation systems, LLM applications, and developer tools
      </p>
    </div>
    
    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, index}
        <div 
          class="group card relative overflow-hidden {project.featured ? 'md:col-span-2 lg:col-span-1' : ''}"
          style="animation-delay: {index * 0.1}s;"
        >
          <!-- Gradient overlay on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Content -->
          <div class="relative z-10">
            <!-- Header with icon -->
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              {#if project.featured}
                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Featured
                </span>
              {/if}
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
              {project.title}
            </h3>
            
            <!-- Period & Company -->
            <div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {project.period}
              </span>
              <span class="text-gray-600">•</span>
              <span class="text-purple-400">{project.company}</span>
            </div>
            
            <!-- Description -->
            <p class="text-gray-400 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <!-- Highlights -->
            <ul class="space-y-2 mb-6">
              {#each project.highlights as highlight}
                <li class="flex items-start gap-2 text-sm text-gray-400">
                  <svg class="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <span>{highlight}</span>
                </li>
              {/each}
            </ul>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              {#each project.technologies as tech}
                <span class="tag text-xs">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
