---
layout: personal
title: "Software"
permalink: /software/
description: "Research software and open-source contributions by Tian Yu, including Drive the Thoughts, Randoop, and Jungle-Mapper."
---

<header class="page-heading"><h1>Software</h1><p>Research code, open-source contributions, and tools for understanding software behavior.</p></header>

<div class="software-list">
  <article class="software-entry">
    <a class="software-thumbnail" href="{{ site.data.publications[0].thumbnail | relative_url }}" aria-label="View the Drive the Thoughts figure at full size">
      <img src="{{ site.data.publications[0].thumbnail | relative_url }}" alt="{{ site.data.publications[0].thumbnail_alt | escape }}" width="{{ site.data.publications[0].thumbnail_width }}" height="{{ site.data.publications[0].thumbnail_height }}" loading="lazy" decoding="async">
    </a>
    <div class="software-entry__body">
      <h2><a href="{{ site.data.publications[0].code }}">Drive the Thoughts</a></h2>
      <p class="software-entry__role">Research code · Runtime monitoring</p>
      <p>Runtime monitoring of consistency between a driving vision-language-action model’s reasoning and its planned trajectory. This work includes a benchmark of 150 manually annotated reasoning–trajectory pairs and monitors that account for road geometry.</p>
      <div class="software-links"><a href="{{ site.data.publications[0].code }}">Repository</a><span aria-hidden="true">/</span><a href="{{ site.data.publications[0].paper }}">Paper</a></div>
    </div>
  </article>
  <article class="software-entry">
    <a class="software-thumbnail software-thumbnail--logo" href="https://randoop.github.io/randoop/" aria-label="Randoop project website">
      <img src="{{ '/images/software/randoop-logo.png' | relative_url }}" alt="Randoop mascot" width="107" height="81" loading="lazy" decoding="async">
    </a>
    <div class="software-entry__body">
      <h2><a href="https://randoop.github.io/randoop/">Randoop</a></h2>
      <p class="software-entry__role">Open source · Contributor</p>
      <p>A feedback-directed random test generator for Java. I extended Randoop with type-dependency analysis to construct missing test inputs and side-effect analysis to generate diverse object states.</p>
      <p>I also built an evaluation pipeline across 30+ Java projects, measuring code coverage and fault detection with mutation testing.</p>
      <div class="software-links"><a href="https://github.com/randoop/randoop">Repository</a><span aria-hidden="true">/</span><a href="https://randoop.github.io/randoop/">Project website</a></div>
    </div>
  </article>
  <article class="software-entry">
    <a class="software-thumbnail" href="{{ '/images/software/jungle-mapper-overview.png' | relative_url }}" aria-label="View the Jungle-Mapper architecture figure at full size">
      <img src="{{ '/images/software/jungle-mapper-overview.png' | relative_url }}" alt="Java and Rust frontends feed a common type–API graph into a reusable backend that queries and ranks object construction sequences." width="2048" height="599" loading="lazy" decoding="async">
    </a>
    <div class="software-entry__body">
      <h2><a href="https://github.com/776styjsu/api-jungle-map">Jungle-Mapper</a></h2>
      <p class="software-entry__role">Research prototype · Team project</p>
      <p>A static analysis tool for discovering API call sequences that construct a desired object type. It extracts type and API relationships from source code, then searches a shared graph representation.</p>
      <p>Built for Java and Rust to explore the tradeoffs between cross-language extensibility, development effort, and solution correctness.</p>
      <div class="software-links"><a href="https://github.com/776styjsu/api-jungle-map">Repository</a><span aria-hidden="true">/</span><a href="{{ '/files/jungloid-paper.pdf' | relative_url }}">Project report<span class="sr-only"> (PDF)</span></a></div>
    </div>
  </article>
</div>
