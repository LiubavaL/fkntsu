<script setup lang="ts">
const { useAuthUser, logout } = useAuth()
const user = useAuthUser().value
</script>

<template>
  <header class="w-full">
    <nav class="navbar bg-neutral rounded-box">
      <div class="flex-1">
        Fkntsu
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="m-1">
            <Avatar :src="user.img" />
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button @click="logout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
