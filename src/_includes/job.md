---
layout: layout.njk
---
# {{ title }}
*Posted on {{ page.date | date: "%Y-%m-%d %I:%M %p" }}*

Location: {{ location }}

{{ content | safe }}