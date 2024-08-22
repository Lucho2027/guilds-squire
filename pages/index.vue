<script lang="ts" setup>
 //const {data} = await asyncData('/api/auth/bnet') 




</script>
<template>
<div class="flex flex-col min-h-dvh">
    <Header/>
  <main class="flex-1">
    <section class="w-full pt-12 md:pt-24 lg:pt-32">
      <div class="container px-4 md:px-6 space-y-10 xl:space-y-16">
        <div class="grid gap-4 lg:grid-cols-[1fr_550px] lg:gap-16">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Let's get your Guild's needs taken care in one place
              </h1>
              <p class="max-w-[700px] text-muted-foreground md:text-xl">
                Streamline your World Of Warcraft Guild's events, manage rules keep track of loot and attendance all leveraging Battle.net API for World Of Warcraft
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <NuxtLink
                to="/rules"
                class="btn btn-lg btn-accent">
                Let's check the Rules
              </NuxtLink> 
            </div>
          </div>
          <img
            src=""
            width="550"
            height="550"
            alt="Product"
            class="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  </main>
    <Footer/>
</div>

</template>
