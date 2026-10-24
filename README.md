# PeakCart storefront

Static store hosted on GitHub Pages. **Edit only `config.js`** to turn on payments and email capture.

## To accept payments, provide ONE or more of:
1. **Stripe Payment Links (no code)**: create a Stripe account, make a Payment Link per product in the Stripe Dashboard, then paste them into `stripePaymentLinks` as `{1:"https://buy.stripe.com/..."}`. These work for single-product carts.
2. **Stripe Checkout (full cart)**: paste your **publishable** key (`pk_live_...`) into `stripePublishableKey`, and the URL of a small serverless function (Netlify/Vercel/Cloudflare Worker) into `stripeCheckoutEndpoint`. The function uses your **secret** key, which stays on the server and never goes in this repo. It takes `{items:[{name,unit_amount,quantity}],email,code}`, creates a Checkout Session with `success_url = https://pravtut.github.io/thank-you.html`, and returns `{url}`.
3. **PayPal**: create a PayPal Business account and a REST app at developer.paypal.com, then paste its **Client ID** into `paypalClientId`. PayPal buttons will appear at checkout.

Until one is set, checkout shows "Payments coming soon" and collects notify-me emails.

## Email signups
Create a free Formspree form and paste `https://formspree.io/f/XXXX` into `formEndpoint`. Create the code `WELCOME10` (10% off) in Stripe/PayPal/Shopify as well.

## Before taking orders
Set up supplier accounts (CJdropshipping / AliExpress + DSers), set a real contact email, review your policies (privacy under PIPEDA), and register for GST/HST once your revenue requires it.
