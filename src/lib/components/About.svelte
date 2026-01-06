<script lang="ts">
  import { personalInfo, pythonHighlights } from '$lib/data/resume';
</script>

<section id="about" class="relative bg-dots">
  <div class="container mx-auto px-6 max-w-6xl">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left: Content -->
      <div class="order-2 lg:order-1">
        <div class="mb-6">
          <span class="text-purple-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 class="section-title mt-2">
            Passionate <span class="gradient-text">Developer</span>
          </h2>
        </div>
        
        <p class="text-lg text-gray-300 mb-6 leading-relaxed">
          {personalInfo.bio}
        </p>
        
        <!-- Python Highlights -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span class="text-2xl">🐍</span> Python Expertise
          </h3>
          <ul class="space-y-3">
            {#each pythonHighlights as highlight}
              <li class="flex items-start gap-3 text-gray-400">
                <svg class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{highlight}</span>
              </li>
            {/each}
          </ul>
        </div>
        
        <!-- Quick Stats -->
        <div class="grid grid-cols-3 gap-6">
          <div class="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div class="text-3xl font-bold gradient-text">2.5+</div>
            <div class="text-sm text-gray-400 mt-1">Years Exp.</div>
          </div>
          <div class="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div class="text-3xl font-bold gradient-text">10+</div>
            <div class="text-sm text-gray-400 mt-1">Python Tools</div>
          </div>
          <div class="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div class="text-3xl font-bold gradient-text">60%</div>
            <div class="text-sm text-gray-400 mt-1">Time Saved</div>
          </div>
        </div>
      </div>
      
      <!-- Right: Image/Visual -->
      <div class="order-1 lg:order-2 flex justify-center">
        <div class="relative">
          <!-- Decorative rings -->
          <div class="absolute inset-0 -m-8">
            <div class="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-pulse"></div>
            <div class="absolute inset-4 border-2 border-blue-500/20 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
            <div class="absolute inset-8 border-2 border-cyan-500/20 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
          </div>
          
          <!-- Profile placeholder with gradient border -->
          <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-500">
            <div class="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <div class="text-center">
                <div class="text-6xl md:text-8xl mb-2">👨‍💻</div>
                <div class="text-lg font-semibold gradient-text">{personalInfo.name.split(' ')[0]}</div>
              </div>
            </div>
          </div>
          
          <!-- Floating badges -->
          <div class="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm animate-float">
            <span class="text-sm font-medium text-purple-300">FastAPI Expert</span>
          </div>
          <div class="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm animate-float" style="animation-delay: -2s;">
            <span class="text-sm font-medium text-blue-300">LLM Developer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
