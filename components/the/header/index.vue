<script></script>

<template>
  <header class=" bg-gray-400">
    <div class="mx-auto max-w-7xl px-8 py-2">
      <nav class="grid grid-cols-6 gap-3 h-12 items-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>

        <ul class="flex justify-end col-span-4">
          <li>
            <TheHeaderLink to="/portfolio" label="Portfolio" />
          </li>
          <li>
            <TheHeaderLink to="/blog" label="Blog" />
          </li>
          <li>
            <TheHeaderLink to="/about" label="About" />
          </li>
          <li>
            <TheHeaderLink to="/admin" label="Admin" />
          </li>
        </ul>

        <button @click="">
          <Icon name="grommet-icons:search" />
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>
