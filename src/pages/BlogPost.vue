<template>
    <div>
        <h1>BlogPost</h1>
        <p>This is the content of the first blog post.</p>
        <router-link to="/">← Back to Home</router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BlogPost',
}
</script>

<!-- <template>
    <div v-if="blog">
        <h1>{{ blog.title }}</h1>
        <div v-html="blog.content"></div>
    </div>
    <div v-else>
        <p>Blog not found.</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const blogId = route.params.id as string

// Simulated blog data; in real apps this could be from a JSON, .md files, or API
const blogMap: Record<string, { title: string; content: string }> = {
    blog1: {
        title: 'My First Blog',
        content: '<p>This is the content of the first blog.</p>',
    },
    blog2: {
        title: 'My Second Blog',
        content: '<p>This is the content of the second blog.</p>',
    },
}

const blog = blogMap[blogId]
</script> -->