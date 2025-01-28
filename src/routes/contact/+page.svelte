
<script>
    
    let name = '';
    let email = '';
    let message = '';
    let isSubmitted = false;
  
    function handleSubmit() {
      // Ici, vous pouvez ajouter la logique pour envoyer le formulaire (via API, email, etc.)
      isSubmitted = true;
    }
</script>
  
  <main class="flex justify-center items-center min-h-screen bg-black">
    <div class="w-full max-w-2xl p-8 bg-transparent border-4 border-primary shadow-lg rounded-lg">
      <h1 class="text-4xl font-semibold text-center text-white mb-6">Contactez-moi</h1>
  
      {#if isSubmitted}
        <div class="text-center text-green-600">
          <p>Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</p>
            <a href="/">
                <button
              type="submit"
              class="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:ring-offset-2 placeholder:text-gray-300"
            >
              Retour au site
            </button>
            </a>
        </div>
      {:else}
        <form on:submit|preventDefault={handleSubmit}>
          <!-- Nom -->
          <div class="mb-4">
            <label for="name" class="block text-white font-semibold">Nom</label>
            <input
              type="text"
              id="name"
              bind:value={name}
              class="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-300"
              placeholder="Nom"
              required
            />
          </div>
  
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-white font-semibold">Email</label>
            <input
              type="email"
              id="email"
              bind:value={email}
              class="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-300"
              placeholder="Email"
              required
            />
          </div>
  
          <!-- Message -->
          <div class="mb-6">
            <label for="message" class="block text-white font-semibold">Message</label>
            <textarea
              id="message"
              bind:value={message}
              class="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-300"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              class="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:ring-offset-2 placeholder:text-gray-300"
            >
              Envoyer
            </button>
          </div>
        </form>
      {/if}
    </div>
  </main>