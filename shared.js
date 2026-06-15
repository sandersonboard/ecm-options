/* Cross-link footer + scenario constants, shared across all Signal pages. */
(function () {
  var SCENARIO = {
    customer: 'Helios Robotics, Inc.',
    control: '4.2.1 — Quarterly user access review (production database)',
    quarter: 'Q3 FY2026 close · T-7 months to S-1',
    cast: {
      owner:    { name: 'Weston Prohaska',  role: 'IT Lead / Control Owner' },
      reviewer: { name: 'Marie Curie',    role: 'Internal Audit' },
      pmo:      { name: 'Ada Lovelace',  role: 'SOX PMO' }
    }
  };
  window.SIGNAL_SCENARIO = SCENARIO;

  var SIBLINGS = [
    { label: 'Velocity',  href: 'https://sandersonboard.github.io/velocity/' },
    { label: 'Benchmark', href: 'https://sandersonboard.github.io/benchmark/' },
    { label: 'Practice',  href: 'https://sandersonboard.github.io/practice/' },
    { label: 'Context',   href: 'https://sandersonboard.github.io/context/' },
    { label: 'ECM in chat', href: 'https://sandersonboard.github.io/ecm-chat/' },
    { label: 'Evidence (early)', href: 'https://sandersonboard.github.io/auditborb-evidence-prototypes/' }
  ];

  function renderFooter(targetSel) {
    var el = document.querySelector(targetSel || '#family-footer');
    if (!el) return;
    var siblings = SIBLINGS.map(function (s) {
      return '<a class="sibling" href="' + s.href + '">' + s.label + '</a>';
    }).join('');
    el.innerHTML =
      '<div class="label">Optro / Auditborb demo family</div>' +
      '<div class="siblings">' + siblings + '</div>' +
      '<div style="margin-top:14px;font-size:12px;color:#64748b;">' +
      'Signal explores <strong>surface placement</strong> for AI-distributed SOX evidence. ' +
      'Siblings explore <em>handoff</em> and <em>trust</em> coming soon.' +
      '</div>';
  }
  window.renderFamilyFooter = renderFooter;

  document.addEventListener('DOMContentLoaded', function () {
    renderFooter('#family-footer');
  });
})();
