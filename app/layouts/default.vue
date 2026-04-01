<template>
  <div class="flex min-h-full flex-col">
    <header class="h-9 bg-blue-400 p-3">
    </header>
    <main class="flex-1 p-4 bg-gray-50">
      <slot />
    </main>
    <footer class="text-center bg-blue-100 p-3">All rights reserved</footer>
  </div>
</template>