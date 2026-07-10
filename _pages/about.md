---
layout: default
permalink: /
title:
description: "Tian Yu is a Computer Science PhD student at the University of Virginia researching runtime assurance for learning-enabled autonomous systems."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<main class="simple-home" id="main">
  <section class="profile-intro" id="about" aria-labelledby="intro-title">
    <div class="profile-intro__main">
      <!-- <p class="profile-role">Software engineering · Autonomous systems</p> -->
      <h1 id="intro-title">Tian Yu <span>余添</span></h1>

      <p>
        I’m a Computer Science PhD student at the <a href="https://engineering.virginia.edu/departments/computer-science">University of Virginia</a>, advised by <a href="https://www.cs.virginia.edu/~se4ja/">Sebastian Elbaum</a> as part of the <a href="https://less-lab-uva.github.io/">LESS Lab</a>.
      </p>

      <p class="research-statement">
        My research interests lie in the safety and trustworthiness of learning-enabled autonomous systems (e.g., autonomous vehicles and robots). In particular, I develop techniques that make these systems subject to meaningful verification and intervention as they operate in complex, real-world environments.
      </p>

      <p>
        Previously, I obtained a B.S. in Computer Science from the <a href="https://www.washington.edu">University of Washington</a>, where I was privileged to work with <a href="https://homes.cs.washington.edu/~mernst/">Michael D. Ernst</a> on using program analysis to improve automated test generation.
      </p>

    </div>

    <aside class="profile-facts" aria-label="Research profile">
      <figure class="profile-placeholder">
        <img src="{{ base_path }}/images/miku_plush.png" alt="A smiling Hatsune Miku plush sitting in front of dried flowers" width="940" height="940">
        <figcaption>My Miku fufu filling in for me until I get a real headshot.</figcaption>
      </figure>
      <div>
      <ul
        class="profile-links"
        aria-label="Profile links"
        style="
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 12px;
        "
      >
        <li>
          <a
            href="mailto:{{ site.author.email }}"
            style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;"
          >
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <span>Email</span>
          </a>
        </li>

        <li>
          <a
            href="{{ base_path }}/files/Tian_Yu_CV.pdf"
            style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            <span>CV</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/{{ site.author.github }}"
            style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
            <span>GitHub</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/{{ site.author.linkedin }}/"
            style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
    </aside>
  </section>

  <section class="home-list" id="news" aria-labelledby="news-title">
    <header class="home-list__header">
      <h2 id="news-title">🔥 News</h2>
    </header>
    <ul class="news-list">
      <li>
        <time datetime="2025-08">2025.08</time>
        <span>Started my PhD in Computer Science at UVA, advised by Sebastian Elbaum.</span>
      </li>
      <li>
        <time datetime="2025-06">2025.06</time>
        <span>Graduated with a B.S. in Computer Science from the University of Washington.</span>
      </li>
    </ul>
  </section>

  <section class="home-list" id="work" aria-labelledby="work-title">
    <header class="home-list__header">
      <h2 id="work-title">📑 Selected work</h2>
      <a href="{{ base_path }}/publications/">All publications <span aria-hidden="true">→</span></a>
    </header>

    <p class="publication-placeholder">Papers under review. Details coming soon.</p>
  </section>
</main>
