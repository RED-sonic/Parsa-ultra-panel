const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// i18n simple loader (no external lib to keep scaffold minimal)
function loadLocale(lang) {
  try {
    const p = path.join(__dirname, 'i18n', `${lang}.json`);
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    return {};
  }
}

app.get('/i18n/:lang', (req, res) => {
  const lang = req.params.lang === 'fa' ? 'fa' : 'en';
  res.json(loadLocale(lang));
});

// Auth placeholders
app.get('/auth/github', (req, res) => {
  // Redirect user to GitHub OAuth flow (placeholder)
  res.json({ ok: true, note: 'GitHub OAuth placeholder - add real implementation and secrets' });
});

app.get('/auth/google', (req, res) => {
  res.json({ ok: true, note: 'Google OAuth placeholder - add real implementation and secrets' });
});

app.post('/auth/email', (req, res) => {
  // Send login email - placeholder
  res.json({ ok: true, note: 'Email login placeholder - configure SMTP and implement send' });
});

// Admin feature flags
let featureFlags = {
  new_ui: false,
  stripe_subscriptions: false
};

app.get('/admin/feature-flags', (req, res) => {
  res.json(featureFlags);
});
app.post('/admin/feature-flags', (req, res) => {
  const body = req.body || {};
  featureFlags = { ...featureFlags, ...body };
  res.json(featureFlags);
});

// Stripe webhook skeleton
app.post('/webhook/stripe', (req, res) => {
  // Verify signature with STRIPE_WEBHOOK_SECRET in production
  console.log('Stripe webhook received', req.body);
  res.status(200).send('ok');
});

app.listen(PORT, () => {
  console.log(`CACTUS Panel scaffold running on http://localhost:${PORT}`);
});
