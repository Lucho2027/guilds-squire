<script setup lang="ts">
const { loggedIn } = useUserSession()
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold leading-6">
        Todo List
      </h3>
      <UButton
        v-if="!loggedIn"
        to="/api/auth/battledotnet"
        icon="i-simple-icons-battledotnet"
        label="Login with Battlenet"
        color="black"
        external
      />
      <UButton
        v-else
        to="/todos"
        icon="i-heroicons-list-bullet"
        label="Go to Todos"
        color="black"
      />
    </template>
    <p class="font-medium">
      Welcome to Guild's Squire.
    </p>
    <p>
      A <a
        href="https://nuxt.com"
        target="_blank"
        class="text-primary-500"
        rel="noopener"
      >Nuxt</a> demo hosted on <a
        href="https://pages.cloudflare.com"
        target="_blank"
        rel="noopener"
        class="text-primary-500"
      >Cloudflare Pages</a> with server-side rendering on the edge and using <NuxtLink
        href="https://developers.cloudflare.com/d1/"
        target="_blank"
        rel="noopener"
        class="text-primary-500"
      >
        Cloudflare D1 database
      </NuxtLink>.
    </p>
    <p>
      It is made using <a
        href="https://hub.nuxt.com"
        class="text-primary-500"
      >NuxtHub</a> for a zero-config development & deployment experience on Cloudflare.
    </p>
    <hr class="dark:border-gray-700">
    <p class="text-sm text-gray-700 dark:text-gray-300 italic">
      No personal informations regarding your Battlenet account are stored in database.<br>
      We store only the things created linked with your GitHub ID.
    </p>
  </UCard>
</template>
