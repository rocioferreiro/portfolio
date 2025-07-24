# WhatsApp Sharing Fix Guide

## Changes Made

I've implemented several fixes to ensure your portfolio displays correctly when shared on WhatsApp:

### 1. **Added Explicit Meta Tags**
- Added direct `<meta>` tags in the `<head>` section for better compatibility
- WhatsApp sometimes doesn't read Next.js metadata properly, so explicit tags ensure compatibility

### 2. **Image Optimization for Social Sharing**
- Added `og:image:secure_url` for HTTPS compatibility
- Added `og:image:type` to specify the image format
- Added proper image dimensions (1200x630) - the recommended size for social media

### 3. **Created Debug Page**
- Added `/og-debug` page to help you test and troubleshoot
- Includes links to testing tools

## How to Test & Fix

### Step 1: Use Facebook's Sharing Debugger
WhatsApp uses Facebook's Open Graph system, so test there first:

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://rocioferreiro.com`
3. Click "Debug" to see what WhatsApp will see
4. If needed, click "Scrape Again" to refresh the cache

### Step 2: Check Your OG Image
Make sure your `/public/og-image.png` file:
- Is exactly **1200x630 pixels**
- Is under **8MB** in size  
- Is accessible at `https://rocioferreiro.com/og-image.png`
- Has good contrast and readable text

### Step 3: Test the Debug Page
Visit your new debug page at `/og-debug` to access testing tools easily.

## Common WhatsApp Issues & Solutions

### Issue 1: "Image not showing"
**Solutions:**
- Make sure the image URL is publicly accessible
- Use HTTPS (not HTTP)
- Check image file size (under 8MB)
- Use Facebook debugger to refresh cache

### Issue 2: "Old content showing" 
**Solutions:**
- WhatsApp caches content for 7 days
- Use Facebook debugger and click "Scrape Again"
- Wait 24-48 hours for natural cache refresh

### Issue 3: "Title/Description missing"
**Solutions:**
- Check that meta tags are in the `<head>` section
- Ensure content is under character limits (title: 60 chars, description: 160 chars)
- Make sure the page is publicly accessible

## Testing Your Fixes

1. **Desktop Test:**
   ```
   View Page Source → Search for "og:title" → Verify meta tags exist
   ```

2. **Facebook Debugger:**
   - Enter: `https://rocioferreiro.com`
   - Check all fields are populated correctly

3. **WhatsApp Test:**
   - Share the link in a WhatsApp chat
   - Preview should show title, description, and image

## If Still Not Working

If the preview still doesn't show after these fixes:

1. **Check your hosting:** Ensure your site is live and publicly accessible
2. **Verify image format:** PNG, JPG, or GIF work best
3. **Check file permissions:** Make sure og-image.png is publicly readable
4. **Wait for cache:** WhatsApp may take 24-48 hours to update
5. **Test other URLs:** Try sharing a specific page like `/og-debug`

## Recommended Image Specifications

- **Size:** 1200x630 pixels (1.91:1 ratio)
- **Format:** PNG or JPG
- **File size:** Under 8MB (preferably under 1MB)
- **Content:** Include your name, title, and professional photo
- **Text:** Large enough to read on mobile devices

Your portfolio should now work perfectly for WhatsApp sharing!
