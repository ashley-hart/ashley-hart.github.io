---
layout: page
title: Resume
permalink: /resume/
---

{{% for file in site.static_files %}}
    {% if file.pdf %}
        <img src="{{file.path}}" alt="{file.name}">
    {{% endif %}}
{{% endfor %}}

*Note: Living Resume & CV coming soon!*

### Contact me

E-mail: [ashley.hart@ufl.edu](mailto:ashley.hart@ufl.edu)