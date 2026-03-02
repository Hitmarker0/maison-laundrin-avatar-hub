/* =============================================
   MAISON LAUNDRIN — AVATAR INTELLIGENCE HUB
   Core application logic
   ============================================= */

let currentAvatarIndex = 0;
let currentTab = 'overview';

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    bindEvents();
});

function bindEvents() {
    document.getElementById('search').addEventListener('input', debounce(handleSearch, 300));
    document.getElementById('back-btn').addEventListener('click', showDashboard);
    document.getElementById('prev-btn').addEventListener('click', () => navigateAvatar(-1));
    document.getElementById('next-btn').addEventListener('click', () => navigateAvatar(1));
    document.getElementById('tabs').addEventListener('click', e => {
        if (e.target.classList.contains('tab')) {
            setTab(e.target.dataset.tab);
        }
    });
    document.addEventListener('click', e => {
        if (e.target.classList.contains('copy-btn')) {
            const block = e.target.closest('[data-copy]');
            if (block) copyToClipboard(block.dataset.copy);
        }
        if (e.target.closest('.quote-block') && !e.target.classList.contains('copy-btn')) {
            const block = e.target.closest('.quote-block');
            if (block.dataset.copy) copyToClipboard(block.dataset.copy);
        }
        if (e.target.closest('.collapsible-header')) {
            const header = e.target.closest('.collapsible-header');
            header.classList.toggle('open');
            header.nextElementSibling.classList.toggle('open');
        }
    });
}

// ---- VIEWS ----
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showDashboard() {
    showView('dashboard');
    document.getElementById('search').value = '';
    window.scrollTo(0, 0);
}

// ---- DASHBOARD ----
function renderDashboard() {
    const tier1 = AVATARS.filter(a => a.tier === 1);
    const tier2 = AVATARS.filter(a => a.tier === 2);
    document.getElementById('grid-tier1').innerHTML = tier1.map(a => renderCard(a)).join('');
    document.getElementById('grid-tier2').innerHTML = tier2.map(a => renderCard(a)).join('');
}

function renderCard(a) {
    const painDots = Array.from({length: 5}, (_, i) =>
        `<span class="pain-dot ${i < a.painIntensity ? 'active' : ''}"></span>`
    ).join('');

    return `
    <div class="avatar-card" onclick="openProfile(${a.id})">
        <span class="tier-badge tier-${a.tier}">${a.tier === 1 ? 'Tier 1 — Core' : 'Tier 2 — Niche'}</span>
        <div class="card-top">
            <div class="card-name">${a.emoji} ${a.name}</div>
            <div class="card-age">${a.ageRange}</div>
        </div>
        <div class="card-wound">${a.coreWound}</div>
        <div class="pain-bar">
            <div class="pain-dots">${painDots}</div>
            <span>Pain intensity</span>
        </div>
    </div>`;
}

// ---- PROFILE ----
function openProfile(id) {
    currentAvatarIndex = AVATARS.findIndex(a => a.id === id);
    currentTab = 'overview';
    renderProfile();
    showView('profile');
    window.scrollTo(0, 0);
}

function navigateAvatar(dir) {
    currentAvatarIndex = (currentAvatarIndex + dir + AVATARS.length) % AVATARS.length;
    renderProfile();
    window.scrollTo(0, 0);
}

function renderProfile() {
    const a = AVATARS[currentAvatarIndex];

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
                    <div class="ph-stat-value">${a.languagePatterns.length}</div>
                    <div class="ph-stat-label">Language Patterns</div>
                </div>
                <div class="ph-stat">
                    <div class="ph-stat-value">${a.triggerMoments.length}</div>
                    <div class="ph-stat-label">Triggers</div>
                </div>
            </div>
        </div>
        <div class="ph-tagline">"${a.tagline}"</div>
    `;

    // Update active tab
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
        case 'ads': el.innerHTML = renderAds(a); break;
        case 'targeting': el.innerHTML = renderTargeting(a); break;
    }
}

// ---- TAB RENDERERS ----

function renderOverview(a) {
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

// ---- SEARCH ----
function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
        showView('dashboard');
        return;
    }

    const results = [];
    AVATARS.forEach(a => {
        // Search through all text fields
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
            ...(a.messagingFramework ? (a.messagingFramework.donts || []).map(d => ({ context: 'Messaging Don\'t', text: d })) : []),
        ];

        searchFields.forEach(field => {
            if (field.text && field.text.toLowerCase().includes(q)) {
                results.push({
                    avatar: a,
                    context: field.context,
                    text: field.text,
                    query: q
                });
            }
        });
    });

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
        return `
        <div class="search-result-item" onclick="openProfile(${r.avatar.id})">
            <div class="sr-avatar">${r.avatar.emoji} ${r.avatar.name}</div>
            <div class="sr-context">${r.context}</div>
            <div class="sr-text">${truncate(highlighted, 200)}</div>
        </div>`;
    }).join('');
}

function clearSearch() {
    document.getElementById('search').value = '';
    showDashboard();
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
