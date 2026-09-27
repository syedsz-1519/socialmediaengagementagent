# NEXA — AI Social Media Strategist with Persistent Memory

> **Your audience has a memory. Your AI should too.**  
> *Turn your social media into a learning brand.*

---

## 🌟 Overview

**NEXA** is an AI social-media strategist designed for small-business owners, founders, and creator-led brands. Unlike generic AI copywriters that regenerate prompts in isolation, NEXA remembers meaningful audience interactions, validates patterns from historical performance, and uses those learnings to recommend and generate better content.

### Core Architecture Principle

```text
Social Account & Audience Interactions
               ↓
        Durable Memory (Hindsight Cloud)
               ↓
        Semantic Recall
               ↓
   LLM Strategic Reasoning (Groq)
               ↓
    Personalized High-ROI Content
```

---

## 🚀 Quickstart

### Prerequisites

- Node.js 18+ (tested on Node 20 / 24)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/syedsz-1519/socialmediaengagementagent.git
cd socialmediaengagementagent

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧭 Routes & Application Structure

- `/dashboard` — Brand intelligence KPIs, top learned patterns, learning activity timeline, and primary recommended next action.
- `/memory` — Complete Hindsight brand memory library categorized into Audience, Content, Performance, Brand, Strategy, and Feedback with supporting post telemetry and detail modal.
- `/content` — Memory-informed content generator with prompt studio, fast action chips, realistic Instagram Reel package, and the flagship **"Why NEXA chose this"** memory influence breakdown.
- `/learning` — Chronological 30-day learning progression (from Day 4 to Day 30) and active strategic beliefs.
- `/experiments` — A/B hypothesis engine showing tested variants, results (+43% comments, +210% saves), and learned principles.
- `/settings` — Brand profile configuration, AI directives, and Hindsight/Groq/Supabase integration boundaries.

---

## 🔌 Service Integration Points

The application skeleton is architected with clean service boundaries ready for live credentials:

- `lib/services/hindsight/` — Hindsight Cloud client, `retainMemory`, `listMemories`, and `recallRelevantMemories`.
- `lib/services/llm/` — Groq LLM reasoning interface (`openai/gpt-oss-120b`).
- `lib/services/analytics/` — Telemetry pattern extraction.
- `app/api/` — API route handlers for `/api/brand`, `/api/memories`, `/api/content/generate`, `/api/learning`, and `/api/experiments`.

---

## 🛡️ Connected Brand — Byte Brothers

Byte Brothers is NOT a fictional demo brand — it is the team's real web development & digital product agency ([Instagram: @bytebrothers_](https://www.instagram.com/bytebrothers_/)), with the core positioning *"YOUR IDEA. OUR CODE."*

NEXA uses Byte Brothers as its initial connected brand to demonstrate memory-backed intelligence on real agency positioning and audience needs.

> **Data Disclosure**: Historical analytics used during the hackathon are explicitly labeled: *"Synthetic historical data for hackathon demonstration."* They are never presented as actual Instagram analytics.
