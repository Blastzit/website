---
layout: default
title:
description: Bendit Chan is a pianist, composer, and musical director.
---

<section class="home-hero site-frame">
  <div class="hero-copy">
    <p class="section-label">Pianist · Composer · Musical Director</p>
    <h1><span>Bendit</span><em>Chan</em></h1>
  </div>

  <figure class="hero-figure{% if site.data.settings.hero_image == '' %} is-placeholder{% endif %}">
    {% if site.data.settings.hero_image != "" %}
      <img src="{{ site.data.settings.hero_image | relative_url }}" alt="{{ site.data.settings.hero_image_alt }}">
    {% else %}
      <div class="photo-placeholder" role="img" aria-label="Piano portrait placeholder">
        <span>Add piano portrait</span>
      </div>
    {% endif %}
    <figcaption>{{ site.data.settings.hero_image_caption }}</figcaption>
  </figure>

  <div class="hero-introduction">
    <p>Working across classical performance, composition, and theatre.</p>
    <a class="text-link" href="{{ '/about/' | relative_url }}">About the artist <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="practice site-frame">
  <div class="section-number">01</div>
  <div class="practice-heading">
    <p class="section-label">Practice</p>
    <h2>Performance, composition, and musical direction.</h2>
  </div>
  <div class="discipline-list">
    <a href="{{ '/agenda/' | relative_url }}"><span>01</span><strong>Piano</strong><small>Concerts & recitals</small></a>
    <a href="{{ '/theatre/composer/' | relative_url }}"><span>02</span><strong>Composition</strong><small>Original music</small></a>
    <a href="{{ '/theatre/musical-director/' | relative_url }}"><span>03</span><strong>Musical direction</strong><small>Theatre & collaboration</small></a>
  </div>
</section>

<section class="home-agenda site-frame">
  <p class="section-label">Agenda</p>
  <h2>Upcoming performances</h2>
  <a class="text-link" href="{{ '/agenda/' | relative_url }}">View agenda <span aria-hidden="true">↗</span></a>
</section>
