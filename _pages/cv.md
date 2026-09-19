---
layout: personal
title: "CV"
permalink: /cv/
description: "Tian Yu’s education, research experience, industry experience, honors, and technical skills."
redirect_from:
  - /resume
  - /cv-json/
  - /resume-json
---

<header class="page-heading page-heading--cv"><h1>Curriculum vitae</h1><a href="{{ '/files/Tian_Yu_CV.pdf' | relative_url }}">Download CV (PDF)</a></header>

<section class="cv-section" aria-labelledby="education-title">
  <h2 id="education-title">Education</h2>
  <div class="cv-section__body">
    <article class="cv-entry"><div class="cv-entry__heading"><h3>University of Virginia</h3><span>Aug 2025 – present</span></div><p class="cv-entry__role">PhD student in Computer Science · Charlottesville, VA</p><p>Advisor: <a href="https://elbaum.cs.virginia.edu/">Sebastian Elbaum</a></p></article>
    <article class="cv-entry"><div class="cv-entry__heading"><h3>University of Washington</h3><span>Sep 2021 – Jun 2025</span></div><p class="cv-entry__role">B.S. in Computer Science · Seattle, WA</p><p>GPA: 3.7 / 4.0</p></article>
  </div>
</section>

<section class="cv-section" aria-labelledby="experience-title">
  <h2 id="experience-title">Research experience</h2>
  <div class="cv-section__body">
    <article class="cv-entry"><div class="cv-entry__heading"><h3>University of Virginia</h3><span>Aug 2025 – present</span></div><p class="cv-entry__role">Graduate Research Assistant</p>
      <div class="cv-project"><h4>Reasoning–trajectory consistency</h4><p class="cv-project__date">Jan 2026 – present</p><p>Investigating whether Alpamayo 1.5’s driving reasoning can serve as a behavioral specification. Created a benchmark of 150 manually annotated reasoning–trajectory pairs and developed lane-relative runtime monitors, achieving F1 = 0.75 for inconsistency detection (+0.13 over the strongest baseline).</p></div>
      <div class="cv-project"><h4>Reasoning coverage for autonomous driving</h4><p class="cv-project__date">Aug 2026 – present</p><p>Developing a coverage framework that represents VLA reasoning as paths connecting observations, causal relations, and driving decisions. Evaluating whether reasoning-based test prioritization reveals failures beyond scenario- and trajectory-based coverage.</p></div>
      <div class="cv-project"><h4>Attribution stability and safety</h4><p class="cv-project__date">Aug 2025 – present</p><p>Investigated whether unstable visual attributions reveal risks missed by stable steering predictions. Developed adversarial perturbations and evaluated them in closed-loop CARLA simulations, finding limited predictive value for near-term failures.</p></div>
    </article>
    <article class="cv-entry"><div class="cv-entry__heading"><h3>University of Washington</h3><span>Jan 2023 – Jun 2025</span></div><p class="cv-entry__role">Undergraduate Research Assistant · Advisor: <a href="https://homes.cs.washington.edu/~mernst/">Michael D. Ernst</a></p>
      <div class="cv-project"><h4>Unit test generation via program analysis</h4><p class="cv-project__date">Jan 2023 – Jun 2025</p><p>Extended <a href="https://github.com/randoop/randoop">Randoop</a> with type-dependency and side-effect analyses to construct missing inputs and generate diverse object states. Built an evaluation pipeline across 30+ Java projects using code coverage and mutation testing.</p></div>
      <div class="cv-project"><h4>Cross-language API exploration</h4><p class="cv-project__date">Jan – Mar 2025</p><p>Built <a href="https://github.com/776styjsu/api-jungle-map">Jungle-Mapper</a> to discover API construction sequences. Designed a shared graph representation and query engine for Java and Rust.</p></div>
    </article>
  </div>
</section>

<section class="cv-section" aria-labelledby="cv-publications-title">
  <h2 id="cv-publications-title">Publications &amp; preprints</h2>
  <div class="cv-section__body">{% for paper in site.data.publications %}<article class="cv-entry"><h3><a href="{{ paper.paper }}">{{ paper.title }}</a></h3><p>{{ paper.authors }}. {{ paper.year }}.</p><p class="cv-entry__role">{{ paper.status }} · <a href="{{ paper.code }}">Code</a></p></article>{% endfor %}</div>
</section>

<section class="cv-section" aria-labelledby="industry-title">
  <h2 id="industry-title">Industry</h2>
  <div class="cv-section__body"><article class="cv-entry"><div class="cv-entry__heading"><h3>China Pacific Insurance Company</h3><span>Jul – Sep 2023</span></div><p class="cv-entry__role">Software Engineering Intern · Shanghai, China</p><p>LLM application development.</p></article></div>
</section>

<section class="cv-section" aria-labelledby="honors-title">
  <h2 id="honors-title">Honors &amp; awards</h2>
  <div class="cv-section__body"><ul class="plain-list"><li><strong>Provost’s Fellowship</strong><span>University of Virginia</span></li><li><strong>Dean’s List</strong><span>University of Washington · Multiple quarters</span></li></ul></div>
</section>

<section class="cv-section" aria-labelledby="skills-title">
  <h2 id="skills-title">Technical skills</h2>
  <div class="cv-section__body"><dl class="skills-list"><div><dt>Languages</dt><dd>Python, Java, Bash</dd></div><div><dt>Development</dt><dd>Git, Linux, Docker</dd></div><div><dt>Simulation</dt><dd>AlpaSim, CARLA</dd></div></dl></div>
</section>
