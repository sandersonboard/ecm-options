# Optro Signal

**Optro ECM works where you do.**

A Luna-skinned prototype exploring surface placement for AI-distributed SOX evidence collection. Sixth sibling in the Optro/Auditborb demo family.

**Live demo:** https://sandersonboard.github.io/signal/
**Password:** BORB (case-insensitive)

## What this explores

Where the prior evidence prototypes (`auditborb-evidence-prototypes`) asked *which workflow strategy?* (auto-collect vs. conversational vs. reuse-graph), Signal asks: *where does AI for SOX evidence live, once AI handles the cognitive work?*

Six surfaces, one Helios scenario (Q3 user-access review on control 4.2.1), zero web-app cage:

| Surface | Noun | Persona | The AI moment |
|---|---|---|---|
| Command palette | Task | Weston (owner) | One phrase → matched control + drafted task + suggested artifact |
| Slack/Teams | Task | Weston (owner) | Bot DM with confidence bar + one-tap approve |
| Mobile | Task | Weston (owner) | Push → camera → auto-classified in 12 seconds |
| iPad | Evidence | Dana (reviewer) | Pencil markup + AI drift detection + adequacy verdict |
| Wearable | Task | Weston (owner) | Confidence ring → one tap confirms pattern match |
| Blockchain | Evidence | Sarah (PMO) | Receipt with chain of attestations + plain-English AI narration |

## What's intentionally missing

No control-centric mockups. That's the punchline: when AI removes the cognitive cost of navigation, evidence work gravitates *away* from the control noun. It's still the structural anchor — but nobody has to land there first.

## Strategic frame

First family sibling using the **real AuditBoard design system (Luna)** rather than anonymized hand-rolled chrome. Tokens pulled live from `@soxhub/luna-tokens` via Luna MCP. Tone shift = positioning statement: "this could ship inside the existing AuditBoard product."

Hedges no-regret move #2 (audit-grade output layer) and the System of Record Premium bet — the 6-surface palette is only believable because the underlying data graph (controls × evidence × time × attestations) gives the AI enough structure to navigate.

Companion prototypes to come on the other UX-strategy axes:
- **Signal-B** — human-AI handoff (review queue / trust-with-undo / side-by-side co-pilot / autonomous + audit trail)
- **Signal-D** — trust & explainability (citations / confidence / "why this evidence matches" / disagreement signals)

## File structure

```
index.html              landing — hero radial diagram + insight strips
palette.html            surface 1 — command palette
slack.html              surface 2 — Slack/Teams bot DM
mobile.html             surface 3 — phone push + camera capture
ipad.html               surface 4 — Pencil markup + AI findings
wearable.html           surface 5 — watch face + confidence ring
chain.html              surface 6 — blockchain receipt

tokens.css              Luna design tokens (real values, pulled via MCP)
styles.css              surface-frame chrome (bezels, watch face, palette overlay, slack window, receipt)
gate.js                 BORB soft password gate (shared family pattern)
shared.js               cross-link footer, scenario constants

optro-logo.svg          family logo
optro-mark.svg          family mark
docs/                   design spec + decision log
```

## Scenario constants

- **Customer:** Helios Robotics, Inc. (Series D industrial robotics, $500M-1B revenue, Deloitte audit)
- **Time:** Mid-Q3 FY2026 close · T-7 months to S-1 (target Q1 2027)
- **Control:** 4.2.1 — Quarterly user access review on `prod-db-01.helios`
- **Cast:** Weston Prohaska (IT Lead / control owner) · Dana Cho (Internal Audit) · Sarah Park (SOX PMO)

## Local dev

Pure static HTML/CSS/JS. No build step. Open `index.html` directly, or serve with any static server:

```bash
cd ~/optro-signal-borb
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Deployment

Push to `sandersonboard/optro-signal-borb` (public). GitHub Pages from main branch root. Public URL drops the `-borb` suffix per family convention:

```bash
# from inside the folder
git init
git add .
git commit -m "Initial Signal prototype"
gh repo create sandersonboard/optro-signal-borb --public --source=. --push
# then enable Pages in repo settings, source = main / root
```

## Design spec

Full spec at [`docs/2026-06-15-signal-design.md`](docs/2026-06-15-signal-design.md).
