/* =============================================
   AD LIBRARY — All ad variations with status tracking
   Updated via Claude Code
   ============================================= */

const AD_LIBRARY = {
    lastUpdated: null,

    // Status summary counts (computed dynamically)
    // statusCounts: { draft: 0, testing: 0, winner: 0, killed: 0 }

    ads: [
        // {
        //     id: 1,
        //     avatarId: 1,
        //     status: 'draft' | 'testing' | 'winner' | 'killed',
        //     hookType: 'story' | 'question' | 'stat' | 'testimonial' | 'challenge' | 'contrast',
        //     angle: '',
        //     hook: '',
        //     headline: '',
        //     primaryText: '',
        //     description: '',
        //     cta: '',
        //     destination: '',
        //     creativeDirection: '',
        //     format: 'single_image' | 'video' | 'carousel' | 'collection',
        //     sourceInspiration: '',
        //     metaAdId: '',
        //     dateCreated: '',
        //     dateUpdated: '',
        //     notes: ''
        // }
    ],

    // Format templates for quick ad creation
    templates: {
        single_image: {
            label: 'Single Image',
            fields: ['hook', 'headline', 'primaryText', 'description', 'cta']
        },
        video: {
            label: 'Video',
            fields: ['hook', 'headline', 'primaryText', 'description', 'cta', 'creativeDirection']
        },
        carousel: {
            label: 'Carousel',
            fields: ['hook', 'headline', 'primaryText', 'description', 'cta']
        },
        collection: {
            label: 'Collection',
            fields: ['hook', 'headline', 'primaryText', 'description', 'cta']
        }
    }
};
