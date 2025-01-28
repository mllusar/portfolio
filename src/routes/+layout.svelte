<script lang="ts">
    import '../app.css';
    import { Home, FileText, Briefcase, Mail, Heart } from 'lucide-svelte';
  
    const menuItems = [
        { name: "Home", icon: Home, href: "/" },
        { name: "CV", icon: FileText, href: "/cv" },
        { name: "Projets", icon: Briefcase, href: "/projects" },
        { name: "Contact", icon: Mail, href: "/contact" },
        { name: "Hobbies", icon: Heart, href: "/hobbies" }
    ];
    let { children } = $props();
</script>
  
  <nav class="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-6 z-50">
    {#each menuItems as item}
      <a href={item.href} class="flex flex-col items-center text-gray-700 hover:text-blue-600 transition group">
        <svelte:component this={item.icon} class="w-8 h-8" />
        <span class="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{item.name}</span>
      </a>
    {/each}
  </nav>
  
  <style>
    nav {
      backdrop-filter: none; /* Enlever le flou */
    }
  </style>
  
  
{@render children()} 