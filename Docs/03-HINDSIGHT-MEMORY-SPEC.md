# NEXA — Hindsight Memory Specification

**Version:** 1.0

---

## 1. Purpose

Hindsight is the core learning layer of NEXA.

NEXA should not simply retrieve previous conversations. It should build durable knowledge about:

- the brand;
- its audience;
- content performance;
- successful patterns;
- failed patterns;
- user preferences;
- strategic beliefs.

---

## 2. Memory Categories

### BRAND

Examples:

- brand voice;
- target audience;
- positioning;
- business goals;
- content constraints.

### AUDIENCE

Examples:

- audience preferences;
- common reactions;
- content formats that resonate;
- recurring pain points.

### CONTENT

Examples:

- successful hooks;
- successful topics;
- failed formats;
- high-performing concepts.

### PERFORMANCE

Examples:

- recurring engagement patterns;
- posting-time patterns;
- save/share/comment tendencies.

### FEEDBACK

Examples:

- user corrections;
- approved ideas;
- rejected ideas;
- explicit instructions.

### STRATEGY

Examples:

- learned content principles;
- hypotheses;
- evolving beliefs.

---

## 3. Memory Lifecycle

```text
Experience
    ↓
Retain
    ↓
Recall
    ↓
Reflect
    ↓
Update knowledge
    ↓
Use in future action
```

---

## 4. Experience Retention

Not every raw event needs to become a permanent memory.

Prefer meaningful events:

- unusually high-performing posts;
- unusually poor-performing posts;
- repeated performance patterns;
- explicit user feedback;
- significant audience behavior;
- experiment results.

---

## 5. Memory Example

### Experience

```text
Post:
"5 website mistakes costing local businesses customers"

Views: 8,400
Likes: 610
Comments: 84
Saves: 390
Shares: 122
```

### Derived memory

> Practical business-problem content generates strong saves and shares for this audience.

### Supporting evidence

- 5 related posts
- 3 months of synthetic history

### Confidence

`High`

---

## 6. Confidence

Confidence should reflect evidence strength.

Example:

```text
Insight:
Question hooks increase comments.

Confidence:
87%

Evidence:
7 relevant posts
3 experiments
```

Confidence is not a claim of statistical certainty.

---

## 7. Recency

When older and newer evidence conflicts, use:

- recency;
- amount of evidence;
- consistency;
- relevance.

Example:

```text
Old:
Giveaway posts performed well.

Recent:
Giveaway posts underperformed repeatedly.

Current belief:
Giveaways are currently weaker for this audience.
```

---

## 8. Contradiction Handling

NEXA should not silently overwrite important knowledge.

When conflicting evidence exists:

```text
Old belief
     +
New evidence
     ↓
Reflect
     ↓
Updated belief
```

The UI may show:

> **Strategy changed**

with the reason.

---

## 9. Memory Explainability

Every important recommendation should be able to answer:

> **Which memories influenced this decision?**

Example:

```text
Memory 1:
Problem-based hooks → high comments

Memory 2:
Website transformations → high saves

Memory 3:
Generic promotion → weak engagement
```

---

## 10. User Corrections

Explicit user corrections should become durable knowledge where appropriate.

Example:

> “Never use clickbait.”

Future recommendations must respect this instruction.

---

## 11. Memory Editing

The MVP should expose a basic interface for:

- viewing memory;
- correcting memory;
- deleting memory where supported.

---

## 12. Memory Quality Rules

NEXA must avoid:

- storing every trivial interaction;
- treating one post as universal truth;
- confusing correlation with certainty;
- inventing audience preferences;
- claiming Hindsight was used when it was not.

---

## 13. Core Test

A successful Hindsight implementation must demonstrate:

### Before learning

> Generic recommendation.

### After learning

> Recommendation adapted to accumulated brand/audience experience.

The difference must be visible in the demo.
