

# Fix EmailJS Service ID

## Problem Identified
The contact form is failing with "service_not_found" error because the wrong Service ID is configured.

**Current (incorrect):** `service_lwghpoh`  
**Correct:** `service_xist4sl`

---

## Fix Required

**File:** `src/components/Contact.tsx`

**Change on line 43:**
```text
FROM: 'service_lwghpoh'
TO:   'service_xist4sl'
```

---

## Final EmailJS Configuration

After the fix, your credentials will be:

| Setting | Value |
|---------|-------|
| Service ID | `service_xist4sl` |
| Template ID | `template_kkkweml` |
| Public Key | `qNsXiO1na7VEZExFS` |

---

## What Happens Next

1. I update the Service ID in the code
2. You test the contact form by submitting a message
3. You should receive an email at the address configured in your EmailJS template

---

## Verification Checklist

Before testing, please confirm in your EmailJS dashboard (https://dashboard.emailjs.com):
- Service ID `service_xist4sl` exists and is active
- Template ID `template_kkkweml` is linked to that service
- Your email template uses these variables: `from_name`, `from_email`, `message`, `to_name`

