<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader class="flex-shrink-0" />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter class="flex-shrink-0" />
  </div>
</template>
