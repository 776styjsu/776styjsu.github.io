---
layout: archive
title: "Software"
permalink: /software/
author_profile: false
description: "Research software and open-source contributions by Tian Yu."
---

<p class="page-intro">Open-source software, tools, and repositories to which I have contributed</p>

<div class="software-list">
  <article class="software-item">
    <div class="software-item__top">
      <div class="software-item__summary">
        <header class="software-item__header">
          <div>
            <p class="software-item__eyebrow"><i class="fas fa-flask" aria-hidden="true"></i> Open-source project <span>· Contributor</span></p>
            <h2>Randoop</h2>
          </div>
        </header>

        <p><a href="https://randoop.github.io/randoop/">Randoop</a> automatically generates JUnit tests for Java through feedback-directed random generation. It builds and executes method-call sequences, then turns useful executions into error-revealing or regression tests.</p>
      </div>

      <a class="software-item__visual software-item__visual--logo" href="https://randoop.github.io/" aria-label="Visit the Randoop project website">
        <img src="/images/software/randoop-logo.png" alt="Randoop bug logo">
        <span>Official project mark</span>
      </a>
    </div>

    <ul class="software-features">
      <li>
        <strong>Generate</strong>
        <span>constructs candidate tests from sequences of constructors, methods, and available values.</span>
      </li>
      <li>
        <strong>Execute</strong>
        <span>runs each sequence and uses execution feedback to guide further generation.</span>
      </li>
      <li>
        <strong>Emit</strong>
        <span>produces compact JUnit tests that expose current errors or detect future regressions.</span>
      </li>
    </ul>

    <p class="software-item__links">
      <a href="https://github.com/randoop/randoop"><i class="fab fa-github" aria-hidden="true"></i> Repository</a>
    </p>
  </article>

  <article class="software-item">
    <div class="software-item__top">
      <div class="software-item__summary">
        <header class="software-item__header">
          <div>
            <p class="software-item__eyebrow"><i class="fas fa-diagram-project" aria-hidden="true"></i> Research prototype <span>· Team project</span></p>
            <h2>Jungle-Mapper</h2>
          </div>
        </header>

        <p>Jungle-Mapper is a lightweight static-analysis tool for discovering API construction chains, or <em>jungloids</em>. Given available types and a target type, it maps API relationships into a graph and searches for viable construction paths.</p>
      </div>

      <a class="software-item__visual" href="/files/jungloid-paper.pdf" aria-label="Read the Jungle-Mapper project report">
        <img src="/images/software/jungle-mapper-graph.png" alt="A Jungle-Mapper graph connecting type nodes and API nodes">
        <span>Type–API construction graph</span>
      </a>
    </div>

    <ul class="software-features">
      <li>
        <strong>Collect</strong>
        <span>extracts functions, methods, types, and subtype relationships with lightweight AST patterns.</span>
      </li>
      <li>
        <strong>Map</strong>
        <span>represents type and API relationships as a reusable, language-independent graph.</span>
      </li>
      <li>
        <strong>Query</strong>
        <span>searches and ranks construction DAGs that connect available inputs to a requested type.</span>
      </li>
    </ul>

    <p class="software-item__links">
      <a href="https://github.com/776styjsu/api-jungle-map"><i class="fab fa-github" aria-hidden="true"></i> Repository</a>
    </p>
  </article>
</div>
