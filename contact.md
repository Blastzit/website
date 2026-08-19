---
layout: page
title: Contact
eyebrow: Booking and inquiries
---

For performances, commissions, collaborations, or other artistic enquiries, please get in touch below.

<form class="contact-form" action="{{ site.data.settings.contact_form_endpoint }}" method="POST">
  <input type="hidden" name="_subject" value="New enquiry from benditchan.com" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="{{ '/thanks/' | absolute_url }}" />
  <label class="honey-field" aria-hidden="true">
    Leave this field empty
    <input type="text" name="_honey" tabindex="-1" autocomplete="off" />
  </label>
  <div class="field-row">
    <label>
      Name
      <input type="text" name="name" required />
    </label>
    <label>
      Email
      <input type="email" name="email" required />
    </label>
  </div>

  <label>
    Inquiry type
    <select name="inquiry_type">
      <option value="booking">Booking</option>
      <option value="collaboration">Collaboration</option>
      <option value="performance">Performance</option>
      <option value="media">Media / Press</option>
      <option value="other">Other</option>
    </select>
  </label>

  <label>
    Message
    <textarea name="message" rows="6" required></textarea>
  </label>

  <button type="submit" class="button primary">Send message</button>
</form>

<p class="form-note">Prefer email? <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
