/* =============================================
   CREATIVE TESTING TRACKER — A/B tests and pattern analysis
   Updated via Claude Code
   ============================================= */

const TESTING = {
    lastUpdated: null,

    tests: [
        // {
        //     id: 1,
        //     avatarId: 1,
        //     status: 'active' | 'completed' | 'paused',
        //     hypothesis: '',
        //     budget: 0,
        //     startDate: '',
        //     endDate: '',
        //     variants: [
        //         {
        //             label: 'A',
        //             adLibraryId: null,
        //             description: '',
        //             hookType: '',
        //             spend: 0,
        //             purchases: 0,
        //             cpa: 0,
        //             roas: 0,
        //             ctr: 0
        //         }
        //     ],
        //     winner: null,  // variant label or null
        //     learning: ''
        // }
    ],

    // Pattern analysis — aggregated win rates
    patterns: {
        byHookType: {
            // story: { tests: 0, wins: 0, winRate: 0 },
            // question: { tests: 0, wins: 0, winRate: 0 },
            // stat: { tests: 0, wins: 0, winRate: 0 },
            // testimonial: { tests: 0, wins: 0, winRate: 0 },
            // challenge: { tests: 0, wins: 0, winRate: 0 },
            // contrast: { tests: 0, wins: 0, winRate: 0 }
        },
        byAvatar: {
            // [avatarId]: { tests: 0, wins: 0, avgCpa: 0, avgRoas: 0 }
        },
        byAngle: {
            // 'church_pew': { tests: 0, wins: 0, winRate: 0 }
        }
    },

    // Learnings log
    learnings: [
        // {
        //     id: 1,
        //     date: '',
        //     testId: null,
        //     insight: '',
        //     avatarIds: [],
        //     category: 'hook' | 'angle' | 'audience' | 'creative' | 'copy'
        // }
    ]
};
