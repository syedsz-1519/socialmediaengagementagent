# NEXA — System Architecture

**Version:** 1.0  
**Status:** Hackathon MVP

---

## 1. Architecture

```text
                    ┌──────────────────────┐
                    │       NEXA UI        │
                    │ Next.js + TypeScript │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Next.js API Layer  │
                    └───────┬───────┬──────┘
                            │       │
                ┌───────────┘       └────────────┐
                ▼                                ▼
       ┌────────────────┐                ┌────────────────┐
       │    Supabase    │                │    Hindsight   │
       │ Raw experience │                │ Brand memory   │
       │ metadata       │                │ Recall/learning│
       └────────────────┘                └───────┬────────┘
                                                │
                                                ▼
                                      ┌──────────────────┐
                                      │ Groq LLM Agent   │
                                      │ Reasoning        │
                                      │ Generation       │
                                      └──────────────────┘
```

---

## 2. Technology Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Responsive UI

### Backend

- Next.js API routes / server-side functions

### Database

- Supabase

### Memory

- Hindsight Cloud

### LLM

- Groq
- `openai/gpt-oss-120b` as the initial model target

### Deployment

- Vercel

---

## 3. Responsibilities

### Supabase stores

- synthetic post records;
- performance metrics;
- experiments;
- generated content metadata;
- application state;
- user/demo configuration.

### Hindsight stores

- durable brand facts;
- audience preferences;
- learned patterns;
- user corrections;
- successful/failed content lessons;
- evolving strategic beliefs;
- relevant experience summaries.

Do not treat Hindsight as a generic SQL database.

---

## 4. Request Flow

```text
User asks:
"Create tomorrow's Reel"
        ↓
API receives request
        ↓
Retrieve relevant raw context
        ↓
Recall relevant Hindsight memories
        ↓
Build agent context
        ↓
LLM reasons over evidence
        ↓
Generate recommendation
        ↓
Generate Reel package
        ↓
Return response + memory references
        ↓
UI renders recommendation
```

---

## 5. Learning Flow

```text
Historical data
      ↓
Normalize
      ↓
Extract meaningful experience
      ↓
Retain in Hindsight
      ↓
Recall related memories
      ↓
Reflect / synthesize patterns
      ↓
Create/update strategic knowledge
      ↓
Use knowledge in future generation
```

---

## 6. Hindsight Boundary

The critical architectural principle:

> **Raw analytics are facts. Hindsight contains durable experience and knowledge derived from those facts.**

Example:

```text
Raw:
Post 42 → 831 likes, 214 saves

Memory:
Practical website tips have generated strong saves.

Learning:
For this audience, practical educational content
appears more valuable than generic promotion.
```

---

## 7. Failure Handling

### Hindsight unavailable

1. Attempt recall.
2. If unavailable, use recent Supabase context.
3. If necessary, use generic LLM reasoning.
4. Mark response as degraded internally.
5. Never claim a memory was used when it was not.

### Insufficient evidence

The agent must explicitly communicate uncertainty.

---

## 8. Security

- Secrets only in environment variables.
- Never expose Hindsight or Groq keys to the browser.
- Server-side calls for privileged services.
- Validate user/API input.
- Do not commit `.env` files.

---

## 9. Deployment

```text
GitHub
   ↓
Vercel
   ↓
Next.js application
   ↓
Supabase + Hindsight Cloud + Groq
```

---

## 10. Architecture Principle

The product should make this relationship obvious:

> **Memory changes behavior.**

If removing Hindsight produces essentially the same recommendation, the implementation has failed the core hackathon requirement.
