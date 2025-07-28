<!-- filepath: /Users/rohidesh/personal/writings/website/rohidesh34.github.io/index.md -->
---
layout: default
title: Home
---

# rohidesh.com

## Blog Posts

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>