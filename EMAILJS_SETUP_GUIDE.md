# EmailJS Setup Guide for Naanlecious Contact Form

This guide will help you set up EmailJS to enable the contact form functionality on your website.

## 📧 What is EmailJS?

EmailJS allows you to send emails directly from your website without needing a backend server. It's perfect for static websites and supports:

- ✅ Free tier (200 emails/month)
- ✅ No backend required
- ✅ Multiple email services (Gmail, Outlook, etc.)
- ✅ Template customization

## 🚀 Step-by-Step Setup

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click **"Sign Up"** (top right)
3. Create a free account using:
   - Email address
   - Google account
   - GitHub account

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (most common)
   - Outlook
   - Yahoo
   - Or any other SMTP service

#### For Gmail:

1. Select "Gmail"
2. Click **"Connect Account"**
3. Sign in with your Gmail account
4. Allow EmailJS to access your account
5. Give your service a name (e.g., "Naanlecious Contact")
6. Click **"Create Service"**
7. **Copy the Service ID** (you'll need this later)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Set up your template:

#### Template Settings:

- **Template Name**: `Naanlecious Contact Form`

#### Template Content:

```
Subject: New Contact Form Submission from {{from_name}}

Body:
Hello {{to_name}},

You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Naanlecious website contact form.
```

#### Template Variables Used:

- `{{from_name}}` - Full name of sender
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone (optional)
- `{{message}}` - The message content
- `{{to_name}}` - Your restaurant name (fixed: "Naanlecious Team")

4. **Set "To Email"**: Enter the email address where you want to receive contact form submissions (e.g., `hello@naanlecious.com` or your personal email)

5. Click **"Save"**

6. **Copy the Template ID** (you'll need this)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find the **"Public Key"** section
3. **Copy your Public Key** (it looks like: `user_xxxxxxxxxxxxxx`)

### Step 5: Update Your Code

Open `/Users/usmanalyzz/Desktop/Naanlecious/src/components/Contact.jsx` and replace these lines:

```javascript
// Find this section (around line 59-61):
const serviceId = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
const templateId = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
const publicKey = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard
```

Replace with your actual values:

```javascript
const serviceId = "service_xxxxxxx"; // Your Service ID
const templateId = "template_xxxxxxx"; // Your Template ID
const publicKey = "user_xxxxxxxxxxxxxxx"; // Your Public Key
```

### Step 6: Uncomment the EmailJS Code

In the same file, find this section (around line 66-79):

```javascript
// For now, we'll simulate the submission since you need to set up EmailJS
// Uncomment the below code after setting up EmailJS:

/*
await emailjs.send(
  serviceId,
  templateId,
  {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_name: "Naanlecious Team",
  },
  publicKey
);
*/
```

**Uncomment the code** (remove `/*` and `*/`):

```javascript
await emailjs.send(
  serviceId,
  templateId,
  {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_name: "Naanlecious Team",
  },
  publicKey
);
```

And **comment out or remove** the simulated success section (lines 81-101).

### Step 7: Test Your Form

1. Save the file
2. Go to your website
3. Scroll to the Contact section
4. Fill out the form:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Message: This is a test message
5. Click **"Send Message"**
6. Check your email inbox for the message!

## 🔧 Troubleshooting

### Problem: Emails not being sent

**Solution 1: Check EmailJS Dashboard**

- Go to EmailJS dashboard → "Email History"
- Check if the request was received
- Look for any error messages

**Solution 2: Verify Credentials**

- Double-check Service ID, Template ID, and Public Key
- Make sure there are no extra spaces
- Ensure you saved the template in EmailJS

**Solution 3: Gmail App Password (if using Gmail)**
If you have 2-factor authentication enabled:

1. Go to Google Account settings
2. Security → 2-Step Verification → App passwords
3. Generate an app password for EmailJS
4. Use this in EmailJS service settings

### Problem: Form shows success but no email received

**Check:**

- Spam/Junk folder
- "To Email" address in template settings
- Email service is properly connected
- Free tier limit (200 emails/month) not exceeded

### Problem: Console errors about EmailJS

**Check:**

- Package is installed: `npm list @emailjs/browser`
- Import statement is correct at top of file
- No typos in the emailjs.send() function

## 📊 Monitor Your Emails

1. Go to EmailJS Dashboard
2. Click **"Email History"**
3. See all sent emails with:
   - Status (Sent/Failed)
   - Timestamp
   - Recipient
   - Error details (if any)

## 💰 Free Tier Limits

EmailJS free tier includes:

- ✅ 200 emails per month
- ✅ 2 email services
- ✅ Unlimited templates
- ✅ Basic analytics

**If you need more:**

- **Personal Plan**: $7/month - 1,000 emails
- **Professional Plan**: $15/month - 5,000 emails

## 🎯 Best Practices

1. **Set up auto-reply**: Create a second template to send a "Thank you" email to customers
2. **Test regularly**: Send test emails to ensure it's working
3. **Monitor usage**: Check EmailJS dashboard monthly to track email count
4. **Backup plan**: Keep phone and email contact info visible in case form fails
5. **Email notifications**: Set up email alerts when form is submitted

## 📝 Example Configuration

Here's a complete example with real values (replace with yours):

```javascript
const serviceId = "service_abc123"; // From: Email Services → Your Service
const templateId = "template_xyz789"; // From: Email Templates → Your Template
const publicKey = "user_K7mN3pQ9rS2tU5vW"; // From: Account → General → Public Key

await emailjs.send(
  serviceId,
  templateId,
  {
    from_name: "John Doe",
    from_email: "john@example.com",
    phone: "+92 300 1234567",
    message: "I'd like to order pizza naans!",
    to_name: "Naanlecious Team",
  },
  publicKey
);
```

## 🆘 Need Help?

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **Support**: support@emailjs.com
- **Status Page**: https://status.emailjs.com/

## ✅ Quick Checklist

Before going live, verify:

- [ ] EmailJS account created
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Email template created with correct variables
- [ ] Service ID, Template ID, and Public Key copied
- [ ] Code updated with your credentials
- [ ] EmailJS code uncommented in Contact.jsx
- [ ] Test form submission successful
- [ ] Test email received in inbox
- [ ] Auto-reply set up (optional)
- [ ] Email history monitored in dashboard

---

**Your contact form is now fully functional! 🎉**

Users can now send messages directly from your website, and you'll receive them in your email inbox.
