# Succession Website - Deployment Guide

## Quick Start: Deploy to Netlify (Recommended)

This guide will help you deploy your Succession website to your custom domain `successionio.com` using Netlify.

### Prerequisites
- GitHub account (free)
- Netlify account (free)
- Access to your Squarespace DNS settings

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name:** `succession-website`
   - **Description:** Succession.io - Business handover platform website
   - **Visibility:** Public
   - Click "Create repository"

3. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/succession-website`)

### Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd /home/ubuntu/succession-website

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/succession-website

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to Netlify

1. Go to https://netlify.com and sign up (or log in)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and authorize Netlify
4. Select your `succession-website` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - Click "Deploy site"

Netlify will automatically build and deploy your site. You'll get a temporary URL like `https://xxx-yyy.netlify.app`

### Step 4: Connect Your Custom Domain

1. In Netlify dashboard, go to your site settings
2. Click "Domain management" → "Add domain"
3. Enter `successionio.com`
4. Netlify will show you nameserver records to add

### Step 5: Update DNS in Squarespace

1. Log in to your Squarespace account
2. Go to Settings → Domains → Domain Settings
3. Click "Edit DNS" for successionio.com
4. Replace the current nameservers with Netlify's nameservers:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

5. Save changes (DNS propagation takes 24-48 hours, but usually works within minutes)

### Step 6: Enable HTTPS

1. Return to Netlify dashboard
2. Go to "Domain management"
3. Scroll to "HTTPS" section
4. Click "Enable HTTPS" (Netlify provides free SSL certificates)

### Step 7: Verify Your Deployment

After DNS propagates (usually 5-30 minutes):
1. Visit https://successionio.com
2. Your website should be live!
3. Check that HTTPS is working (green lock icon)

---

## Environment Variables

If you need to add environment variables (like SendGrid API key):

1. In Netlify dashboard, go to "Site settings" → "Build & deploy" → "Environment"
2. Add your variables:
   - `SENDGRID_API_KEY`: Your SendGrid API key

3. Redeploy your site after adding variables

---

## Updating Your Website

After deployment, to update your website:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Netlify automatically rebuilds and deploys your changes

---

## Troubleshooting

### Build fails on Netlify
- Check that `npm run build` works locally: `npm run build`
- Verify all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### Domain not working after DNS update
- DNS changes can take up to 48 hours
- Check propagation at https://dnschecker.org
- Verify nameservers are correctly set in Squarespace

### HTTPS not working
- Wait 5-10 minutes after enabling HTTPS
- Clear browser cache and try again
- Check Netlify dashboard for SSL certificate status

---

## Support

For more help:
- Netlify docs: https://docs.netlify.com
- GitHub docs: https://docs.github.com
- Contact: succession@successionio.com
