# Asili Spices — launch package

The complete website is in `dist/`. No installation, build command, database or API key is needed. Upload the contents of `dist/`, with index.html at the domain document root.

## Included
Responsive website; ingredient discovery filters and search; tailored WhatsApp enquiry; founder profile; cooking notes; business enquiries; FAQs; privacy and image-credit pages; Organization structured data; social metadata; sitemap and robots.txt. Original logo and founder portrait are byte-for-byte unchanged.

## Hosting
- Netlify: deploy the dist folder, no build command.
- Cloudflare Pages: use a static/direct-upload project and upload the contents of dist.
- cPanel: upload the contents of dist into the chosen domain's public_html/document root.
- GitHub Pages: place the contents of dist on your publishing branch and select that branch's root in Pages settings.

For a custom domain, the owner needs to supply the domain name and access to its DNS settings, plus access to the chosen hosting account. Follow the host's provided DNS records and enable HTTPS. No hosting password belongs in website files.

The packaged canonical URL is https://asili-spices-ann-kaaria.danoty1989.chatgpt.site/. Before using a different public domain, replace that origin in index.html (canonical, Open Graph and JSON-LD), sitemap.xml and robots.txt. Public search indexing requires a publicly accessible deployment. A private Sites deployment requires owner sign-in and is not a globally accessible launch.

## Content and operations
The six spice guides are educational, not confirmed inventory. No certifications, academic institutions, research achievements, addresses, prices, testimonials or stock claims have been added. Phone and WhatsApp: +254 722 658559. Founder: Ann Kaaria, Kenyan researcher and scientist, as supplied by the owner.

WhatsApp links and the form open a conversation; they do not send messages automatically, take payment or confirm an order. The owner must confirm availability, quantities, prices, payment instructions and delivery. International shipping is not promised. Review the operational privacy notice if analytics, payment services or customer storage are introduced later.

## Photography and performance
See dist/credits.html for the photo source and licence. Spice photography is illustrative, not actual Asili stock. The hero image is approximately 207 KB and locally hosted. Founder image loads lazily; the hero has priority loading. Original brand assets are preserved. CSS illustrations use no image requests. Font loading uses display=swap and serif/sans-serif fallbacks. There are no JavaScript frameworks, trackers or third-party scripts. Google Fonts requires an internet connection; local fallbacks work without it.

## Verification
Browser checks at 1440 px and 390 px: no horizontal overflow; images load; category filtering; empty search; product prefill; mobile menu opens and closes. Script syntax and local file/anchor references checked. WhatsApp message construction and field validation checked; no real test enquiry was sent. No claim of a formal accessibility audit, Lighthouse score or measured field performance is made.
