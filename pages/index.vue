<script setup lang="ts">
const lastPosts = ref([
  {
    id: 1,
    datetime: '21/12/2022',
    cover: '/img/default.jpeg',
    title: 'Choose Boring Technology',
    description:
            'This is the spoken word version of my essay, Choose Boring Technology. I have largely come to terms with it and the reality that I will never escape its popularity. I gave this most recently at the WikiMedia Foundation’s developer conference, where Scott Ananian called it “how to be old, for young people.”',
  },
  {
    id: 2,
    datetime: '21/12/2022',
    cover: '/img/default.jpeg',
    title: 'Choose Boring Technology',
    description:
            'This is the spoken word version of my essay, Choose Boring Technology. I have largely come to terms with it and the reality that I will never escape its popularity. I gave this most recently at the WikiMedia Foundation’s developer conference, where Scott Ananian called it “how to be old, for young people.”',
  },
  {
    id: 3,
    datetime: '21/12/2022',
    cover: '/img/default.jpeg',
    title: 'Choose Boring Technology',
    description:
            'This is the spoken word version of my essay, Choose Boring Technology. I have largely come to terms with it and the reality that I will never escape its popularity. I gave this most recently at the WikiMedia Foundation’s developer conference, where Scott Ananian called it “how to be old, for young people.”',
  },
])

definePageMeta({
  auth: false,
})
</script>

<template>
  <div>
    <div class="flex">
      <UiCard />
      <UiCard />
      <UiCard />
    </div>

    <div>
      <h2>Recent posts</h2>
      <div class="space-y-2">
        <PostPreview v-for="post in lastPosts" :key="post.id" v-bind="post" />
      </div>
    </div>
  </div>
</template>
