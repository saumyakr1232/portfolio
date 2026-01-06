<script lang="ts">
  import { education, certifications, coursework } from '$lib/data/resume';
</script>

<section id="education" class="relative bg-dots">
  <div class="container mx-auto px-6 max-w-6xl">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">Education</span>
      <h2 class="section-title mt-2">
        Academic <span class="gradient-text">Background</span>
      </h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Education -->
      <div>
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            🎓
          </span>
          Degree
        </h3>
        
        {#each education as edu}
          <div class="card">
            <div class="flex items-start gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-3xl">🏛️</span>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-white">{edu.degree}</h4>
                <p class="text-purple-400 font-medium">{edu.institution}</p>
                <div class="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {edu.period}
                  </span>
                  <span class="text-gray-600">•</span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {edu.location}
                  </span>
                </div>
                <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <span class="text-xl">⭐</span>
                  <span class="font-bold text-white">{edu.grade}</span>
                </div>
              </div>
            </div>
          </div>
        {/each}
        
        <!-- Coursework -->
        <div class="mt-8">
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-lg">
              📚
            </span>
            Relevant Coursework
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each coursework as course}
              <span class="px-3 py-1.5 text-sm rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                {course}
              </span>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Certifications -->
      <div>
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
            📜
          </span>
          Certifications
        </h3>
        
        <div class="space-y-4">
          {#each certifications as cert}
            <div class="card group">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p class="text-blue-400 text-sm font-medium">{cert.issuer}</p>
                  <p class="text-gray-500 text-sm mt-1">{cert.period}</p>
                  <p class="text-gray-400 text-sm mt-2">{cert.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
