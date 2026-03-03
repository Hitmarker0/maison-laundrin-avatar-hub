/* =============================================
   PERFORMANCE DATA — Meta Ads metrics by avatar
   Updated via Claude Code MCP sync
   ============================================= */

const PERFORMANCE = {
    lastSync: null,
    dateRange: { start: null, end: null },

    // Campaign naming convention:
    // {AvatarCode}_{Angle}_{Version}_{Variant}
    avatarCodes: {
        CC: 1,   // Compliment Collector
        PR: 2,   // Perfume Refugee
        BO: 3,   // Beautiful Overwhelm
        PM: 4,   // Proud Matriarch
        IW: 5,   // Invisible Wife
        LN: 6,   // Liberated Nester
        LT: 7,   // Love Translator
        RW: 8,   // Reclaimed Woman
        CW: 9,   // Crossroads Woman
        MK: 10,  // Memory Keeper
        PH: 11,  // Phoenix
        CD: 12   // Confidence Catalyst
    },

    // Overall KPIs
    overall: {
        spend: 0,
        purchases: 0,
        cpa: 0,
        roas: 0,
        impressions: 0,
        clicks: 0,
        ctr: 0,
        cpc: 0,
        revenue: 0
    },

    // Daily trend data (last 7 days)
    dailyTrend: [
        // { date: '2026-03-01', spend: 0, purchases: 0, revenue: 0, roas: 0 }
    ],

    // Per-avatar performance
    avatars: {
        // [avatarId]: {
        //     spend: 0, purchases: 0, cpa: 0, roas: 0,
        //     impressions: 0, clicks: 0, ctr: 0,
        //     revenue: 0,
        //     campaigns: [
        //         { name: 'CC_ChurchPew_v1_A', status: 'ACTIVE', spend: 0, purchases: 0, cpa: 0, roas: 0 }
        //     ],
        //     topAd: null,
        //     trend: 'up' | 'down' | 'flat'
        // }
    },

    // Top / bottom ad leaderboard
    leaderboard: {
        top: [
            // { campaignName: '', avatarId: 0, roas: 0, spend: 0, purchases: 0 }
        ],
        bottom: [
            // { campaignName: '', avatarId: 0, roas: 0, spend: 0, purchases: 0 }
        ]
    }
};
