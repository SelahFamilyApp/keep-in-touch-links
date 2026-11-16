# Keep in Touch — Mobile QA and Official Links

Updated: 2026-11-16

## Website and source
- Public HTTPS: https://selahfamilyapp.github.io/keep-in-touch-links/
- Owner's GitHub repository: https://github.com/SelahFamilyApp/keep-in-touch-links

## Active tiles (six)
1. WhatsApp — https://wa.me/201552304431
2. Facebook — https://www.facebook.com/KEEPINTOUCH72.2
3. TikTok — https://www.tiktok.com/@mohamedelshabraw51
4. InstaPay — https://ipn.eg/S/mohamed.mansour175505/instapay/5eK26X
5. WE Pay — owner-provided wallet number `01552304431` (international `+201552304431`), one-tap copy button, **not** a direct payment link
6. Location — https://maps.app.goo.gl/WRPARNSHWeSmmw7y8

The InstaPay recipient remains visible as `mohamed.mansour175505@instapay`. The WE Pay tile exposes the recipient's number and copies it when tapped. Before confirming any transfer, customers should check the recipient's name in their payment app. We have not independently verified the owner-provided wallet registration or conducted a real transfer.

## WE Pay behavior
According to Telecom Egypt's official WE Pay documentation, transfers use the recipient wallet's phone number. The website does **not** invent a per-recipient WE Pay transfer URL. The tile is an accessible native button that copies `01552304431` to the clipboard on secure HTTPS origins, with fallback copy behavior and a status toast.

Official guidance: https://www.te.eg/web/guest/personal/we-pay

## Mobile browser QA
Playwright desktop Chrome emulated mobile widths: 280, 320, 344, 360, 375, 390, 393, 402, 412, 414, 428, 430, 480, 667, 768 px.

Result: 15/15 passed on the live HTTPS site. Checks include six tiles in correct order, WE Pay button/number, other exact URLs, full logo visible without clipping, no horizontal overflow, no JavaScript errors, and Save Contact/Share remaining available. At width 390 px, automation also clicked the WE Pay tile and verified the clipboard contained `01552304431`, with the success toast.

The tests are browser emulation rather than physical iPhone and Android device checks; iOS WebKit was unavailable.

## QR code
The existing stand QR encodes `https://selahfamilyapp.github.io/keep-in-touch-links/`, which is unchanged. Printing a new QR is not required when page content is updated. Test any physical printed stand on Android and iPhone before mass production.
