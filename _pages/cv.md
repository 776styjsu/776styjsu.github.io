---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

You can download my full CV as a PDF: [Tian_Yu_CV.pdf](/files/Tian_Yu_CV.pdf)

## Education

* **Ph.D. in Computer Science**, University of Virginia, 2025 – present
  * Advisor: [Sebastian Elbaum](https://www.cs.virginia.edu/~se4ja/)
* **B.S. in Computer Science**, University of Washington, 2024

## Research Experience

* **Graduate Research Assistant** — University of Virginia (2025 – present)
  * Working on program analysis and automated testing for AI/robotic systems

* **Research Assistant** — University of Washington (2023 – 2025)
  * Worked with Michael D. Ernst on Randoop automated test generation
  * Contributed enhancements for better branch exploration and fault detection

## Skills

* **Languages:** Java, Python, Rust, C/C++
* **Areas:** Program analysis, software testing, robotics, machine learning
* **Tools:** Git, ROS, CARLA simulator

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
