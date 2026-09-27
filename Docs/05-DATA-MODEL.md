# NEXA — Data Model

**Version:** 1.0

---

## 1. Principle

Supabase stores structured application data and raw experiences.

Hindsight stores durable semantic memory and learned knowledge.

---

## 2. Core Tables

### brands

```text
id
name
industry
target_audience
brand_voice
primary_goal
created_at
```

### social_posts

```text
id
brand_id
published_at
format
topic
hook
caption
views
likes
comments
saves
shares
engagement_rate
created_at
```

### experiments

```text
id
brand_id
name
hypothesis
variant_a
variant_b
result
conclusion
status
created_at
```

### agent_interactions

```text
id
brand_id
user_message
agent_response
created_at
```

### generated_content

```text
id
brand_id
content_type
hook
concept
script
caption
hashtags
recommended_time
confidence
created_at
```

### memory_references

```text
id
brand_id
generated_content_id
memory_identifier
reason
created_at
```

---

## 3. Derived Metrics

Engagement rate can be calculated consistently rather than manually entered where possible.

Example:

```text
engagement_rate =
(likes + comments + saves + shares) / views
```

The exact metric should remain consistent throughout the demo.

---

## 4. Synthetic Dataset

MVP dataset:

- 20 historical posts;
- 10 campaigns;
- 5 experiments;
- approximately 30 days of history.

The dataset should intentionally contain a learning progression.

---

## 5. Learning Progression

Example:

### Early

Generic product posts appear competitive.

### Middle

Educational posts outperform generic promotion.

### Later

Problem-based hooks + educational content outperform both.

NEXA should learn the later pattern.

---

## 6. Data Quality

The synthetic dataset should:

- contain realistic variation;
- avoid identical metrics;
- include successes and failures;
- contain multiple formats;
- contain multiple topics;
- contain enough repeated evidence for meaningful patterns.

---

## 7. Demo Data Rule

All synthetic data must be internally labeled as synthetic.

Never represent generated numbers as actual Byte Brothers analytics.
