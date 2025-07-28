---
layout: default
title: Home
---

# Home
_Writing brings clarity._

An attempt to organize and communicate my thoughts around some key learnings.
## Posts
{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
{% endfor %}