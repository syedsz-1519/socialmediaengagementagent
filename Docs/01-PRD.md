# NEXA — Product Requirements Document

**Version:** 1.0  
**Status:** Hackathon MVP — Locked  
**Hackathon deadline:** 29 September 2026  
**Team:** Hamid, Syed Shahnawaz, Rithvik Shiva

---

## 1. Product

**NEXA** is an AI social-media strategist that turns a social-media account into a learning brand.

NEXA remembers meaningful audience interactions, learns patterns from historical performance, and uses those learnings to recommend and generate better content.

### Core promise

> **NEXA remembers what your audience teaches you — and uses it to make your next content smarter.**

### Long-term positioning

> **Turn your social media into a learning brand.**

---

## 2. Problem

Small-business owners often manage their own social media. They can see likes, comments, views, saves, and shares, but the data does not automatically become durable strategic knowledge.

Existing AI content tools can generate captions, hooks, scripts, and ideas, but usually start from a generic prompt or limited context.

The core problem is:

> **AI can generate content, but it does not necessarily learn what a specific audience has repeatedly responded to.**

---

## 3. Target User

### Primary persona

A small-business owner who personally manages Instagram.

They:
- have limited time;
- publish inconsistently;
- have historical audience data;
- struggle to understand what actually works;
- want practical content recommendations rather than analytics alone;
- do not want to manually explain their brand every time.

---

## 4. Hackathon MVP Goal

Demonstrate that NEXA becomes more useful as it accumulates experience.

The MVP must prove this loop:

```text
Historical experiences
        ↓
Hindsight memory
        ↓
Recall
        ↓
Reflection / learning
        ↓
Brand knowledge
        ↓
Personalized recommendation
        ↓
Generated content
```

The demo should make the difference between a generic AI response and a memory-informed response obvious.

---

## 5. Primary Hackathon Use Case

The demo brand is **Byte Brothers**, a web-development agency.

NEXA will analyze synthetic historical social-media data representing posts, audience reactions, topics, formats, hooks, and performance.

Example learned patterns:

- business pain-point hooks receive more comments;
- website transformation content receives more saves;
- generic service promotion underperforms;
- educational content performs better than generic promotional content;
- certain posting times produce stronger reach.

NEXA should not merely display these facts. It should use them to change future recommendations.

---

## 6. Core User Journey

1. User opens NEXA.
2. A demo brand is already populated.
3. User views the dashboard.
4. NEXA has historical audience experience.
5. User asks: **“Create tomorrow's Instagram Reel.”**
6. NEXA recalls relevant memories.
7. NEXA explains why the recommendation was selected.
8. NEXA generates:
   - hook;
   - Reel concept;
   - short script;
   - caption;
   - hashtags;
   - recommended posting time.
9. User opens **View Memories**.
10. User sees the memories/evidence that influenced the recommendation.
11. User can inspect confidence and learning history.

---

## 7. Core Features

### MUST HAVE

#### F1 — Persistent memory

NEXA must use Hindsight to store and retrieve durable brand/audience knowledge.

#### F2 — Audience learning

NEXA must derive higher-level insights from historical experiences.

#### F3 — Memory-backed recommendations

Recommendations must use recalled memories rather than only the latest user prompt.

#### F4 — Explainability

NEXA must show which memories influenced a recommendation.

#### F5 — Content generation

The primary generated asset is an Instagram Reel package:

```text
Hook
Concept
Script
Caption
Hashtags
Recommended posting time
```

#### F6 — Memory UI

Users must be able to inspect important learned memories.

#### F7 — Confidence

Important memories/insights should have a confidence indicator and supporting evidence.

#### F8 — Learning timeline

Users should be able to see how important beliefs changed over time.

---

## 8. SHOULD HAVE

- CSV historical-data import;
- active hypotheses;
- experiment representation;
- memory correction/deletion;
- fresh-brand comparison;
- “without memory vs with memory” demonstration;
- basic critical automated tests.

---

## 9. WON'T HAVE IN HACKATHON MVP

- Instagram OAuth;
- live Instagram API;
- automatic Instagram publishing;
- automatic scheduling;
- APK/mobile application;
- autonomous video generation;
- payment system;
- email;
- notifications;
- multi-user collaboration;
- real-time Instagram analytics.

These are long-term product capabilities.

---

## 10. Long-Term Vision

The production product may eventually:

```text
Connect Instagram
      ↓
Analyze historical account
      ↓
Continuously collect audience signals
      ↓
Store durable memories
      ↓
Learn audience preferences
      ↓
Identify content opportunities
      ↓
Generate content
      ↓
Generate creative/video
      ↓
Choose posting time
      ↓
Schedule/publish
      ↓
Measure results
      ↓
Learn again
```

The hackathon MVP demonstrates the intelligence layer of this future system.

---

## 11. Non-Functional Requirements

- Fast interaction suitable for live demonstration.
- Clear error states.
- Graceful LLM/Hindsight failure fallback.
- Desktop-first polished interface.
- Fully responsive web interface.
- Clean GitHub repository.
- Environment secrets must never be committed.
- Hindsight usage must be visible and documented.
- Agent must avoid inventing conclusions when evidence is insufficient.

---

## 12. Evidence Rule

NEXA must distinguish:

### Observed fact

> Post #17 received 214 saves.

### Derived insight

> Educational posts have historically generated stronger saves.

### Recommendation

> Use an educational angle for tomorrow's Reel.

The agent must not present weak evidence as certain knowledge.

If evidence is insufficient:

> **“I don't have enough evidence to confidently conclude this yet.”**

---

## 13. Success Criteria

The MVP is successful if a judge can understand within approximately 60 seconds:

1. What problem NEXA solves.
2. What Hindsight contributes.
3. What NEXA remembers.
4. How NEXA learns.
5. How that learning changes a future recommendation.
6. Why this is more useful than a generic AI content generator.

---

## 14. Hackathon Judging Alignment

| Criterion | NEXA response |
|---|---|
| Innovation — 30% | Social strategy based on accumulated audience learning |
| Hindsight — 25% | Persistent brand/audience memory is central |
| Technical — 20% | Hindsight + LLM + Supabase + agent workflow |
| UX — 15% | Dashboard → memory → generated recommendation |
| Real-world impact — 10% | Helps small-business owners turn social data into reusable strategy |

---

## 15. Product Boundary

NEXA is **not** primarily an AI copywriter.

NEXA is:

> **An AI strategist that learns from audience experience and uses that knowledge to decide what content should come next.**

Content generation is the visible output of the learning system.

---

## 16. MVP Definition of Done

The MVP is complete when:

- [ ] NEXA is deployed.
- [ ] Hindsight is connected.
- [ ] Synthetic Byte Brothers history exists.
- [ ] Historical experiences are stored/processed.
- [ ] Hindsight contains durable memories.
- [ ] Agent can recall relevant memories.
- [ ] Agent can generate a memory-informed Reel package.
- [ ] UI displays influencing memories.
- [ ] Confidence/evidence is visible.
- [ ] Learning timeline is visible.
- [ ] Hindsight failure fallback works.
- [ ] Demo can be completed without manual database operations.
- [ ] README explains architecture and Hindsight usage.
