/* =============================================
   MAISON LAUNDRIN — MARKETING OPERATIONS COMMAND CENTER
   Core application logic (v3.1 — all views functional)
   ============================================= */

let currentAvatarIndex = 0;
let currentTab = 'overview';
let activeFilter = 'all';
let currentNav = 'avatars';
let previousNav = 'avatars'; // tracks where user came from

// Pipeline filter state
let pipelineTypeFilter = 'all';
let pipelineStatusFilter = 'all';

// Ad Lab filter state
let adlabAvatarFilter = 'all';
let adlabStatusFilter = 'all';
let adlabFormatFilter = 'all';

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    renderFilterBar();
    renderCompetitorOverview();
    bindEvents();
});

function bindEvents() {
    document.getElementById('search').addEventListener('input', debounce(handleSearch, 300));
    document.getElementById('back-btn').addEventListener('click', goBack);
    document.getElementById('prev-btn').addEventListener('click', () => navigateAvatar(-1));
    document.getElementById('next-btn').addEventListener('click', () => navigateAvatar(1));
    document.getElementById('tabs').addEventListener('click', e => {
        if (e.target.classList.contains('tab')) {
            setTab(e.target.dataset.tab);
        }
    });
    document.getElementById('filter-bar').addEventListener('click', e => {
        if (e.target.classList.contains('filter-tag')) {
            setFilter(e.target.dataset.filter);
        }
    });

    // Top nav
    document.getElementById('top-nav').addEventListener('click', e => {
        if (e.target.classList.contains('nav-pill')) {
            setNav(e.target.dataset.nav);
        }
    });

    // Delegated filter clicks for dynamic views
    document.addEventListener('click', e => {
        // Pipeline type filters
        if (e.target.dataset.ptype !== undefined) {
            pipelineTypeFilter = e.target.dataset.ptype;
            updatePipelineFilterUI();
            renderPipelineFeed();
        }
        // Pipeline status filters
        if (e.target.dataset.pstatus !== undefined) {
            pipelineStatusFilter = e.target.dataset.pstatus;
            updatePipelineFilterUI();
            renderPipelineFeed();
        }
        // Ad Lab status filters
        if (e.target.dataset.adstatus !== undefined) {
            adlabStatusFilter = e.target.dataset.adstatus;
            updateAdLabFilterUI();
            renderAdLabList();
        }
        // Ad Lab format filters
        if (e.target.dataset.adformat !== undefined) {
            adlabFormatFilter = e.target.dataset.adformat;
            updateAdLabFilterUI();
            renderAdLabList();
        }
        // Copy buttons
        if (e.target.classList.contains('copy-btn')) {
            const block = e.target.closest('[data-copy]');
            if (block) copyToClipboard(block.dataset.copy);
        }
        // Quote block tap-to-copy
        if (e.target.closest('.quote-block') && !e.target.classList.contains('copy-btn')) {
            const block = e.target.closest('.quote-block');
            if (block.dataset.copy) copyToClipboard(block.dataset.copy);
        }
        // Collapsible sections
        if (e.target.closest('.collapsible-header')) {
            const header = e.target.closest('.collapsible-header');
            header.classList.toggle('open');
            header.nextElementSibling.classList.toggle('open');
        }
        // Ad Lab export button
        if (e.target.classList.contains('adlab-export-btn')) {
            const adId = parseInt(e.target.dataset.adId);
            exportAdForMeta(adId);
        }
        // Pipeline entry copy
        if (e.target.classList.contains('pipeline-copy-btn')) {
            const content = e.target.closest('.pipeline-entry').querySelector('.pipeline-entry-content');
            if (content) copyToClipboard(content.textContent);
        }
    });

    // Ad Lab avatar select
    document.addEventListener('change', e => {
        if (e.target.id === 'adlab-avatar-filter') {
            adlabAvatarFilter = e.target.value;
            renderAdLabList();
        }
    });
}

// ---- TOP NAV ----
function setNav(navId) {
    previousNav = currentNav;
    currentNav = navId;
    document.querySelectorAll('.nav-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.nav === navId);
    });

    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    switch (navId) {
        case 'avatars':
            document.getElementById('dashboard').classList.add('active');
            break;
        case 'performance':
            document.getElementById('performance-view').classList.add('active');
            renderPerformanceView();
            break;
        case 'pipeline':
            document.getElementById('pipeline-view').classList.add('active');
            renderPipelineView();
            break;
        case 'adlab':
            document.getElementById('adlab-view').classList.add('active');
            renderAdLabView();
            break;
        case 'testing':
            document.getElementById('testing-view').classList.add('active');
            renderTestingView();
            break;
        case 'hub':
            document.getElementById('hub-view').classList.add('active');
            renderHubView();
            break;
    }
    window.scrollTo(0, 0);
}

// ---- VIEWS ----
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goBack() {
    setNav(previousNav || 'avatars');
    document.getElementById('search').value = '';
}

function showDashboard() {
    setNav('avatars');
    document.getElementById('search').value = '';
}

// ---- FILTER BAR ----
function renderFilterBar() {
    if (typeof RESEARCH === 'undefined' || !RESEARCH.themes) return;
    const bar = document.getElementById('filter-bar');
    const existing = bar.querySelector('.filter-tag[data-filter="all"]');
    let html = '';
    RESEARCH.themes.forEach(t => {
        html += `<button class="filter-tag" data-filter="${t.id}">${t.label}</button>`;
    });
    existing.insertAdjacentHTML('afterend', html);
}

function setFilter(filterId) {
    activeFilter = filterId;
    document.querySelectorAll('#filter-bar .filter-tag').forEach(f => {
        f.classList.toggle('active', f.dataset.filter === filterId);
    });
    renderDashboard();
}

// ---- DASHBOARD ----
function renderDashboard() {
    let avatars = AVATARS;
    if (activeFilter !== 'all' && typeof RESEARCH !== 'undefined' && RESEARCH.themes) {
        const theme = RESEARCH.themes.find(t => t.id === activeFilter);
        if (theme) {
            avatars = AVATARS.filter(a => theme.avatarIds.includes(a.id));
        }
    }

    const tier1 = avatars.filter(a => a.tier === 1);
    const tier2 = avatars.filter(a => a.tier === 2);

    const t1El = document.getElementById('grid-tier1');
    const t2El = document.getElementById('grid-tier2');
    const t1Label = t1El.previousElementSibling;
    const t2Label = t2El.previousElementSibling;

    t1El.innerHTML = tier1.map(a => renderCard(a)).join('');
    t2El.innerHTML = tier2.map(a => renderCard(a)).join('');

    t1Label.style.display = tier1.length ? '' : 'none';
    t1El.style.display = tier1.length ? '' : 'none';
    t2Label.style.display = tier2.length ? '' : 'none';
    t2El.style.display = tier2.length ? '' : 'none';
}

function renderCard(a) {
    const painDots = Array.from({length: 5}, (_, i) =>
        `<span class="pain-dot ${i < a.painIntensity ? 'active' : ''}"></span>`
    ).join('');

    let researchCount = 0;
    if (typeof RESEARCH !== 'undefined') {
        researchCount += (RESEARCH.objections[a.id] || []).length;
        researchCount += (RESEARCH.socialProof[a.id] || []).length;
        researchCount += (RESEARCH.competitors[a.id] || []).length;
    }

    // Performance badge
    let perfBadgeHtml = '';
    if (typeof PERFORMANCE !== 'undefined' && PERFORMANCE.avatars[a.id]) {
        const p = PERFORMANCE.avatars[a.id];
        if (p.roas > 0) {
            const cls = p.roas >= 2 ? 'good' : p.roas >= 1 ? 'neutral' : 'bad';
            perfBadgeHtml = `<span class="perf-badge ${cls}">${p.roas.toFixed(1)}x ROAS</span>`;
        }
    }

    return `
    <div class="avatar-card" onclick="openProfile(${a.id})">
        <span class="tier-badge tier-${a.tier}">${a.tier === 1 ? 'Tier 1 — Core' : 'Tier 2 — Niche'}</span>
        <div class="card-top">
            <div class="card-name">${a.emoji} ${a.name}</div>
            <div class="card-age">${a.ageRange}</div>
        </div>
        <div class="card-wound">${a.coreWound}</div>
        <div class="card-footer">
            <div class="pain-bar">
                <div class="pain-dots">${painDots}</div>
                <span>Pain intensity</span>
            </div>
            ${perfBadgeHtml}
            ${researchCount > 0 ? `<span class="research-badge">${researchCount} research items</span>` : ''}
        </div>
    </div>`;
}

// ---- COMPETITOR OVERVIEW ----
function renderCompetitorOverview() {
    if (typeof RESEARCH === 'undefined' || !RESEARCH.competitorOverview) return;
    const el = document.getElementById('competitor-overview');
    el.innerHTML = `<div class="competitor-grid">${RESEARCH.competitorOverview.map(c => `
        <div class="competitor-card">
            <div class="comp-header">
                <div class="comp-name">${c.brand}</div>
                <div class="comp-price">${c.price}</div>
            </div>
            <div class="comp-rating">${c.rating}</div>
            <div class="comp-lists">
                <div class="comp-strengths">
                    <div class="comp-list-label strengths-label">Strengths</div>
                    <ul>${c.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
                <div class="comp-weaknesses">
                    <div class="comp-list-label weaknesses-label">Weaknesses</div>
                    <ul>${c.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
                </div>
            </div>
            ${c.keyQuote ? `<div class="comp-quote">"${c.keyQuote}"</div>` : ''}
            <div class="comp-ml-angle">
                <span class="comp-ml-label">ML Advantage:</span> ${c.mlAngle}
            </div>
        </div>
    `).join('')}</div>`;
}

// ---- PROFILE ----
function openProfile(id) {
    previousNav = currentNav;
    currentAvatarIndex = AVATARS.findIndex(a => a.id === id);
    currentTab = 'overview';
    renderProfile();
    showView('profile');
    document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
    window.scrollTo(0, 0);
}

function navigateAvatar(dir) {
    currentAvatarIndex = (currentAvatarIndex + dir + AVATARS.length) % AVATARS.length;
    renderProfile();
    window.scrollTo(0, 0);
}

function renderProfile() {
    const a = AVATARS[currentAvatarIndex];

    const objCount = typeof RESEARCH !== 'undefined' ? (RESEARCH.objections[a.id] || []).length : 0;
    const proofCount = typeof RESEARCH !== 'undefined' ? (RESEARCH.socialProof[a.id] || []).length : 0;

    document.getElementById('profile-header').innerHTML = `
        <div class="ph-top">
            <div>
                <span class="tier-badge tier-${a.tier}">${a.tier === 1 ? 'Tier 1 — Core Buyer' : 'Tier 2 — Niche Pain Point'}</span>
                <div class="ph-name">${a.emoji} ${a.name}</div>
                <div class="ph-age">${a.ageRange} &middot; ${a.demographics.income || ''}</div>
            </div>
            <div class="ph-stats">
                <div class="ph-stat">
                    <div class="ph-stat-value">${a.painPoints.length}</div>
                    <div class="ph-stat-label">Pain Points</div>
                </div>
                <div class="ph-stat">
                    <div class="ph-stat-value">${a.adCreative.length}</div>
                    <div class="ph-stat-label">Ad Angles</div>
                </div>
                <div class="ph-stat">
                    <div class="ph-stat-value">${proofCount}</div>
                    <div class="ph-stat-label">Proof Quotes</div>
                </div>
                <div class="ph-stat">
                    <div class="ph-stat-value">${objCount}</div>
                    <div class="ph-stat-label">Objections</div>
                </div>
            </div>
        </div>
        <div class="ph-tagline">"${a.tagline}"</div>
    `;

    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === currentTab);
    });

    renderTabContent();
}

function setTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    renderTabContent();
}

function renderTabContent() {
    const a = AVATARS[currentAvatarIndex];
    const el = document.getElementById('tab-content');

    switch (currentTab) {
        case 'overview': el.innerHTML = renderOverview(a); break;
        case 'pain': el.innerHTML = renderPainPoints(a); break;
        case 'language': el.innerHTML = renderLanguage(a); break;
        case 'messaging': el.innerHTML = renderMessaging(a); break;
        case 'objections': el.innerHTML = renderObjections(a); break;
        case 'social-proof': el.innerHTML = renderSocialProof(a); break;
        case 'competitors': el.innerHTML = renderCompetitors(a); break;
        case 'ads': el.innerHTML = renderAds(a); break;
        case 'targeting': el.innerHTML = renderTargeting(a); break;
        case 'performance': el.innerHTML = renderAvatarPerformance(a); break;
    }
}

// ---- TAB RENDERERS ----

function renderOverview(a) {
    let marketHtml = '';
    if (typeof RESEARCH !== 'undefined' && RESEARCH.marketData && RESEARCH.marketData[a.id]) {
        const data = RESEARCH.marketData[a.id];
        marketHtml = `
            <div class="section-title">Market Intelligence</div>
            ${data.map(d => `
                <div class="content-block market-stat" data-copy="${esc(d.stat)}">
                    <button class="copy-btn">Copy</button>
                    <p>${d.stat}</p>
                    <div class="market-source">${d.source}</div>
                </div>
            `).join('')}
        `;
    }

    return `
        <div class="section-title">Core Wound</div>
        <div class="content-block" data-copy="${esc(a.coreWound)}">
            <button class="copy-btn">Copy</button>
            <p>${a.coreWound}</p>
        </div>

        <div class="section-title">Demographics</div>
        <div class="content-block">
            <table class="targeting-table">
                <tr><td style="color:var(--text-muted);width:140px">Age Range</td><td>${a.ageRange}</td></tr>
                <tr><td style="color:var(--text-muted)">Income</td><td>${a.demographics.income || 'N/A'}</td></tr>
                <tr><td style="color:var(--text-muted)">Life Stage</td><td>${a.demographics.lifeStage || 'N/A'}</td></tr>
                <tr><td style="color:var(--text-muted)">Location</td><td>${a.demographics.location || 'N/A'}</td></tr>
                <tr><td style="color:var(--text-muted)">Generation</td><td>${a.demographics.generation || 'N/A'}</td></tr>
            </table>
        </div>

        <div class="section-title">Emotional Landscape</div>
        <div class="content-block">
            <h4>Fears</h4>
            <ul>${a.emotionalLandscape.fears.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div class="content-block">
            <h4>Desires</h4>
            <ul>${a.emotionalLandscape.desires.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>
        <div class="content-block">
            <h4>Secret Wants</h4>
            <ul>${a.emotionalLandscape.secretWants.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>

        <div class="section-title">Trigger Moments</div>
        ${a.triggerMoments.map(t => `
            <div class="content-block" data-copy="${esc(t)}">
                <button class="copy-btn">Copy</button>
                <p>${t}</p>
            </div>
        `).join('')}

        <div class="section-title">Science Insights</div>
        ${a.scienceInsights.map(s => `
            <div class="content-block" data-copy="${esc(s)}">
                <button class="copy-btn">Copy</button>
                <p>${s}</p>
            </div>
        `).join('')}

        ${marketHtml}

        <div class="section-title">Recommended Scent</div>
        <div class="content-block">
            <p>${a.recommendedScent}</p>
        </div>

        <div class="section-title">Competitor Angle</div>
        <div class="content-block" data-copy="${esc(a.competitorAngle)}">
            <button class="copy-btn">Copy</button>
            <p>${a.competitorAngle}</p>
        </div>
    `;
}

function renderPainPoints(a) {
    return a.painPoints.map(pp => `
        <div class="content-block">
            <h4>${pp.title}</h4>
            <p>${pp.detail}</p>
            ${(pp.quotes || []).map(q => `
                <div class="quote-block" data-copy="${esc(q.text)}">
                    <button class="copy-btn">Copy</button>
                    <div class="quote-text">"${q.text}"</div>
                    ${q.source ? `<div class="quote-source">— ${q.source}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderLanguage(a) {
    let html = `<div class="section-title">Verbatim Language Patterns</div>`;
    html += a.languagePatterns.map(lp => `
        <div class="quote-block" data-copy="${esc(lp)}">
            <button class="copy-btn">Copy</button>
            <div class="quote-text">"${lp}"</div>
        </div>
    `).join('');

    if (a.failedSolutions && a.failedSolutions.length) {
        html += `<div class="section-title">Failed Solutions (What She's Tried)</div>`;
        html += `<div class="content-block"><ul>`;
        html += a.failedSolutions.map(f => `<li>${f}</li>`).join('');
        html += `</ul></div>`;
    }

    return html;
}

function renderMessaging(a) {
    let html = '';

    if (a.beliefs) {
        html += `<div class="section-title">Belief Shifts</div>`;
        const max = Math.max(a.beliefs.current.length, a.beliefs.target.length);
        for (let i = 0; i < max; i++) {
            html += `<div class="beliefs-grid">`;
            if (a.beliefs.current[i]) {
                html += `<div class="belief-card current" data-copy="${esc(a.beliefs.current[i])}">
                    <button class="copy-btn">Copy</button>
                    <div class="belief-label">Current Belief</div>
                    ${a.beliefs.current[i]}
                </div>`;
            }
            if (a.beliefs.target[i]) {
                html += `<div class="belief-card target" data-copy="${esc(a.beliefs.target[i])}">
                    <button class="copy-btn">Copy</button>
                    <div class="belief-label">Target Belief</div>
                    ${a.beliefs.target[i]}
                </div>`;
            }
            html += `</div>`;
        }
    }

    if (a.messagingFramework) {
        const mf = a.messagingFramework;
        if (mf.dos && mf.dos.length) {
            html += `<div class="section-title">Messaging DOs</div>`;
            html += `<div class="content-block"><ul>${mf.dos.map(d => `<li>${d}</li>`).join('')}</ul></div>`;
        }
        if (mf.donts && mf.donts.length) {
            html += `<div class="section-title">Messaging DON'Ts</div>`;
            html += `<div class="content-block"><ul>${mf.donts.map(d => `<li>${d}</li>`).join('')}</ul></div>`;
        }
        if (mf.toneNotes) {
            html += `<div class="section-title">Tone Notes</div>`;
            html += `<div class="content-block" data-copy="${esc(mf.toneNotes)}">
                <button class="copy-btn">Copy</button>
                <p>${mf.toneNotes}</p>
            </div>`;
        }
        if (mf.neverSay && mf.neverSay.length) {
            html += `<div class="section-title">Never Say</div>`;
            html += `<div class="tag-list">${mf.neverSay.map(n => `<span class="tag">${n}</span>`).join('')}</div>`;
        }
    }

    return html;
}

function renderObjections(a) {
    if (typeof RESEARCH === 'undefined' || !RESEARCH.objections[a.id]) {
        return '<p style="color:var(--text-muted);padding:40px 0;text-align:center;">No objection data available.</p>';
    }

    const objections = RESEARCH.objections[a.id];
    const typeColors = {
        price: 'var(--gold)',
        guilt: 'var(--accent-red)',
        skepticism: 'var(--accent-blue)',
        trust: 'var(--silver)',
        emotional: '#9b59b6',
        sensitivity: '#e67e22'
    };

    return `
        <div class="section-title">Objection Bank (${objections.length} objections mapped)</div>
        <p class="section-subtitle">Each objection includes the counter-argument for copy and sales pages.</p>
        ${objections.map(obj => `
            <div class="objection-card">
                <div class="objection-header">
                    <span class="objection-type" style="color:${typeColors[obj.type] || 'var(--text-muted)'}">${obj.type.toUpperCase()}</span>
                </div>
                <div class="objection-text" data-copy="${esc(obj.objection)}">
                    <button class="copy-btn">Copy</button>
                    <div class="objection-label">She says:</div>
                    <p>"${obj.objection}"</p>
                </div>
                <div class="counter-text" data-copy="${esc(obj.counter)}">
                    <button class="copy-btn">Copy</button>
                    <div class="counter-label">Counter:</div>
                    <p>${obj.counter}</p>
                </div>
            </div>
        `).join('')}
    `;
}

function renderSocialProof(a) {
    if (typeof RESEARCH === 'undefined' || !RESEARCH.socialProof[a.id]) {
        return '<p style="color:var(--text-muted);padding:40px 0;text-align:center;">No social proof data available.</p>';
    }

    const quotes = RESEARCH.socialProof[a.id];
    const themes = [...new Set(quotes.map(q => q.theme))];
    const themeLabels = {
        compliment: 'Compliment Effect', identity: 'Identity & Visibility',
        addiction: 'Addiction / Obsession', discovery: 'Discovery Stories',
        ritual: 'Self-Care & Ritual', hotel: 'Hotel / Luxury Fantasy',
        switching: 'Switching Behavior', gifting: 'Gifting Patterns',
        dating: 'Dating & Attraction', grief: 'Grief & Scent Memory',
        menopause: 'Body Changes', value: 'Price Justification',
        transformation: 'Fresh Start / Transformation', perfume: 'Scent as Perfume Replacement'
    };

    let html = `<div class="section-title">Social Proof Bank (${quotes.length} quotes)</div>`;
    html += `<p class="section-subtitle">Real customer quotes from Amazon, Reddit, TikTok, and forums — mapped to this avatar.</p>`;

    themes.forEach(theme => {
        const themeQuotes = quotes.filter(q => q.theme === theme);
        html += `<div class="section-title" style="margin-top:24px">${themeLabels[theme] || theme} (${themeQuotes.length})</div>`;
        themeQuotes.forEach(q => {
            html += `
                <div class="quote-block social-proof-quote" data-copy="${esc(q.quote)}">
                    <button class="copy-btn">Copy</button>
                    <div class="quote-text">"${q.quote}"</div>
                    <div class="quote-source">— ${q.source}</div>
                </div>
            `;
        });
    });

    return html;
}

function renderCompetitors(a) {
    if (typeof RESEARCH === 'undefined' || !RESEARCH.competitors[a.id]) {
        return '<p style="color:var(--text-muted);padding:40px 0;text-align:center;">No competitor data available.</p>';
    }

    const comps = RESEARCH.competitors[a.id];
    return `
        <div class="section-title">Competitor Intelligence for ${a.name}</div>
        <p class="section-subtitle">What she's tried, why it failed, and how Maison Laundrin wins.</p>
        ${comps.map(c => `
            <div class="comp-detail-card">
                <div class="comp-detail-name">${c.brand}</div>
                <div class="comp-detail-row">
                    <div class="comp-detail-section tried">
                        <div class="comp-detail-label">Why She Tried It</div>
                        <p>${c.whySheTried}</p>
                    </div>
                    <div class="comp-detail-section failed">
                        <div class="comp-detail-label">Why It Failed</div>
                        <p>${c.whyItFailed}</p>
                    </div>
                    <div class="comp-detail-section advantage" data-copy="${esc(c.mlAdvantage)}">
                        <button class="copy-btn">Copy</button>
                        <div class="comp-detail-label">Maison Laundrin Wins Because</div>
                        <p>${c.mlAdvantage}</p>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

function renderAds(a) {
    return a.adCreative.map((ad, i) => `
        <div class="ad-card" data-copy="${esc(ad.primaryText)}">
            <button class="copy-btn">Copy All</button>
            <div class="ad-angle">Ad ${i + 1}: ${ad.angle || ''}</div>
            <div class="ad-hook">${ad.hook || ad.headline || ''}</div>
            <div class="ad-primary">${ad.primaryText}</div>
            <div class="ad-meta">
                <div class="ad-meta-item">
                    <div class="ad-meta-label">Headline</div>
                    <div class="ad-meta-value">${ad.headline || '—'}</div>
                </div>
                <div class="ad-meta-item">
                    <div class="ad-meta-label">Description</div>
                    <div class="ad-meta-value">${ad.description || '—'}</div>
                </div>
                <div class="ad-meta-item">
                    <div class="ad-meta-label">CTA</div>
                    <div class="ad-meta-value">${ad.cta || '—'}</div>
                </div>
                <div class="ad-meta-item">
                    <div class="ad-meta-label">Destination</div>
                    <div class="ad-meta-value">${ad.destination || '—'}</div>
                </div>
            </div>
            ${ad.creativeDirection ? `
                <div class="ad-creative-dir">
                    <strong>Creative Direction:</strong> ${ad.creativeDirection}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function renderTargeting(a) {
    let html = '';
    if (a.metaTargeting) {
        if (a.metaTargeting.interests && a.metaTargeting.interests.length) {
            html += `<div class="section-title">Meta Interests</div>`;
            html += `<div class="content-block"><div class="tag-list">`;
            html += a.metaTargeting.interests.map(i => `<span class="tag">${i}</span>`).join('');
            html += `</div></div>`;
        }
        if (a.metaTargeting.behaviors && a.metaTargeting.behaviors.length) {
            html += `<div class="section-title">Behaviors</div>`;
            html += `<div class="content-block"><div class="tag-list">`;
            html += a.metaTargeting.behaviors.map(b => `<span class="tag">${b}</span>`).join('');
            html += `</div></div>`;
        }
        if (a.metaTargeting.demographics) {
            html += `<div class="section-title">Demographic Targeting</div>`;
            html += `<div class="content-block" data-copy="${esc(a.metaTargeting.demographics)}">
                <button class="copy-btn">Copy</button>
                <p>${a.metaTargeting.demographics}</p>
            </div>`;
        }
        if (a.metaTargeting.stacks && a.metaTargeting.stacks.length) {
            html += `<div class="section-title">Interest Stacks</div>`;
            a.metaTargeting.stacks.forEach(stack => {
                html += `<div class="content-block" data-copy="${esc(stack.name + ': ' + stack.interests)}">
                    <button class="copy-btn">Copy</button>
                    <h4>${stack.name}</h4>
                    <p>${stack.interests}</p>
                </div>`;
            });
        }
    }
    return html;
}

// =============================================
// PHASE 1: PERFORMANCE DASHBOARD
// =============================================

function renderPerformanceView() {
    if (typeof PERFORMANCE === 'undefined') return;
    const p = PERFORMANCE;
    const hasData = p.lastSync !== null;
    const el = document.getElementById('perf-content');

    if (!hasData) {
        el.innerHTML = `
            <div class="view-header">
                <h2 class="view-title">Performance Dashboard</h2>
            </div>
            ${renderEmptyState('No Performance Data Yet', 'Say "sync my Meta data" to pull live campaign metrics.<br><br>Campaigns using the naming convention <strong>{AvatarCode}_{Angle}_{Version}_{Variant}</strong> will be auto-mapped to avatars.<br><br>Example: <strong>CC_ChurchPew_v1_A</strong> = Compliment Collector')}
        `;
        return;
    }

    let html = `
        <div class="view-header">
            <h2 class="view-title">Performance Dashboard</h2>
            <div class="view-meta">Last sync: ${p.lastSync}</div>
        </div>
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-value">${formatCurrency(p.overall.spend)}</div>
                <div class="kpi-label">Total Spend</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value">${formatCurrency(p.overall.cpa)}</div>
                <div class="kpi-label">CPA</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value">${p.overall.roas ? p.overall.roas.toFixed(2) + 'x' : '—'}</div>
                <div class="kpi-label">ROAS</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value">${p.overall.purchases || 0}</div>
                <div class="kpi-label">Purchases</div>
            </div>
        </div>
    `;

    // Daily trend
    if (p.dailyTrend.length > 0) {
        html += `
            <div class="daily-trend-section">
                <div class="section-title" style="margin-top:0">Daily Trend (Last ${p.dailyTrend.length} Days)</div>
                ${p.dailyTrend.map(d => `
                    <div class="trend-row">
                        <span class="trend-date">${d.date}</span>
                        <span class="trend-spend">${formatCurrency(d.spend)}</span>
                        <span class="trend-purchases">${d.purchases} purch</span>
                        <span class="trend-roas ${d.roas >= 2 ? 'kpi-trend up' : d.roas >= 1 ? 'kpi-trend flat' : 'kpi-trend down'}">${d.roas ? d.roas.toFixed(2) + 'x' : '—'}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Per-avatar grid
    const avatarIds = Object.keys(p.avatars);
    if (avatarIds.length > 0) {
        html += `<div class="section-title" style="margin-top:32px">Per-Avatar Performance</div>`;
        html += `<div class="perf-avatar-grid">`;
        html += avatarIds.map(id => {
            const ap = p.avatars[id];
            const avatar = AVATARS.find(a => a.id === parseInt(id));
            if (!avatar) return '';
            const trendClass = ap.trend || 'flat';
            const trendLabel = trendClass === 'up' ? '&#x2191;' : trendClass === 'down' ? '&#x2193;' : '&#x2192;';
            return `
                <div class="perf-avatar-card" onclick="openProfile(${avatar.id})">
                    <div class="perf-avatar-name">
                        ${avatar.emoji} ${avatar.name}
                        <span class="trend-indicator ${trendClass}">${trendLabel}</span>
                    </div>
                    <div class="perf-avatar-metrics">
                        <div class="perf-metric">
                            <div class="perf-metric-value">${formatCurrency(ap.spend)}</div>
                            <div class="perf-metric-label">Spend</div>
                        </div>
                        <div class="perf-metric">
                            <div class="perf-metric-value">${ap.purchases || 0}</div>
                            <div class="perf-metric-label">Purchases</div>
                        </div>
                        <div class="perf-metric">
                            <div class="perf-metric-value">${formatCurrency(ap.cpa)}</div>
                            <div class="perf-metric-label">CPA</div>
                        </div>
                        <div class="perf-metric">
                            <div class="perf-metric-value">${ap.roas ? ap.roas.toFixed(2) + 'x' : '—'}</div>
                            <div class="perf-metric-label">ROAS</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        html += `</div>`;
    }

    // Leaderboard
    if (p.leaderboard.top.length > 0 || p.leaderboard.bottom.length > 0) {
        html += `<div class="section-title" style="margin-top:32px">Ad Leaderboard</div>`;
        html += `<div class="leaderboard-section">`;
        html += `<div class="leaderboard-col top"><h3>Top Performers</h3>`;
        html += p.leaderboard.top.map(item => {
            const avatar = AVATARS.find(a => a.id === item.avatarId);
            return `<div class="leaderboard-item">
                <span class="lb-name">${avatar ? avatar.emoji + ' ' : ''}${item.campaignName}</span>
                <span class="lb-roas good">${item.roas.toFixed(2)}x</span>
            </div>`;
        }).join('');
        html += `</div>`;
        html += `<div class="leaderboard-col bottom"><h3>Needs Attention</h3>`;
        html += p.leaderboard.bottom.map(item => {
            const avatar = AVATARS.find(a => a.id === item.avatarId);
            return `<div class="leaderboard-item">
                <span class="lb-name">${avatar ? avatar.emoji + ' ' : ''}${item.campaignName}</span>
                <span class="lb-roas bad">${item.roas.toFixed(2)}x</span>
            </div>`;
        }).join('');
        html += `</div></div>`;
    }

    el.innerHTML = html;
}

// Avatar Performance Tab (inside profile)
function renderAvatarPerformance(a) {
    if (typeof PERFORMANCE === 'undefined' || !PERFORMANCE.avatars[a.id]) {
        return renderEmptyState('No Performance Data', 'Say "sync my Meta data" to pull live campaign metrics for this avatar.');
    }

    const ap = PERFORMANCE.avatars[a.id];
    let html = `
        <div class="section-title">Campaign Performance for ${a.name}</div>
        <div class="kpi-grid" style="margin-bottom:24px">
            <div class="kpi-card">
                <div class="kpi-value">${formatCurrency(ap.spend)}</div>
                <div class="kpi-label">Spend</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value">${formatCurrency(ap.cpa)}</div>
                <div class="kpi-label">CPA</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value">${ap.roas ? ap.roas.toFixed(2) + 'x' : '—'}</div>
                <div class="kpi-label">ROAS</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value">${ap.purchases || 0}</div>
                <div class="kpi-label">Purchases</div>
            </div>
        </div>
    `;

    if (ap.campaigns && ap.campaigns.length) {
        html += `<div class="section-title">Campaigns</div>`;
        ap.campaigns.forEach(c => {
            const roasClass = c.roas >= 2 ? 'good' : c.roas >= 1 ? 'neutral' : 'bad';
            html += `
                <div class="leaderboard-item" style="margin-bottom:8px">
                    <span class="lb-name">${c.name} <span style="color:var(--text-muted);font-size:0.7rem">${c.status}</span></span>
                    <span class="lb-roas ${roasClass}">${c.roas ? c.roas.toFixed(2) + 'x' : '—'}</span>
                </div>
            `;
        });
    }

    return html;
}

// =============================================
// PHASE 2: RESEARCH PIPELINE
// =============================================

function updatePipelineFilterUI() {
    document.querySelectorAll('[data-ptype]').forEach(b => {
        b.classList.toggle('active', b.dataset.ptype === pipelineTypeFilter);
    });
    document.querySelectorAll('[data-pstatus]').forEach(b => {
        b.classList.toggle('active', b.dataset.pstatus === pipelineStatusFilter);
    });
}

function renderPipelineView() {
    if (typeof PIPELINE === 'undefined') return;

    const metaEl = document.getElementById('pipeline-meta');
    metaEl.textContent = PIPELINE.entries.length > 0
        ? `${PIPELINE.entries.length} entries`
        : '';

    renderPipelineFeed();
}

function renderPipelineFeed() {
    let entries = [...(PIPELINE.entries || [])];

    if (pipelineTypeFilter !== 'all') {
        entries = entries.filter(e => e.type === pipelineTypeFilter);
    }
    if (pipelineStatusFilter !== 'all') {
        entries = entries.filter(e => e.status === pipelineStatusFilter);
    }

    entries.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    const feedEl = document.getElementById('pipeline-feed');
    if (entries.length === 0) {
        const msg = PIPELINE.entries.length === 0
            ? 'Add research as you find it. Tell Claude:<br><br><strong>"add quote: [text] from [source] for [avatar]"</strong><br><strong>"add insight: [text] for [avatar]"</strong><br><strong>"add competitor: [brand] [details] for [avatar]"</strong>'
            : 'No entries match the current filters.';
        feedEl.innerHTML = renderEmptyState('No Pipeline Entries', msg);
        return;
    }

    feedEl.innerHTML = entries.map(entry => {
        const avatarTags = (entry.avatarIds || []).map(id => {
            const a = AVATARS.find(av => av.id === id);
            return a ? `<span class="pipeline-avatar-tag">${a.emoji} ${a.name}</span>` : '';
        }).join('');

        return `
            <div class="pipeline-entry">
                <button class="copy-btn pipeline-copy-btn">Copy</button>
                <div class="pipeline-entry-header">
                    <span class="pipeline-entry-type ${entry.type}">${entry.type}</span>
                    <span class="pipeline-entry-date">${entry.date || ''}</span>
                </div>
                <div class="pipeline-entry-content">${entry.content}</div>
                ${entry.source ? `<div class="pipeline-entry-source">Source: ${entry.source}</div>` : ''}
                <div class="pipeline-entry-footer">
                    <div class="pipeline-avatar-tags">${avatarTags}</div>
                    <span class="pipeline-status-tag ${entry.status}">${entry.status}</span>
                </div>
                ${entry.notes ? `<div class="pipeline-entry-source" style="margin-top:6px">${entry.notes}</div>` : ''}
            </div>
        `;
    }).join('');
}

// =============================================
// PHASE 3: AD LAB
// =============================================

function updateAdLabFilterUI() {
    document.querySelectorAll('[data-adstatus]').forEach(b => {
        b.classList.toggle('active', b.dataset.adstatus === adlabStatusFilter);
    });
    document.querySelectorAll('[data-adformat]').forEach(b => {
        b.classList.toggle('active', b.dataset.adformat === adlabFormatFilter);
    });
}

function renderAdLabView() {
    if (typeof AD_LIBRARY === 'undefined') return;
    const ads = AD_LIBRARY.ads;
    const el = document.getElementById('adlab-content');

    if (ads.length === 0) {
        el.innerHTML = `
            <div class="view-header">
                <h2 class="view-title">Ad Lab</h2>
            </div>
            ${renderEmptyState('No Ads in Library Yet', 'Create ads by telling Claude:<br><br><strong>"create 3 new ads for Compliment Collector, story hook, church pew angle"</strong><br><br>Ads will be saved here with status tracking (Draft / Testing / Winner / Killed), export buttons, and avatar reference panels.')}
        `;
        return;
    }

    // Status counts
    const statusCounts = { draft: 0, testing: 0, winner: 0, killed: 0 };
    ads.forEach(ad => { if (statusCounts[ad.status] !== undefined) statusCounts[ad.status]++; });

    // Avatar select options
    const avatarOpts = AVATARS.map(a => `<option value="${a.id}" ${adlabAvatarFilter == a.id ? 'selected' : ''}>${a.emoji} ${a.name}</option>`).join('');

    el.innerHTML = `
        <div class="view-header">
            <h2 class="view-title">Ad Lab</h2>
            <div class="view-meta">${ads.length} total ads</div>
        </div>
        <div class="adlab-status-bar">
            <div class="adlab-status-pill draft"><span class="count">${statusCounts.draft}</span> Draft</div>
            <div class="adlab-status-pill testing"><span class="count">${statusCounts.testing}</span> Testing</div>
            <div class="adlab-status-pill winner"><span class="count">${statusCounts.winner}</span> Winners</div>
            <div class="adlab-status-pill killed"><span class="count">${statusCounts.killed}</span> Killed</div>
        </div>
        <div class="adlab-filters" id="adlab-filters">
            <div class="pipeline-filter-group">
                <span class="filter-label">Avatar:</span>
                <select id="adlab-avatar-filter" class="filter-select">
                    <option value="all" ${adlabAvatarFilter === 'all' ? 'selected' : ''}>All Avatars</option>
                    ${avatarOpts}
                </select>
            </div>
            <div class="pipeline-filter-group">
                <span class="filter-label">Status:</span>
                <button class="filter-tag ${adlabStatusFilter === 'all' ? 'active' : ''}" data-adstatus="all">All</button>
                <button class="filter-tag ${adlabStatusFilter === 'draft' ? 'active' : ''}" data-adstatus="draft">Draft</button>
                <button class="filter-tag ${adlabStatusFilter === 'testing' ? 'active' : ''}" data-adstatus="testing">Testing</button>
                <button class="filter-tag ${adlabStatusFilter === 'winner' ? 'active' : ''}" data-adstatus="winner">Winner</button>
                <button class="filter-tag ${adlabStatusFilter === 'killed' ? 'active' : ''}" data-adstatus="killed">Killed</button>
            </div>
            <div class="pipeline-filter-group">
                <span class="filter-label">Format:</span>
                <button class="filter-tag ${adlabFormatFilter === 'all' ? 'active' : ''}" data-adformat="all">All</button>
                <button class="filter-tag ${adlabFormatFilter === 'single_image' ? 'active' : ''}" data-adformat="single_image">Image</button>
                <button class="filter-tag ${adlabFormatFilter === 'video' ? 'active' : ''}" data-adformat="video">Video</button>
                <button class="filter-tag ${adlabFormatFilter === 'carousel' ? 'active' : ''}" data-adformat="carousel">Carousel</button>
            </div>
        </div>
        <div id="adlab-list" class="adlab-list"></div>
    `;

    renderAdLabList();
}

function renderAdLabList() {
    const listEl = document.getElementById('adlab-list');
    if (!listEl) return;

    let filtered = [...AD_LIBRARY.ads];
    if (adlabAvatarFilter !== 'all') {
        filtered = filtered.filter(ad => ad.avatarId === parseInt(adlabAvatarFilter));
    }
    if (adlabStatusFilter !== 'all') {
        filtered = filtered.filter(ad => ad.status === adlabStatusFilter);
    }
    if (adlabFormatFilter !== 'all') {
        filtered = filtered.filter(ad => ad.format === adlabFormatFilter);
    }

    if (filtered.length === 0) {
        listEl.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px 0;">No ads match the current filters.</p>';
        return;
    }

    listEl.innerHTML = filtered.map(ad => {
        const avatar = AVATARS.find(a => a.id === ad.avatarId);
        const avatarName = avatar ? `${avatar.emoji} ${avatar.name}` : 'Unknown';

        // Reference panel
        let refHtml = '';
        if (avatar) {
            const painSnippets = avatar.painPoints.slice(0, 2).map(pp => pp.title);
            const proofQuotes = (typeof RESEARCH !== 'undefined' && RESEARCH.socialProof[avatar.id])
                ? RESEARCH.socialProof[avatar.id].slice(0, 2).map(q => `"${truncate(q.quote, 60)}"`)
                : [];
            if (painSnippets.length || proofQuotes.length) {
                refHtml = `
                    <div class="adlab-ref-panel">
                        <div class="adlab-ref-title">Avatar Reference — ${avatarName}</div>
                        ${painSnippets.map(p => `<div class="adlab-ref-item">Pain: ${p}</div>`).join('')}
                        ${proofQuotes.map(q => `<div class="adlab-ref-item">Proof: ${q}</div>`).join('')}
                    </div>
                `;
            }
        }

        return `
            <div class="adlab-card" data-copy="${esc(ad.primaryText || '')}">
                <button class="copy-btn">Copy</button>
                <div class="adlab-card-header">
                    <div class="adlab-card-badges">
                        <span class="adlab-status-badge ${ad.status}">${ad.status}</span>
                        ${ad.hookType ? `<span class="adlab-hook-badge">${ad.hookType} hook</span>` : ''}
                        ${ad.format ? `<span class="adlab-format-badge">${ad.format.replace('_', ' ')}</span>` : ''}
                    </div>
                    <span class="adlab-card-avatar">${avatarName}</span>
                </div>
                ${ad.angle ? `<div class="adlab-card-angle">${ad.angle}</div>` : ''}
                ${ad.hook ? `<div class="adlab-card-hook">${ad.hook}</div>` : ''}
                ${ad.primaryText ? `<div class="adlab-card-text">${ad.primaryText}</div>` : ''}
                <div class="adlab-card-meta">
                    <div class="ad-meta-item"><div class="ad-meta-label">Headline</div><div class="ad-meta-value">${ad.headline || '—'}</div></div>
                    <div class="ad-meta-item"><div class="ad-meta-label">Description</div><div class="ad-meta-value">${ad.description || '—'}</div></div>
                    <div class="ad-meta-item"><div class="ad-meta-label">CTA</div><div class="ad-meta-value">${ad.cta || '—'}</div></div>
                    <div class="ad-meta-item"><div class="ad-meta-label">Destination</div><div class="ad-meta-value">${ad.destination || '—'}</div></div>
                </div>
                ${ad.creativeDirection ? `<div class="ad-creative-dir"><strong>Creative Direction:</strong> ${ad.creativeDirection}</div>` : ''}
                <button class="adlab-export-btn" data-ad-id="${ad.id}">Export for Meta</button>
                ${refHtml}
            </div>
        `;
    }).join('');
}

function buildMetaExport(ad) {
    const parts = [];
    if (ad.primaryText) parts.push(`Primary Text:\n${ad.primaryText}`);
    if (ad.headline) parts.push(`Headline: ${ad.headline}`);
    if (ad.description) parts.push(`Description: ${ad.description}`);
    if (ad.cta) parts.push(`CTA: ${ad.cta}`);
    if (ad.destination) parts.push(`Destination: ${ad.destination}`);
    return parts.join('\n\n');
}

function exportAdForMeta(adId) {
    if (typeof AD_LIBRARY === 'undefined') return;
    const ad = AD_LIBRARY.ads.find(a => a.id === adId);
    if (!ad) return;
    copyToClipboard(buildMetaExport(ad));
}

// =============================================
// PHASE 4: CREATIVE TESTING
// =============================================

function renderTestingView() {
    if (typeof TESTING === 'undefined') return;
    const el = document.getElementById('testing-content');

    if (TESTING.tests.length === 0 && TESTING.learnings.length === 0) {
        el.innerHTML = `
            <div class="view-header">
                <h2 class="view-title">Creative Testing</h2>
            </div>
            ${renderEmptyState('No Tests Yet', 'Track A/B tests and spot winning patterns. Tell Claude:<br><br><strong>"log test: CC story hook A vs question hook B, $200"</strong><br><br>As tests complete, patterns will emerge showing which hook types, angles, and avatars perform best.')}
        `;
        return;
    }

    const activeTests = TESTING.tests.filter(t => t.status === 'active');
    const completedTests = TESTING.tests.filter(t => t.status === 'completed');

    let html = `
        <div class="view-header">
            <h2 class="view-title">Creative Testing</h2>
            <div class="view-meta">${activeTests.length} active &middot; ${completedTests.length} completed</div>
        </div>
    `;

    // Patterns
    html += renderTestingPatterns();

    // Active tests
    if (activeTests.length > 0) {
        html += `<div class="section-title" style="margin-top:32px">Active Tests</div>`;
        html += `<div class="testing-list">${activeTests.map(t => renderTestCard(t)).join('')}</div>`;
    }

    // Completed tests
    if (completedTests.length > 0) {
        html += `<div class="section-title" style="margin-top:32px">Completed Tests</div>`;
        html += `<div class="testing-list">${completedTests.map(t => renderTestCard(t)).join('')}</div>`;
    }

    // Learnings
    if (TESTING.learnings.length > 0) {
        html += `<div class="section-title" style="margin-top:32px">Learnings Log</div>`;
        html += `<div class="learnings-list">${TESTING.learnings.map(l => `
            <div class="learning-entry">
                <span class="learning-date">${l.date || ''}</span>
                <span class="learning-text">${l.insight}</span>
                ${l.category ? `<span class="learning-category">${l.category}</span>` : ''}
            </div>
        `).join('')}</div>`;
    }

    el.innerHTML = html;
}

function renderTestingPatterns() {
    const patterns = TESTING.patterns;
    const hookEntries = Object.entries(patterns.byHookType || {});
    const avatarEntries = Object.entries(patterns.byAvatar || {});
    const angleEntries = Object.entries(patterns.byAngle || {});

    if (hookEntries.length === 0 && avatarEntries.length === 0 && angleEntries.length === 0) {
        return '';
    }

    let html = `<div class="section-title">Pattern Insights</div><div class="testing-patterns">`;

    if (hookEntries.length > 0) {
        const maxWinRate = Math.max(...hookEntries.map(([, v]) => v.winRate || 0), 1);
        html += `
            <div class="pattern-card">
                <h4>Win Rate by Hook Type</h4>
                ${hookEntries.map(([type, data]) => `
                    <div class="pattern-bar-row">
                        <span class="pattern-bar-label">${type}</span>
                        <div class="pattern-bar-track">
                            <div class="pattern-bar-fill" style="width:${((data.winRate || 0) / maxWinRate * 100)}%"></div>
                        </div>
                        <span class="pattern-bar-value">${(data.winRate || 0).toFixed(0)}%</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (avatarEntries.length > 0) {
        html += `
            <div class="pattern-card">
                <h4>Performance by Avatar</h4>
                ${avatarEntries.map(([id, data]) => {
                    const avatar = AVATARS.find(a => a.id === parseInt(id));
                    const label = avatar ? avatar.emoji + ' ' + avatar.name : 'Avatar ' + id;
                    return `
                        <div class="pattern-bar-row">
                            <span class="pattern-bar-label" style="width:140px">${truncate(label, 18)}</span>
                            <div style="flex:1;font-size:0.75rem;color:var(--text-secondary)">
                                ${data.tests} tests &middot; ${data.wins} wins &middot; CPA ${formatCurrency(data.avgCpa)} &middot; ${data.avgRoas ? data.avgRoas.toFixed(1) + 'x' : '—'}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    if (angleEntries.length > 0) {
        const maxAngleWin = Math.max(...angleEntries.map(([, v]) => v.winRate || 0), 1);
        html += `
            <div class="pattern-card">
                <h4>Win Rate by Angle</h4>
                ${angleEntries.map(([angle, data]) => `
                    <div class="pattern-bar-row">
                        <span class="pattern-bar-label">${angle.replace(/_/g, ' ')}</span>
                        <div class="pattern-bar-track">
                            <div class="pattern-bar-fill" style="width:${((data.winRate || 0) / maxAngleWin * 100)}%"></div>
                        </div>
                        <span class="pattern-bar-value">${(data.winRate || 0).toFixed(0)}%</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    html += `</div>`;
    return html;
}

function renderTestCard(test) {
    const avatar = AVATARS.find(a => a.id === test.avatarId);
    const avatarLabel = avatar ? `${avatar.emoji} ${avatar.name}` : '';

    return `
        <div class="test-card">
            <div class="test-card-header">
                <div>
                    <span class="test-status ${test.status}">${test.status}</span>
                    <span style="font-size:0.75rem;color:var(--text-muted);margin-left:8px">${avatarLabel}</span>
                </div>
                <span style="font-size:0.72rem;color:var(--text-muted)">${test.startDate || ''} ${test.endDate ? '&rarr; ' + test.endDate : ''}</span>
            </div>
            <div class="test-hypothesis">${test.hypothesis || ''}</div>
            ${test.budget ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px">Budget: ${formatCurrency(test.budget)}</div>` : ''}
            <div class="test-variants">
                ${(test.variants || []).map(v => `
                    <div class="test-variant ${test.winner === v.label ? 'winner-variant' : ''}">
                        <div class="test-variant-label">Variant ${v.label}${test.winner === v.label ? ' &#9733;' : ''}</div>
                        ${v.description ? `<div class="test-variant-desc">${v.description}</div>` : ''}
                        ${v.hookType ? `<div class="test-variant-desc">${v.hookType} hook</div>` : ''}
                        <div class="test-variant-metrics">
                            <div class="test-variant-metric"><div class="val">${formatCurrency(v.spend || 0)}</div><div class="lbl">Spend</div></div>
                            <div class="test-variant-metric"><div class="val">${v.purchases || 0}</div><div class="lbl">Purch</div></div>
                            <div class="test-variant-metric"><div class="val">${formatCurrency(v.cpa || 0)}</div><div class="lbl">CPA</div></div>
                            <div class="test-variant-metric"><div class="val">${v.roas ? v.roas.toFixed(1) + 'x' : '—'}</div><div class="lbl">ROAS</div></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            ${test.learning ? `<div class="test-learning">${test.learning}</div>` : ''}
        </div>
    `;
}

// =============================================
// PHASE 5: INTEGRATIONS HUB
// =============================================

function renderHubView() {
    if (typeof INTEGRATIONS === 'undefined') return;
    const ig = INTEGRATIONS;
    const el = document.getElementById('hub-content');

    if (!ig.lastSync) {
        el.innerHTML = `
            <div class="view-header">
                <h2 class="view-title">Integrations Hub</h2>
            </div>
            ${renderEmptyState('No Data Synced Yet', 'Pull cross-channel data by telling Claude:<br><br><strong>"full sync"</strong><br><br>This will connect to Shopify (orders, revenue, products), Klaviyo (subscribers, campaigns, flows), and Meta Ads (spend, ROAS) to build a unified view.')}
        `;
        return;
    }

    let html = `
        <div class="view-header">
            <h2 class="view-title">Integrations Hub</h2>
            <div class="view-meta">Last sync: ${ig.lastSync}</div>
        </div>
    `;

    // Attribution
    const attr = ig.attribution;
    if (attr.totalRevenue > 0) {
        const metaPct = attr.meta.percent || 0;
        const emailPct = attr.email.percent || 0;
        const organicPct = attr.organic.percent || 0;
        html += `
            <div class="section-title" style="margin-top:0">Revenue Attribution — ${formatCurrency(attr.totalRevenue)}</div>
            <div class="attribution-section">
                <div class="attribution-bar">
                    ${metaPct > 0 ? `<div class="attribution-segment meta" style="flex:${metaPct}">Meta ${metaPct}%</div>` : ''}
                    ${emailPct > 0 ? `<div class="attribution-segment email" style="flex:${emailPct}">Email ${emailPct}%</div>` : ''}
                    ${organicPct > 0 ? `<div class="attribution-segment organic" style="flex:${organicPct}">Organic ${organicPct}%</div>` : ''}
                </div>
                <div class="attribution-legend">
                    <div class="attribution-legend-item"><span class="attribution-legend-dot meta"></span>Meta Ads — ${formatCurrency(attr.meta.revenue)}</div>
                    <div class="attribution-legend-item"><span class="attribution-legend-dot email"></span>Email — ${formatCurrency(attr.email.revenue)}</div>
                    <div class="attribution-legend-item"><span class="attribution-legend-dot organic"></span>Organic — ${formatCurrency(attr.organic.revenue)}</div>
                </div>
            </div>
        `;
    }

    // Budget pacing
    const bp = ig.budgetPacing;
    if (bp.monthlyBudget > 0) {
        const pct = Math.min((bp.spent / bp.monthlyBudget) * 100, 100);
        html += `
            <div class="budget-section">
                <div class="budget-header">
                    <span class="budget-title">Budget Pacing</span>
                    <span class="budget-status ${bp.onTrack ? 'on-track' : 'over-pace'}">${bp.onTrack ? 'On Track' : 'Over Pace'}</span>
                </div>
                <div class="budget-bar"><div class="budget-bar-fill" style="width:${pct}%"></div></div>
                <div class="budget-metrics">
                    <div class="budget-metric"><div class="budget-metric-value">${formatCurrency(bp.monthlyBudget)}</div><div class="budget-metric-label">Monthly Budget</div></div>
                    <div class="budget-metric"><div class="budget-metric-value">${formatCurrency(bp.spent)}</div><div class="budget-metric-label">Spent</div></div>
                    <div class="budget-metric"><div class="budget-metric-value">${formatCurrency(bp.remaining)}</div><div class="budget-metric-label">Remaining</div></div>
                    <div class="budget-metric"><div class="budget-metric-value">${formatCurrency(bp.dailyPace)}</div><div class="budget-metric-label">Daily Pace</div></div>
                    <div class="budget-metric"><div class="budget-metric-value">${bp.daysRemaining}</div><div class="budget-metric-label">Days Left</div></div>
                </div>
            </div>
        `;
    }

    // Channel panels
    const m = ig.meta;
    html += `
        <div class="section-title" style="margin-top:32px">Meta Ads</div>
        <div class="channel-panel">
            <div class="channel-kpis">
                <div class="channel-kpi"><div class="channel-kpi-value">${formatCurrency(m.totalSpend)}</div><div class="channel-kpi-label">Spend</div></div>
                <div class="channel-kpi"><div class="channel-kpi-value">${formatCurrency(m.totalRevenue)}</div><div class="channel-kpi-label">Revenue</div></div>
                <div class="channel-kpi"><div class="channel-kpi-value">${m.roas ? m.roas.toFixed(2) + 'x' : '—'}</div><div class="channel-kpi-label">ROAS</div></div>
                <div class="channel-kpi"><div class="channel-kpi-value">${m.activeCampaigns || 0}</div><div class="channel-kpi-label">Active Campaigns</div></div>
            </div>
        </div>
    `;

    const s = ig.shopify;
    let shopifyTrend = '';
    if (s.monthlyTrend && s.monthlyTrend.length > 0) {
        shopifyTrend = `<table class="channel-table"><thead><tr><th>Month</th><th>Revenue</th><th>Orders</th><th>AOV</th></tr></thead><tbody>${s.monthlyTrend.map(m => `<tr><td>${m.month}</td><td>${formatCurrency(m.revenue)}</td><td>${m.orders}</td><td>${formatCurrency(m.aov)}</td></tr>`).join('')}</tbody></table>`;
    }
    html += `
        <div class="section-title" style="margin-top:32px">Shopify</div>
        <div class="channel-panel">
            <div class="channel-kpis">
                <div class="channel-kpi"><div class="channel-kpi-value">${formatCurrency(s.totalRevenue)}</div><div class="channel-kpi-label">Total Revenue</div></div>
                <div class="channel-kpi"><div class="channel-kpi-value">${s.totalOrders || 0}</div><div class="channel-kpi-label">Orders</div></div>
                <div class="channel-kpi"><div class="channel-kpi-value">${formatCurrency(s.aov)}</div><div class="channel-kpi-label">AOV</div></div>
            </div>
            ${shopifyTrend}
        </div>
    `;

    const k = ig.klaviyo;
    let flowsHtml = '';
    if (k.flows && k.flows.length > 0) {
        flowsHtml = `<table class="channel-table"><thead><tr><th>Flow</th><th>Recipients</th><th>Conv Rate</th><th>Revenue</th></tr></thead><tbody>${k.flows.map(f => `<tr><td>${f.name}</td><td>${f.activeRecipients}</td><td>${f.conversionRate ? f.conversionRate.toFixed(1) + '%' : '—'}</td><td>${formatCurrency(f.revenue)}</td></tr>`).join('')}</tbody></table>`;
    }
    html += `
        <div class="section-title" style="margin-top:32px">Klaviyo</div>
        <div class="channel-panel">
            <div class="channel-kpis">
                <div class="channel-kpi"><div class="channel-kpi-value">${k.totalSubscribers ? k.totalSubscribers.toLocaleString() : '0'}</div><div class="channel-kpi-label">Subscribers</div></div>
                <div class="channel-kpi"><div class="channel-kpi-value">${formatCurrency(k.totalEmailRevenue)}</div><div class="channel-kpi-label">Email Revenue</div></div>
            </div>
            ${flowsHtml}
        </div>
    `;

    // Products
    const products = s.topProducts || [];
    if (products.length > 0) {
        html += `<div class="section-title" style="margin-top:32px">Product Leaderboard</div>`;
        html += `<div class="product-leaderboard">${products.map(p => `
            <div class="product-row">
                <span class="product-name">${p.name}${p.variant ? ' — ' + p.variant : ''}</span>
                <span class="product-revenue">${formatCurrency(p.revenue)}</span>
                <span class="product-units">${p.unitsSold} units</span>
            </div>
        `).join('')}</div>`;
    }

    el.innerHTML = html;
}

// =============================================
// SEARCH
// =============================================

function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
        setNav(currentNav);
        return;
    }

    const results = [];
    AVATARS.forEach(a => {
        const searchFields = [
            { context: 'Core Wound', text: a.coreWound },
            { context: 'Tagline', text: a.tagline },
            ...a.painPoints.map(pp => ({ context: `Pain Point: ${pp.title}`, text: pp.detail })),
            ...a.painPoints.flatMap(pp => (pp.quotes || []).map(q => ({ context: 'Quote', text: q.text }))),
            ...a.languagePatterns.map(lp => ({ context: 'Language Pattern', text: lp })),
            ...a.emotionalLandscape.fears.map(f => ({ context: 'Fear', text: f })),
            ...a.emotionalLandscape.desires.map(d => ({ context: 'Desire', text: d })),
            ...a.emotionalLandscape.secretWants.map(s => ({ context: 'Secret Want', text: s })),
            ...a.triggerMoments.map(t => ({ context: 'Trigger Moment', text: t })),
            ...a.scienceInsights.map(s => ({ context: 'Science Insight', text: s })),
            ...a.adCreative.map(ad => ({ context: `Ad: ${ad.angle || ''}`, text: ad.primaryText })),
            ...a.adCreative.map(ad => ({ context: 'Ad Headline', text: ad.headline || '' })),
            { context: 'Competitor Angle', text: a.competitorAngle },
            { context: 'Recommended Scent', text: a.recommendedScent },
            ...(a.failedSolutions || []).map(f => ({ context: 'Failed Solution', text: f })),
            ...(a.beliefs ? a.beliefs.current.map(b => ({ context: 'Current Belief', text: b })) : []),
            ...(a.beliefs ? a.beliefs.target.map(b => ({ context: 'Target Belief', text: b })) : []),
            ...(a.messagingFramework ? (a.messagingFramework.dos || []).map(d => ({ context: 'Messaging Do', text: d })) : []),
            ...(a.messagingFramework ? (a.messagingFramework.donts || []).map(d => ({ context: "Messaging Don't", text: d })) : []),
        ];

        if (typeof RESEARCH !== 'undefined') {
            if (RESEARCH.objections[a.id]) {
                RESEARCH.objections[a.id].forEach(obj => {
                    searchFields.push({ context: 'Objection', text: obj.objection });
                    searchFields.push({ context: 'Objection Counter', text: obj.counter });
                });
            }
            if (RESEARCH.socialProof[a.id]) {
                RESEARCH.socialProof[a.id].forEach(sp => {
                    searchFields.push({ context: `Social Proof (${sp.theme})`, text: sp.quote });
                });
            }
            if (RESEARCH.competitors[a.id]) {
                RESEARCH.competitors[a.id].forEach(c => {
                    searchFields.push({ context: `Competitor: ${c.brand}`, text: c.whyItFailed });
                    searchFields.push({ context: `ML vs ${c.brand}`, text: c.mlAdvantage });
                });
            }
            if (RESEARCH.marketData && RESEARCH.marketData[a.id]) {
                RESEARCH.marketData[a.id].forEach(md => {
                    searchFields.push({ context: 'Market Data', text: md.stat });
                });
            }
        }

        searchFields.forEach(field => {
            if (field.text && field.text.toLowerCase().includes(q)) {
                results.push({ avatar: a, context: field.context, text: field.text, query: q });
            }
        });
    });

    // Pipeline
    if (typeof PIPELINE !== 'undefined') {
        PIPELINE.entries.forEach(entry => {
            if (entry.content && entry.content.toLowerCase().includes(q)) {
                results.push({
                    avatar: { emoji: '📋', name: 'Pipeline', id: null },
                    context: entry.type,
                    text: entry.content,
                    query: q
                });
            }
        });
    }

    // Ad Library
    if (typeof AD_LIBRARY !== 'undefined') {
        AD_LIBRARY.ads.forEach(ad => {
            [{ context: 'Ad Lab — Hook', text: ad.hook }, { context: 'Ad Lab — Copy', text: ad.primaryText }, { context: 'Ad Lab — Headline', text: ad.headline }].forEach(field => {
                if (field.text && field.text.toLowerCase().includes(q)) {
                    const avatar = AVATARS.find(a => a.id === ad.avatarId);
                    results.push({
                        avatar: avatar || { emoji: '📝', name: 'Ad Lab', id: null },
                        context: `${field.context} [${ad.status}]`,
                        text: field.text,
                        query: q
                    });
                }
            });
        });
    }

    // Learnings
    if (typeof TESTING !== 'undefined') {
        TESTING.learnings.forEach(l => {
            if (l.insight && l.insight.toLowerCase().includes(q)) {
                results.push({
                    avatar: { emoji: '🧪', name: 'Testing', id: null },
                    context: `Learning — ${l.category || ''}`,
                    text: l.insight,
                    query: q
                });
            }
        });
    }

    renderSearchResults(results, q);
}

function renderSearchResults(results, query) {
    showView('search-results');
    document.getElementById('search-results-title').textContent = `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`;

    const list = document.getElementById('search-results-list');
    if (!results.length) {
        list.innerHTML = '<p style="color:var(--text-muted);padding:40px 0;text-align:center;">No results found.</p>';
        return;
    }

    list.innerHTML = results.slice(0, 50).map(r => {
        const highlighted = highlightText(r.text, r.query);
        const onclick = r.avatar.id ? `onclick="openProfile(${r.avatar.id})"` : '';
        return `
        <div class="search-result-item" ${onclick} style="${r.avatar.id ? 'cursor:pointer' : ''}">
            <div class="sr-avatar">${r.avatar.emoji} ${r.avatar.name}</div>
            <div class="sr-context">${r.context}</div>
            <div class="sr-text">${truncate(highlighted, 200)}</div>
        </div>`;
    }).join('');
}

function clearSearch() {
    document.getElementById('search').value = '';
    setNav(currentNav);
}

// ---- UTILITIES ----
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}

function esc(str) {
    if (!str) return '';
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function truncate(str, len) {
    if (str.length <= len) return str;
    return str.slice(0, len) + '...';
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function debounce(fn, ms) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), ms);
    };
}

function formatCurrency(val) {
    if (!val && val !== 0) return '—';
    if (val === 0) return '$0';
    return '$' + Number(val).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function renderEmptyState(title, text) {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">&#x2014;</div>
            <div class="empty-state-title">${title}</div>
            <div class="empty-state-text">${text}</div>
        </div>
    `;
}
