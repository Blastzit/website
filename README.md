# Bendit Chan Website

This is a Jekyll-based personal website for a pianist, composer, and musical director.

## Local development

1. Install Ruby 3.3+ with rbenv or another version manager.
2. Install Bundler:
   ```bash
   gem install bundler
   ```
3. Install dependencies:
   ```bash
   bundle install
   ```
4. Run locally:
   ```bash
   bundle exec jekyll serve
   ```
5. Visit http://localhost:4000

## Content updates

- Edit the markdown pages in the project root.
- Edit concerts in `_data/agenda.yml`. The timeline in `agenda.md` is generated automatically.
- Add media links directly in `media.md`.
- Edit the two theatre pages in `theatre/composer.md` and `theatre/musical-director.md`.
- The home-page photograph is `assets/images/piano.jpg`; its path, alt text, and caption are set in `_data/settings.yml`.
- Social profile URLs and the contact-form endpoint are kept in `_data/settings.yml`.

## Contact form

The form posts to FormSubmit and sends submissions to `hello@benditchan.com`. After deployment, submit the form once yourself and follow the activation link FormSubmit emails to that address. Until that first confirmation, messages will not be delivered normally.

To use another form provider later, replace `contact_form_endpoint` in `_data/settings.yml`.

## Maths

The `maths.md` page introduces Bendit’s mathematical background and links to the complete local PDF archive in `assets/notes/`. Those PDFs are copied into the generated site automatically, so the new page does not depend on the old `blastzit.github.io` site.

## Agenda format

Each event in `_data/agenda.yml` uses this format:

```yml
- date: 2026-09-15
  title: Opening Concert
  venue: Studio Hall
  city: London
  programme: ""
  link: ""
```

Use dates in `YYYY-MM-DD` format. `programme` and `link` are optional and may be left blank.

## Deployment

This site is designed for GitHub Pages. Add your custom domain in GitHub settings and keep the `CNAME` file in the root of the published branch.
