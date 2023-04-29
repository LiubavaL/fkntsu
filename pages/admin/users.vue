<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th />
          <th>Email</th>
          <th>Name</th>
          <th>Created</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          <td>
            <button class="mr-3">
              <Icon name="grommet-icons:edit" />
            </button>
            <button class="text-red-500">
              <Icon name="grommet-icons:trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
