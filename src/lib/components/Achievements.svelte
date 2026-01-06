<script lang="ts">
  import { achievements } from '$lib/data/resume';
</script>

<section id="achievements" class="relative">
  <div class="container mx-auto px-6 max-w-4xl">
    <div class="text-center mb-16">
      <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">Achievements</span>
      <h2 class="section-title mt-2">
        <span class="gradient-text">Recognition</span> & Awards
      </h2>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each achievements as achievement, index}
        <div class="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="relative mb-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span class="text-4xl">{achievement.icon}</span>
            </div>
          </div>
          
          <div class="relative">
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{achievement.title}</h3>
            <p class="text-gray-400 text-sm">{achievement.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
