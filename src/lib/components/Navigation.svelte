<script lang="ts">
  import { personalInfo } from '$lib/data/resume';
  
  let scrolled = $state(false);
  let mobileMenuOpen = $state(false);
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];
  
  function scrollToSection(id: string) {
    mobileMenuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  
  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'glass py-3' : 'py-6'}">
  <div class="container mx-auto px-6">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <button onclick={() => scrollToSection('home')} class="text-xl font-bold gradient-text">
        {personalInfo.name.split(' ')[0]}<span class="text-white">.</span>
      </button>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <button 
            onclick={() => scrollToSection(link.id)}
            class="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
          >
            {link.label}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
        {/each}
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        class="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden mt-4 py-4 border-t border-gray-700/50">
        <div class="flex flex-col gap-4">
          {#each navLinks as link}
            <button 
              onclick={() => scrollToSection(link.id)}
              class="text-left text-gray-400 hover:text-white transition-colors py-2"
            >
              {link.label}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>
