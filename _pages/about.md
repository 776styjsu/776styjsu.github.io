---
layout: personal
permalink: /
title:
description: "Tian Yu is a Computer Science PhD student at the University of Virginia developing testing and runtime monitoring methods for AI-enabled autonomous systems."
redirect_from:
  - /about/
  - /about.html
---

<section class="intro" id="about" aria-labelledby="intro-title">
  <div class="intro__text">
    <h1 id="intro-title">Tian Yu <span lang="zh">余添</span></h1>
    <p>I’m a Ph.D. student in Computer Science at the <a href="https://engineering.virginia.edu/departments/computer-science">University of Virginia</a>, advised by <a href="https://www.cs.virginia.edu/~se4ja/">Sebastian Elbaum</a> in the <a href="https://less-lab-uva.github.io/">LESS Lab</a>.</p>
    <p>I develop testing and runtime monitoring methods for AI-enabled autonomous systems, currently autonomous driving models, using their reasoning and behavior to identify failures and assess safety.</p>
    <p>Previously, I studied Computer Science at the University of Washington and worked with <a href="https://homes.cs.washington.edu/~mernst/">Michael D. Ernst</a> on program analysis for automated test generation.</p>
    <div class="profile-links" aria-label="Profile links">
      <a href="mailto:{{ site.author.email }}">Email</a><span aria-hidden="true">/</span>
      <a href="{{ '/files/Tian_Yu_CV.pdf' | relative_url }}">CV<span class="sr-only"> (PDF)</span></a><span aria-hidden="true">/</span>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a><span aria-hidden="true">/</span>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/">LinkedIn</a>
    </div>
  </div>
  <figure class="portrait">
    <img src="{{ '/images/miku_plush.png' | relative_url }}" alt="A smiling Hatsune Miku plush sitting in front of dried flowers" width="940" height="940" fetchpriority="high">
    <figcaption>My Miku fufu, who handles the photogenic duties.</figcaption>
  </figure>
</section>

<section class="home-section" id="news" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <ul class="news-list">
    <li><time datetime="2025-08">Aug 2025</time><p>Started my PhD in Computer Science at UVA, advised by Sebastian Elbaum.</p></li>
    <li><time datetime="2025-06">Jun 2025</time><p>Graduated from the University of Washington with a B.S. in Computer Science.</p></li>
  </ul>
</section>

<section class="home-section" id="work" aria-labelledby="work-title">
  <header class="section-heading"><h2 id="work-title">Selected Publications</h2><a href="{{ '/publications/' | relative_url }}">All publications</a></header>
  {% for paper in site.data.publications %}{% include personal-publication.html paper=paper %}{% endfor %}
</section>

<section class="home-section" id="education" aria-labelledby="education-title">
  <h2 id="education-title">Education</h2>
  <ul class="education-list">
    <li class="education-entry">
      <img class="education-logo" src="{{ '/images/education/university-of-virginia.svg' | relative_url }}" alt="University of Virginia logo" width="218" height="53" loading="lazy" decoding="async">
      <div>
        <h3><a href="https://www.virginia.edu/">University of Virginia</a></h3>
        <p>Ph.D. in Computer Science</p>
        <p class="education-meta">Aug 2025 – present · Charlottesville, VA</p>
        <p>Advisor: <a href="https://www.cs.virginia.edu/~se4ja/">Sebastian Elbaum</a></p>
      </div>
    </li>
    <li class="education-entry">
      <img class="education-logo" src="{{ '/images/education/university-of-washington.png' | relative_url }}" alt="University of Washington logo" width="3840" height="2160" loading="lazy" decoding="async">
      <div>
        <h3><a href="https://www.washington.edu/">University of Washington</a></h3>
        <p>B.S. in Computer Science</p>
        <p class="education-meta">Sep 2021 – Jun 2025 · Seattle, WA</p>
      </div>
    </li>
  </ul>
</section>

<section class="home-section" id="honors" aria-labelledby="honors-title">
  <h2 id="honors-title">Honors and Awards</h2>
  <ul class="honors-list">
    <li><strong>Provost’s Fellowship</strong>, University of Virginia</li>
  </ul>
</section>
