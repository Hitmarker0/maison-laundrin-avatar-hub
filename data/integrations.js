/* =============================================
   INTEGRATIONS HUB — Cross-channel data
   Shopify + Klaviyo + Meta in one view
   Updated via Claude Code MCP sync
   ============================================= */

const INTEGRATIONS = {
    lastSync: null,

    shopify: {
        totalRevenue: 0,
        totalOrders: 0,
        aov: 0,
        monthlyTrend: [
            // { month: '2026-01', revenue: 0, orders: 0, aov: 0 }
        ],
        topProducts: [
            // { name: '', revenue: 0, unitsSold: 0, variant: '' }
        ]
    },

    klaviyo: {
        totalSubscribers: 0,
        subscriberGrowth: 0,  // percent change
        campaigns: [
            // { name: '', sent: 0, openRate: 0, clickRate: 0, revenue: 0, date: '' }
        ],
        flows: [
            // { name: '', activeRecipients: 0, revenue: 0, conversionRate: 0 }
        ],
        totalEmailRevenue: 0
    },

    meta: {
        totalSpend: 0,
        totalRevenue: 0,
        roas: 0,
        activeCampaigns: 0
    },

    // Cross-channel attribution
    attribution: {
        meta: { revenue: 0, percent: 0 },
        email: { revenue: 0, percent: 0 },
        organic: { revenue: 0, percent: 0 },
        totalRevenue: 0
    },

    // Budget pacing
    budgetPacing: {
        monthlyBudget: 0,
        spent: 0,
        remaining: 0,
        daysRemaining: 0,
        dailyPace: 0,
        projectedSpend: 0,
        onTrack: true
    }
};
