<template>
  <div class="home-container">
    <!-- Welcome message -->
    <div class="welcome-message">
      <h1>Welcome to rohidesh.com</h1>
      <p>Thoughts on technology, architecture, design and more...</p>
    </div>

    <!-- Blog tiles -->
    <div class="blog-tiles">
      <div v-for="post in posts" :key="post.id">
        <router-link :to="`/blog/${post.id}`" class="blog-tile-link">
          <div class="blog-tile">
            <h2>{{ post.title }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  data() {
    return {
      // Array of blog posts
      // In a real application, this data would likely come from an API
      posts: [
        { id: 'agentic-ai', title: 'Agentic AI' },
        { id: 'apis-and-mcp', title: 'APIs and MCP' },
        { id: 'ai-patterns', title: 'AI Patterns' },
        { id: 'glossary', title: 'Glossary' },
        // Add more posts as needed
      ],
    };
  }
}
</script>

<style scoped>
/* Container for Home Page */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
}

/* Welcome Message Styling */
.welcome-message {
  margin-bottom: 40px;
}

.welcome-message h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.welcome-message p {
  font-size: 1.25rem;
  color: #555;
}

/* Blog Tiles Container */
.blog-tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

/* Individual Tile */
.blog-tile {
  display: flex;
  width: 200px;
  height: 150px;
  background: #f2f2f2;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-items: center;
  justify-content: center;
}

.blog-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.blog-tile h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.blog-tile-link {
  text-decoration: none;
  color: #333;
}
</style>