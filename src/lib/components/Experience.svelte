<script lang="ts">
  import { experience } from '$lib/data/resume';
</script>

<section id="experience" class="relative bg-dots">
  <div class="container mx-auto px-6 max-w-4xl">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">Experience</span>
      <h2 class="section-title mt-2">
        Work <span class="gradient-text">History</span>
      </h2>
      <p class="section-subtitle mx-auto mt-4">
        Building automation solutions and delivering impact
      </p>
    </div>
    
    <!-- Timeline -->
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 transform md:-translate-x-1/2"></div>
      
      {#each experience as job, index}
        <div class="relative pl-8 md:pl-0 mb-12 last:mb-0">
          <!-- Timeline Dot -->
          <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 transform md:-translate-x-1/2 -translate-y-0 border-4 border-gray-900 animate-pulse-glow"></div>
          
          <!-- Content Card -->
          <div class="md:w-[calc(50%-2rem)] {index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}">
            <div class="card group">
              <!-- Header -->
              <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {job.title}
                  </h3>
                  <div class="flex items-center gap-2 mt-1 text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span class="font-medium text-purple-400">{job.company}</span>
                  </div>
                </div>
                <div class="text-right">
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {job.period}
                  </div>
                  <div class="mt-2 text-sm text-gray-500 flex items-center gap-1 justify-end">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {job.location}
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-gray-400 mb-4">{job.description}</p>
              
              <!-- Highlights -->
              <ul class="space-y-2 mb-6">
                {#each job.highlights as highlight}
                  <li class="flex items-start gap-2 text-sm text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{highlight}</span>
                  </li>
                {/each}
              </ul>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                {#each job.technologies as tech}
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-400 transition-colors">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
