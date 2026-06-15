# ECM options — Design Spec

**Date:** 2026-06-15
**Status:** Draft — pending user review
**Family:** Optro/Optro anonymized demo family (sibling to Velocity, Benchmark, Practice, Context, ECM-chat)
**Codename:** ECM options (local: `optro-signal-borb`, public: `sandersonboard.github.io/signal/`)

---

## Thesis

**Optro ECM works where you do.**

Once Optro ECM handles the cognitive work of SOX evidence collection — mapping artifacts to controls, judging freshness, recognizing reuse, drafting attestations — the work no longer needs the web-app cage. It can show up on a command palette, a Slack DM, a phone, a tablet, a watch, or an on-chain receipt, because the user no longer has to navigate a complex IA to do the work. ECM navigates for them.

## Strategic frame

This is the first prototype in the family that uses the **actual Optro design system (Luna)** rather than anonymized hand-rolled chrome. The visual tone of the demo says *"this could ship inside the existing Optro product."* That tone is itself the positioning move — it forces the question *"what would Optro look like if it were built around AI-distributed surfaces rather than the controls-on-web mental model?"*

**Scenario-plan bet:** System of Record Premium + no-regret move #2 (audit-grade output). The 6-surface palette is only believable because the underlying data graph (controls × evidence × time × attestations) gives the AI enough structure to navigate. Without the graph, this is just a wrapper across channels.

**What this prototype is NOT:** B (human-AI handoff) and D (trust & explainability) are queued as separate sibling prototypes. ECM options explores Axis A only — surface placement.

## What was cut and why

Brainstorming went through three scopes before landing here:

1. **18-cell matrix** (6 surfaces × 3 nouns) — too cluttered; cognitive load on viewer
2. **Two-direction declutter** — keep matrix vs. cut to 6 cards
3. **Final: combine moves #1 (collapse an axis), #4 (constant scenario), #5 (hero diagram)** — surface is the organizing axis; noun becomes a property of each surface; matrix richness survives as a single radial diagram on landing

**Net:** 6 surface mockups (not 18), 0 noun toggles, 0 persona toggles, 0 sub-prototypes. The matrix-as-insight survives in the hero diagram.

## The 6 surface mockups

Each mockup is a single Luna-skinned screen with one default persona, one strongest noun for that surface, and one visible AI moment.

| # | Surface | Noun | Default persona | AI moment |
|---|---|---|---|---|
| 1 | Command palette | Task | Weston (owner) | Cmd+K → "AR Q3 prod" → returns matched control, drafts evidence task, citation chips inline |
| 2 | Slack/Teams | Task | Weston (owner) | Bot DM with confidence bar ("85% match — your usual Friday AR cycle"), one-tap approve |
| 3 | Mobile | Task | Weston (owner) | Push → camera → AI auto-tags screenshot with control, freshness, classifier confidence |
| 4 | iPad | Evidence | Dana (reviewer) | Pencil markup on PDF artifact → AI suggests adequacy verdict + flags drift vs. prior quarter |
| 5 | Wearable | Task | Weston (owner) | Watch tap → "match prior pattern? Tap to confirm" with confidence ring |
| 6 | Blockchain | Evidence | Sarah (PMO) | Receipt page: chain of hashes + signers + timestamps; AI captions "4 attestations, last refresh 18 days ago" |

**Noun distribution:** 4 Task, 2 Evidence, 0 Control. The absence of control-centric mockups is the punchline — when AI removes navigation cost, evidence work gravitates away from the control noun that dominates legacy GRC tools.

**Persona distribution:** 4 Weston (owner), 1 Dana (reviewer), 1 Sarah (PMO). Owner-heavy because owners do the bulk of evidence collection grunt work — that's honest.

## The hero diagram (landing page)

A radial diagram: Optro ECM mark in the center, 6 spokes radiating to surface tiles. Each tile shows surface icon + 1-word noun + 1-line caption. Drawn in SVG with Luna tokens.

Title: *"Optro ECM works where you do."*
Subtitle: *"6 surfaces, 1 SOX evidence workflow, 0 web-app cages."*

Layout intent (final rendering will be a proper SVG radial):
- 12 o'clock: Command palette · Task
- 2 o'clock: Slack/Teams · Task
- 4 o'clock: Mobile · Task
- 6 o'clock: Wearable · Task
- 8 o'clock: iPad · Evidence
- 10 o'clock: Blockchain · Evidence

Center: Optro mark + product name "Optro ECM."

## Shared scenario

Every mockup pins to the same scenario so viewers only have to learn the context once:

- **Customer:** Helios Robotics, Inc. (Series D industrial robotics, $500M-1B revenue, Deloitte audit, S-1 target Q1 2027)
- **Time:** Mid-Q3 close, T-7 months to filing
- **Control:** 4.2.1 — Quarterly user access review on the production database
- **Evidence:** Q3 AR export screenshot + DBA attestation
- **Cast:** Weston Prohaska (IT lead / control owner), Dana Cho (Internal Audit reviewer), Sarah at Helios (SOX PMO)

This matches the existing family's Helios continuity. Cross-link footer to siblings (Velocity, Benchmark, Practice, Context, ECM-chat).

## Design system: Luna

First prototype in the family to use Luna (real Optro design system) rather than anonymized hand-rolled tokens. Luna MCP server is wired up — use it for component lookups, tokens, and visual guides.

**Token-level rules:**
- Pull Luna tokens via the MCP server; do not hand-roll color/spacing
- Use Luna component patterns where Luna ships them; fall back to clean Luna-token-styled HTML for surfaces Luna doesn't ship (wearable face, blockchain receipt, etc.)
- Maintain Luna typography hierarchy

**Surface-frame chrome (drawn in CSS):**
- Mobile/iPad: phone/tablet bezels
- Wearable: round watch face
- Palette: floating overlay on dimmed Luna app background
- Slack/Teams: messaging-app chrome
- Blockchain: receipt-card layout (not a wallet UI — keep it boring/audit-grade)

## File structure

```
optro-signal-borb/
├── index.html              # landing with hero radial diagram
├── palette.html            # surface 1
├── slack.html              # surface 2
├── mobile.html             # surface 3
├── ipad.html               # surface 4
├── wearable.html           # surface 5
├── chain.html              # surface 6 (blockchain receipt)
├── gate.js                 # BORB password overlay (lift from existing family)
├── shared.js               # cross-link footer, persona constants
├── tokens.css              # Luna token bridge
├── styles.css              # surface-frame chrome (bezels, faces, overlays)
├── optro-logo.svg          # reuse from family
├── optro-mark.svg          # reuse from family
├── README.md
└── docs/
    └── 2026-06-15-signal-design.md   # this file
```

## What's intentionally excluded

- **Control-centric mockups** — cut by the single-noun-per-surface decision; absence is the insight
- **Persona toggles** — every mockup picks one default; alternate personas live only in the design spec
- **Noun toggles** — every mockup picks the strongest noun; alternates would dilute the single-noun rule
- **Sub-prototypes per cell** — flatten to single-screen
- **Matrix landing** — replaced by the hero radial diagram
- **Wearable × Evidence and Blockchain × Task** — the ❌ cells from the original matrix; left out entirely
- **Real working AI** — every "AI moment" is scripted UI; no model calls

## Deployment

- Local: `~/optro-signal-borb/`
- Push: `sandersonboard/optro-signal-borb` (public repo, per family convention)
- Public URL: `sandersonboard.github.io/signal/` (drops `-borb` per family convention)
- Gate: BORB soft password via `gate.js`
- Pages source: main branch, root

## Cross-links

Footer of every page links to family siblings:
- Velocity (`/velocity/`)
- Benchmark (`/benchmark/`)
- Practice (`/practice/`)
- Context (`/context/`)
- ECM-chat (`/ecm-chat/`)
- Optro Evidence (`/auditborb-evidence-prototypes/`)

Plus a "next in this axis" callout when ECM options-B (handoff) and ECM options-D (trust) prototypes are built.

## Open questions for user review

1. Confirm name **ECM options** (vs. alternatives: Anywhere, Reach, Field, Surface).
2. Confirm radial-diagram layout vs. alternative (hub-and-spoke, surface ring, etc.).
3. Confirm Luna MCP is the right source for components/tokens (no Midship spillover).
4. Confirm scenario binding: Helios Q3 AR on control 4.2.1 — same scenario across all 6 surfaces.
5. Confirm exclusion of control-centric mockups — the absence IS the punchline; do you want to keep it that way?
