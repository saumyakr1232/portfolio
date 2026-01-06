<script lang="ts">
  import { skills } from '$lib/data/resume';
</script>

<section id="skills" class="relative">
  <div class="container mx-auto px-6 max-w-6xl">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">Skills</span>
      <h2 class="section-title mt-2">
        My <span class="gradient-text">Tech Stack</span>
      </h2>
      <p class="section-subtitle mx-auto mt-4">
        Technologies and tools I use to bring ideas to life
      </p>
    </div>
    
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Languages with Progress Bars -->
      <div class="card">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <span class="text-2xl">💻</span>
          </div>
          <h3 class="text-xl font-bold text-white">Languages</h3>
        </div>
        
        <div class="space-y-5">
          {#each skills.languages as lang}
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-300 font-medium">{lang.name}</span>
                <span class="text-gray-500 text-sm">{lang.level}%</span>
              </div>
              <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000"
                  style="width: {lang.level}%"
                ></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Frameworks & Technologies -->
      <div class="card">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
            <span class="text-2xl">⚙️</span>
          </div>
          <h3 class="text-xl font-bold text-white">Frameworks</h3>
        </div>
        
        <div class="flex flex-wrap gap-3">
          {#each skills.frameworks as framework}
            <div class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default">
              <span class="text-lg">{framework.icon}</span>
              <span class="text-gray-300 group-hover:text-white transition-colors">{framework.name}</span>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Tools -->
      <div class="card">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <span class="text-2xl">🛠️</span>
          </div>
          <h3 class="text-xl font-bold text-white">Tools</h3>
        </div>
        
        <div class="flex flex-wrap gap-2">
          {#each skills.tools as tool}
            <span class="tag hover:scale-105 transition-transform cursor-default">{tool}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
