---
layout: page
title: Agenda
eyebrow: Performances and appearances
---

{% assign events = site.data.agenda.events | sort: "date" %}

{% if events.size > 0 %}
<div class="timeline">
  {% for event in events %}
  <article class="timeline-event">
    <time class="timeline-date" datetime="{{ event.date | date: '%Y-%m-%d' }}">
      <span class="timeline-day">{{ event.date | date: "%d" }}</span>
      <span>{{ event.date | date: "%B" }}</span>
      <span>{{ event.date | date: "%Y" }}</span>
    </time>
    <div class="timeline-marker" aria-hidden="true"></div>
    <div class="timeline-details">
      <h2>{{ event.title }}</h2>
      {% if event.venue != "" or event.city != "" %}
      <p class="timeline-location">
        {% if event.venue != "" %}{{ event.venue }}{% endif %}{% if event.venue != "" and event.city != "" %}<span aria-hidden="true"> · </span>{% endif %}{% if event.city != "" %}{{ event.city }}{% endif %}
      </p>
      {% endif %}
      {% if event.programme != "" %}<p>{{ event.programme }}</p>{% endif %}
      {% if event.link != "" %}<a class="text-link" href="{{ event.link }}" target="_blank" rel="noreferrer">Details <span aria-hidden="true">↗</span></a>{% endif %}
    </div>
  </article>
  {% endfor %}
</div>
{% else %}
<p>New performance dates will be announced soon.</p>
{% endif %}
