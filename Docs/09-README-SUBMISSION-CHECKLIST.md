# NEXA — Submission Checklist

## Required

- [ ] GitHub repository
- [ ] Clean README
- [ ] Live demo
- [ ] Demo video
- [ ] Hindsight explanation
- [ ] Article/content deliverable
- [ ] Social media post
- [ ] Video/content deliverable
- [ ] All team members complete required content deliverables

---

## GitHub README Must Explain

### 1. Problem

AI content generation is generic when it lacks accumulated audience knowledge.

### 2. Solution

NEXA builds persistent brand/audience memory and learns from historical interactions.

### 3. Why Hindsight

Hindsight provides the persistent memory layer that allows NEXA to retain, recall, and use accumulated experience.

### 4. Architecture

```text
Next.js
+
Supabase
+
Hindsight
+
Groq
```

### 5. Demo

Show:

```text
History
→ Memory
→ Learning
→ Recommendation
→ Content
```

### 6. Future

Instagram integration, autonomous analysis, creative generation, scheduling, and continuous learning.

---

## Final Technical Checks

- [ ] No API keys committed
- [ ] `.env.example` exists
- [ ] Production URL works
- [ ] Hindsight connection works
- [ ] Groq connection works
- [ ] Supabase connection works
- [ ] Error states tested
- [ ] Mobile UI tested
- [ ] Demo data seeded
- [ ] No fake claims presented as real analytics
- [ ] README setup instructions work from a clean clone

---

## Final Judge Test

A new person should be able to understand:

> **What does NEXA remember?**

> **How does it learn?**

> **How does that memory change its behavior?**

If those three questions cannot be answered from the live demo, the project is not ready.
