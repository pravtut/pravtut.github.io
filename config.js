/* ============================================================
   PeakCart STORE CONFIG — the ONLY file you need to edit.
   Leave a value as "" to keep that feature in "coming soon" mode.
   ============================================================ */
window.STORE_CONFIG = {
  storeName: "PeakCart",
  currency: "USD",
  contactEmail: "hello@yourdomain.com",        // your real support email
  freeShippingOver: 59,                         // USD
  flatShipping: 5.99,
  announcement: "Free shipping on orders over $59 · 30-day returns",

  /* ---- PAYMENTS (pick one or more) ---- */
  // A) Stripe Checkout (recommended): your PUBLISHABLE key (pk_live_... or pk_test_...)
  //    + a URL of YOUR backend/serverless function that creates a Checkout Session
  //    and returns JSON {url:"https://checkout.stripe.com/..."}. Never put a secret key (sk_...) here.
  stripePublishableKey: "",
  stripeCheckoutEndpoint: "",
  // B) Stripe Payment Links (no code): paste one link per product rank, e.g. {1:"https://buy.stripe.com/abc"}.
  //    Used when the cart has a single product type. Optional fallback "any amount" link below.
  stripePaymentLinks: {},
  // C) PayPal Smart Buttons: your PayPal REST app CLIENT ID (public, safe to publish).
  paypalClientId: "",

  /* ---- EMAIL SIGNUP ---- */
  // Free form endpoint, e.g. Formspree "https://formspree.io/f/xxxxxx" (free tier). Used for newsletter + contact form.
  formEndpoint: "",
  welcomeCode: "WELCOME10",   // create this 10%-off code in your checkout platform
  welcomePercent: 10
};
