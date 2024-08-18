

<style>:root{--background:240 5% 6%;--foreground:60 5% 90%;--primary:240 0% 90%;--primary-foreground:60 0% 0%;--secondary:240 4% 15%;--secondary-foreground:60 5% 85%;--accent:240 0% 13%;--accent-foreground:60 0% 100%;--destructive:0 60% 50%;--destructive-foreground:0 0% 98%;--muted:240 5% 25%;--muted-foreground:60 5% 85%;--card:240 4% 10%;--card-foreground:60 5% 90%;--popover:240 5% 15%;--popover-foreground:60 5% 85%;--border:240 6% 20%;--input:240 6% 20%;--ring:240 5% 90%;--chart-1:359 2% 90%;--chart-2:240 1% 74%;--chart-3:240 1% 58%;--chart-4:240 1% 42%;--chart-5:240 2% 26%;--radius:0.5rem;}</style>
<style>h1, h2, h3, h4, h5, h6 { font-family: 'Manrope', sans-serif; --font-sans-serif: 'Manrope'; }
</style>

<style>body { font-family: 'Manrope', sans-serif; --font-sans-serif: 'Manrope'; }
</style>
<template>
    <div class="flex min-h-screen w-full flex-col bg-muted/40">
  <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
      <a
        class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 transition-all group-hover:scale-110"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        <span class="sr-only">Acme Inc</span>
      </a>
    </nav>
    <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5"></nav>
  </aside>
  <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <nav aria-label="breadcrumb" class="hidden md:flex">
        <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
          <li class="inline-flex items-center gap-1.5"></li>
          <li aria-hidden="true" class="[&amp;>svg]:size-3.5" role="presentation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>
          <li class="inline-flex items-center gap-1.5">
            <span aria-current="page" aria-disabled="true" class="font-normal text-foreground" role="link">
              Calendar
            </span>
          </li>
        </ol>
      </nav>
      <div class="relative ml-auto flex-1 md:grow-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          class="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          type="search"
          placeholder="Search..."
        />
      </div>
    </header>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="w-full max-w-full">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Your Calendar</h3>
            <p class="text-sm text-muted-foreground">Manage your events, meetings, and tasks all in one place.</p>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-7 gap-4 text-center h-full">
              <div class="font-semibold">Sun</div>
              <div class="font-semibold">Mon</div>
              <div class="font-semibold">Tue</div>
              <div class="font-semibold">Wed</div>
              <div class="font-semibold">Thu</div>
              <div class="font-semibold">Fri</div>
              <div class="font-semibold">Sat</div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">1</div>
                <div class="text-muted-foreground">
                  <div>9:00 AM - 10:00 AM</div>
                  <div>Team Meeting</div>
                </div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">2</div>
                <div class="text-muted-foreground">
                  <div>2:00 PM - 3:00 PM</div>
                  <div>Design Review</div>
                </div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">3</div>
                <div class="text-muted-foreground">
                  <div>4:00 PM - 5:00 PM</div>
                  <div>Client Call</div>
                </div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">4</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">5</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">6</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">7</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">8</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">9</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">10</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">11</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">12</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">13</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">14</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">15</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">16</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">17</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">18</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">19</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">20</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">21</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">22</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">23</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">24</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">25</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">26</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">27</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">28</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">29</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">30</div>
              </div>
              <div class="bg-muted/20 rounded-lg p-2 text-sm h-[5rem] sm:h-[7.5rem] md:h-[10rem] lg:h-[12.5rem] xl:h-[15rem]">
                <div class="font-semibold">31</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>
