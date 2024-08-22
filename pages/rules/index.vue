
<style>:root{--background:240 5% 6%;--foreground:60 5% 90%;--primary:240 0% 90%;--primary-foreground:60 0% 0%;--secondary:240 4% 15%;--secondary-foreground:60 5% 85%;--accent:240 0% 13%;--accent-foreground:60 0% 100%;--destructive:0 60% 50%;--destructive-foreground:0 0% 98%;--muted:240 5% 25%;--muted-foreground:60 5% 85%;--card:240 4% 10%;--card-foreground:60 5% 90%;--popover:240 5% 15%;--popover-foreground:60 5% 85%;--border:240 6% 20%;--input:240 6% 20%;--ring:240 5% 90%;--chart-1:359 2% 90%;--chart-2:240 1% 74%;--chart-3:240 1% 58%;--chart-4:240 1% 42%;--chart-5:240 2% 26%;--radius:0.5rem;}img[src="/placeholder.svg"],img[src="/placeholder-user.jpg"]{filter:sepia(.3) hue-rotate(-180deg) saturate(.5) opacity(0.5) invert(.9)}</style>
<style>h1, h2, h3, h4, h5, h6 { font-family: 'Manrope', sans-serif; --font-sans-serif: 'Manrope'; }
</style>
<style>body { font-family: 'Manrope', sans-serif; --font-sans-serif: 'Manrope'; }
</style>
<template>
<div class="flex min-h-screen w-full flex-col bg-muted/40">
    <LayoutNavBar/>
 <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <nav aria-label="breadcrumb" class="hidden md:flex">
        <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
          <li class="inline-flex items-center gap-1.5"></li>
        </ol>
      </nav>
          </header>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="w-full max-w-full">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Text Page</h3>
            <p class="text-sm text-muted-foreground"></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>
