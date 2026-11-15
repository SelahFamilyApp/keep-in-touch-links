# Keep in Touch — Mobile Logo and QR Validation

Validated: 2026-11-15

## Change
- Replaced the previous truncated logo asset with `assets/kit-color-logo-v2.png`, containing the full gift artwork, ribbon and "Gift Shop" lettering.
- The logo cover is now content-sized, with proportional image scaling, sufficient white padding, no overlay, and no clipping.
- The website remains a static GitHub Pages site in `SelahFamilyApp/keep-in-touch-links`.

## Browser-emulated responsive QA
Using desktop Google Chrome via Playwright with touch and mobile device scaling enabled at viewport widths: **280, 320, 344, 360, 375, 390, 393, 402, 412, 414, 428, 430, 480, 667, and 768 px**.

Result: **15/15 passed**. Every tested viewport had a loaded 930 × 640 PNG logo fully inside the cover, the heading after the image, 11 tiles inside the viewport, no horizontal document overflow, and no uncaught JavaScript errors. WhatsApp was verified to point to `https://wa.me/201552304431`.

## QR-code check
The existing 686 × 686 PNG QR was decoded programmatically with OpenCV into the exact URL:
`https://selahfamilyapp.github.io/keep-in-touch-links/`

The QR contains a standard HTTPS URL; iPhone and Android cameras support standard URL QR codes. This code-level check **does not replace a physical-device scan**, especially of a printed acrylic stand. The final printed sample should be scanned with both an iPhone and an Android device.

## Testing limits
- iOS Safari WebKit was not installed in the testing environment. The iPhone-sized viewports were emulated in Chrome, not tested in Safari on an actual iPhone.
- The responsive test validates this public QR landing page, not every storefront/catalog view of the separate local V7 demo.
- Placeholder social/payment buttons remain intentionally disabled pending the business's official accounts.
