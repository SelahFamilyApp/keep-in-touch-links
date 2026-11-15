# Keep in Touch — Mobile QA and Links

Updated: 2026-11-15

## Website
- Public: https://selahfamilyapp.github.io/keep-in-touch-links/
- Owner's GitHub: https://github.com/SelahFamilyApp/keep-in-touch-links

## Active buttons (only these five)
1. WhatsApp — https://wa.me/201552304431
2. Facebook — https://www.facebook.com/KEEPINTOUCH72.2
3. TikTok — https://www.tiktok.com/@mohamedelshabraw51
4. InstaPay — https://ipn.eg/S/mohamed.mansour175505/instapay/5eK26X
5. Location — https://maps.app.goo.gl/WRPARNSHWeSmmw7y8 (owner-supplied Google Maps location)

The vCard (Save Contact) includes all relevant profile URLs including Location. The InstaPay recipient shown on the page remains `mohamed.mansour175505@instapay`. The logo scales without clipping on common mobile screens.

## QA procedure
Playwright mobile Chrome viewports: 280, 320, 344, 360, 375, 390, 393, 402, 412, 414, 428, 430, 480, 667, 768 px. Checks: all five exact links, all 5 cards inside screen, no disabled tiles, full logo inside cover, no horizontal overflow, no uncaught JavaScript errors, and Save Contact and Share buttons available. Browser tests are simulations, not physical iOS/Android testing.

## QR code
The stand QR is encoded to `https://selahfamilyapp.github.io/keep-in-touch-links/`, which remains unchanged. Changing contact links or adding Google Maps **does not require reprinting the QR**. Confirm a print proof by scanning with both an Android camera and an iPhone camera before bulk printing.

## Limitations
The short Google Maps link was supplied by the owner and was observed to redirect to Google Maps for a Keep in Touch location in Alexandria; different users may encounter Google's consent screen. No GPS coordinates or street address were inferred for the saved contact card.
