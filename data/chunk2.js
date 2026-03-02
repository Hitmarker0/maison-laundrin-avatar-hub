// Chunk 2: Avatars 4-6
const CHUNK2 = [
  {
    id: 4,
    name: 'The Menopausal Woman',
    ageRange: '45-55',
    tier: 1,
    emoji: '\u{1F321}\uFE0F',
    tagline: 'Her body has turned against her \u2014 and the laundry room is ground zero for one of her most private, shame-filled daily battles. No brand is speaking to her. Maison Laundrin should be the first.',
    painIntensity: 5,
    coreWound: 'Her body has betrayed her. She wakes up drenched in sweat that soaks through pajamas and sheets. Her body odor has fundamentally changed \u2014 she no longer smells like herself. Her once-reliable detergent can no longer handle the biological reality of hormonal sweat. She is doing 2-3x more laundry than five years ago, and nothing gets the smell out. Meanwhile, she feels invisible in a society that equates femininity with youth. She is desperate for small daily pleasures that make her feel like herself again \u2014 like a woman who matters, who is worthy of luxury, who hasn\'t been forgotten by the market.',
    demographics: {
      income: 'Gen X women spend $75,879 annually on average, influencing 70-80% of all consumer spending. Women 50+ control $15 trillion in combined spending power and 95% of household purchasing decisions.',
      lifeStage: 'Perimenopause/menopause transition (average 7 years). Children may be leaving home. Career at peak. Navigating identity crisis.',
      location: 'National U.S. \u2014 the global menopause market is valued at $600 billion. Only 7% of femtech startups focus on menopause.',
      generation: 'Gen X (born ~1970-1981)'
    },
    painPoints: [
      {
        title: 'The Night Sweat Laundry Crisis',
        detail: 'Night sweats affect 75-80% of perimenopausal women, persisting an average of 7 years. These are drenching events that soak through pajamas and bedding, forcing 2-3x more laundry. Many women sleep on towels to protect sheets, then wash both daily. The financial and emotional toll is relentless.',
        quotes: [
          { text: 'I will still wake up absolutely drenched. And I can have a sheet over me and that will be wringing wet in the morning.', source: 'Christina, age 52, HealthTalk.org' },
          { text: 'Don\'t ask us how much hard-earned dough we\'ve invested in linens since \'the change\' hit us.', source: 'Alloy Health' },
          { text: 'The towels that are on top of the sheets have to come off and be changed again.', source: 'Christina, age 52, HealthTalk.org' }
        ]
      },
      {
        title: 'Hormonal Body Odor Changes: "I Don\'t Smell Like Me Anymore"',
        detail: 'As estrogen drops, the body retains higher testosterone, attracting more bacteria to sweat. The chemical composition of sweat changes dramatically \u2014 more acidic with a sharper odor. Described as musky, sour, onion-like, or even "cat pee." This sweat creates biofilm \u2014 complex colonies of bacteria cemented to fabric fibers that standard surfactants literally cannot break down. Only enzymes can.',
        quotes: [
          { text: 'Same laundry detergent and softener as always. All the sudden all my clothes smell like cat piss.', source: 'Woman, age 45, Perry perimenopause community' },
          { text: 'Has anyone noticed their body producing all sorts of extra smells once they\'re in perimenopause? I double cleanse in the shower with soap and an anti-bacterial wash and I\'m still funky.', source: 'Anonymous, Hello Gloria' },
          { text: 'My biggest menopause problem is finding a deodorant that works. I am normally a fresh, clean-smelling person who enjoys wearing lovely perfume, but now I smell sweaty half an hour after having a bath.', source: 'A.Vogel menopause Q&A' }
        ]
      },
      {
        title: 'The Skin Sensitivity Paradox',
        detail: 'Around age 50, skin pH changes fundamentally \u2014 skin becomes drier, thinner, more sensitive, more reactive. Estrogen\'s role in reducing inflammation disappears, meaning previously harmless products can now cause reactions. The catch-22: she needs STRONGER cleaning for hormonal odor but GENTLER ingredients on increasingly sensitive skin. Most products force her to choose one or the other.',
        quotes: [
          { text: 'Because the skin becomes drier and less elastic during menopause, people may be more sensitive to products, such as soaps and detergents, which can irritate the skin and cause inflammation and itchiness.', source: 'Medical News Today' },
          { text: 'Scented soaps and perfumes contain harsh chemicals that can further irritate the skin.', source: 'Columbia Skin Clinic' }
        ]
      },
      {
        title: 'Heightened Scent Sensitivity / Olfactory Changes',
        detail: 'Falling estrogen makes the sense of smell more acute. Products used for years suddenly seem too strong or wrong. Some experience phantom smells. This creates both a challenge and an opportunity \u2014 while cheap synthetic fragrances become unbearable, well-crafted micro-encapsulated fragrances that release gradually through friction can be deeply comforting.',
        quotes: [
          { text: 'I can\'t stand my perfume anymore. I can\'t stand my body creams. I can\'t stand the smell of laundry detergent.', source: 'A.Vogel menopause counselor' },
          { text: 'I can\'t tell if I smell more or if I am smelling more.', source: 'Anonymous, Hello Gloria' },
          { text: 'I can be grossed out by every single odor that wafts within 30 feet of me.', source: 'Anonymous, Hello Gloria' }
        ]
      },
      {
        title: 'Invisible to Brands, Invisible to Society',
        detail: '87% feel overlooked by brands. 91% have never seen specific marketing for menopause products. 41% report feeling "lonely, invisible, irrelevant and dispensable." The $600B global menopause market is massively underserved with only 7% of femtech startups focused on menopause.',
        quotes: [
          { text: 'Women are frustrated when the marketing world seems to think that the only things midlife women are interested in are anti-aging creams and laundry detergent.', source: 'Creativebrief' },
          { text: 'Midlife invisibility is something many women experience, where people are suddenly looking through them rather than at them.', source: 'Balance Menopause' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'That she smells bad and doesn\'t know it \u2014 the shame is measurable (37.4% report shame, 82.7% report stigma)',
        'That her body has permanently turned against her',
        'Becoming invisible in a society that equates femininity with youth',
        'That nothing will ever work to solve the odor problem',
        'Paying premium and being burned again \u2014 she\'s tried 3-5 detergents in the last year'
      ],
      desires: [
        'To smell like herself again \u2014 or choose a new scent identity she controls',
        'Sheets that smell fresh for days, not hours',
        'A product that is powerful enough for hormonal sweat AND gentle enough for changing skin',
        'To feel seen and valued \u2014 not pitied, not patronized, not ignored',
        'Small daily pleasures that make her feel like herself again'
      ],
      secretWants: [
        'To reclaim her sensory femininity \u2014 when her body odor has changed, scent through fabric becomes an act of identity',
        'Permission to spend $39 on herself without guilt',
        'For someone to finally explain WHY her detergent stopped working',
        'To be part of the conversation \u2014 not forgotten by every brand in every category'
      ]
    },
    failedSolutions: [
      'Different detergents (3-5 switches in the last year)',
      'Vinegar, baking soda, OxiClean, bleach, essential oils',
      'Increased wash temperature and frequency \u2014 hot water and extra rinse cycles',
      'Double washing, triple washing',
      'Showering 3-4 times a day, switching deodorants repeatedly',
      'Specialty products like OdorKlenz \u2014 effective odor removal but fragrance-free, solves the problem but misses the pleasure',
      'Fabric softener and scent boosters \u2014 synthetic, one-dimensional, fades in hours'
    ],
    triggerMoments: [
      'Her current detergent stops working on hormonal sweat \u2014 crisis, not curiosity',
      'Her skin reacts to a detergent she used for 15 years \u2014 forced to switch',
      'A trusted friend recommends something specific in a private Facebook group',
      'Waking up drenched and changing sheets at 2am for the third time this week',
      'A 2am Google search: "why do my sheets smell after washing" or "best detergent for night sweats"',
      'The heightened scent sensitivity makes her previously loved detergent smell intolerable'
    ],
    languagePatterns: [
      'Nothing gets the smell out',
      'I\'ve tried every detergent',
      'My sheets smell even after washing',
      'Extra loads / constant washing / double washing',
      'Oh my God, is this a thing?',
      'I tried everything!! Showered 3-4 times a day, different soaps, essential oils, natural deodorants, apple cider vinegar',
      'I am normally a fresh, clean-smelling person who enjoys wearing lovely perfume, but now I smell sweaty half an hour after having a bath',
      'Is it lupus? Is it perimenopause? Am I dying?',
      'I deserve this \u2014 this is MY time',
      'Like a luxury hotel',
      'Something my nose doesn\'t attack me for'
    ],
    beliefs: {
      current: [
        'My detergent stopped working \u2014 I need a different brand',
        'I smell bad \u2014 maybe I\'m not clean enough',
        'This is just what aging feels like',
        'Nobody talks about this \u2014 maybe it\'s just me',
        'Luxury products aren\'t designed for someone like me'
      ],
      target: [
        'My body chemistry changed \u2014 this is biology, not hygiene failure',
        '80% of women over 45 experience this \u2014 I am not alone and I am not broken',
        'Regular detergent literally CAN\'T break down the biofilm from hormonal sweat \u2014 that\'s why nothing worked',
        'Enzymes specifically target the biological compounds that changed \u2014 there IS a real solution',
        'I deserve a daily luxury that costs $0.61 per load \u2014 less than my morning coffee'
      ]
    },
    scienceInsights: [
      'Night sweats affect 75-80% of perimenopausal women, persist average 7 years, caused by hypothalamus malfunction during hormonal fluctuations',
      'Estrogen drop leaves higher relative testosterone, which attracts more bacteria to sweat \u2014 sweat becomes more acidic with sharper odor',
      'The odor is caused by biofilm \u2014 complex colonies of bacteria, fungus, and mold cemented to fabric fibers. Standard surfactants cannot break this down. Only enzymes can.',
      'Around age 50, skin pH changes fundamentally \u2014 skin becomes drier, thinner, more reactive to irritants',
      'Falling estrogen makes sense of smell more acute \u2014 products used for years suddenly seem too strong',
      '37.4% report shame related to menopause symptoms; 82.7% report feeling stigma',
      'Aromatic compounds travel directly to the limbic system \u2014 the brain region controlling emotions, memory, and hormone regulation'
    ],
    messagingFramework: {
      dos: [
        'Lead with the laundry EXPERIENCE she lives every day \u2014 the problem, not the diagnosis',
        'Feature real women 45-55 in all creative assets',
        'Normalize the experience without naming it as a disease',
        'Lead with function (enzymes remove hormonal sweat odor), close with feeling (your sheets will smell like a sanctuary for days)',
        'Make her feel UNDERSTOOD, not diagnosed \u2014 warm, knowing, never patronizing',
        'Address the skin sensitivity paradox: powerful enough AND gentle enough',
        'Include the science but make it accessible (3-stage enzyme system)',
        'Create content for Facebook (her platform) and Google Search (her discovery method)'
      ],
      donts: [
        'Use the word "menopause" in the headline or hook \u2014 too much shame/stigma',
        'Feature young models \u2014 she must see herself',
        'Use clinical language (vasomotor symptoms, hormonal fluctuations)',
        'Position her as broken or needing to be fixed',
        'Over-promise \u2014 she\'s been burned too many times by false claims',
        'Use influencer-style content \u2014 only 5% of Gen X is influenced by influencers'
      ],
      toneNotes: 'Warm, knowing, never patronizing. "We get it" without saying "poor you." Scientific credibility combined with emotional resonance. She should feel UNDERSTOOD, not diagnosed. Aspirational, not clinical.',
      neverSay: [
        'Menopause in headlines or hooks',
        'Vasomotor symptoms',
        'Hormonal fluctuations',
        'Old lady',
        'Anti-aging',
        'For your age',
        'Old or aging'
      ]
    },
    adCreative: [
      {
        angle: 'The Night Sweat Solution',
        hook: 'Last night I woke up drenched. Again. This morning my sheets smell like a luxury hotel.',
        primaryText: 'Last night I woke up drenched. Again. For the fourth time this week. I used to dread the morning \u2014 stripping sheets that smelled like... I don\'t even want to say it. Nothing worked. Not Tide. Not OxiClean. Not double-washing. Not vinegar. Then a friend told me about Maison Laundrin. A luxury detergent with a multi-enzyme system that breaks down what regular detergent leaves behind. The first wash was different. Actually, genuinely different. And the scent \u2014 cotton flower, iris, white musk \u2014 lasted FIVE DAYS in my sheets. Five days of smelling like a sanctuary instead of a battlefield. $39 for 64 loads. That\'s $0.61 per load to feel like myself again.',
        headline: 'Your Sheets Should Smell Like a Sanctuary.',
        description: 'Multi-enzyme system + luxury scent lasting 5-7 days. Created by master perfumers. $0.61/load.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'Woman 48-55, morning light, serene expression, pulling freshly laundered sheets from dryer. Peaceful, not clinical. Warm, golden lighting.'
      },
      {
        angle: 'The Biology Explanation',
        hook: 'Your detergent didn\'t stop working. Your body changed.',
        primaryText: 'Your detergent didn\'t stop working. Your body changed. Here\'s what nobody told you: when estrogen drops, your sweat chemistry changes. The odor compounds that result aren\'t water-soluble. They form a biofilm inside your fabric fibers that standard surfactants literally cannot reach. That\'s why Tide didn\'t work. That\'s why double-washing didn\'t work. That\'s why nothing worked. Maison Laundrin uses a multi-enzyme cleaning system \u2014 including lipase, which breaks down oils at the molecular level inside the fiber. One wash strips what three couldn\'t. Then micro-encapsulated luxury fragrance bonds into the clean fiber and lasts 5-7 days. Plant-based. No SLS. Dermatologist tested. Powerful enough for the problem, gentle enough for changing skin.',
        headline: 'It\'s Not Your Detergent. It\'s Your Biology.',
        description: 'Multi-enzyme system targets what regular detergent can\'t. Plus luxury scent lasting days. Dermatologist tested.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'Clean, scientific aesthetic with warm undertones. Before/after concept showing fiber-level cleaning. Not clinical \u2014 educational and empowering.'
      },
      {
        angle: 'The "Tried Everything" Sisterhood',
        hook: 'I\'ve tried every detergent. Every booster. Every hack. This is the first thing that actually worked.',
        primaryText: 'Vinegar. Baking soda. OxiClean. Hot water. Cold water. Double rinse. Triple rinse. I tried them all. My sheets still carried that smell by morning. Then someone in my Facebook group mentioned Maison Laundrin. I almost scrolled past \u2014 I\'d been burned too many times. But the reviews from women my age were different. Specific. Detailed. They described my exact problem. I ordered the Discovery Set. The first wash, I buried my face in my pillowcase and smelled... cotton flower. Iris. White musk. For five days. I almost cried. Not because of the scent. Because something finally worked. $49 Discovery Set. Four scents. Free shipping. 60-Day Double-Scent Promise.',
        headline: 'The First Thing That Actually Worked.',
        description: 'Multi-enzyme system + luxury fragrance lasting 5-7 days. Discovery Set $49. Free shipping.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Woman 50+ burying face in fresh pillowcase, eyes closed. Genuine emotion \u2014 relief and surprise. Warm bedroom lighting. UGC-style.'
      },
      {
        angle: 'The Sanctuary Ritual',
        hook: 'You\'ve spent 20 years taking care of everyone else. Your sheets should take care of you.',
        primaryText: 'You\'ve spent 20 years taking care of everyone else. Your sheets should take care of you. Maison Laundrin is a luxury laundry detergent made by master perfumers. It doesn\'t just clean \u2014 it strips away the biological buildup regular detergent leaves behind, then bonds micro-encapsulated fragrance into your fabric for 5-7 days. Your sheets become a sanctuary. Your towels become a spa. Your pajamas become the one beautiful thing at the end of a very long day. Plant-based. No phthalates. No phosphates. Dermatologist tested. $0.61 per load. Less than your morning coffee. More than you\'ve given yourself in years. $49 Discovery Set. Four scents. Free shipping.',
        headline: 'Your Sheets Should Take Care of You.',
        description: 'Luxury fragrance lasting 5-7 days. Multi-enzyme clean. Plant-based. $0.61/load.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Peaceful bedroom scene. Woman 50+ in comfortable clothes, looking content. Golden-hour lighting. The bed is the sanctuary.'
      },
      {
        angle: 'The 80% Sisterhood',
        hook: 'If you\'re reading this nodding, you\'re not alone. 80% of women over 45 experience this.',
        primaryText: 'If you\'re reading this nodding, you\'re not alone. 80% of women over 45 experience changes in how their body \u2014 and their laundry \u2014 smells. Nobody talks about it. Nobody prepares you. And no brand has ever acknowledged it exists. Until now. Maison Laundrin was formulated for exactly this: a multi-enzyme system that targets the specific biological compounds standard detergent can\'t reach, combined with luxury fragrance by master perfumers that lasts 5-7 days in your fabric. You are not broken. Your biology changed. Your detergent should change with it. Discovery Set: $49. Four luxury scents. Free shipping. 60-Day Double-Scent Promise.',
        headline: 'You Are Not Alone. And You Are Not Broken.',
        description: 'Formulated for real biology. Luxury scent lasting 5-7 days. Discovery Set $49. Free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'Group of real women 45-55, diverse, laughing together. Warm, natural lighting. Community feel. NOT staged \u2014 authentic connection.'
      }
    ],
    metaTargeting: {
      interests: [
        'Menopause support', 'Women\'s health', 'Wellness', 'Self-care',
        'Home products', 'Clean ingredients', 'Essential oils', 'Yoga',
        'Spa products', 'Book clubs', 'Wine', 'Aromatherapy',
        'Sensitive skin products', 'Natural remedies'
      ],
      behaviors: [
        'Facebook primary platform (47% of this demographic)',
        'Google searcher \u2014 she searches, not scrolls',
        'Shops late at night during insomnia',
        'Member of private menopause Facebook groups (10K+ members)',
        'Reads Amazon reviews looking for women who sound like her',
        'Gift giver \u2014 will buy for 3-5 friends within a week if she loves it',
        'Influenced by women who look and sound like her, NOT influencers (only 5%)'
      ],
      demographics: 'Women 45-55, Gen X, household income $75K+, homeowner, likely married. Gen X women spend $75,879/year on average. They control 95% of household purchasing decisions.',
      stacks: [
        { name: 'Wellness Seekers', interests: ['Menopause support', 'Women\'s health', 'Wellness', 'Yoga', 'Spa products', 'Clean ingredients', 'Natural remedies'] },
        { name: 'Home & Self-Care', interests: ['Home products', 'Self-care', 'Luxury home goods', 'Book clubs', 'Wine', 'Aromatherapy', 'Essential oils'] },
        { name: 'Skincare & Sensitivity', interests: ['Sensitive skin products', 'Dermatologist-tested', 'Plant-based products', 'Clean beauty'] }
      ]
    },
    recommendedScent: 'Luxe Blanc \u2014 "The Sanctuary" (Cotton Flower, Iris, White Musk, Powdered Linen). The hotel-at-home aspiration speaks directly to her sanctuary psychology. The scent profile is sophisticated but not overpowering \u2014 critical for her heightened olfactory sensitivity.',
    competitorAngle: 'The ONLY product delivering across all four dimensions simultaneously: (1) Enzyme-based cleaning that targets biological odor compounds from hormonal sweat and biofilm, (2) Luxury fragrance lasting 5-7 days by master perfumers, (3) Plant-based, no-SLS, dermatologist-tested formula safe for hormonally-sensitized skin, (4) Aspirational positioning that makes her feel elevated, not ashamed. Competitors fail: Tyler doesn\'t clean, OdorKlenz is fragrance-free, The Laundress had bacterial recall, Laundry Sauce markets to young men, Mrs. Meyer\'s isn\'t scientifically effective against biological odors.'
  },
  {
    id: 5,
    name: 'The Empty Nester',
    ageRange: '50-70',
    tier: 1,
    emoji: '\u{1F3E1}',
    tagline: 'She spent 20-30 years making laundry a thankless act of service for her family. Now, with smaller loads and nicer fabrics, she is ripe for a product that transforms this decades-old chore into a sensory ritual of self-care.',
    painIntensity: 4,
    coreWound: 'After decades of selfless domestic labor \u2014 10-15 loads per week, never a thank you \u2014 she faces a profound identity vacuum when her children leave. She carries deep conditioning against spending on herself even though she now controls $19 trillion in net worth. 65% consistently put everyone else first. Nearly half feel guilty when they take time for themselves. She needs PERMISSION, not aspiration.',
    demographics: {
      income: 'Women 50+ control $19 trillion in net worth and 76% of the nation\'s financial wealth. They control 70% of all U.S. disposable income. Once college bills are paid, women 50+ spend 2.5x what the average person spends.',
      lifeStage: 'Children have left home. Active home renovation phase (70%+ modify their home). Strongest financial position of her life. Load volume drops from 10-15 to 3-5 loads/week.',
      location: '33.8% of Americans are empty nesters \u2014 massive market. Suburban homeowner.',
      generation: 'Baby Boomers and older Gen X. 82% are open to new brands. 75% will pay more for quality. 83% brand-loyal once converted.'
    },
    painPoints: [
      {
        title: 'The Identity Vacuum: "Who Am I Now?"',
        detail: 'For women who made "mom" their primary identity for 20-30 years, the departure of children triggers a profound identity crisis that takes approximately two years from crisis to self-regaining. Low self-worth is more common because her worth was tied up with what she could do for her children.',
        quotes: [
          { text: 'The departure of the children was a bittersweet experience. I felt relaxed, but I didn\'t want to be alone.', source: 'Empty nester parent' },
          { text: 'Who am I now that I\'m not just a mom?', source: 'Nearly universal question' }
        ]
      },
      {
        title: 'The Guilt About Self-Investment',
        detail: '65% consistently put everyone else\'s needs first. Nearly half feel guilty when they take time for themselves. The internal dialogue: "Not now. Later. Once everything\'s done." She questions: "Who do you think you are to rest when there\'s still so much to do?" She needs external validation that spending on herself is justified.',
        quotes: [
          { text: 'Not now. Later. Once everything\'s done.', source: 'Common internal voice' },
          { text: 'Who do you think you are to rest when there\'s still so much to do?', source: 'Research on self-care guilt' },
          { text: 'I am so mad that I love it so much.', source: 'Frugal luxury detergent reviewer' }
        ]
      },
      {
        title: 'Feeling Invisible and Overlooked',
        detail: '80% feel underserved and misunderstood by advertisers. 70% believe they become invisible starting around age 52. Yet she controls more wealth and spending power than any other demographic segment.',
        quotes: [
          { text: 'The invisible woman syndrome is a real phenomenon \u2014 one that countless older women encounter as they notice the world\'s attention shifting away from them.', source: 'Women\'s aging research' },
          { text: 'Visibility has everything to do with your mindset, style, and surroundings and absolutely nothing to do with your age.', source: 'Women over 50 research' }
        ]
      },
      {
        title: 'Decades of Thankless Laundry Labor',
        detail: 'For 20-30 years, laundry was one of the most relentless, invisible, underappreciated tasks in her life. Mountains of kids\' clothes, sports uniforms, grass-stained jeans. Bulk detergent from Costco. No thought to scent or sensory experience \u2014 pure function. Now loads drop to 3-5/week and she washes nicer fabrics. For the first time in decades, she can choose based on what SHE wants.',
        quotes: [
          { text: 'I almost look forward to doing laundry now.', source: 'Dirty Labs reviewer' },
          { text: 'It felt like an act of self-care; like the missing piece to creating a sanctuary at home.', source: 'The Laundress Beauty Sleep reviewer' },
          { text: 'This has changed my attitude toward laundry... it brings me joy.', source: 'Buff City Soap reviewer' }
        ]
      },
      {
        title: 'The Hotel-at-Home Gap',
        detail: 'She returns from luxury hotel stays and her own bed smells flat by contrast. She tries candles, linen sprays, pillow mists \u2014 nothing lasts more than 20 minutes. The "hotel at home" aspiration is a dominant theme: spa-like bathrooms, resort-style bedrooms, premium bedding. She has the money for all of it but has never found the missing piece \u2014 the scent.',
        quotes: [
          { text: 'I feel like we are at a luxury hotel.', source: 'Tyler Glamorous Wash reviewer' },
          { text: 'What is that amazing smell? OMG, did I leave a candle burning?!', source: 'Reviewer, two days after washing sheets' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'Losing relevance and becoming invisible \u2014 70% say it happens around age 52',
        'Wasting money on products that don\'t deliver \u2014 she can detect inauthenticity instantly',
        'Being seen as frivolous or indulgent for spending on herself',
        'Her home not reflecting who she is becoming',
        '40% higher divorce risk after children leave \u2014 the marriage is navigating new territory'
      ],
      desires: [
        'To redefine her identity on her own terms \u2014 "Who am I now?" as invitation, not crisis',
        'A home that reflects who she is NOW, not who she had to be',
        'Permission to invest in quality for herself \u2014 the math, the identity, the peer validation',
        'The "hotel at home" experience \u2014 the dominant aspiration',
        'Small daily pleasures that provide disproportionate joy \u2014 the dopamine of luxury'
      ],
      secretWants: [
        'To be the woman whose home smells incredible \u2014 the friend everyone asks about',
        'To reclaim sensuality and attractiveness \u2014 she hasn\'t lost it, it\'s transforming',
        'To feel the dopamine hit of luxury without the automatic guilt response',
        'To know that someone designed something WITH HER in mind \u2014 not as an afterthought'
      ]
    },
    failedSolutions: [
      'Decades of Tide/Gain/bulk cheap detergent \u2014 pure function, no pleasure',
      'Mrs. Meyer\'s or Caldrea as "accessible premium" \u2014 good but not luxury-grade',
      'Tyler Glamorous Wash \u2014 cult scent following but does NOT clean well (major opportunity)',
      'The Laundress \u2014 trust destroyed by 2022 bacterial contamination recall',
      'Candles and diffusers \u2014 $48+ each, only work while lit, one room at a time',
      'Fabric softener and scent boosters \u2014 synthetic, one-dimensional, "grocery store" scent',
      'Linen sprays and pillow mists \u2014 last minutes, not days'
    ],
    triggerMoments: [
      'The "last load" \u2014 doing her child\'s laundry for the last time before they leave for college',
      'Returning from a luxury hotel and wanting that sheet smell at home',
      'A friend or daughter giving her a premium product as a gift \u2014 removing the guilt of buying it herself',
      'The home renovation moment \u2014 over 70% modify their home after children leave',
      'The first time she buys something nice "just for herself" \u2014 the candle moment',
      'Hearing a recommendation at book club: "You HAVE to try this"',
      'A Facebook group post from a peer: "Okay ladies, I finally found something that works"'
    ],
    languagePatterns: [
      'Worth every penny',
      'Not cheap, but so worth it',
      'I\'ll never go back to [regular brand]',
      'This is the one thing I splurge on',
      'A little goes a long way',
      'The scent lingers for days',
      'Smells divine \u2014 like a luxury hotel',
      'Makes the whole house smell amazing',
      'It\'s my little luxury',
      'This brings me joy',
      'My sanctuary \u2014 I finally have the home I always wanted',
      'This is MY time \u2014 I\'ve earned this',
      'You HAVE to try this \u2014 I have shared this amazing secret with my friends'
    ],
    beliefs: {
      current: [
        'I should feel guilty about spending on myself \u2014 other people\'s comfort matters more',
        '$39 for detergent is extravagant \u2014 I\'ve been buying whatever is on sale for 30 years',
        'Laundry is a chore to endure, not enjoy',
        'Luxury detergent is probably just a markup for the same ingredients'
      ],
      target: [
        'I\'m spending LESS per month because there are fewer loads \u2014 even at $39/bottle',
        'Self-care isn\'t selfish \u2014 it\'s a form of self-respect',
        'My home tells the story of who I am now \u2014 every product is a statement',
        'I spent 25 years buying the cheapest detergent for a family of five. This chapter is mine.',
        'Worth every penny \u2014 I can actually tell the difference'
      ]
    },
    scienceInsights: [
      'Luxury purchases trigger dopamine release, heightened activity in pleasure/reward brain areas \u2014 outsized emotional return',
      'Olfactory memories last longer than visual ones \u2014 scent is the most powerful anchor for emotional experience',
      'Laundry as meditation: 20 minutes of focused housework can lower anxiety and stress levels by up to 20%',
      '82% of women 50+ are open to new brands and 75% will pay more for quality',
      'The empty nest transition takes approximately two years from crisis to self-regaining \u2014 she is actively rebuilding identity',
      'Smell bypasses the thalamus and routes directly to the limbic system (emotion and memory centers)'
    ],
    messagingFramework: {
      dos: [
        'Lead with PERMISSION: "You\'ve earned this" \u2014 she needs external validation',
        'Use the math: fewer loads = less cost even at premium ("I used to do 12 loads/week for five. Now I do 4 for two.")',
        'Feature real women her age \u2014 she is 200% more likely to buy when she sees her age reflected',
        'Show the transformation: "From chore to ritual. From duty to delight."',
        'Include the "hotel at home" aspiration \u2014 the most powerful emotional driver',
        'Position the Discovery Set as a gift product \u2014 leverages the gift-to-buyer pipeline',
        'Use the "secret sharing" recommendation pattern \u2014 experiential, enthusiastic, personal',
        'Lead with how it FEELS, not what it IS'
      ],
      donts: [
        'Generic "self-care" buzzwords without substance \u2014 she sees through them',
        'Young models that make her feel excluded',
        'Patronizing tone or sympathy \u2014 she can "sniff a fake a mile off"',
        'Influencer-style content she doesn\'t trust',
        'Fake urgency \u2014 she\'s ad-resistant'
      ],
      toneNotes: 'Warm, authentic, peer-to-peer. She can "sniff a fake a mile off" and is "suspicious about brands trying to monetise midlife challenges." The "secret sharing" and "evangelical convert" patterns are the ideal tones. She leads with how it FEELS, not what it IS.',
      neverSay: [
        'Anti-aging',
        'For mature women',
        'Treat yourself in an overly salesy way',
        'Elderly or old',
        'Your home needs fixing',
        'Mom hacks'
      ]
    },
    adCreative: [
      {
        angle: 'The Last Load',
        hook: 'The last load of laundry I did for my son before he left for college \u2014 I folded his favorite hoodie and just held it.',
        primaryText: 'The last load of laundry I did for my son before he left for college \u2014 I folded his favorite hoodie and just held it for a minute.\n\nFor 25 years, laundry was the chore that never ended. Soccer uniforms. Grass-stained jeans. Twelve loads a week. Nobody ever once said thank you.\n\nThen the house got quiet. And one morning I realized I was only washing my things. My nice sheets. My favorite blouse. My cozy robe.\n\nI thought \u2014 maybe this does not have to feel like a chore anymore. Maybe it could feel like something I actually enjoy.\n\nA friend told me about a luxury laundry detergent made by master perfumers. I thought she was exaggerating. She was not. The first load I washed \u2014 my white cotton sheets \u2014 I pulled them out of the dryer and just stood there breathing them in. Cotton flower. Iris. White musk. Like sliding into bed at a five-star hotel.\n\nThat was eight weeks ago. I have not touched my old detergent since.\n\nThe Discovery Set is $49. Four scents. Free shipping. 60-Day Double-Scent Promise \u2014 love it or it is free.\n\nTwenty-five years of laundry for everyone else. This chapter is mine.',
        headline: 'It Is Finally Your Turn.',
        description: 'Luxury detergent by master perfumers. 4 scents, $49. Scent lasts 5-7 days. Free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Empty Nester)',
        creativeDirection: 'Woman 55-65 in a sunlit laundry room, pulling white sheets from the dryer and holding them close with eyes closed \u2014 a quiet, private moment of pleasure. Warm golden-hour lighting. NO family photos or children visible \u2014 this is HER moment.'
      },
      {
        angle: 'The Hotel That Is Already Your Home',
        hook: 'You know that feeling when you slide into hotel sheets and just... exhale?',
        primaryText: 'You know that feeling when you slide into hotel sheets and just... exhale?\n\nThe crispness. The weight. That scent \u2014 clean and luxurious and impossible to place.\n\nI came home from a weekend in Charleston and could not stop thinking about it. I tried candles. Linen sprays. Pillow mists. Nothing lasted more than twenty minutes.\n\nThen my neighbor Susan told me the secret was never the candle. It was the detergent.\n\nShe handed me a bottle of something called Luxe Blanc. Cotton flower, iris, white musk, powdered linen \u2014 created by actual master perfumers. I washed my sheets that Sunday night.\n\nMonday morning, I woke up and thought I was still at the hotel.\n\nTuesday \u2014 still there. Thursday \u2014 still there. A full week later, I buried my face in the pillow and the scent was still beautiful.\n\nIt uses micro-encapsulated fragrance that bonds into the fiber itself. Movement releases it. Your body heat activates it. It does not fade after an hour like everything else.\n\nI cancelled my $40 candle subscription last month. My entire home smells better than it ever did \u2014 for less than $10 a month.',
        headline: 'Your Bed. Five-Star Hotel Scent.',
        description: 'Micro-encapsulated fragrance lasts 5-7 days in fabric. 60-day guarantee. Free shipping.',
        cta: 'Shop Now',
        destination: 'Landing Page or Discovery Set PDP',
        creativeDirection: 'Luxurious bedroom \u2014 white linens, boutique hotel aesthetic but clearly a beautiful private home. Woman 55-65 pulling back crisp white sheets with serene expression. Luxe Blanc bottle on nightstand. Warm sanctuary mood.'
      },
      {
        angle: 'The Quiet Revolution',
        hook: 'Nobody told me the empty nest would be beautiful. Not right away. But eventually.',
        primaryText: 'Nobody told me the empty nest would be beautiful. Not right away. But eventually.\n\nFirst came the quiet. Then came the question I had not asked in 25 years: what do I actually want?\n\nI started small. New kitchen. Spa bathroom with heated floors and a rainfall shower. Then the Egyptian cotton sheets I always wanted but could never justify when the kids were home. The cashmere throw. The white duvet cover that would have lasted exactly 48 hours with children in the house.\n\nRoom by room, I was building a home that reflected who I was becoming \u2014 not who I had to be.\n\nAnd then one afternoon, standing in my beautiful new laundry room, I looked at the detergent on the shelf. The same $8 bottle I had been buying since 1998.\n\nI had upgraded everything in my home except the one product that touches every single fabric in it.\n\nThat was the day I found Maison Laundrin. A luxury detergent crafted by master perfumers. It strips old buildup, shields the fiber, and deposits micro-encapsulated fragrance that lasts five to seven days.\n\nMy sheets. My towels. My cashmere. My robes. Everything smells like the home I always wanted.\n\nDiscovery Set: $49. Four scents. Free shipping. 60-Day Promise.\n\nThe home you are building deserves this.',
        headline: 'The Upgrade You Forgot to Make.',
        description: 'One luxury detergent transforms every fabric in your home. $0.61/load. Try all 4 scents.',
        cta: 'Learn More',
        destination: 'Advertorial (Empty Nester)',
        creativeDirection: 'Elegant, light-filled home interior showing a beautifully renovated room with folded premium linens. Woman 55-65 touching linens with quiet satisfaction. Clean, bright, Southern Living aesthetic.'
      },
      {
        angle: 'The Book Club Interrogation',
        hook: 'I walk into book club wearing my favorite cardigan \u2014 the one I washed three days ago.',
        primaryText: 'So I walk into book club on Tuesday wearing my favorite cardigan. The one I washed three days ago.\n\nSusan \u2014 Susan, who never comments on anything \u2014 leans over and whispers, "Okay, what is that? You smell incredible."\n\nBefore I can answer, Diane says, "I was going to ask the same thing."\n\nThen Linda: "Are you wearing new perfume?"\n\nThree women. Same question. And I was not wearing a single drop of perfume.\n\nI told them it was my laundry detergent. They did not believe me. I pulled out my phone and showed them the bottle. By the next morning, I had four texts asking for the exact name and where to order it.\n\nMaison Laundrin is made by actual perfumers \u2014 the same people who create $200 fragrances. The scent micro-encapsulates into the fiber and releases with your body heat and movement. Three days after washing, my cardigan still smelled like I had just spritzed on something beautiful.\n\nDiscovery Set: $49. Four luxury scents. Free shipping. 60-Day Double-Scent Promise \u2014 if nobody compliments how you smell, it is free.',
        headline: '"What Perfume Are You Wearing?"',
        description: 'Luxury fragrance that lasts 5-7 days in fabric. Created by master perfumers. Try all 4 scents.',
        cta: 'Learn More',
        destination: 'Advertorial (Empty Nester)',
        creativeDirection: 'Social gathering scene \u2014 3-4 women 55-70 at book club. One leaning in with curious, delighted expression. Warm, natural lighting. Real laughter and connection. Authentic, NOT staged.'
      },
      {
        angle: '25 Years of Tide \u2014 The Permission Math',
        hook: 'You bought new sheets. The Egyptian cotton ones. But you\'re washing them in the same detergent since 1999.',
        primaryText: 'Let me ask you something.\n\nYou bought new sheets. The Egyptian cotton ones you always wanted but could not justify when the kids were home. You bought the spa towels. The cashmere throw. You are building the home you always deserved.\n\nBut you are washing all of it in the same detergent you have been buying since 1999.\n\nI know. Because I did the same thing for 25 years. I bought whatever was on sale. Not because I could not afford better \u2014 because it never occurred to me that laundry detergent could be better.\n\nThen my daughter gave me a bottle of Maison Laundrin for my birthday. I thought she was crazy. $39 for detergent?\n\nI washed my sheets that night. The next morning I texted her: "What did you do to me? I cannot stop smelling my pillow."\n\nHere is the math that made me stop feeling guilty: I used to do 12 loads a week for a family of five. Now I do 4 loads a week for two. At $0.61 per load, I spend about $10 a month on laundry. That is LESS than the family-size Tide I was buying before.\n\nPremium detergent. Less money. Beautiful scent that lasts all week.\n\n$49 Discovery Set. Four scents by master perfumers. Free shipping. 60-Day Promise.\n\nYou have earned something this beautiful.',
        headline: 'Finish the Upgrade. Start Here.',
        description: '$0.61/load \u2014 less than your old Tide routine. 4 luxury scents. Free shipping. 60-day guarantee.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Clean editorial split concept \u2014 generic detergent on one side, elegant ML bottle beside folded white linens on the other. Could include on-screen math: "$8 Tide x 15 loads/week = $15/month. $39 ML x 4 loads/week = $10/month."'
      }
    ],
    metaTargeting: {
      interests: [
        'Home decor', 'Luxury bedding', 'Spa products', 'Travel',
        'Gardening', 'Cooking', 'Book clubs', 'Volunteering',
        'Yoga', 'Pilates', 'Southern Living', 'Real Simple',
        'Better Homes & Gardens', 'AARP', 'Pinterest',
        'Williams-Sonoma', 'Pottery Barn', 'HomeGoods'
      ],
      behaviors: [
        'Facebook groups (Women Over 50 ROCK, Forever Fierce, My Side of 50)',
        'Online shopping (80%+ have shifted to online purchasing)',
        'Reads reviews carefully and thoroughly \u2014 80% more likely to buy with high star ratings',
        'Word-of-mouth evangelist \u2014 47% influenced by friends and family',
        'Gift-giver \u2014 the gift-to-buyer pipeline is critical',
        'Pinterest for aspirational home imagery',
        '71% more influenced by trusted companies'
      ],
      demographics: 'Women 50-70, homeowner, children have left home. Control 70% of U.S. disposable income. 82% open to new brands. Household income at or past peak. Annual Baby Boomer spending exceeds $3.2 trillion.',
      stacks: [
        { name: 'Home & Lifestyle', interests: ['Home decor', 'Luxury bedding', 'Spa products', 'Southern Living', 'Real Simple', 'Better Homes & Gardens', 'Pinterest', 'Williams-Sonoma', 'Pottery Barn'] },
        { name: 'Active & Social', interests: ['Travel', 'Gardening', 'Cooking', 'Book clubs', 'Volunteering', 'Yoga', 'Pilates', 'AARP'] },
        { name: 'Premium Home Fragrance', interests: ['Yankee Candle', 'Bath & Body Works', 'Diptyque', 'Luxury candles', 'Home fragrance', 'Aromatherapy'] }
      ]
    },
    recommendedScent: 'Luxe Blanc \u2014 "The Sanctuary" (Cotton Flower, Iris, White Musk, Powdered Linen). The "hotel sheets" scent profile matches her #1 aspiration. "Sanctuary" naming speaks directly to her home-as-retreat psychology. Should be the lead scent for all empty nester marketing.',
    competitorAngle: 'Tyler Glamorous Wash is her most likely current "upgrade" but does NOT clean well \u2014 major opportunity. The Laundress trust destroyed by bacterial recall. Mrs. Meyer\'s/Caldrea are accessible premium ($8-15) but not true luxury. No competitor combines actual cleaning power + luxury scent lasting 5-7 days + clean ingredients + French luxury positioning. She is currently cobbling together candles ($48) + dryer sheets + fabric softener + linen spray = $60-80/month in scattered products getting an inferior result.'
  },
  {
    id: 6,
    name: 'The Woman at the Crossroads',
    ageRange: '45-54',
    tier: 1,
    emoji: '\u{1F504}',
    tagline: 'GATEWAY SEGMENT \u2014 Convert her now and she becomes a loyal buyer for the next 20 years. She sits between younger avatars who browse and 55-65+ women who are top buyers. She is the bridge. $989 spend, 29 purchases across Meta Ads account.',
    painIntensity: 4,
    coreWound: 'Total exhaustion from being pulled in every direction \u2014 career at its peak, teenagers or young adults still needing her, aging parents requiring 20 hours/week of unpaid care, a marriage under strain, and a body entering perimenopause that nobody explained. She carries a widening gap between who she IS inside (vibrant, capable, desirable) and how her body and the world are starting to reflect back. She has been working since age 13-14 and has been grinding for 30+ years without a real break. She feels guilty for even asking "is this all there is?" because she has so much to be grateful for.',
    demographics: {
      income: 'Median HHI $116,800/year (peak earning years). Annual household expenditure $60,524 (highest of any age bracket \u2014 BLS data). 62% decides how household budget is spent.',
      lifeStage: 'Sandwich generation \u2014 aging parents AND teenagers simultaneously. Peak career but questioning purpose. Body in perimenopause. Average family caregiver matching her profile: 49-year-old woman providing 20 hrs/week unpaid care while working full-time.',
      location: 'National U.S.',
      generation: 'Gen X (born 1972-1981). Global spending power $15.2 trillion in 2025, projected $23 trillion by 2035. Only 4% of ad industry research includes Gen X. When Gen X sees their generation represented in ads, it DOUBLES brand preference.'
    },
    painPoints: [
      {
        title: 'Sandwich Generation Burnout',
        detail: 'She is the textbook sandwich generation: caring for aging parents AND teenagers simultaneously. 61% report feeling burned out. Over 60% feel "unseen" or "undervalued." Female caregivers spend 50% more time providing care than male counterparts. She has been working since 13-14 and by 48, has been grinding for 30+ years without a real break.',
        quotes: [
          { text: 'I have three capable kids and a competent husband and yet they still expect me to do everything. What do you do when no one appreciates what you do for them?', source: 'Reddit, AskWomenOver40' },
          { text: 'A lot of women started working at 13, 14. Once we got to middle age, we\'ve been working for like 30 years, tirelessly.', source: 'Ada Calhoun, "Why We Can\'t Sleep"' },
          { text: 'They feel guilty for complaining, because it\'s wonderful to have had choices that our mothers didn\'t have. But choices don\'t make life easier. Possibilities create pressure.', source: 'Ada Calhoun' }
        ]
      },
      {
        title: 'The "Is This All There Is?" Crisis',
        detail: 'At the highest point of her career but questioning everything. She may be in senior management, making decisions that affect hundreds of people. But the roles that once defined her \u2014 mother, wife, career woman \u2014 are shifting. She has felt the twinges of "is this it?" which gives moments of guilt because she has so much to feel grateful for.',
        quotes: [
          { text: 'Being middle-aged in America right now as a middle-class American woman is different than it was for our mothers and grandmothers, and for a lot of women, it is incredibly hard.', source: 'Ada Calhoun, NPR interview' },
          { text: 'What about my dreams? What about my career?', source: 'Common Gen X midlife question' }
        ]
      },
      {
        title: 'Body Changes She Can\'t Explain',
        detail: 'Late perimenopause begins at 45-50 and can last 4-10 years. Critical insight: she may NOT know that\'s what\'s happening. Mental health symptoms (anxiety, depression) peak at 41-45 BEFORE physical symptoms. She thinks she\'s just stressed. Her scent is changing, her skin is more sensitive, her sleep is destroyed, her perfume wears differently. She has NOT yet connected this to hormones.',
        quotes: [
          { text: 'We are not born old. We worked to get there. And it is such a surprise when you realize that your new body has been absorbed by a different one. Freckles aren\'t where they used to be, and parts that were visible are now obstructed. It\'s a jarring moment full of terror, anger and wonder.', source: 'Laurie Notaro, "Excuse Me While I Disappear"' },
          { text: 'People often perceive an oniony type of smell in menopause.', source: 'Alexandra Golden, M.D., hormone specialist' }
        ]
      },
      {
        title: 'The Guilt Economy',
        detail: 'She feels guilty about everything: wanting rest when others need her, spending money on herself when kids need tuition, complaining when she has "so much to be grateful for," wanting anything just for herself. Generic self-care advice "quietly assumes time, money, backup, and spare energy." When you have twenty free minutes a week, being told to light a candle lands less like care and more like dismissal.',
        quotes: [
          { text: 'Lord a mercy if middle-age hasn\'t turned me into a crybaby.', source: 'Gen X woman, Upworthy' },
          { text: 'I\'d love to pivot to real estate appraisals... but it\'s a two-year apprenticeship where you earn $0. I can\'t afford that.', source: 'Reddit, WomenOver40' },
          { text: 'I hate having to say no more than once... but the first no gets ignored.', source: 'Reddit, WomenOver40' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'That this is all there is \u2014 the "is this it?" existential questioning',
        'That she\'s aging in ways she can\'t control \u2014 the gap between inner vitality and outer reflection',
        'That she doesn\'t have permission to want anything for herself \u2014 the guilt economy',
        'Financial anxiety \u2014 Gen X carries more debt than any generation ($37K above national average). Over 60% unprepared for retirement.',
        'Beginning of invisibility \u2014 70% of women feel invisible by 51, only 15% report high confidence in ANY area'
      ],
      desires: [
        'One small daily thing that elevates HER experience without extra effort, extra time, or extra guilt',
        'Her home to feel as put-together as she presents herself to the world',
        'Products that respect her intelligence \u2014 Gen X has a finely tuned bullshit detector',
        'A friend\'s honest recommendation \u2014 the single most powerful conversion driver',
        'Agency \u2014 the ability to control at least one sensory experience when everything else feels chaotic'
      ],
      secretWants: [
        'The 11 PM reward \u2014 collapsing into sheets that smell incredible at the end of an impossible day',
        'Permission to buy ONE nice thing without justifying it to anyone including herself',
        'A moment of genuine peace in a life that has none',
        'To feel like herself \u2014 vital, capable, attractive \u2014 despite the body that\'s starting to disagree'
      ]
    },
    failedSolutions: [
      'The same $12 jug of Tide she\'s bought since her twenties \u2014 she literally never thought about it',
      'Fabric softener, Downy Unstopables, dryer sheets to compensate \u2014 $51+/month patchwork',
      'Mrs. Meyer\'s or Method as "accessible premium" ($8-15) \u2014 she may have upgraded to this tier',
      'Switched deodorants without connecting it to hormones',
      'Bath & Body Works candle lit while folding \u2014 $14 for one room for one evening'
    ],
    triggerMoments: [
      'A problem she can\'t solve with her current product \u2014 sheets smell different, skin reacts, scent intolerable',
      'A friend\'s text to the group chat: "You have to try this. I know it\'s expensive but it actually works."',
      'The "one good thing" moment \u2014 brutal week, exhausted, needs ONE thing that makes her feel like her life isn\'t just service',
      'The sensory experience \u2014 she smells it, feels the difference, verifies empirically over 5 days',
      'The label-reading moment \u2014 she\'s already scrutinizing skincare, supplements, her kids\' food',
      'The bedtime collapse at 11 PM \u2014 the first genuine moment of peace all day'
    ],
    languagePatterns: [
      'Ok so I bought this ridiculous $40 laundry detergent and I am NOT KIDDING my sheets still smell amazing four days later. I know. I KNOW. But seriously.',
      'I use it every day, so the cost per use is actually low',
      'My friend recommended it and she doesn\'t waste money on crap',
      'It actually works better, so I\'m not wasting money, I\'m being smarter',
      'It\'s replacing something I was already buying, just upgrading',
      'They were playing The Cure in the grocery store and I almost started crying',
      'My husband noticed. MY HUSBAND.',
      'I don\'t do product recommendations. But this one...',
      'The first step to peace in middle age has been learning the game is rigged'
    ],
    beliefs: {
      current: [
        'I should be grateful for what I have \u2014 I can\'t complain',
        '$39 for detergent is crazy (but she\'s Googling it after her friend texted)',
        'Laundry is a chore I get through as fast as possible \u2014 still in utility mode',
        'I can\'t justify spending on myself when kids need tuition and parents need care',
        '"You deserve this" feels like a marketing ploy \u2014 her bullshit detector fires'
      ],
      target: [
        'This isn\'t indulgent, it\'s smart \u2014 the cost per use is $0.61, less than my oat milk latte',
        'I changed one thing and it made everything feel a little more like mine',
        'I replaced five products with one \u2014 I\'m spending LESS',
        'My husband noticed the scent. THE MAN WHO DIDN\'T NOTICE MY HAIRCUT.',
        'Worth it \u2014 not because someone told me I deserve it, but because I tested it and it passed'
      ]
    },
    scienceInsights: [
      'Late perimenopause begins at 45-50, can last 4-10 years \u2014 she may not know that\'s what\'s happening',
      'Mental health symptoms (anxiety, depression, irritability) peak at 41-45, BEFORE physical symptoms \u2014 she thinks she\'s just stressed',
      'Declining estrogen leaves higher relative testosterone, attracting more bacteria to sweat \u2014 her scent is changing',
      '2-nonenal appears after age 40 and is NOT water-soluble \u2014 clings to clothes, sheets, towels even after washing',
      'Hormonal fluctuations alter skin oil production, pH, and microbiome \u2014 beloved perfume suddenly smells "off"',
      'Around 50, skin pH changes \u2014 products used for 20 years suddenly irritate',
      'Gen X is the fastest-growing generation on TikTok (2% in 2019 to 26% by 2025)'
    ],
    messagingFramework: {
      dos: [
        'Lead with SENSORY UPGRADE: "You notice the difference immediately" \u2014 safest, most universal entry point',
        'The "one small thing that gives back" angle \u2014 reframe the chore she already does, no additional effort',
        'Mirror her discovery pattern: friend recommendation / group text format',
        'Engage the rational problem-solver: enzyme explanation, cost per load math ($0.61 vs. $0.90/hr candle)',
        'Position as the 11 PM reward \u2014 the only genuine moment of peace in her day',
        'Use self-aware humor about the price \u2014 "I know. I KNOW. But seriously."',
        'Respect her intelligence \u2014 Gen X wants to understand HOW it works, not just that it works',
        '"Worth it" is the magic phrase \u2014 implies she evaluated rationally and it passed her test'
      ],
      donts: [
        '"You deserve this" \u2014 triggers guilt more than action for this avatar',
        '"Treat yourself, queen" \u2014 instant eye-roll',
        'Nonenal / "aging odor" messaging \u2014 will ACTIVELY REPEL her. She does NOT yet identify as aging.',
        '"Luxury lifestyle" aspirational imagery \u2014 reminds her of what she doesn\'t have time for',
        '"For mature women" or "anti-aging" \u2014 she is NOT there yet',
        'Fake urgency (LAST CHANCE!) \u2014 her bullshit detector fires immediately',
        'Too many emojis \u2014 she\'s not 25',
        '"Self-care Sunday" \u2014 feels performative when you have twenty free minutes a week'
      ],
      toneNotes: 'Self-aware. Slightly sarcastic in a Gen X way. Results-first. Not emotional manipulation. She wants to feel like she made a SMART choice, not an indulgent one. Her bullshit detector has never once failed her. "Worth it" over "you deserve it." She does NOT recommend things she hasn\'t tried herself \u2014 her recommendation carries massive weight precisely because she\'s so selective.',
      neverSay: [
        'Anti-aging',
        'You deserve this',
        'For mature women',
        'Self-care Sunday',
        'LAST CHANCE!',
        'Menopause (she hasn\'t named it yet)',
        'Clean girl aesthetic',
        'Literally dying / obsessed (unless with self-aware irony)'
      ]
    },
    adCreative: [
      {
        angle: 'The One You Missed',
        hook: 'You upgraded everything except this.',
        primaryText: 'In the last three years I switched my moisturizer to something with actual retinol. I replaced my sheets with Brooklinen. I stopped buying Yankee Candles and started buying Diptyque. I traded up my wine, my coffee, my supplements. I even read the back of my shampoo bottle now.\n\nBut I was still washing all of it \u2014 the $180 sheets, the cashmere sweater, my favorite linen blouse \u2014 in the same $12 jug of Tide I\'ve been buying since my twenties.\n\nNot because I\'d decided it was good enough. Because I literally never thought about it.\n\nThen a friend texted our group chat: "I know this sounds ridiculous but I bought a $39 laundry detergent and I am NOT kidding \u2014 my sheets still smell amazing five days later."\n\nI looked it up. Enzyme-based formula. Micro-encapsulated fragrance made by actual perfumers. Not perfume sprayed on top of soap \u2014 fragrance that bonds into fabric at the fiber level and releases with friction over 5-7 days.\n\n$39 for 64 loads. That\'s $0.61 per load. My Diptyque candle costs $0.90 per hour of burn time.\n\nI ordered the Discovery Set. Four scents. $49. Free shipping. 60-Day Double-Scent Promise \u2014 love it or it\'s free.\n\nThat was eight weeks ago. I haven\'t bought a scent booster, a dryer sheet, or a linen spray since.',
        headline: 'You Upgraded Everything. Except This.',
        description: 'Enzyme-based luxury detergent. $0.61/load. Scent lasts 5-7 days. 60-day guarantee.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'Woman 48-50, natural look, well-designed but lived-in kitchen or laundry room. Elevated casual outfit (good jeans, quality sweater). She looks like someone you\'d trust a restaurant recommendation from. UGC-style or editorial static.'
      },
      {
        angle: 'The Group Text',
        hook: 'It started with a text from my college roommate: "Ok DON\'T judge me but I spent $39 on laundry detergent."',
        primaryText: 'It started with a text from my college roommate.\n\n"Ok DON\'T judge me but I spent $39 on laundry detergent."\n\nI judged her. Obviously.\n\nThen she said her husband \u2014 her husband who notices nothing \u2014 asked why the bed smelled so good. On day four. After one wash.\n\nI still judged her. But I was also Googling it.\n\nEnzyme-based. Made by perfumers. Not the synthetic scent-bomb stuff you smell in the detergent aisle. Actual fragrance architecture \u2014 micro-encapsulated, friction-activated, designed to release slowly over five to seven days.\n\nI did the math because that\'s who I am. 64 loads per bottle. $0.61 per load. I spend more than that on the oat milk in my coffee.\n\nSo I ordered the Discovery Set. Four scents, $49, free shipping. I figured if it was a gimmick, I\'d use the 60-Day guarantee and get my money back.\n\nThat was six weeks ago. I\'ve already texted three friends about it. I have become the person I judged.\n\nMy sheets smell like a five-star hotel on a Tuesday night. My gym clothes don\'t carry that ghost smell anymore. And last week at dinner, someone asked what perfume I was wearing.\n\nI was wearing a sweater I washed five days ago.',
        headline: 'The Detergent Your Friends Text About.',
        description: '4 luxury scents by master perfumers. Discovery Set $49, free shipping. Risk-free guarantee.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'Two formats to test: (A) Screenshot-style text conversation between two women \u2014 casual, funny, real. (B) UGC-style video: Woman 48-50 on her couch with wine, telling the story conversationally. Laughing at herself. 30-sec max.'
      },
      {
        angle: 'The 11 PM Reward',
        hook: '10:47 PM. The house is finally quiet.',
        primaryText: '10:47 PM. The house is finally quiet.\n\nThe presentation is done. The college application essay has been reviewed for the third time. Your mother\'s prescription has been called in. Your husband is already asleep.\n\nYou brush your teeth. You wash your face with the good cleanser \u2014 the one with the vitamin C serum you actually researched. You pull back the sheets.\n\nAnd for the first time all day, you stop.\n\nBecause they smell incredible. Not like "fresh laundry" \u2014 like a boutique hotel in a city you love. Five days after washing.\n\nThis is what happens when your detergent is made by the same kind of people who make your perfume. Micro-encapsulated fragrance that bonds into fabric and releases slowly \u2014 with movement, with warmth, with the weight of your body settling into bed.\n\nIt lasts 5-7 days. Not hours. Not "until you fold it." Days.\n\n$39 per bottle. 64 loads. The most cost-effective luxury in your house, and the one you\'ll notice every single night.\n\nDiscovery Set: $49. Four scents. Free shipping. 60-Day Double-Scent Promise.\n\nSome days, the best thing is how your sheets smell. And that\'s enough.',
        headline: '10:47 PM. You Finally Stop.',
        description: 'Micro-encapsulated fragrance lasts 5-7 days in fabric. $49 Discovery Set. Free shipping.',
        cta: 'Shop Now',
        destination: 'Landing Page or Discovery Set PDP',
        creativeDirection: 'Cinematic 15-sec video. Quiet, low-light. Woman 48-50 in modern bedroom, exhausted but at peace, pulling back white sheets. She inhales. The faintest, most genuine smile. Text overlay: "Some days, the best thing is how your sheets smell." Nancy Meyers film energy \u2014 aspirational but grounded.'
      },
      {
        angle: 'The Sheets Test',
        hook: 'I don\'t do product recommendations. But I want to propose something: a test.',
        primaryText: 'I don\'t do product recommendations. I\'ve been burned too many times by "life-changing" things that changed nothing.\n\nBut I want to propose something: a test.\n\nWash your sheets in Maison Laundrin. Just one load. Then wait four days. On day four, pull back the covers and tell me they don\'t still smell like the day you washed them.\n\nHere\'s why: standard detergent is water-based. The buildup in your fabric \u2014 body oils, skin chemistry, the stuff that makes your pillowcase smell flat by day two \u2014 is oil-based. Water and oil. You already know how that ends.\n\nMaison Laundrin uses a three-stage enzyme system. Strip: breaks down what your old detergent left behind. Shield: coats fibers so buildup can\'t reattach. Replace: micro-encapsulated fragrance bonds at the fiber level, friction-activated. It releases when you move. When you roll over. When your skin touches the fabric.\n\n5-7 days of scent. Not because someone sprayed perfume on your sheets. Because the fragrance is literally inside the fiber structure.\n\n$39. 64 loads. $0.61 per load. Plant-based surfactants. No phthalates. No phosphates. Dermatologist tested.\n\nDiscovery Set: $49. Four scents. Free shipping. 60-Day Double-Scent Promise.\n\nDon\'t believe me. Test it yourself.',
        headline: 'Try the Sheets Test. Day Four.',
        description: 'Enzyme-based. 5-7 day scent. 64 loads/$39. No phthalates. 60-day double-money-back guarantee.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'UGC-style video, 20-30 sec. Woman 48-50, relatable and direct \u2014 the kind who reads ingredient lists. Pulling sheets from dryer, burying face, genuine surprise. Or clean editorial static: "Day 4. Still."'
      },
      {
        angle: 'The Label Reader',
        hook: 'You read the label on your moisturizer. When was the last time you read the label on your detergent?',
        primaryText: 'You read the label on your moisturizer. Your supplements. Your kids\' food. Your sunscreen. Your coffee. Your dog\'s food, honestly.\n\nWhen was the last time you read the label on your laundry detergent?\n\nI\'ll save you the trip to the laundry room: most mainstream detergents use water-based surfactants that can\'t break down oil-based residue. The body oils, the skin chemistry changes, the invisible buildup that accumulates wash after wash \u2014 it stays. Your detergent washes around it. That\'s why your gym clothes still have a ghost smell. That\'s why your sheets go flat by day two.\n\nMaison Laundrin is what happens when someone actually engineers a detergent like it matters.\n\nFive specialized enzymes \u2014 targeting proteins, starches, oils, gums, and fiber pilling. Plant-based surfactants. No phthalates. No phosphates. No artificial dyes. No hormone disruptors. Dermatologist tested.\n\nAnd then: micro-encapsulated fragrance designed by master perfumers. Not synthetic scent poured over soap. Layered fragrance architecture \u2014 top notes, heart notes, base notes \u2014 that bonds at the fiber level and releases over 5-7 days through friction.\n\n$39 per bottle. 64 loads. The same price-per-use as the retinol you researched for three weeks.\n\nDiscovery Set: $49. Four scents. Free shipping. 60-Day Double-Scent Promise.\n\nYou read every label. Read this one.',
        headline: 'You Read Every Label. Read This One.',
        description: '5 enzymes. Plant-based. No phthalates. Perfumer-crafted fragrance lasts 5-7 days. $49 Discovery Set.',
        cta: 'Learn More',
        destination: 'Advertorial',
        creativeDirection: 'Clean editorial carousel (3-5 slides). Slide 1: woman\'s hand holding product, turning to read label. Slide 2: ingredient comparison ML vs. mainstream. Slide 3: 3-stage mechanism (Strip, Shield, Replace). Slide 4: four scent profiles. Slide 5: Discovery Set + offer. Glossier-meets-Aesop aesthetic.'
      }
    ],
    metaTargeting: {
      interests: [
        'Home decor', 'Wellness', 'Fitness (Yoga, Peloton, Barre)',
        'Skincare', 'Wine', 'Book clubs', 'Netflix',
        'Premium candles (Diptyque, Voluspa)', 'Clean ingredients',
        'Brooklinen', 'HomeGoods', 'Target', 'Pottery Barn',
        'Retinol', 'Supplements'
      ],
      behaviors: [
        'Instagram primary (78% of Gen Xers have a profile)',
        'Facebook secondary (40% use Facebook to find and buy products)',
        'TikTok fastest-growing \u2014 2% in 2019 to 26% by 2025',
        'Screenshots ads and texts links to friend group \u2014 the group text is her social discovery tool',
        'Needs to see a product 3-5 times before acting',
        'Googles brand name after seeing an ad \u2014 only 15% use social for search',
        'Fiercely loyal once convinced \u2014 almost 50% "extremely loyal" to favorite brands',
        'Does NOT recommend things she hasn\'t tried herself'
      ],
      demographics: 'Women 45-54, Gen X, HHI $100K-$120K+ (peak earning years), homeowner, married with teenagers or new empty nester, sandwich generation caregiver, senior career. She is 200% more likely to buy when she sees ads reflecting her age. Only 13% feel represented in social advertising.',
      stacks: [
        { name: 'Lifestyle & Wellness', interests: ['Yoga', 'Peloton', 'Skincare', 'Wine', 'Book clubs', 'Netflix', 'Premium candles', 'Clean ingredients', 'Retinol'] },
        { name: 'Home & Upgrade', interests: ['Home decor', 'Brooklinen', 'HomeGoods', 'Target', 'Pottery Barn', 'Williams-Sonoma', 'Diptyque'] },
        { name: 'Health-Conscious Consumer', interests: ['Supplements', 'Clean beauty', 'Plant-based products', 'Wellness', 'Fitness'] }
      ]
    },
    recommendedScent: 'Luxe Blanc for the "11 PM reward" bedtime messaging \u2014 sanctuary and hotel-at-home. Belle Vie as the scent her husband noticed on a hoodie and the one strangers ask about. She\'ll discover her preference empirically through the Discovery Set \u2014 that\'s how she buys.',
    competitorAngle: 'She is likely still on $12 detergent or at best the Mrs. Meyer\'s tier ($8-15). She has NOT been spoken to by a luxury detergent brand. 91% of menopausal women have NEVER seen specific marketing in ANY category. The market is NOT saturated for her. She\'s not rolling her eyes at "another premium detergent" \u2014 she has genuinely never been targeted. Her $51+/month patchwork (Tide + Downy + Unstopables + dryer sheets + candle) costs more than ML and delivers less. First-mover advantage is enormous.'
  }
];
