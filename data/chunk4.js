// Chunk 4: Avatars 10-12 (Tier 2 — Health & Sensitivity Niche Avatars)
const CHUNK4 = [
  {
    id: 10,
    name: 'The Chemical Refugee',
    ageRange: '30-65',
    tier: 2,
    emoji: '\u2697\uFE0F',
    tagline: 'She didn\'t choose to live without fragrance. Her body made the choice for her. Every scented product is a locked door \u2014 and she\'s been told there\'s no key.',
    painIntensity: 5,
    coreWound: 'She used to love the way clean laundry smelled. She loved perfume, candles, sachets. Fragrance was part of how she moved through the world. Then her body declared war on it. Now she lives in what she calls a "bubble" \u2014 not because she chose isolation, but because the world pushed her into it. The cruelest paradox: the very thing that could bring her comfort (scent) is the thing that makes her sick. She doesn\'t just miss fragrance. She grieves it.',
    demographics: {
      income: '$50K-$150K, already spends premium on specialized "safe" products',
      lifeStage: 'Often co-occurs with fibromyalgia, chronic fatigue, autoimmune conditions. May be on disability.',
      location: 'National U.S., disproportionately affects those with toxic exposure history (workplace chemicals, mold)',
      generation: 'Primarily Gen X and Millennials (30-65), more common in women'
    },
    painPoints: [
      {
        title: 'Physical Reactions to Everyday Products',
        detail: 'MCS triggers debilitating reactions: migraines, respiratory failure, asthma attacks, cognitive impairment, nausea, dizziness, heart palpitations. These aren\'t mild discomfort \u2014 they\'re incapacitating. 86.2% experience health problems from fragranced consumer products.',
        quotes: [
          { text: 'Doing laundry causes nausea that feels like morning sickness and can last all day into the next day.', source: 'Fibromyalgia Forums' },
          { text: 'I never visit others\' homes because I have no idea what chemicals and scents, fragrances, sprays or even dryer sheets they may be using.', source: 'Mayo Clinic Connect' },
          { text: 'Crowds\' perfumes and soaps floor me with nausea. I need a bubble to sit in.', source: 'Fibromyalgia Forums' }
        ]
      },
      {
        title: 'Social Isolation and Shrinking World',
        detail: '70.3% cannot access places that use fragranced products. 60.7% lost workdays or a job. Hotels, malls, concerts, restaurants, churches \u2014 public life is a minefield. Her world gets smaller every year.',
        quotes: [
          { text: 'For a person with MCS, the simplest daily activities such as working, shopping, going to church or a restaurant can be incredibly painful \u2014 both physically and emotionally.', source: 'Invisible Disabilities Association' },
          { text: 'With rapidly rising mental confusion and difficulty speaking, they simply cannot stick around to explain their situation politely.', source: 'MCS advocacy literature' }
        ]
      },
      {
        title: 'Grieving the Loss of Fragrance',
        detail: 'She MISSES smelling beautiful. She misses clean-smelling clothes, scented candles, perfume. She has stood in the detergent aisle holding her breath, looking at bottles with pictures of lavender fields and feeling something close to grief. Those bottles are not for her.',
        quotes: [
          { text: 'I use unscented detergent, and my partner must use unscented deodorant and soap.', source: 'Fibromyalgia Forums' },
          { text: 'After several years of fibromyalgia, my smell sensitivity shot through the roof.', source: 'Fibromyalgia Forums' },
          { text: 'Being exposed to chemicals makes me extremely nauseous to the point I have to skip medications that can potentially cause additional nausea.', source: 'Fibromyalgia Forums' }
        ]
      },
      {
        title: 'Failed "Safe" Products Still Cause Reactions',
        detail: 'Products labeled "free and clear" or "hypoallergenic" often still contain SLS, optical brighteners, or preservatives like methylisothiazolinone (2013 Allergen of the Year). Even essential oil-based products trigger reactions. It takes 20-30 washings to remove fragrance residue from previously scented clothes.',
        quotes: [
          { text: 'Even detergents labeled as \'all natural\' or \'made for sensitive skin\' could be a trigger for you, so you may have to try several brands before you find one that doesn\'t irritate your skin.', source: 'MyEczemaTeam' },
          { text: 'I cannot find a laundry soap that does not break my skin out into hives.', source: 'MyEczemaTeam member' }
        ]
      },
      {
        title: 'Requiring Others to Change Their Products',
        detail: 'She has to ask her partner, family, and visitors to switch to unscented products. This creates relationship friction, guilt, and a feeling of being "high maintenance" or difficult. She can\'t fully explain the severity to people who\'ve never experienced it.',
        quotes: [
          { text: 'I use unscented detergent, and my partner must use unscented deodorant and soap.', source: 'Fibromyalgia Forums' },
          { text: 'There\'s a lot of places one can\'t go, but I feel good again.', source: 'Mayo Clinic Connect member' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'Walking into a room and having a reaction in front of people',
        'Losing more of her social life, career, and relationships to MCS',
        'That she will NEVER smell beautiful again',
        'Being perceived as "crazy" or "difficult" \u2014 MCS is often dismissed',
        'New products that claim to be safe but trigger reactions anyway'
      ],
      desires: [
        'To smell clean laundry and feel JOY instead of fear',
        'Clothes that carry a gentle, beautiful scent without the migraine',
        'To stop explaining her condition to every person in her life',
        'A product she can trust \u2014 actually trust \u2014 not just hope works',
        'To feel normal again, even for one day'
      ],
      secretWants: [
        'To smell beautiful again \u2014 the thing she misses most and is ashamed to say',
        'Proof that science hasn\'t abandoned her',
        'To stop feeling like a burden to the people she loves'
      ]
    },
    failedSolutions: [
      'Every "free and clear" detergent on the market \u2014 solves chemical problem but strips all scent',
      'Fragrance-free everything: soap, shampoo, lotion, deodorant \u2014 effective but soul-crushing',
      'Homemade detergents (baking soda, vinegar, soap nuts) \u2014 inconsistent and tedious',
      'Essential oil-based products \u2014 still trigger reactions in many MCS sufferers',
      'MamaSuds and MCS-specific brands \u2014 limited scent options, if any',
      'Allen\'s Naturally \u2014 MCS-focused but no scent at all',
      'Avoiding public spaces and social isolation as a coping mechanism'
    ],
    triggerMoments: [
      'Standing in the detergent aisle holding her breath, looking at beautiful bottles she can\'t buy',
      'A friend or family member smells incredible and she feels a stab of grief',
      'Sees an ad that specifically addresses chemical sensitivity with a real solution',
      'Her MCS Facebook group or fibromyalgia forum buzzes about a new product',
      'Seasonal change \u2014 spring cleaning energy but nothing "clean" to use',
      'A particularly bad reaction reminds her of everything she\'s lost'
    ],
    languagePatterns: [
      'I miss smelling beautiful.',
      'My world got smaller.',
      'Living in a bubble.',
      'I can\'t even walk through the detergent aisle.',
      'Everything smells like nothing.',
      'The fragrance is sealed? Not floating in the air?',
      'Friction-activated, not off-gassing?',
      'I haven\'t been able to use scented products in years.',
      'Is this actually safe or is it just marketing?',
      'I cried when I smelled my own clothes for the first time in eight years.'
    ],
    beliefs: {
      current: [
        'All fragrance is dangerous for me \u2014 no exceptions',
        'If it smells good, it will make me sick',
        '"Hypoallergenic" and "natural" are meaningless marketing terms',
        'I have to choose between scent and safety \u2014 there is no third option',
        'No brand actually cares about people with MCS'
      ],
      target: [
        'Traditional fragrance triggers MCS because of VOC off-gassing \u2014 micro-encapsulated fragrance is sealed, not airborne',
        'Micro-encapsulation is friction-activated, not chemical-dispersion \u2014 fundamentally different delivery system',
        'Plant-based capsule shells + no SLS/phthalates/optical brighteners = a formula designed for chemically sensitive people',
        'The 3-stage enzyme system strips 20-30 washes of residue in one cycle \u2014 removing the hidden chemicals still triggering reactions',
        'Maison Laundrin was built with a 42-million-person community in mind \u2014 this IS for her'
      ]
    },
    scienceInsights: [
      '12.8% of the US population (42 million people) has medically diagnosed MCS; 25.9% (85 million) report chemical sensitivity \u2014 prevalence has increased 300%+ in the past decade',
      'Traditional fragrance triggers MCS via volatile organic compounds (VOCs) that float as airborne chemical vapor and enter the respiratory system',
      'Micro-encapsulated fragrance seals scent molecules inside plant-based shells that do NOT off-gas \u2014 released only through mechanical friction, not chemical dispersion',
      '60%+ of MCS patients also have fibromyalgia; tactile allodynia means even clothing can cause burning pain \u2014 the enzyme system softens fabric by stripping harsh residue buildup',
      'It takes 20-30 standard washes to remove fragrance residue from previously scented clothes \u2014 the 5-enzyme strip system does it in one cycle'
    ],
    messagingFramework: {
      dos: [
        'Lead with VALIDATION \u2014 she has been dismissed by doctors, brands, and society. Acknowledge her reality.',
        'Explain the SCIENCE of micro-encapsulation vs. VOC off-gassing \u2014 she needs to understand WHY this is different',
        'Show the ingredient list proudly: no SLS, no phthalates, no optical brighteners, no methylisothiazolinone',
        'Use real language from MCS/fibromyalgia communities \u2014 she needs to feel recognized',
        'Feature women who LOOK like her \u2014 not "sick" but navigating an invisible condition',
        'Provide a cautious trial pathway \u2014 she will test on her own clothes first, not her family\'s'
      ],
      donts: [
        'Never minimize MCS or call it a "sensitivity" casually',
        'Never promise it\'s "safe for everyone" \u2014 she knows nothing is guaranteed',
        'Never use the word "hypoallergenic" \u2014 she distrusts it completely',
        'Never show someone casually sniffing a detergent bottle \u2014 that would TERRIFY her',
        'Never position this as a cure \u2014 position as a carefully designed alternative'
      ],
      toneNotes: 'Scientific, empathetic, reverent. She needs to feel that someone FINALLY understands. The tone should be like a knowledgeable friend who has done the research and is sharing it carefully, not selling aggressively. Let the science do the convincing.',
      neverSay: [
        'Just a sensitivity',
        'Hypoallergenic',
        'Safe for everyone',
        'All-natural (meaningless to her)',
        'It\'s just in your head',
        'You\'re being too careful'
      ]
    },
    adCreative: [
      {
        angle: 'The Eight-Year Exile',
        hook: 'I used to love the way clean laundry smelled. Then eight years ago, it all stopped.',
        primaryText: 'I used to love the way clean laundry smelled. The warm exhale of the dryer. The way a pillowcase held against your face could make you close your eyes. I loved perfume. I loved candles. Fragrance was part of how I moved through the world.\n\nThen eight years ago, my body declared war on it. Multiple Chemical Sensitivity. Migraines. Nausea. Respiratory distress. One by one, I stripped every scented product from my life. My world got smaller.\n\nFor eight years, everything smelled like nothing.\n\nThen I found a detergent that uses micro-encapsulated fragrance \u2014 scent sealed inside plant-based capsules that don\'t off-gas VOCs. They\'re friction-activated, not airborne. No SLS. No phthalates. No optical brighteners. No methylisothiazolinone.\n\nI washed my own clothes first. Wore them for a week. No migraine. No nausea. No tightened throat.\n\nJust the scent of cotton flower and white musk rising from my sleeve when I moved my arm.\n\nI sat very still for a long time. Because for the first time in eight years, I smelled beautiful.\n\nMaison Laundrin. Discovery Set $49. Free shipping. 60-Day Double-Scent Promise.',
        headline: 'Eight Years Without Fragrance. Until Now.',
        description: 'Micro-encapsulated fragrance: sealed, not airborne. No VOC off-gassing. No SLS, no phthalates. Plant-based. $49 Discovery Set.',
        cta: 'Learn More',
        destination: 'Advertorial (Chemical Sensitivity)',
        creativeDirection: 'Woman 45-55, standing in her laundry room, holding a clean shirt to her face with eyes closed and an expression of quiet, profound relief. Not dramatic \u2014 private. Warm natural light. Clean, minimal space. No clutter. The mood is reverence, not celebration. She looks healthy but careful \u2014 a woman who has learned to navigate invisible danger. 15-sec UGC-style video or warm static image.'
      },
      {
        angle: 'The Science Explanation',
        hook: 'Here\'s why every scented product makes you sick \u2014 and why this one doesn\'t.',
        primaryText: 'Here\'s why every scented product makes you sick \u2014 and why this one doesn\'t.\n\nTraditional fragrance works by dispersing volatile organic compounds into the air. VOCs. Tiny chemical molecules that evaporate and float through the air as gas. That\'s how scent reaches your nose. And for people with MCS, those airborne VOCs trigger migraines, nausea, respiratory distress, and cognitive fog.\n\nThe issue isn\'t scent itself. It\'s the delivery system. Off-gassing. Open dispersion.\n\nMaison Laundrin uses micro-encapsulated fragrance. Each scent molecule is sealed inside a microscopic plant-based shell. These capsules bond to fabric fibers. They don\'t off-gas. They don\'t float. They don\'t enter your lungs.\n\nThey release ONLY through friction \u2014 fabric moving against fabric. Mechanical release, not chemical dispersion.\n\nPlant-based formula. No SLS, no phthalates, no optical brighteners. Dermatologist tested. 5-enzyme system strips 20-30 washes of chemical residue in one cycle.\n\nDiscovery Set: $49. Four scents. Free shipping.\n\nYou don\'t have to live without fragrance. You just needed a different delivery system.',
        headline: 'Not Off-Gassing. Friction-Activated.',
        description: 'Micro-encapsulated fragrance sealed in plant-based shells. Released by movement, not evaporation. No VOCs. $49 Discovery Set.',
        cta: 'Learn More',
        destination: 'Advertorial (Chemical Sensitivity)',
        creativeDirection: 'Educational carousel or 30-sec explainer video. Clean, scientific aesthetic. Diagram showing: Left = traditional fragrance (VOCs floating as airborne gas, entering lungs). Right = micro-encapsulated (sealed in capsule, released only by fabric friction). Simple, elegant graphics on cream background with gold accents. NOT clinical \u2014 warm science. Text overlays walk through the mechanism step by step.'
      },
      {
        angle: 'The MCS Community Validation',
        hook: 'If you have MCS, you\'ve been told there\'s no such thing as safe fragrance. Read this.',
        primaryText: 'If you have MCS, you\'ve been told there\'s no such thing as safe fragrance.\n\nYou\'ve stripped every scented product from your home. You\'ve asked your partner to switch deodorants. You\'ve stopped visiting friends whose dryer sheets make your throat close. You hold your breath in hotel lobbies.\n\n42 million Americans have medically diagnosed MCS. 85 million report chemical sensitivity. And the number has tripled in the past decade.\n\nYou are not rare. You are not imagined. You are not psychosomatic.\n\nYou are also not without options anymore.\n\nMaison Laundrin uses a technology that is fundamentally different from anything in the detergent aisle. Micro-encapsulated fragrance \u2014 sealed in plant-based shells, bonded to fabric, released only through physical friction. No airborne VOCs. No off-gassing.\n\nNo SLS. No phthalates. No optical brighteners. No phosphates. No artificial dyes. Dermatologist tested.\n\nStart with your own clothes. Test for a week. Then decide.\n\n$49 Discovery Set. Free shipping. 60-Day Double-Scent Promise.',
        headline: '42 Million People. Zero Products. Until Now.',
        description: 'Finally: luxury fragrance designed for chemically sensitive people. Micro-encapsulated. No VOCs. Plant-based. $49.',
        cta: 'Learn More',
        destination: 'Advertorial (Chemical Sensitivity)',
        creativeDirection: 'Woman 40-55 in a warm, clean living room. She\'s holding an open Maison Laundrin bottle but NOT sniffing it directly \u2014 instead, she\'s holding a washed scarf to her face, smelling the fabric. This distinction matters: she would never put her face near a bottle of anything scented. Warm, natural light. Calm expression. She looks like a woman who has finally found something she can trust. Static image or 15-sec UGC testimonial.'
      },
      {
        angle: 'The Residue Revelation',
        hook: 'Your "unscented" detergent is still making you sick. Here\'s why.',
        primaryText: 'Your "unscented" detergent is still making you sick. Here\'s why.\n\nResearch shows it takes 20 to 30 regular washes to remove fragrance residue from previously scented clothes. Every detergent you\'ve ever used \u2014 the conventional ones, the "natural" ones, the free-and-clear ones \u2014 left residue deep in your fabric fibers. Surfactants. Optical brighteners. Old fragrance compounds.\n\nThey\'re still there. Still off-gassing. Slowly, quietly, constantly.\n\nThis is why some MCS sufferers still react to clothes washed in "unscented" detergent. The current product may be unscented, but the accumulated residue from YEARS of previous products is still embedded in the fiber.\n\nMaison Laundrin\'s first stage is STRIP. A 5-enzyme system \u2014 including lipase for oil-based residue \u2014 breaks down and removes deep chemical buildup. Not surface cleaning. Molecular-level removal.\n\nThen SHIELD: a protective fiber coating that prevents new buildup from bonding.\n\nThen REPLACE: micro-encapsulated fragrance that\'s sealed, not airborne.\n\nClean the history out of your fabric. Then start fresh.\n\n$49 Discovery Set. Free shipping.',
        headline: 'Your Fabric Has 20 Washes of Residue.',
        description: '5-enzyme system strips years of chemical buildup in one wash. Then shields. Then replaces with sealed fragrance. $49.',
        cta: 'Learn More',
        destination: 'Landing Page',
        creativeDirection: 'Before/after concept. Left side: cross-section illustration of fabric fiber with layers of residue buildup labeled (old surfactants, optical brighteners, fragrance compounds). Right side: clean fiber with micro-encapsulated fragrance capsules bonded to surface. Clean, warm graphic design \u2014 NOT clinical. Gold and cream palette. Could also be a 20-sec animated explainer showing the 3-stage process. Educational but warm.'
      },
      {
        angle: 'The Discovery Set as Safe Trial',
        hook: 'I tested it on my own clothes for a week before I let anyone in my house use it.',
        primaryText: 'I tested it on my own clothes for a week before I let anyone in my house use it.\n\nIf you have MCS, you understand. You don\'t just try new products. You audit them. You read every ingredient. You cross-reference with your trigger list. You test on yourself first. You wait days for a delayed reaction.\n\nThat\'s exactly what I did with Maison Laundrin.\n\nDay 1: Read the full ingredient list. Plant-based surfactants. No SLS, no phthalates, no phosphates, no optical brighteners, no artificial dyes. No methylisothiazolinone.\n\nDay 2: Washed one shirt. Wore it for 8 hours.\n\nDay 3: No migraine. No nausea. No throat tightening.\n\nDay 4: Washed my pillowcase. Slept on it.\n\nDay 5: Washed a full load.\n\nDay 7: I moved my arm and caught a trace of warm vanilla and almond milk rising from my sleeve. Gentle. Not overwhelming. Just... present.\n\nI haven\'t smelled something beautiful on my own body in six years.\n\nThe Discovery Set is $49. Four scents. Free shipping. 60-Day Double-Scent Promise.\n\nTest it the way I did. Carefully. On your terms.',
        headline: 'Test It Your Way. On Your Terms.',
        description: 'Plant-based. No SLS. No phthalates. Micro-encapsulated fragrance. Start with one shirt. Discovery Set $49.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'UGC-style testimonial video, 30-45 sec. Woman 40-55 speaking directly to camera, calm and measured. She\'s not selling \u2014 she\'s sharing cautiously, the way someone with MCS shares product recommendations in their support group. She holds up a clean shirt, smells the sleeve, and her expression softens. Background: clean, minimal home. Natural light. No dramatic music \u2014 ambient sound only. She should look like a real person from an MCS community, not a model.'
      }
    ],
    metaTargeting: {
      interests: [
        'Fibromyalgia', 'Chronic fatigue syndrome', 'Multiple chemical sensitivity',
        'Essential oils', 'Natural living', 'Clean beauty', 'Non-toxic home',
        'Autoimmune conditions', 'Invisible illness', 'Chronic pain',
        'Environmental health', 'Allergy-free living'
      ],
      behaviors: [
        'Active in MCS and fibromyalgia support groups on Facebook',
        'Reads every ingredient list before purchasing',
        'Shares product recommendations obsessively within communities',
        'Already pays premium for specialized "safe" products',
        'Searches for fragrance-free and chemical-free products regularly'
      ],
      demographics: 'Women 30-65. 42 million with diagnosed MCS, 85 million with chemical sensitivity. Prevalence tripled in past decade. High overlap with fibromyalgia (60%+). Price-insensitive for products that actually work.',
      stacks: [
        { name: 'MCS / Fibromyalgia Community', interests: 'Fibromyalgia, chronic fatigue syndrome, multiple chemical sensitivity, invisible illness, chronic pain support' },
        { name: 'Clean / Non-Toxic Living', interests: 'Clean beauty, non-toxic home, environmental health, essential oils, natural living, organic lifestyle' },
        { name: 'Sensitive Skin / Allergy-Free', interests: 'Sensitive skin care, hypoallergenic products, dermatologist recommended, allergy-free living, eczema support' },
        { name: 'Health-Conscious Women', interests: 'Autoimmune conditions, functional medicine, integrative health, wellness, plant-based living' }
      ]
    },
    recommendedScent: 'Douceur Vanill\u00e9e (warm vanilla orchid, almond milk, cashmere woods) or Luxe Blanc (cotton flower, iris, white musk) \u2014 gentle, warm profiles. She should start cautiously with the mildest scent. Absolutely no overwhelming florals or synthetic-reading profiles.',
    competitorAngle: 'She has NO competitors in the scented category \u2014 every scented detergent is her enemy. Her "competitors" are the free-and-clear products that keep her safe but scentless: All Free & Clear, Seventh Generation Free & Clear, Allen\'s Naturally, MamaSuds. Maison Laundrin\'s micro-encapsulation technology is the ONLY mechanism that can deliver fragrance without VOC off-gassing. This is a blue ocean \u2014 42 million people with zero products designed for them.'
  },
  {
    id: 11,
    name: 'The Laundry Shame Survivor',
    ageRange: '22-45',
    tier: 2,
    emoji: '\uD83E\uDDE0',
    tagline: 'The mildew smell isn\'t just a smell. It\'s proof. Proof that she failed at the most basic adult task. Again.',
    painIntensity: 4,
    coreWound: 'She knows it takes thirty seconds to move the laundry. She knows it\'s easy. She knows it\'s not a big deal. And she still can\'t do it. The ADHD brain struggles with tasks that have multiple sequential steps, delayed rewards, and no immediate consequence for skipping \u2014 and laundry is literally the worst-case scenario for her neurology. The shame isn\'t about laundry. It\'s about proof: proof that she can\'t do what "normal people" do effortlessly. Every mildew-smelling rewash is a verdict on her worth as a functioning adult.',
    demographics: {
      income: '$35K-$100K, often underemployed relative to intelligence due to ADHD/depression impacts on career',
      lifeStage: 'Young professional, often recently diagnosed (average ADHD diagnosis for women: late 20s to mid-30s). May live alone or with partner.',
      location: 'Urban and suburban, national U.S.',
      generation: 'Millennials and Gen Z (22-45). Digital native. TikTok and Reddit fluent.'
    },
    painPoints: [
      {
        title: 'The Forgotten Load / Mildew Shame Spiral',
        detail: 'The load sits in the washer for 24-48+ hours because her brain simply released it from memory. The mildew smell triggers a shame spiral: "Normal people don\'t do this." She closes the lid and avoids it for another day because the task is now emotionally contaminated.',
        quotes: [
          { text: 'I knew it was there. I thought about it at 10pm on Tuesday. At 7am on Wednesday. At 3pm on Wednesday. I knew. I just couldn\'t make my body walk to the machine.', source: 'ADHD advertorial narrative' },
          { text: 'The mildew smell isn\'t just a smell. It\'s proof. Proof that you failed at the most basic adult task. Again.', source: 'ADHD advertorial narrative' },
          { text: 'You open the washer and your brain immediately says: Normal people don\'t do this.', source: 'ADHD community narrative' }
        ]
      },
      {
        title: 'The Floordrobe and the Dryer Pile',
        detail: 'The "floordrobe" is the pile of clothes too dirty for the closet but too clean for the hamper. The "dryer pile" is the mountain of clean clothes on top of the dryer because folding requires executive function she has approximately once a month. Both smell stale.',
        quotes: [
          { text: 'The floordrobe. The pile of clothes on the bedroom floor that\'s too dirty for the closet but too clean for the hamper. Or maybe they\'re dirty. You can\'t remember.', source: 'ADHD advertorial narrative' },
          { text: 'The dryer pile is the mountain of clean clothes sitting on top of the dryer because folding requires a level of executive function that I have approximately once a month.', source: 'ADHD advertorial narrative' }
        ]
      },
      {
        title: 'The Rewash Cycle That Never Ends',
        detail: 'She runs the same load 2-3 times because she keeps forgetting to move it. Each rewash adds more detergent, vinegar, scent boosters \u2014 and the clothes STILL smell off. Standard detergent cannot remove oil-based mildew residue. She\'s trapped in a chemically rigged cycle.',
        quotes: [
          { text: 'The rewash of the rewash. The load you\'ve now run three times because you keep forgetting to move it. And by the third wash, the clothes still smell... off.', source: 'ADHD advertorial narrative' },
          { text: 'Seventy percent of women with ADHD report laundry as one of their biggest daily challenges. I read that statistic and literally said "only seventy?"', source: 'ADHD community statistic' }
        ]
      },
      {
        title: 'Smell Anxiety on Dates and in Social Settings',
        detail: 'She doesn\'t trust her own clothes to smell okay. She sniffs her outfit, sprays it with body spray, changes four times, and is STILL hyperaware all evening. The anxiety-sweat cycle makes it worse.',
        quotes: [
          { text: 'I sniffed it again. I sprayed it with body spray. I put it on and sniffed the shoulder. I asked myself: Can he smell this?', source: 'ADHD advertorial narrative' },
          { text: 'I wasn\'t nervous. I was ashamed. Of my laundry. Of the fact that at 33 years old, I couldn\'t trust my own clothes to smell okay.', source: 'ADHD advertorial narrative' }
        ]
      },
      {
        title: 'The Depression / Executive Function Paralysis',
        detail: 'Depression compounds ADHD by removing the small amount of activation energy she has. She can\'t start, can\'t switch, can\'t complete. The laundry pile becomes a physical monument to her paralysis, visible every time she walks past it.',
        quotes: [
          { text: 'It\'s not that I don\'t care. It\'s not laziness. I know it takes thirty seconds. I know it\'s easy.', source: 'ADHD community narrative' },
          { text: 'The task is emotionally contaminated. It\'s not just laundry anymore \u2014 it\'s evidence of your inadequacy. So you avoid it. For another day. Maybe two.', source: 'ADHD advertorial narrative' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'Being "found out" \u2014 someone smelling mildew on her clothes and knowing she can\'t adult',
        'The date who leans in and smells her laundry failure',
        'That she\'ll never be able to do "basic" things other people do without thinking',
        'The shame spiral consuming more and more of her daily life',
        'Being judged by roommates, partners, or coworkers for her laundry situation'
      ],
      desires: [
        'Clothes that smell incredible even after sitting in the dryer pile for days',
        'One wash that actually works \u2014 no rewash, no vinegar, no scent boosters',
        'A dopamine hit from laundry that makes it less of an executive function nightmare',
        'To stop worrying about how she smells in social situations',
        'A system that\'s ADHD-proof \u2014 fewer steps, bigger reward'
      ],
      secretWants: [
        'For someone to tell her the mildew problem has a scientific explanation, not a character flaw',
        'A product that turns her biggest shame into her biggest compliment',
        'Permission to be imperfect at laundry and still smell amazing'
      ]
    },
    failedSolutions: [
      'Regular detergent \u2014 cannot remove oil-based mildew residue that accumulates from forgotten loads',
      'Extra detergent \u2014 creates more residue buildup that feeds bacteria',
      'Vinegar soaks and baking soda \u2014 partially effective but requires extra steps (worst thing for ADHD)',
      'Downy Unstopables and scent boosters \u2014 mask the smell but it returns when damp',
      'Rewashing 2-3 times \u2014 wastes water, time, and energy; still doesn\'t strip the biofilm',
      'Body spray on clothes \u2014 temporary and adds to the "trying to cover up" anxiety',
      'Timers and phone reminders \u2014 she acknowledges the reminder and still can\'t activate'
    ],
    triggerMoments: [
      'Just opened the washer to THAT smell \u2014 again \u2014 scrolling phone in shame spiral',
      'Getting ready for a date or social event and discovering the dryer pile smells stale',
      'Scrolling ADHD TikTok or Reddit at 2am and seeing a relatable laundry struggle post',
      'A friend compliments someone\'s scent and she wonders "do people ever think about how I smell?"',
      'Post-diagnosis moment: finally understanding WHY laundry is impossible and searching for solutions',
      'A particularly bad shame spiral that makes her want to fix ONE thing in her life'
    ],
    languagePatterns: [
      'The pile. The floordrobe. The doom pile.',
      'I forgot the load again.',
      'It takes thirty seconds and I still can\'t do it.',
      'The mildew smell is the unofficial scent of ADHD.',
      'Emotionally contaminated.',
      'Normal people don\'t do this.',
      'Reduce the steps, increase the reward.',
      'My therapist would love this.',
      'I found it at 2am, obviously.',
      'For the first time, I didn\'t have to worry about whether my clothes smelled okay.'
    ],
    beliefs: {
      current: [
        'If I just tried harder, I could keep up with laundry like a normal person',
        'The mildew problem is my fault \u2014 I\'m lazy and irresponsible',
        'No detergent can fix what my brain does to laundry',
        'Scent boosters and extra detergent are the only options for forgotten loads',
        'Fancy detergent is for people who have their lives together \u2014 not me'
      ],
      target: [
        'Mildew residue is OIL-BASED and regular detergent literally cannot remove it \u2014 the problem is chemistry, not character',
        'A 5-enzyme system strips the accumulated buildup from every forgotten load in ONE wash \u2014 no rewash needed',
        'The shield stage means even if you forget the load for a day, the fiber is protected \u2014 wider window of "okay"',
        'Micro-encapsulated fragrance survives the dryer pile \u2014 clothes pulled out 3 days later still smell incredible',
        'This product was literally designed for brains that forget \u2014 fewer steps, bigger sensory reward'
      ]
    },
    scienceInsights: [
      'ADHD brains struggle with tasks that have multiple sequential steps, delayed rewards, and no immediate consequence for skipping \u2014 laundry requires 8 separate executive function demands in a row with zero dopamine payoff',
      'When clothes sit wet in the washer, bacteria and mold colonize fabric within 24 hours. Standard detergent kills bacteria but does NOT remove the oil-based biofilm/residue \u2014 it accumulates with every forgotten load',
      'Oil-based mildew residue doesn\'t dissolve in water. Only enzymatic action (specifically lipase) can break it down at the molecular level \u2014 regular detergent is chemically incapable',
      'Micro-encapsulated fragrance capsules survive sitting in the dryer pile for days \u2014 they activate through friction when finally worn, not through evaporation that fades in the machine',
      '70% of women with ADHD report laundry as one of their biggest daily challenges. The shame-avoidance cycle is neurological, not motivational.'
    ],
    messagingFramework: {
      dos: [
        'Lead with RECOGNITION \u2014 describe her exact experience so specifically she screenshots it',
        'Destigmatize: the problem is chemistry (oil-based residue), not character',
        'Use ADHD/neurodivergent community language naturally \u2014 floordrobe, doom pile, executive function, emotionally contaminated',
        'Frame the product as "ADHD-proof" \u2014 fewer steps, bigger reward, wider margin for forgetting',
        'Show real, messy, relatable scenarios \u2014 NOT aspirational lifestyle shots',
        'Humor is welcome but never at her expense \u2014 laugh WITH her, not AT her'
      ],
      donts: [
        'Never imply laziness or lack of discipline',
        'Never show a perfectly organized laundry room \u2014 show the REAL dryer pile',
        'Never use "just do it" or "simple routine" language',
        'Never make the ad feel aspirational or polished \u2014 she\'ll scroll past it as "not for me"',
        'Never promise it will "fix" her ADHD \u2014 promise it will work WITH her brain'
      ],
      toneNotes: 'Warm, knowing, slightly self-deprecating. Like a group chat message from a friend with ADHD who found something that actually works. The tone says "I see you. I AM you. And this one thing actually helped." Think ADHD TikTok energy \u2014 real, funny, vulnerable, no bullshit.',
      neverSay: [
        'Just set a timer',
        'Simple laundry routine',
        'If you just...',
        'It\'s not that hard',
        'Lazy',
        'Discipline',
        'Get organized'
      ]
    },
    adCreative: [
      {
        angle: 'The Forgotten Load Confession',
        hook: 'The load has been sitting in the washer for two days. I know. I know.',
        primaryText: 'The load has been sitting in the washer for two days. I know. I know.\n\nI thought about it at 10pm on Tuesday. At 7am on Wednesday. At 3pm on Wednesday when my mom texted and the word "laundry" flashed through my brain like a flare gun.\n\nI knew. I just couldn\'t make my body walk to the machine and move the clothes.\n\nIf you don\'t have ADHD, that sounds ridiculous. "Just... go do it."\n\nI know it takes thirty seconds. And I still couldn\'t.\n\nHere\'s what I learned after my diagnosis: mildew residue is OIL-BASED. Regular detergent literally cannot remove it. Every forgotten load adds another layer of buildup. You\'re not failing \u2014 your detergent is.\n\nMaison Laundrin has a 5-enzyme system that strips all that buildup in ONE wash. No rewash. No vinegar. No shame spiral.\n\nThen it shields the fibers so forgetting a load has a wider window of "okay."\n\nThen micro-encapsulated fragrance that survives the dryer pile for DAYS.\n\nOne wash. For a brain that forgets.\n\nDiscovery Set: $49. Free shipping. 60-Day Double-Scent Promise.',
        headline: 'One Wash. No Rewash. No Shame.',
        description: '5-enzyme system strips mildew buildup in one cycle. Fragrance survives the dryer pile. Made for brains that forget. $49.',
        cta: 'Learn More',
        destination: 'Advertorial (ADHD Shame)',
        creativeDirection: 'UGC-style video, 15-30 sec. Woman 28-35, speaking directly to camera in her REAL laundry area \u2014 dryer pile visible, maybe a basket of unsorted clothes. She\'s relatable, slightly self-deprecating, NOT polished. She opens the washer, makes the "oh no" face we all know, then shows herself pouring Maison Laundrin and doing ONE wash. Cut to her pulling clothes out, smelling them, genuine surprise. "Wait. It actually worked?" ADHD TikTok energy.'
      },
      {
        angle: 'The Date Night Smell Anxiety',
        hook: 'I changed my outfit four times before my date. Not because of how it looked.',
        primaryText: 'I changed my outfit four times before my date. Not because of how it looked.\n\nBecause of how it smelled.\n\nI pulled my favorite top from the dryer pile \u2014 the mountain of clean clothes I haven\'t folded because folding requires a level of executive function I have approximately once a month.\n\nIt had that flat, slightly stale quality. Not mildew exactly. Just... defeated fabric.\n\nI sniffed it. Sprayed it with body spray. Put it on. Sniffed the shoulder. Asked myself: can he smell this?\n\nChanged. Sniffed. Changed again. I was late. I spent dinner with my arms pulled tight to my sides.\n\nHe texted: "Had a great time. You seemed a little nervous."\n\nI wasn\'t nervous. I was ashamed. Of my laundry.\n\nNow I wash my date clothes in Maison Laundrin. Micro-encapsulated fragrance that survives the dryer pile for days. The more I move \u2014 the more nervous I am \u2014 the more scent releases from the fabric.\n\nMy anxiety became my secret weapon.\n\nDiscovery Set: $49. Four scents. Free shipping.',
        headline: 'My Anxiety Became My Secret Weapon.',
        description: 'Micro-encapsulated fragrance activates with body heat and movement. Survives the dryer pile. $49 Discovery Set.',
        cta: 'Learn More',
        destination: 'Advertorial (ADHD Shame)',
        creativeDirection: 'Split-screen or quick-cut video. LEFT: Woman stress-sniffing a shirt, spraying body spray, looking anxious. RIGHT: Same woman on a date, relaxed, laughing, someone leaning in. Text overlay: "She stopped worrying about how she smells." 15-20 sec. Warm tones. Woman 28-38, real styling \u2014 date-ready but not overdone. The vibe is relatable, not aspirational.'
      },
      {
        angle: 'The ADHD Brain Science',
        hook: 'Your therapist said "reduce the steps, increase the reward." This is that.',
        primaryText: 'Your therapist said "reduce the steps, increase the reward." This is that.\n\nThe ADHD brain struggles with tasks that have: multiple sequential steps, delayed rewards, and no immediate consequence for skipping.\n\nLaundry = sort, load, add detergent, start, remember to switch, remember to fold, fold, put away. Eight executive function demands in a row. Zero dopamine.\n\nMaison Laundrin reduces the steps and increases the reward:\n\n\u2022 ONE wash strips mildew buildup that rewashing 3x can\'t touch (5-enzyme system targets oil-based residue)\n\u2022 Shield stage means forgetting a load has a wider window of "okay"\n\u2022 Micro-encapsulated fragrance survives the dryer pile \u2014 pulls out smelling like luxury 3 days later\n\u2022 Fragrance activates with friction \u2014 putting it ON is the dopamine hit\n\nSame pour you were already making. No extra step. No vinegar. No scent boosters.\n\nBut when you pull that shirt over your head and catch warm vanilla orchid and cashmere woods... your brain gets the reward.\n\nDiscovery Set: $49. 60-Day Double-Scent Promise.',
        headline: 'Fewer Steps. Bigger Reward. ADHD-Proof.',
        description: '5-enzyme system strips mildew in one wash. Fragrance survives the dryer pile for days. No extra steps. $49.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Text-heavy carousel ad (4-5 slides) designed for the ADHD scroll. Slide 1: "Your therapist said: reduce the steps, increase the reward." Slide 2: The 8-step laundry executive function breakdown. Slide 3: How ML reduces to 1 step. Slide 4: "The dryer pile test: 3 days later, still smells like luxury." Slide 5: Product shot + CTA. Clean design with punchy text. Bold typography. Cream/gold palette.'
      },
      {
        angle: 'The 2am Discovery',
        hook: 'I found it at 2am, obviously, because that\'s when the ADHD brain decides to become interested in laundry science.',
        primaryText: 'I found it at 2am, obviously, because that\'s when the ADHD brain decides to become extremely interested in laundry science.\n\nHere\'s what I learned in my hyperfocus spiral:\n\nThe reason your rewashed clothes still smell off is NOT because you didn\'t wash them hard enough. Mildew residue is oil-based. Regular detergent can\'t dissolve it. It accumulates in the fiber with every forgotten load.\n\nYou are not failing at laundry. Your detergent is failing at chemistry.\n\nMaison Laundrin has 5 enzymes \u2014 including lipase, which specifically breaks down oils \u2014 that strip every layer of forgotten-load buildup in a single wash.\n\nThen a shield coating protects the fiber so forgetting has smaller consequences.\n\nThen micro-encapsulated fragrance that doesn\'t fade in the dryer pile. It activates with friction when you finally put the clothes on.\n\nI washed one load. Forgot about it for a day (naturally). Moved it to the dryer. Forgot about THAT for two days (obviously). Finally pulled out a shirt on Thursday that I washed on Monday.\n\nSomeone at work said: "What perfume are you wearing?"\n\nI was wearing my laundry.\n\n$49 Discovery Set. Free shipping.',
        headline: 'Found at 2am. Obviously.',
        description: 'For the brain that forgets loads. 5-enzyme system + micro-encapsulated fragrance that survives the dryer pile. $49.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Dark-mode aesthetic \u2014 phone screen glow at 2am. Woman in bed, scrolling, that "I\'m about to buy something" expression. Quick cuts: ordering, the box arriving, washing a load, forgetting about it (clock spinning), finally pulling it out, smelling it \u2014 surprise and delight. 20-30 sec video. Casual, funny, zero production value energy. The kind of content she\'d send to her group chat with "okay but this actually works."'
      },
      {
        angle: 'The Dryer Pile Guarantee',
        hook: 'Tell me you have ADHD without telling me you have ADHD: the dryer pile.',
        primaryText: 'Tell me you have ADHD without telling me you have ADHD.\n\nThe dryer pile.\n\nYou know her. She\'s the mountain of clean clothes on top of the dryer that will live there until either:\na) you run out of clean underwear\nb) someone is coming over\nc) a random burst of executive function at 11pm on a Wednesday\n\nThe problem: clothes that sit in the dryer pile lose their scent. They get that flat, stale, vaguely defeated quality. Not dirty. Not fresh. Just... nothing.\n\nUntil Maison Laundrin.\n\nMicro-encapsulated fragrance capsules bond into the fabric fibers. They don\'t evaporate in the pile. They don\'t fade in the drawer. They activate through FRICTION \u2014 when you finally put the clothes on and move.\n\nMonday wash. Thursday dryer pile extraction. Friday compliment at work.\n\nThat\'s the timeline. That\'s the promise.\n\n$49 Discovery Set. Four luxury scents by master perfumers. Free shipping. 60-Day Double-Scent Promise.\n\nThe dryer pile just became your secret weapon.',
        headline: 'The Dryer Pile Has Met Its Match.',
        description: 'Micro-encapsulated fragrance survives the dryer pile. Activates when you finally put it on. $49 Discovery Set.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Photo or short video of an ACTUAL dryer pile \u2014 real, messy, relatable. A hand reaches in, pulls out a shirt, holds it up, sniffs it. Expression: genuine surprise. Text overlay: "Washed Monday. Dryer pile since Tuesday. Still smells like this." Then a text showing the scent notes. Relatable, funny, zero-judgment energy. Could also be a duet-style TikTok format. Woman 25-35, casual, messy bun, real home.'
      }
    ],
    metaTargeting: {
      interests: [
        'ADHD', 'Neurodivergent', 'Mental health awareness', 'Therapy',
        'Executive function', 'Depression support', 'Anxiety',
        'Self-care', 'TikTok', 'Reddit', 'Cleaning motivation',
        'Organization hacks', 'Dopamine menu', 'Body doubling'
      ],
      behaviors: [
        'Active on ADHD TikTok and Reddit communities',
        'Engages with mental health and neurodivergent content',
        'Late-night scrolling and impulse purchasing patterns',
        'Shares relatable "ADHD life" content with friend groups',
        'Responds to UGC and testimonial content over polished ads'
      ],
      demographics: 'Women 22-45. An estimated 6.1 million adults diagnosed with ADHD (many more undiagnosed, especially women). 70% of women with ADHD report laundry as a top daily challenge. Digital native. TikTok and Reddit fluent. Responds to humor and radical honesty.',
      stacks: [
        { name: 'ADHD / Neurodivergent Community', interests: 'ADHD, neurodivergent, executive function, dopamine, body doubling, ADHD TikTok, ADHD memes' },
        { name: 'Mental Health & Wellness', interests: 'Therapy, mental health awareness, depression support, anxiety management, self-care, burnout' },
        { name: 'Cleaning & Organization Struggle', interests: 'CleanTok, cleaning motivation, organization hacks, Marie Kondo, home management, adulting' },
        { name: 'Young Women Self-Care', interests: 'Self-care routines, skincare, wellness, affordable luxury, treat yourself, Sephora, Target' }
      ]
    },
    recommendedScent: 'Douceur Vanill\u00e9e (warm vanilla orchid, almond milk, cashmere woods) \u2014 the dopamine scent. Warm, cozy, rewarding. The scent that makes laundry feel like a hug instead of a chore. Secondary: Fleur Sombre for the "I have my life together" energy on date nights.',
    competitorAngle: 'She\'s currently cycling through Tide/All + vinegar + Downy Unstopables + rewashing 2-3 times = spending MORE money and MORE time (the two things she has least of) for WORSE results. The scent boosters she dumps in are masking agents that can\'t address oil-based mildew biofilm. Maison Laundrin replaces her entire failing stack with one pour that actually works with her brain instead of against it.'
  },
  {
    id: 12,
    name: 'The Eczema Guardian',
    ageRange: '25-40',
    tier: 2,
    emoji: '\uD83E\uDDF8',
    tagline: 'She was told she had to choose between her baby\'s skin and clothes that smell beautiful. She was told there was no third option. She was lied to.',
    painIntensity: 5,
    coreWound: 'She has watched her baby scratch his own face until it bled. She has found blood on the crib sheets at 2am and wondered what kind of mother she is. Every piece of clothing, every bedsheet, every towel is a potential trigger \u2014 and she is the one who washes them. The guilt is crushing. The helplessness is suffocating. And the cruelest part: she was forced to give up the simple pleasure of nice-smelling laundry to keep her baby safe. She chose safety. Of course she did. But she grieves what it cost her.',
    demographics: {
      income: '$50K-$150K household, cross-income but higher awareness in middle-to-upper brackets',
      lifeStage: 'First-time or second-time parent, baby/toddler with active eczema (ages 0-5)',
      location: 'Suburban or urban, higher prevalence in urban environments',
      generation: 'Millennials and younger Gen X (25-40). Primary laundry decision-maker. Digitally fluent.'
    },
    painPoints: [
      {
        title: 'The Blood on the Sheets',
        detail: '20% of US children have eczema. Up to 80% struggle to rest through the night. Mothers sleep 48 minutes LESS per night. The itch-scratch cycle breaks skin, causes bleeding, risks infection. Every morning is a skin check.',
        quotes: [
          { text: 'At his worst, we would find blood on his sheets; we would find him in his car seat having scratched his face until it was bleeding.', source: 'KhanhPDuong.com parent account' },
          { text: 'Being an "eczema parent" is described as "challenging, heartbreaking and everything in between."', source: 'National Eczema Society' }
        ]
      },
      {
        title: 'The Detergent Roulette',
        detail: 'She cycles through product after product: Dreft (still contains fragrances), All Free & Clear, Seventh Generation (contains SLS and Allergen of the Year preservatives), Tide Free & Gentle, Puracy, soap nuts, vinegar rinses, extra rinse cycles. Each one is a hope and a potential trigger.',
        quotes: [
          { text: 'Even detergents labeled as \'all natural\' or \'made for sensitive skin\' could be a trigger for you, so you may have to try several brands before you find one that doesn\'t irritate your skin.', source: 'MyEczemaTeam' },
          { text: 'One desperate parent titled their forum post: "Desperate for Laundry Detergent Solution."', source: 'Baby Bargains forum' }
        ]
      },
      {
        title: 'The Scent vs. Safety Sacrifice',
        detail: 'To keep the baby\'s skin clear, she strips everything out: no fragrance, no softener, nothing that makes laundry smell like anything other than wet fabric. She misses burying her face in warm towels. She misses clean-smelling sheets. These are tiny losses that accumulate into grief.',
        quotes: [
          { text: 'I hate being a sensitive skin girl because I want to be able to use all the detergents and body washes with delicious scents!', source: 'NBC Select reviewer' },
          { text: 'I started with the \'safe scent\' about six months ago just because I do like when my clothes smell good, and so far, my family and I are good with that brand.', source: 'Arm & Hammer review' }
        ]
      },
      {
        title: 'The Mom Guilt Amplifier',
        detail: 'Parents question whether THEY caused the eczema. "If your baby has eczema, it\'s natural to wonder if you could have done something differently." The bidirectional stress-eczema relationship means her stress literally makes the baby\'s eczema worse, which makes her more stressed.',
        quotes: [
          { text: 'If your baby has eczema, it\'s natural to wonder if you could have done something differently.', source: 'Cleveland Clinic' },
          { text: 'Parents experience crushing mom guilt when their skills don\'t help their baby.', source: 'Eczema parent research' }
        ]
      },
      {
        title: 'Sleep Deprivation Cascade',
        detail: '80% of babies with eczema struggle to sleep through the night. 60-65% of parents AND 63% of siblings have disturbed sleep. The inflammation communicates with the brain, causing anxiety, depression, tiredness, and cognitive fog in the entire family.',
        quotes: [
          { text: 'Mothers of babies with eczema sleep on average 48 minutes less per night.', source: 'British Association of Dermatologists study' },
          { text: '60-65% of parents and 63% of siblings reported disturbed sleep.', source: 'Eczema family impact research' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'That the next detergent she tries will trigger a flare-up',
        'Finding blood on the sheets again',
        'That she caused this \u2014 or is making it worse with her choices',
        'That her baby will struggle with eczema for life',
        'Using ANYTHING scented on her baby\'s clothes and being wrong'
      ],
      desires: [
        'A detergent that is genuinely safe for eczema skin AND smells beautiful',
        'To stop playing detergent roulette \u2014 find THE product and never switch again',
        'Clear skin for her baby \u2014 fewer flare-ups, fewer sleepless nights',
        'To smell her baby\'s pajamas and feel joy instead of anxiety',
        'Permission to have nice-smelling laundry without the guilt'
      ],
      secretWants: [
        'To stop being an "eczema parent" detective and just be a mom',
        'For someone to explain that she didn\'t cause this and can\'t prevent all of it',
        'The simple pleasure of burying her face in her baby\'s clean blanket and smelling something beautiful'
      ]
    },
    failedSolutions: [
      'Dreft \u2014 marketed for babies but still contains fragrances; Oliver flared within a week',
      'All Free & Clear \u2014 #1 dermatologist recommended; patches came back angrier within weeks',
      'Seventh Generation Free & Clear \u2014 contains SLS and methylisothiazolinone (2013 Allergen of the Year)',
      'Tide Free & Gentle, Puracy Natural, Earth Breeze \u2014 all tried, none reliably safe',
      'Extra rinse cycles, white vinegar rinses \u2014 extra work, inconsistent results',
      'Eliminating all fabric softener and dryer sheets entirely',
      'Switching to cotton-only clothing, cutting out all tags',
      'Arm sleeves to prevent scratching \u2014 delays motor development',
      'Soap nuts and homemade detergent \u2014 doesn\'t clean effectively'
    ],
    triggerMoments: [
      'Finding blood on the crib sheets at 2am and spiraling',
      'A bad flare-up after trying yet another "safe" detergent',
      'Scrolling eczema parent Facebook group or Reddit at 3am during a sleepless night',
      'The pediatrician hands her the trigger elimination list and detergent is #1',
      'Visiting a friend whose baby\'s clothes smell beautiful and feeling a stab of envy/grief',
      'Her baby\'s skin finally clears and she\'s terrified to change ANYTHING'
    ],
    languagePatterns: [
      'Blood on the sheets.',
      'The itch-scratch cycle.',
      'Desperate for a laundry detergent solution.',
      'I hate being a sensitive skin girl because I want the delicious scents.',
      'I tried everything.',
      'Is this actually safe or will it trigger a flare-up?',
      'He smells like heaven.',
      'I didn\'t have to choose. For the first time since his diagnosis, I didn\'t have to choose.',
      'No SLS? No optical brighteners? No methylisothiazolinone?',
      'I tested it on my own clothes first for a week.'
    ],
    beliefs: {
      current: [
        'Any scented detergent will trigger my baby\'s eczema',
        '"Free and clear" is the only safe option for sensitive skin',
        'Beautiful-smelling laundry is something other families get to have \u2014 not us',
        'If a product says "gentle" or "natural," it\'s probably lying',
        'The only way to keep his skin clear is to strip everything out'
      ],
      target: [
        'Traditional fragrance deposits directly on fabric and off-gasses against skin \u2014 micro-encapsulated fragrance is sealed in plant-based shells and NEVER contacts skin directly',
        'Micro-encapsulated scent releases through fabric-to-fabric friction, not skin contact \u2014 the irritant never touches the baby',
        'No SLS, no optical brighteners, no phthalates, no methylisothiazolinone \u2014 eliminates the specific chemicals documented to trigger eczema flare-ups',
        'The 5-enzyme Strip stage removes years of accumulated chemical residue from previous detergents \u2014 residue that\'s STILL triggering reactions',
        'Dermatologist tested. She can test on her own clothes first, then one onesie, then everything \u2014 on her terms'
      ]
    },
    scienceInsights: [
      '20% of US children (14.4 million) have eczema. Baby skin is thinner, with an underdeveloped barrier \u2014 detergent residue transfers to skin through hours of sustained contact',
      'Detergent residue doesn\'t rinse away completely. It lingers in fabric fibers. Rashes are worse on arms and legs where clothing is tighter and rubs against skin.',
      'Methylisothiazolinone was named 2013 "Allergen of the Year" by the American Contact Dermatitis Society \u2014 and is still found in Seventh Generation and other "sensitive skin" products',
      'Micro-encapsulated fragrance is sealed in biodegradable plant-based shells that don\'t break open on skin contact \u2014 they release only through fabric-to-fabric friction, keeping the scent separate from the baby\'s skin',
      'The eczema treatment market was valued at $18.1 billion in 2024 \u2014 parents are among the most price-insensitive consumer segments for products that actually work'
    ],
    messagingFramework: {
      dos: [
        'Lead with EMPATHY and the specific eczema parent experience \u2014 blood on sheets, 3am skin checks, the guilt',
        'Explain the micro-encapsulation mechanism in detail: sealed capsules, friction-activated, no skin contact',
        'Provide the ingredient NO list prominently: no SLS, no phthalates, no optical brighteners, no methylisothiazolinone',
        'Suggest the CAUTIOUS trial pathway: her clothes first, then one onesie, then wait, then everything',
        'Use the "you don\'t have to choose" framework \u2014 the emotional core of the message',
        'Feature real eczema parent testimonials and community validation'
      ],
      donts: [
        'NEVER claim to cure eczema \u2014 only that it eliminates one trigger (chemical residue)',
        'NEVER minimize the condition or the parent\'s vigilance',
        'NEVER show a baby with visible eczema in ads \u2014 show clear, happy skin as the OUTCOME',
        'NEVER rush the trial \u2014 she needs to feel in control of the process',
        'NEVER use "just try it" casually \u2014 every new product is a risk for her baby'
      ],
      toneNotes: 'Deeply empathetic, science-grounded, permission-giving. She is a warrior-detective who has been fighting alone. The tone should feel like a fellow eczema parent who found something real and is sharing it carefully \u2014 not selling, sharing. Every claim must be backed by mechanism. Trust is earned through transparency.',
      neverSay: [
        'Cures eczema',
        'Safe for all babies',
        'Just try it',
        'Don\'t worry about ingredients',
        'Hypoallergenic (she distrusts this term)',
        'It\'s just eczema'
      ]
    },
    adCreative: [
      {
        angle: 'The Blood on the Sheets',
        hook: 'The first time I saw blood on his crib sheets, I thought something was wrong with me.',
        primaryText: 'The first time I saw blood on his crib sheets, I thought something was wrong with me.\n\nNot with him. With ME. Because what kind of mother puts her baby to sleep and wakes up to find he\'s scratched his own face until it bled?\n\nOliver was four months old. I was standing in his nursery at 2am, holding a fitted sheet with a rust-colored stain, silently falling apart.\n\nEczema. One in five children. And the first thing on the trigger elimination list? Laundry detergent.\n\nI tried everything. Dreft. All Free & Clear. Seventh Generation. Vinegar rinses. Extra rinse cycles. Soap nuts. Cotton only. Tags cut out of everything.\n\nAnd then the impossible choice: scent or safety. I chose safety. Of course I did.\n\nBut I found a third option. A detergent with micro-encapsulated fragrance \u2014 sealed in plant-based capsules that don\'t break open on skin contact. No SLS. No optical brighteners. No methylisothiazolinone. Dermatologist tested.\n\nI tested on my own clothes for a week first. Then one onesie. Then I waited.\n\nHis skin cleared. And his pajamas smelled like warm vanilla and almond milk.\n\nI didn\'t have to choose.\n\n$49 Discovery Set. Free shipping.',
        headline: 'You Don\'t Have to Choose Anymore.',
        description: 'Micro-encapsulated fragrance: sealed, no skin contact. No SLS, no phthalates. Dermatologist tested. $49 Discovery Set.',
        cta: 'Learn More',
        destination: 'Advertorial (Eczema Parents)',
        creativeDirection: 'Warm, intimate nursery scene. Mother 28-35 holding her baby, both peaceful. Baby\'s skin is clear and beautiful. Soft morning light. The emphasis is on CALM and RELIEF, not crisis. A bottle of Douceur Vanillee on the changing table. Static image or 15-sec video: mom picking up baby, burying her nose in his onesie, a genuine smile of relief. No visible eczema. The story is in the before (copy) and the after (image).'
      },
      {
        angle: 'The Ingredient Audit',
        hook: 'I read the ingredient list of every "baby-safe" detergent. Here\'s what I found.',
        primaryText: 'I read the ingredient list of every "baby-safe" detergent on the market. Here\'s what I found.\n\nDreft: Still contains synthetic fragrances. My son flared within a week.\n\nSeventh Generation Free & Clear: Contains SLS. Also contains methylisothiazolinone \u2014 named "Allergen of the Year" in 2013 by the American Contact Dermatitis Society. Still in there.\n\nAll Free & Clear: Better. But his patches came back within weeks.\n\n"Hypoallergenic" is not regulated. "Natural" is not regulated. "For sensitive skin" is not regulated.\n\nSo when I found Maison Laundrin, I didn\'t trust it either. I audited every ingredient.\n\nNo SLS. No optical brighteners. No phthalates. No phosphates. No artificial dyes. No methylisothiazolinone. No hormone disruptors.\n\nPlant-based surfactants. 5-enzyme system that strips the accumulated residue from every previous detergent still lurking in his clothes. Dermatologist tested.\n\nAnd the fragrance is micro-encapsulated \u2014 sealed in plant-based shells that release through fabric friction, not skin contact.\n\nI tested on my clothes first. Then one onesie. Then everything.\n\nFive months later: his skin is the clearest it\'s been since he was two months old.\n\n$49 Discovery Set. Free shipping.',
        headline: 'Every Ingredient. Audited.',
        description: 'No SLS. No optical brighteners. No Allergen of the Year. Fragrance sealed from skin. $49 Discovery Set.',
        cta: 'Learn More',
        destination: 'Landing Page',
        creativeDirection: 'Clean, editorial layout. Close-up of ingredient panel comparison: left shows competitors\' problematic ingredients highlighted in red, right shows Maison Laundrin\'s clean list in green. Could be a carousel: Slide 1 = "Baby-safe?" Slide 2 = Dreft ingredients. Slide 3 = Seventh Gen ingredients. Slide 4 = ML ingredients. Slide 5 = Baby with clear skin + product shot. Informative, transparent, empowering. Trust-building creative.'
      },
      {
        angle: 'The Micro-Encapsulation Science',
        hook: 'The reason scented detergent triggers eczema \u2014 and why this one doesn\'t.',
        primaryText: 'The reason scented detergent triggers your baby\'s eczema isn\'t the scent. It\'s the delivery system.\n\nTraditional fragrance dissolves into detergent and deposits directly onto fabric in liquid form. It off-gasses against skin for hours. For a baby with eczema \u2014 whose skin barrier is already compromised \u2014 those hours of chemical contact trigger the itch-scratch cycle.\n\nMicro-encapsulated fragrance is different at the molecular level.\n\nEach scent molecule is sealed inside a microscopic plant-based shell. These capsules bond to fabric fibers. They sit there, sealed, inert \u2014 producing no volatile compounds, releasing no irritants, touching nothing.\n\nThe capsules break open ONLY through friction. Fabric rubbing against fabric. Movement.\n\nThe scent isn\'t sitting against your baby\'s skin. It\'s locked in the fiber, released into the air between fabric layers, activated by motion.\n\nNo SLS. No optical brighteners. No methylisothiazolinone. Dermatologist tested.\n\nYour baby gets clear skin. You get beautiful-smelling laundry.\n\nYou don\'t have to choose.\n\n$49 Discovery Set. Free shipping. 60-Day Double-Scent Promise.',
        headline: 'Sealed. Not On His Skin.',
        description: 'Micro-encapsulated fragrance releases through fabric friction, not skin contact. No SLS. Dermatologist tested. $49.',
        cta: 'Learn More',
        destination: 'Advertorial (Eczema Parents)',
        creativeDirection: '30-sec educational animation or illustrated carousel. Shows: 1) Traditional fragrance depositing on fabric, off-gassing against baby\'s skin (irritation). 2) Micro-encapsulated fragrance: sealed capsule bonded to fiber, releases only through fabric-to-fabric friction (no skin contact). Clean, warm design. Not clinical \u2014 soft colors, gentle illustrations. Think "science explained by a caring friend." End with product shot and baby in clear-skinned, smiling comfort.'
      },
      {
        angle: 'The Eczema Mom Community Share',
        hook: 'If you\'re in an eczema parent Facebook group at 3am, this is for you.',
        primaryText: 'If you\'re in an eczema parent Facebook group at 3am, reading posts from other exhausted mothers who also can\'t find a detergent that doesn\'t make everything worse \u2014 this is for you.\n\n14.4 million children in the US have eczema. Their parents represent 10-12 million households actively managing this condition.\n\nYou\'ve tried Dreft. All Free & Clear. Seventh Generation. Puracy. Earth Breeze. Soap nuts. Vinegar. Extra rinse cycles. You\'ve cut tags out of everything. You\'ve switched to all-cotton.\n\nAnd you\'ve accepted that beautiful-smelling laundry is something other families get.\n\nI accepted that too. For fourteen months.\n\nThen I found a detergent with a 5-enzyme system that strips the chemical residue previous detergents left in his clothes. No SLS, no optical brighteners, no phthalates, no methylisothiazolinone.\n\nAnd fragrance sealed in plant-based capsules that release through fabric friction \u2014 not against his skin.\n\nI tested my own clothes first. Then one onesie. Then I waited. Then everything.\n\nHis daycare teacher told me he smells wonderful. My mother holds him and says "he smells like heaven."\n\nHis skin is clear. And he smells like heaven.\n\n$49 Discovery Set. Free shipping.',
        headline: 'He Smells Like Heaven. His Skin Is Clear.',
        description: 'Micro-encapsulated fragrance: no skin contact. No SLS. 5-enzyme system strips old residue. $49 Discovery Set.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'UGC-style testimonial video. Mom 28-36, speaking to camera in her baby\'s nursery. Real, tired, genuine. She tells the story: the products she tried, the moment she tested it, the first time someone said her baby smelled wonderful. Baby on her hip or in a crib behind her, happy, clear-skinned. 30-45 sec. No production polish. This should feel like a video she posted in her eczema mom group. Warm natural light. Authentic emotion.'
      },
      {
        angle: 'The Gift for the Eczema Mom',
        hook: 'You know the friend who hasn\'t slept in four months because her baby has eczema.',
        primaryText: 'You know the friend who hasn\'t slept in four months because her baby has eczema.\n\nShe\'s the one who reads every ingredient label. Who has tried six detergents in three months. Who does extra rinse cycles on every load. Who cuts the tags out of every onesie. Who checks her baby\'s skin before she checks anything else in the morning.\n\nShe hasn\'t used scented detergent since the diagnosis. She misses it but would never say so.\n\nMaison Laundrin is a luxury detergent with micro-encapsulated fragrance sealed in plant-based capsules that don\'t break open on skin contact. No SLS. No optical brighteners. No phthalates. No methylisothiazolinone. Dermatologist tested.\n\nThe scent releases through fabric friction, not skin contact. Her baby\'s clothes can smell beautiful AND be safe.\n\nThe Discovery Set is $49 \u2014 four scents, free shipping. Tuck in a note: "You don\'t have to choose anymore."\n\nShe\'ll know exactly what you mean.\n\n60-Day Double-Scent Promise.',
        headline: 'For the Mom Who Reads Every Label.',
        description: 'The gift for the eczema parent in your life. Fragrance sealed from skin. No SLS. $49 Discovery Set.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Two moms, one handing the other a Discovery Set box. The recipient looks surprised and moved. Setting: kitchen counter or living room, casual, real. The giver might have a knowing look. Could include a handwritten note card visible: "You don\'t have to choose anymore." Warm, supportive energy. This targets friends and family of eczema parents (women 25-45). Static image or 15-sec UGC. NOT pitying \u2014 empowering and loving.'
      }
    ],
    metaTargeting: {
      interests: [
        'Eczema', 'Atopic dermatitis', 'Baby eczema', 'Sensitive skin',
        'National Eczema Association', 'Parenting', 'First-time mom',
        'Baby care', 'Pediatric dermatology', 'Natural baby products',
        'Dreft', 'All Free and Clear', 'Seventh Generation'
      ],
      behaviors: [
        'Active in eczema parent Facebook groups and Reddit communities',
        'Reads ingredient labels obsessively before purchasing baby products',
        'Shares product recommendations in parenting and eczema communities',
        'Price-insensitive for products that actually work for baby\'s skin',
        'Searches for "baby-safe detergent" and "eczema-safe laundry" regularly'
      ],
      demographics: 'Women 25-40. Parents of the 14.4 million US children with eczema (10-12 million households). Higher prevalence in urban environments. Cross-income but higher awareness in $50K-$150K bracket. First-time parents most acutely affected.',
      stacks: [
        { name: 'Eczema Parent Community', interests: 'Eczema, atopic dermatitis, National Eczema Association, baby eczema remedies, sensitive skin baby' },
        { name: 'New / Young Parents', interests: 'First-time mom, parenting, baby care, BabyCenter, What to Expect, The Bump, Motherly' },
        { name: 'Clean / Safe Baby Products', interests: 'Natural baby products, non-toxic baby, organic baby, Dreft, baby detergent, pediatric dermatology' },
        { name: 'Millennial Moms', interests: 'Millennial parenting, mom life, mom groups, Instagram moms, parenting hacks, self-care for moms' }
      ]
    },
    recommendedScent: 'Douceur Vanill\u00e9e (warm vanilla orchid, almond milk, cashmere woods) \u2014 the gentlest, warmest profile. She will associate this scent with the moment her baby\'s clothes could finally smell beautiful. "He smells like heaven." Trial the mildest scent first; she needs to build trust before exploring bolder options.',
    competitorAngle: 'Her "competitors" are the free-and-clear products she rotates through: Dreft, All Free & Clear, Seventh Generation Free & Clear, Tide Free & Gentle, Puracy. Each claims to be baby-safe but contains problematic ingredients (SLS, methylisothiazolinone, optical brighteners). She has been playing detergent roulette for months. Maison Laundrin wins because: (1) its ingredient list is genuinely clean by her standards, (2) the micro-encapsulation technology means fragrance never contacts skin, and (3) the 5-enzyme system strips the accumulated residue from every previous detergent \u2014 residue that may still be triggering flare-ups. The eczema treatment market is $18.1 billion because parents will pay ANYTHING for products that work.'
  }
];
