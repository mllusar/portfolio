<script lang="ts">
    import { onMount } from 'svelte';
    import { Linkedin, Github } from 'lucide-svelte';
    
    type PersonalInfo = {
      name: string;
      title: string;
      email: string;
      phone: string;
      address: string;
      linkedin: string;
      github: string;
    };

    type Experience = {
      title: string;
      company: string;
      date_range: string;
      description: string;
    };

    type Education = {
      degree: string;
      institution: string;
      date_range: string;
    };

    class CvData {
      personalInfo: PersonalInfo;
      experience: Experience[];
      education: Education[];
      skills: string[];

      constructor(personalInfo: PersonalInfo, experience: Experience[], education: Education[], skills: string[]) {
        this.personalInfo = personalInfo;
        this.experience = experience;
        this.education = education;
        this.skills = skills;
      }
    }
    
    let cvData: CvData = new CvData({} as PersonalInfo, [], [], []);
    
    onMount(async () => {
      const response = await fetch('/cv.json');
      const data = await response.json();
      cvData = new CvData(data.personal_info, data.experience, data.education, data.skills);
    });
</script>
  
<main class="bg-black text-white">
    <div class=" max-w-4xl mx-auto p-6">
    {#if cvData.personalInfo.name}
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900">{cvData.personalInfo.name}</h1>
        <h2 class="text-xl text-gray-600 mt-2">{cvData.personalInfo.title}</h2>
        <p class="text-sm text-gray-500 mt-1">{cvData.personalInfo.email} | {cvData.personalInfo.phone}</p>
        <p class="text-sm text-gray-500">{cvData.personalInfo.address}</p>
        <div class="inline-flex mt-4 space-x-2">
          <a href={cvData.personalInfo.linkedin} target="_blank" class="text-blue-600 hover:text-blue-500"><Linkedin /></a>
          <span>|</span>
          <a href={cvData.personalInfo.github} target="_blank" class="text-blue-600 hover:underline"><Github /></a>
        </div>
      </div>
  
      <section class="mt-12">
        <h3 class="text-3xl font-semibold mb-6 border-b pb-2 border-gray-300">Expérience</h3>
        <ul class="space-y-8">
          {#each cvData.experience as experience}
            <li>
              <h4 class="font-semibold text-lg text-gray-800">{experience.title} - {experience.company}</h4>
              <p class="text-sm text-gray-500">{experience.date_range}</p>
              <p class="mt-2 text-gray-700">{experience.description}</p>
            </li>
          {/each}
        </ul>
      </section>
  
      <section class="mt-12">
        <h3 class="text-3xl font-semibold mb-6 border-b pb-2 border-gray-300">Formation</h3>
        <ul class="space-y-8">
          {#each cvData.education as education}
            <li>
              <h4 class="font-semibold text-lg text-gray-800">{education.degree} - {education.institution}</h4>
              <p class="text-sm text-gray-500">{education.date_range}</p>
            </li>
          {/each}
        </ul>
      </section>
  
      <section class="mt-12">
        <h3 class="text-3xl font-semibold mb-6 border-b pb-2 border-gray-300">Compétences</h3>
        <ul class="flex flex-wrap gap-4">
          {#each cvData.skills as skill}
            <li class="bg-gray-200 px-4 py-2 rounded-full text-gray-800">{skill}</li>
          {/each}
        </ul>
      </section>
    {:else}
      <p class="text-center text-gray-500">Chargement du CV...</p>
    {/if}
</div>
</main>




