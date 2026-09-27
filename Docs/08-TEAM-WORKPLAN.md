# NEXA — Team Workplan

**Version:** 1.0

---

## Team

### Hamid

Primary ownership:

- product;
- architecture;
- Hindsight;
- AI/LLM;
- backend;
- Supabase;
- agent;
- integration;
- deployment;
- demo.

### Syed Shahnawaz

Primary ownership:

- frontend;
- dashboard;
- memory UI;
- generated-content UI;
- responsive design;
- visual polish.

### Rithvik Shiva

Role pending response.

Do not block the project waiting for role confirmation.

---

## Git Workflow

Repository:

```text
nexa/
```

Branches:

```text
main
develop
feature/<name>
```

Rules:

1. Never push unfinished work directly to `main`.
2. Each feature gets a branch.
3. Keep commits small and descriptive.
4. Pull before starting work.
5. Merge tested work into `develop`.
6. `main` is submission-ready.

---

## Work Order

### Phase 1 — Foundation

Hamid:

- initialize Next.js;
- configure Supabase;
- configure Hindsight;
- configure Groq;
- environment variables;
- base API.

Shahnawaz:

- application shell;
- navigation;
- dashboard skeleton;
- design system.

---

### Phase 2 — Data

Hamid:

- generate 20-post synthetic dataset;
- seed Supabase;
- create experience-processing flow;
- establish Hindsight memory flow.

---

### Phase 3 — Agent

Hamid:

- recall;
- reasoning;
- recommendation;
- content generation;
- memory references;
- confidence.

---

### Phase 4 — UI

Shahnawaz:

- Memory screen;
- generated-content screen;
- learning timeline;
- responsive polish.

---

### Phase 5 — Integration

Hamid:

- connect frontend to agent;
- connect memory references;
- error handling;
- fallback behavior.

---

### Phase 6 — Demo

Everyone:

- test complete flow;
- remove broken features;
- polish presentation;
- verify Hindsight evidence;
- record demo.

---

## Priority Rule

If time becomes limited:

### Keep

1. Hindsight memory
2. Recall
3. Learning
4. Memory-backed recommendation
5. Generated Reel
6. Memory UI

### Sacrifice first

1. Fancy animations
2. Experiments UI
3. CSV import UI
4. Fresh-brand mode
5. Extra content types
6. Advanced analytics

Never sacrifice the memory → learning → recommendation loop.
