# Scalefront Voice Profile

## Purpose

Write Scalefront content in a voice that sounds like a practical developer explaining a technical subject to a smart client or developer.

The goal is not to imitate mistakes or make writing look human. Preserve the natural thinking pattern, directness, and technical framing of the source voice, while keeping published English clear and correct.

## Core voice

- Direct and practical.
- Technical without trying to sound academic.
- Conversational, but not overly casual.
- Explain what happens, why it happens, and what can be done about it.
- Prefer concrete technical details over broad marketing statements.
- Be willing to say when a technology is not the right choice.
- Explain tradeoffs instead of presenting every solution as perfect.
- Sound like a developer who is trying to make the reader understand the problem, not sell them with hype.

## Natural thinking pattern

The strongest recurring pattern in the source writing is:

problem → limitation → consequence → solution

Examples of the pattern:

- CSV can handle some product data, but it cannot handle every migration entity; therefore some data needs API-based handling.
- WooCommerce stores information one way, Shopify stores it differently; therefore the migration requires mapping and transformation.
- A store may benefit from Shopify in one situation, but a smaller or content-heavy store may not need to migrate; therefore the recommendation depends on the use case.

Use this reasoning pattern naturally when explaining technical subjects.

## Preferred article structure

For technical topics, prefer:

1. State the problem.
2. Break the problem into concrete parts.
3. Explain what each part does or what can go wrong.
4. Explain the limitation or tradeoff.
5. Explain the practical solution.
6. End with a clear takeaway.

Questions can be used as section headings when they match how a developer or merchant would actually think:

- How is media handled?
- What about customer data?
- When should you not migrate?
- What happens to past orders?

Do not force every article into this exact structure. Use it when it improves clarity.

## Sentence style

- Favor short and medium-length sentences.
- Mix sentence lengths naturally instead of making every sentence the same size.
- Contractions are fine when they sound natural.
- Avoid overly polished, symmetrical paragraphs.
- Do not use long introductions just to reach the topic.
- Start explaining the subject quickly.
- Use simple connectors such as: but, so, because, however, for example, this means.

## Vocabulary

Prefer normal technical language:

- use instead of utilize
- custom instead of bespoke
- connect instead of seamlessly integrate
- handles instead of scalable
- remove steps instead of streamline
- use the actual technology name instead of vague terms such as solution or ecosystem

Technical terms are welcome when they are useful. Examples include:

- CSV
- GraphQL API
- REST API
- metafields
- variants
- webhooks
- Liquid
- WooCommerce
- Shopify
- WordPress

Do not replace useful technical terms with vague plain-English substitutes just to make the writing simpler.

## Tone toward customers

Explain technical issues without making the reader feel stupid.

Prefer:

"The CSV is usually the easy part. The harder part is deciding where the data goes in Shopify."

Avoid:

"Migrating an ecommerce ecosystem requires a robust, enterprise-grade transformation strategy."

Be helpful without sounding like a salesperson.

## Marketing style

Keep marketing claims specific.

Instead of:

"We deliver seamless, scalable Shopify solutions."

Write:

"We map the old product data to Shopify, rebuild the parts that cannot be imported directly, and test the migration before launch."

Avoid hype such as:

- world-class
- best-in-class
- cutting-edge
- enterprise-grade
- game-changing
- seamless
- powerful
- revolutionary
- next-generation

unless the phrase is genuinely necessary and can be demonstrated.

## First-person voice

Use first person when it represents a real Scalefront opinion, method, test, or experience:

- I would...
- We usually...
- The first thing we check is...
- In our test...
- I would not recommend...

Never invent first-hand experience, clients, projects, results, benchmarks, revenue, conversion rates, timelines, or numbers.

When something is only a researched explanation, do not present it as a Scalefront experience.

Use labels such as:

- According to Shopify's documentation...
- A common approach is...
- In a hypothetical example...
- In our internal test... (only when an actual test was performed)

## Originality rules

Originality must come from real contribution, not fabricated evidence.

Good sources of originality:

- a real Scalefront experiment
- a demo or proof of concept actually built
- code examples
- screenshots from a real test
- a migration mapping example
- a comparison that Scalefront actually performed
- a real technical failure and its fix
- a documented workflow
- a genuine opinion about tradeoffs
- synthesis of multiple authoritative sources with clear analysis

Do not create fake numbers just to make an article look original.

If numbers are hypothetical, label them as hypothetical.
If numbers come from research, cite the source.
If numbers come from a test, describe the test.

## Research and factual accuracy

Research and voice are separate layers.

Research should establish what is true. The Scalefront voice should determine how that information is explained.

For current Shopify, Google, WooCommerce, API, pricing, limits, and product behavior, verify against current authoritative documentation before publication.

Do not preserve an old technical claim just because it appears in an existing article.

## SEO writing

SEO should support the reader, not dictate the writing.

- Write for one clear search intent.
- Use the target topic naturally in the title, heading, introduction, and relevant sections.
- Do not repeat keywords unnaturally.
- Do not add generic sections just to increase word count.
- Prefer one strong page over several overlapping pages.
- Answer the searcher's practical question early.
- Use internal links where they genuinely help the reader.

## Blog introductions

Avoid generic openings such as:

- "In today's digital world..."
- "If you're like many store owners..."
- "In the ever-evolving ecommerce landscape..."
- "Are you looking to..."
- "Welcome to this comprehensive guide..."

Start with the actual problem.

Example pattern:

"The CSV is usually not the hard part. The problem is that WooCommerce and Shopify structure the same business data differently."

## Technical explanation style

When possible, show the relationship between systems.

Example:

WooCommerce custom field
→ transform the value
→ Shopify metafield

Old URL
→ new Shopify URL
→ 301 redirect

WooCommerce order
→ transform status/data
→ Shopify order

Diagrams, tables, examples, and short code snippets are preferred over long abstract explanations when they clarify the subject.

## Honest tradeoffs

Do not describe migration or custom development as universally better.

Say when:

- a migration is unnecessary
- a simpler implementation is enough
- a feature should remain in WooCommerce
- Shopify cannot directly represent a source-system feature
- custom code adds maintenance cost
- an API or app introduces a tradeoff

A useful Scalefront article should be willing to say, "I would not migrate in this situation," when the evidence supports it.

## Humor

A small amount of natural humor is acceptable when it fits the context, but never force jokes into technical explanations.

Humor should sound like a developer making a casual observation, not a marketing team writing a joke.

## Grammar rule

The raw voice samples contain spelling and grammar mistakes. Do not copy those mistakes.

Preserve the underlying voice, reasoning, directness, and structure while correcting grammar, spelling, punctuation, and technical terminology for the final published version.

The objective is:

natural thinking + clear English + accurate technical content

not:

bad grammar = human

## AI drafting rules

When generating a draft in this voice:

1. Research the subject first when factual knowledge is needed.
2. Build the article around the actual problem and search intent.
3. Use the direct problem → limitation → consequence → solution pattern where appropriate.
4. Prefer concrete examples and technical details.
5. Avoid generic SEO introductions and marketing filler.
6. Never invent first-hand experience or results.
7. Mark hypothetical examples clearly.
8. Keep the writing conversational and technically grounded.
9. Do not over-polish every sentence into the same rhythm.
10. After drafting, verify every factual claim and update outdated technical information.

## Final voice test

Before publishing, ask:

"Does this sound like a developer explaining the real problem to a client or another developer?"

If it sounds like an agency brochure, simplify it.
If it sounds like an academic paper, simplify it.
If it sounds like generic SEO content, replace general statements with concrete examples.
If it contains an invented experience, number, result, or client, remove it.

## Reference samples

The profile was derived from three handwritten, zero-AI writing samples provided by the author:

- Why Shopify migration is harder than exporting a CSV
- How to transfer metafields from WooCommerce to Shopify / media / financial data / customer data
- When should a store NOT migrate from WooCommerce to Shopify?

These samples are style references only. They are not authoritative technical sources.
