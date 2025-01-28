<script lang="ts">
  import { onMount } from "svelte";

  interface Project {
    title: string;
    description: string;
    skills: string[];
    images: string[];
  }

  let projects: Project[] = [];

  // Charger les données du fichier JSON
  onMount(async () => {
    const response = await fetch("/projects.json");
    projects = await response.json();
  });
</script>

<main class="">
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-center mb-8">Mes Projets</h1>

    {#if projects.length === 0}
      <p class="text-center">Chargement des projets...</p>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each projects as project}
          <div class="shadow-lg rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                class="w-full h-48 object-cover"
              />
            </div>
            <div class="p-4">
              <h2 class="text-xl font-semibold">{project.title}</h2>
              <p class="mt-2">{project.description}</p>
              <div class="mt-4">
                <h3 class="text-sm font-semibold">Compétences utilisées :</h3>
                <ul class="flex flex-wrap gap-2 mt-2">
                  {#each project.skills as skill}
                    <li class="px-3 py-1 text-sm rounded-full bg-white text-black">{skill}</li>
                  {/each}
                </ul>
              </div>
              <div class="mt-4 flex justify-center">
                {#each project.images as image, index}
                  {#if index !== 0}
                    <!-- Affiche les images supplémentaires -->
                    <img
                      src={image}
                      alt="{project.title} image {index}"
                      class="w-16 h-16 object-cover rounded-md mx-1"
                    />
                  {/if}
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</main>

