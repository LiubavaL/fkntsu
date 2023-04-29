<script></script>

<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <div class="flex justify-between items-center max-w-6xl mx-auto w-full h-full">
      <div class="font-nunito">
        Copyright © {{ (new Date()).getFullYear() }} - All right reserved
      </div>

      <ul class="flex">
        <li>
          <TheFooterLink name="mdi:artstation" />
        </li>
        <li>
          <TheFooterLink name="grommet-icons:twitter" />
        </li>
        <li>
          <TheFooterLink name="grommet-icons:instagram" />
        </li>
        <li>
          <TheFooterLink name="grommet-icons:mail" />
        </li>
      </ul>

      <button @click="">
        Contact Me
      </button>
    </div>
  </footer>
</template>
