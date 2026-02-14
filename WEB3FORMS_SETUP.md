# Web3Forms Quick Setup - 2 Minutes! ⚡

Your contact form is configured to send emails to: **mmaan3495@gmail.com**

## 🚀 Get Your Free Access Key (Takes 2 minutes)

### Step 1: Get Your Access Key

1. Go to: **https://web3forms.com**
2. Enter your email: `mmaan3495@gmail.com`
3. Click **"Create Access Key"**
4. Check your email inbox for the access key
5. Copy the access key (looks like: `abc123def-456-789-abc-def123456789`)

### Step 2: Update the Code

Open: `/Users/usmanalyzz/Desktop/Naanlecious/src/components/Contact.jsx`

Find line 67:

```javascript
access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
```

Replace with your actual key:

```javascript
access_key: "abc123def-456-789-abc-def123456789",
```

### Step 3: Save & Test!

1. Save the file
2. Go to your website
3. Fill out the contact form
4. Click "Send Message"
5. Check `mmaan3495@gmail.com` inbox!

## ✅ That's It!

Your form is now fully functional and sending emails to `mmaan3495@gmail.com`!

## 📧 Email Format

You'll receive emails like this:

```
Subject: New Contact Form Submission - Naanlecious

From: Naanlecious Website
Reply-To: [customer's email]

Name: John Doe
Email: customer@example.com
Phone: +92 300 1234567

Message:
I would like to order pizza naans!
```

## 🎯 Benefits of Web3Forms

- ✅ **Free**: 250 submissions/month
- ✅ **No Backend**: Works with static sites
- ✅ **Simple**: Just one access key needed
- ✅ **Fast**: 2-minute setup
- ✅ **Reliable**: 99.9% uptime
- ✅ **Spam Protection**: Built-in
- ✅ **No Credit Card**: Free tier forever

## 🔧 Troubleshooting

### Problem: Not receiving emails?

1. **Check Spam Folder**: Web3Forms emails might land in spam initially
2. **Verify Access Key**: Make sure you copied the entire key
3. **Check Email**: Confirm `mmaan3495@gmail.com` is correct in line 74
4. **Browser Console**: Open DevTools → Console for any error messages

### Problem: Form shows error message

- Check your internet connection
- Verify the access key is correct
- Make sure you saved the file
- Try refreshing the page

## 💡 Pro Tips

1. **Mark as Not Spam**: When you receive the first email, mark it as "Not Spam" in Gmail
2. **Create Filter**: Create a Gmail filter for `web3forms.com` to organize emails
3. **Auto-Reply**: Web3Forms supports auto-reply emails (premium feature)
4. **Custom Domain**: You can use your own email domain (premium)

## 📊 Monitor Your Submissions

1. Go to: https://web3forms.com/dashboard
2. Enter your email: `mmaan3495@gmail.com`
3. View all form submissions with timestamps

## 🆓 Free Tier Limits

- 250 submissions per month
- Unlimited forms
- Spam protection included
- Email notifications
- Webhook support

**Need more?**

- Pro: $5/month - 5,000 submissions
- Business: $15/month - 25,000 submissions

## 🎨 Customize Email Template (Optional)

You can add more fields to the email by updating the `body` in Contact.jsx:

```javascript
body: JSON.stringify({
  access_key: "your-key-here",
  name: `${formData.firstName} ${formData.lastName}`,
  email: formData.email,
  phone: formData.phone,
  message: formData.message,
  subject: "New Contact Form Submission - Naanlecious",
  from_name: "Naanlecious Website",
  to_email: "mmaan3495@gmail.com",
  // Add custom fields:
  restaurant: "Naanlecious Gujranwala",
  form_type: "Contact Form",
  timestamp: new Date().toLocaleString(),
}),
```

## 🔐 Security

- ✅ Access key is safe to expose in frontend code
- ✅ HTTPS encryption for all requests
- ✅ CAPTCHA protection available
- ✅ Rate limiting to prevent abuse

## 📞 Support

- **Documentation**: https://docs.web3forms.com
- **Status**: https://status.web3forms.com
- **Email**: support@web3forms.com

---

## Quick Checklist ✓

- [ ] Go to https://web3forms.com
- [ ] Enter mmaan3495@gmail.com
- [ ] Get access key from email
- [ ] Paste key in Contact.jsx (line 67)
- [ ] Save file
- [ ] Test form on website
- [ ] Check mmaan3495@gmail.com inbox
- [ ] Mark first email as "Not Spam"

**Your contact form will be live in 2 minutes!** 🎉
