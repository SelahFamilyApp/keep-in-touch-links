# Keep in Touch — Official Links and Mobile QA

Updated: 2026-11-15

## Live deployment
Public GitHub Pages site: https://selahfamilyapp.github.io/keep-in-touch-links/
Personal GitHub repository: https://github.com/SelahFamilyApp/keep-in-touch-links

## Verified owner-supplied links
- WhatsApp: https://wa.me/201552304431
- Facebook (only official page on the site): https://www.facebook.com/KEEPINTOUCH72.2
- TikTok (canonical account URL without temporary sharing parameters): https://www.tiktok.com/@mohamedelshabraw51
- InstaPay payment link: https://ipn.eg/S/mohamed.mansour175505/instapay/5eK26X
- Recipient displayed before payment: mohamed.mansour175505@instapay

The four items above are the **only** contact/payment tiles displayed. Unconfigured Instagram, Telegram, X, Vodafone Cash, Google Reviews/Maps, and the unpublished shop tile have been removed. The disabled call button has also been removed. Save Contact and Share remain usable.

## Mobile browser checks
The Playwright test covers widths of 280, 320, 344, 360, 375, 390, 393, 402, 412, 414, 428, 430, 480, 667 and 768 px. It verifies four tiles in the requested order, all four exact link URLs, the complete colorful logo, no horizontal overflow, and no uncaught JavaScript errors. Live browser results are verified separately after each deployment.

## QR code
The existing printed QR resolves to https://selahfamilyapp.github.io/keep-in-touch-links/ and does **not** need to change when social links are updated. A physical scan on an Android and iPhone remains recommended before mass printing.

## Limits
Mobile-sized browser emulation is not a substitute for a physical iOS Safari or Android camera scan. The listed social/profile URLs were supplied by the business owner; activating them in the site does not authenticate or verify the target accounts' ownership.
