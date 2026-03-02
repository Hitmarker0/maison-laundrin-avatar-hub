// Chunk 3: Avatars 7-9
const CHUNK3 = [
  {
    id: 7,
    name: 'The Gift-Buyer Daughter',
    ageRange: '30-50',
    tier: 1,
    emoji: '\u{1F381}',
    tagline: 'She does not buy for herself \u2014 she is the INTRODUCER. The proven pipeline: daughter gives gift \u2192 mom falls in love \u2192 mom becomes repeat buyer AND word-of-mouth evangelist.',
    painIntensity: 3,
    coreWound: 'She watches her mother sacrifice for everyone else \u2014 buying store-brand everything, saving the nice towels for guests, rewearing her winter coat until the zipper breaks. Mom would never spend $39 on laundry detergent for herself. The daughter carries a low-grade, persistent guilt about not being present enough, and a $49 gift can carry the emotional weight of a visit she cannot make.',
    demographics: {
      income: '$65K-$150K household',
      lifeStage: 'Established career, possibly married with children, managing multiple life responsibilities. Part of the sandwich generation \u2014 simultaneously caring for aging parents and raising children.',
      location: 'Suburban or urban, often lives at some distance from her mother',
      generation: 'Millennial to Gen X \u2014 straddles the line between digital-native Millennial and practical Gen X'
    },
    painPoints: [
      {
        title: 'The Mom Who Has Everything Problem',
        detail: 'At 55-75+, her mother has accumulated decades of possessions. She does not need another sweater, another kitchen gadget, another piece of jewelry. 48% of Mother\'s Day shoppers say finding a unique or different gift is important.',
        quotes: [
          { text: 'What do you get for the woman who already has everything she needs?', source: 'Common gift-buyer frustration' },
          { text: 'She has the jewelry. She has the candles. She has the cashmere socks and the nice robe.', source: 'Gift-buyer research' }
        ]
      },
      {
        title: 'The Gift That Collects Dust',
        detail: 'Past gift failures haunt her \u2014 the scarf that stayed in the box, the cookbook that went on the shelf, the gadget mom couldn\'t figure out, the jewelry mom said was "too nice to wear." She needs a gift mom will INTEGRATE into daily life.',
        quotes: [
          { text: 'Not another candle she\'ll never light. Not another scarf she\'ll never wear.', source: 'Gift-buyer messaging research' },
          { text: 'I\'ve given up on finding something she\'ll actually use.', source: 'Facebook gift group' }
        ]
      },
      {
        title: 'The Guilt of Distance',
        detail: 'If she lives more than a short drive from her mother, she carries persistent guilt about not being present enough. A thoughtful gift shipped to Mom\'s door is a tangible manifestation of "I\'m thinking about you even when I\'m not there."',
        quotes: [
          { text: 'A gift can carry the emotional weight of a visit she can\'t make.', source: 'Sandwich generation research' },
          { text: '60% of sandwich generation caregivers are women \u2014 they spend 45 minutes MORE per day on caregiving tasks than male counterparts.', source: 'Pew Research / National Alliance for Caregiving' }
        ]
      },
      {
        title: 'Mom\'s Self-Denial Pattern',
        detail: 'Her mother\'s generation was shaped by a fundamentally different economic psychology. Boomers were raised to believe cutting spending on smaller luxury items was the best way to build for the future. Mom would feel guilty about spending $39 on detergent \u2014 but if someone GIVES it to her, the guilt evaporates.',
        quotes: [
          { text: 'She would never \u2014 not in a million years \u2014 spend $39 on laundry detergent for herself.', source: 'Gift-buyer daughter research' },
          { text: 'My mom \u2014 the woman who clips coupons for toothpaste \u2014 subscribed to luxury laundry detergent.', source: 'Ad creative narrative' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'Giving a generic gift that shows no thought or effort',
        'Mom\'s reaction being polite but underwhelmed',
        'The gift sitting unused on a shelf like past failures',
        'Not being able to be there enough for her aging mother',
        'Missing the window to show mom she matters before time runs out'
      ],
      desires: [
        'Mom\'s face lighting up when she opens the gift',
        'The phone call three days later: "What did you send me? My TOWELS smell like a five-star hotel"',
        'A gift that transforms mom\'s daily routine, not one that collects dust',
        'To show she knows her mother \u2014 that she chose well',
        'To create a shared experience around a product they can both enjoy'
      ],
      secretWants: [
        'For her mom to feel pampered and special without having to justify the expense',
        'The emotional validation of being the one who introduced mom to her new obsession',
        'To communicate "you matter" through a tangible act when words and visits are not enough'
      ]
    },
    failedSolutions: [
      'Candles \u2014 burn down in a week, scent one room, often go unlit',
      'Scarves and clothing \u2014 wrong size, wrong style, sit in the drawer',
      'Gift cards \u2014 feel impersonal, mom saves them and never uses them',
      'Kitchen gadgets \u2014 too complicated, gathering dust',
      'Custom photo books \u2014 sweet but she already has three from past Christmases',
      'Jewelry \u2014 mom says it\'s "too nice to wear" and it stays in the box'
    ],
    triggerMoments: [
      'Mother\'s Day approaching \u2014 standing in the same aisle, scrolling through the same gift guides',
      'Mom sounds lonely on the phone \u2014 "just because" guilt purchase',
      'Sees a TikTok unboxing or gift guide featuring luxury home products',
      'Friend mentions she gifted something similar and her mom loved it',
      'Birthday coming up \u2014 "Because Mom\'s 65th deserves more than a gift card"',
      'Holiday season \u2014 needs something for the woman who has everything'
    ],
    languagePatterns: [
      'She would never buy this for herself',
      'My mom called me \u2014 not texted, CALLED',
      'This is the best gift I\'ve ever given',
      'She texts me about it weekly',
      'Detergent as a gift? Hear me out.',
      'She has everything except this',
      'I almost kept it for myself',
      'She told her neighbor. She told her sister.',
      'The gift she\'ll call to thank you for \u2014 and then ask where to buy more'
    ],
    beliefs: {
      current: [
        'Laundry detergent can\'t be a real gift \u2014 that\'s an errand, not a present',
        'Good gifts have to be expensive or personalized to feel special',
        'Mom is impossible to shop for because she has everything',
        'If mom wanted luxury detergent, she would buy it herself',
        'Practical gifts feel lazy or thoughtless'
      ],
      target: [
        'The Discovery Set looks, smells, and feels like a luxury boutique gift \u2014 not a cleaning product',
        'The best gifts transform a daily routine into a moment of pleasure \u2014 and mom does laundry 3-5x/week',
        'She doesn\'t know this exists yet \u2014 that\'s what makes it the perfect gift',
        'Mom will never buy it for herself, which is exactly why you should',
        'One gift creates two subscribers: mom falls in love and reorders, then you try it yourself'
      ]
    },
    scienceInsights: [
      'When someone RECEIVES a luxury item as a gift, the guilt barrier to enjoying it is entirely bypassed \u2014 it was a gift, not an indulgence',
      '69% of TikTok users\' gift choices are influenced by unboxing videos \u2014 the Discovery Set packaging is designed for this moment',
      '$49 leverages left-digit anchoring \u2014 the brain processes it as "forty-something," not "almost fifty" (University of Chicago research)',
      'Gift exchange in mother-daughter dyads navigates shifting power dynamics through four processes: confirming, endorsing, connoting, and commanding (Journal of Consumer Research, 2024)'
    ],
    messagingFramework: {
      dos: [
        'Lead with the RECIPIENT\'s experience, not the product specs',
        'Use "she/her" language, not "you/your" \u2014 this is about Mom',
        'Feature the phone call, the reaction, the thank-you moment',
        'Emphasize gift-ready packaging, free shipping, zero effort',
        'Position the Discovery Set as a discovery experience, not a cleaning product',
        'Show the gift-to-addiction pipeline: gift \u2192 obsession \u2192 subscription'
      ],
      donts: [
        'Never lead with product specs or cleaning claims',
        'Never use subscription language in gift copy (subscribe, stock up, refill)',
        'Never show laundry rooms or washing machines',
        'Never position it as a practical/utilitarian gift',
        'Never use "bulk" or "value pack" language \u2014 kills luxury perception'
      ],
      toneNotes: 'Warm, relatable, slightly funny. The daughter is telling a story to her friends: "I know this sounds crazy, but hear me out." Conversational, genuine enthusiasm \u2014 not polished influencer aesthetic.',
      neverSay: [
        'Subscribe and save',
        'Stock up',
        'Bulk or value pack',
        'Refill',
        'Chemical-free as lead messaging',
        'Detergent (minimize \u2014 say "luxury fragrance experience" instead)'
      ]
    },
    adCreative: [
      {
        angle: 'The Gift She\'d Never Buy Herself',
        hook: 'My mom has used the same $8 detergent for twenty years.',
        primaryText: 'My mom has used the same $8 detergent for twenty years. Same brand. Same jug. Same aisle. She rewears her winter coat until the zipper breaks. She saves the "nice" towels for guests. She buys store-brand everything so the budget works for everyone else. She would never \u2014 not in a million years \u2014 spend $39 on laundry detergent for herself. So I did it for her. I found a luxury laundry detergent made by actual master perfumers. Four scents. Gorgeous packaging. I shipped the Discovery Set to her door with a note that said: "Because you deserve the good stuff, Mom." Three days later she called me. Not texted. Called. "I just pulled my sheets out of the dryer and I cannot stop smelling them. What IS this?" She tried all four scents in two weeks. She has already ordered the full-size bottle herself. My mom \u2014 the woman who clips coupons for toothpaste \u2014 subscribed to luxury laundry detergent.',
        headline: 'She Would Never. So You Should.',
        description: '4 luxury scents by master perfumers. $49 Discovery Set. Free shipping. Gift-ready.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 7)',
        creativeDirection: 'Split composition \u2014 one side shows a modest laundry shelf with generic detergent, the other shows the Discovery Set in beautiful packaging. Or: a woman (35-40) wrapping the Discovery Set with a handwritten gift note visible. Warm, intimate lighting. 30-60 sec UGC-style video or warm static image.'
      },
      {
        angle: 'The Call You\'ll Get',
        hook: 'Three days after I shipped it, my phone rang.',
        primaryText: 'Three days after I shipped it, my phone rang. Not a text. An actual phone call. From my mom. In the middle of a Tuesday. "Okay \u2014 what did you send me? My TOWELS. They smell like a five-star hotel. I just stood in the bathroom smelling my own towel for five minutes." I started laughing. She was genuinely giddy. By Thursday she had tried the second scent on her sheets. She called again. "The cotton flower one? I woke up at 3 AM and thought I was at a resort." By the following week she had texted me a photo of all four bottles lined up on her laundry shelf. She had already picked a favorite. She asked me where to order more. My mom asked ME where to order MORE of something she would have called "ridiculous" three weeks earlier.',
        headline: 'Wait for the Phone Call.',
        description: 'The gift that makes Mom call to say thank you \u2014 and call again to reorder. $49, free shipping.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Warm, emotional concept \u2014 a woman (33-40) on her couch, phone pressed to ear, laughing during a call with her mom. Or split-screen: daughter on one side, mom (60-70) on the other holding a towel to her face with pure delight. Natural lighting.'
      },
      {
        angle: 'For the Mom Who Has Everything',
        hook: 'She has the jewelry. She has the candles. She has the cashmere socks.',
        primaryText: 'She has the jewelry. She has the candles. She has the cashmere socks and the nice robe and the custom photo book from three Christmases ago. She has everything. And every year you stand in the same aisle, scrolling through the same gift guides, thinking the same thing: What do you get for the woman who already has everything she needs? Here is what she does NOT have. She does not have laundry that smells like it was washed at a five-star Parisian hotel. She does not have sheets that carry a master perfumer\'s fragrance for a full week. She does not have this because she does not know it exists. And if she did, she would never buy it for herself. That is what makes it the perfect gift. She will use it every single day. Sixty-four loads of luxury.',
        headline: 'She Has Everything. Except This.',
        description: '4 luxury scents she has never tried. $49 Discovery Set. 64 loads. Gift-ready packaging.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 7)',
        creativeDirection: 'Elegant flat-lay of the Discovery Set surrounded by typical "mom gifts" that have been gently pushed aside \u2014 a generic candle, a folded scarf, a gift card. The Discovery Set is centered, beautifully lit. Carousel showing failed gifts vs. the Discovery Set.'
      },
      {
        angle: 'Ten Thousand Loads',
        hook: 'Think about it for a second.',
        primaryText: 'Think about it for a second. She washed your baby blanket. Your grass-stained soccer jersey. Your favorite jeans she had to pry out of your hands on laundry day. Your prom dress. Your college dorm sheets that you brought home in a trash bag twice a year. Thousands of loads. Maybe tens of thousands. All with the cheapest detergent she could find \u2014 because the budget only stretched so far, and she always stretched it for you first. She never complained about it. She never asked for a thank you. She just folded everything and put it in the drawer and did it all again next week. I cannot give my mom back twenty-five years of laundry days. But I can give her this. She spent decades making your laundry smell like love. Maybe it is her turn.',
        headline: 'She Did 10,000 Loads for You.',
        description: 'Upgrade the laundry experience of the woman who never upgraded her own. $49, free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 7)',
        creativeDirection: 'Emotionally resonant imagery. Montage-style video \u2014 childhood laundry memories transitioning to a woman (60-70) doing laundry alone, then the gift arriving. Or: mom\'s hands (60s-70s) pulling luxurious-smelling linens from a dryer, eyes closed, peaceful. Warm, golden, nostalgic lighting.'
      },
      {
        angle: 'Detergent as a Gift? Hear Me Out.',
        hook: 'I gave my mom laundry detergent for her birthday and she said it was the best gift she has ever gotten.',
        primaryText: 'I gave my mom laundry detergent for her birthday and she said it was the best gift she has ever gotten. I know. I KNOW how that sounds. But this is not Tide in a plastic jug. Open the box and you forget the word "detergent" entirely. Four bottles. Four different luxury fragrances created by actual master perfumers \u2014 the same people who design $150 perfumes. The packaging looks like it belongs in a gift bag from Neiman Marcus. I almost kept it for myself. My mom opened it on her birthday. She looked confused for about three seconds. Then she opened the first bottle. Her FACE. She looked up at me and said, "This is the most beautiful thing anyone has ever given me." She texts me about it weekly. She told her neighbor. She told her sister. Her sister\'s daughter texted me asking where to buy it.',
        headline: 'Insane Gift Idea. Trust Me.',
        description: 'Luxury laundry detergent by master perfumers. 4 scents, $49. The gift she will not stop talking about.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'This ad NEEDS to be video. The daughter (30-40) talking directly to camera in a casual, relatable setting. She holds up the Discovery Set box, acknowledges the absurdity, then opens it on camera. Cut to a text thread with mom showing her excited messages. 30-60 sec UGC vertical video for Reels/Stories.'
      }
    ],
    metaTargeting: {
      interests: [
        'Mother\'s Day', 'Gift ideas', 'Gifting', 'Home fragrance',
        'Yankee Candle', 'Bath & Body Works', 'Care packages',
        'Sympathy gifts', 'Bereavement gifts', 'Home goods',
        'Candles', 'Skincare gifts', 'Self-care gifts'
      ],
      behaviors: [
        'Engaged shopper, gift-giver',
        'Discovers products through Instagram, TikTok, gift guides, and friend recommendations',
        'Reads reviews from women her mom\'s age, not her own',
        '55% of TikTok users casually find gift ideas on the platform'
      ],
      demographics: 'Women 30-50. Household income $75K+. Part of the sandwich generation. Digitally fluent. Responds to brand stories, aesthetics, and social proof.',
      stacks: [
        { name: 'Gift-Buyer Seasonals', interests: ['Mother\'s Day', 'Gift ideas', 'Gift guides', 'Care packages', 'Christmas gifts', 'Birthday gifts'] },
        { name: 'Home & Lifestyle Shoppers', interests: ['Home fragrance', 'Yankee Candle', 'Bath & Body Works', 'Pottery Barn', 'Williams-Sonoma', 'Anthropologie'] },
        { name: 'Millennial Mom Discoverers', interests: ['TikTok', 'Instagram Shopping', 'Unboxing', 'Product reviews', 'Cup of Jo', 'The Mom Edit'] },
        { name: 'Comfort & Care Gifters', interests: ['Sympathy gifts', 'Bereavement gifts', 'Self-care gifts', 'Luxury candles', 'Spa gifts', 'Comfort gifts'] }
      ]
    },
    recommendedScent: 'Discovery Set ($49) \u2014 all four scents. She is buying an experience, not a single product. The Discovery Set is the ideal gift because it lets mom choose her own favorite, which creates a second purchase moment.',
    competitorAngle: 'She is not comparing ML to other detergents \u2014 she is comparing it to candles, scarves, gift cards, and other "mom gifts" that have failed in the past. ML wins because it is simultaneously unique (mom has never seen it), practical (she uses it every day), and luxurious (the unboxing feels like a boutique gift). Tyler Glamorous Wash proved the gift pipeline works: one customer received Tyler as a gift, then gave Tyler as gifts to others, creating an expanding word-of-mouth network.'
  },
  {
    id: 8,
    name: 'The Married but Invisible',
    ageRange: '50-65',
    tier: 1,
    emoji: '\u{1F48D}',
    tagline: 'She is not in a bad marriage \u2014 she is in an invisible one. And a product that makes strangers notice her carries an emotional weight that no amount of rational product marketing can replicate.',
    painIntensity: 4,
    coreWound: 'She is 50-65, married 20-40 years to a man she loves but who has stopped seeing her. The romance faded so gradually she cannot pinpoint when it died. She manages the household, maintains the social calendar, and holds the emotional infrastructure of the family together \u2014 largely without acknowledgment. She will not leave. But she will buy a product that makes strangers tell her she smells amazing, because those compliments are the closest thing to being seen that she has felt in years.',
    demographics: {
      income: '$75K-$200K+ household. Women over 50 account for 27% of all consumer spending and spend 250% more than the general population.',
      lifeStage: 'Married 20-40 years, stable but emotionally neglected marriage. Kids may be grown or nearly grown. She controls 95% of household purchasing decisions and 80% of luxury purchases.',
      location: 'Suburban homeowner, established community',
      generation: 'Gen X to early Boomer. Uses Facebook daily (71% of women 50+ use Facebook). Sardonic humor as coping mechanism.'
    },
    painPoints: [
      {
        title: 'The Habituation Effect \u2014 He Literally Stopped Seeing Her',
        detail: 'Habituation is the neurological process by which the brain decreases its response to repeated stimuli. In long-term relationships, partners literally stop perceiving each other as novel or noteworthy. The romantic phase lasts 6 months to 3 years \u2014 after that, couples who maintain passionate connection are statistical outliers.',
        quotes: [
          { text: 'I craved acknowledgment... I felt like the least sexy and attractive woman in the world.', source: 'Vocal Media, "I Dressed Up for My Husband and Ended the Night Crying"' },
          { text: 'He looks at his phone more than he looks at me.', source: 'Married women\'s forum' }
        ]
      },
      {
        title: 'The Unreturned Effort',
        detail: 'She gets dressed for date night, walks into the room, and he glances at his phone and asks if she is ready to go. In the early years, this moment was electric. Now it yields nothing. One woman dressed in lingerie, fixed her hair, and waited \u2014 her husband walked in and said "Did you change clothes?" then "Nice" before walking into the kitchen.',
        quotes: [
          { text: 'I got dressed up for our anniversary and he didn\'t say a word.', source: 'Women\'s relationship forum' },
          { text: 'Did you change clothes? ... Nice.', source: 'Vocal Media personal essay' }
        ]
      },
      {
        title: 'The Compound Effect of Menopause and Cultural Invisibility',
        detail: 'Between ages 50 and 65, her body is changing in ways that make her feel less attractive, AND the one person who is supposed to find her beautiful regardless has stopped noticing. Body dissatisfaction rates in middle-aged women range from 40% to 80%. She needs reassurance MORE than ever and receives it LESS.',
        quotes: [
          { text: '70% of respondents said women become "invisible" as they age, compared to only 32% of men.', source: 'Tandfonline research' },
          { text: 'At midlife, something shifts \u2014 the rules she lived by no longer hold, and there\'s an ache that can\'t be ignored: "I want more."', source: 'Sarah Hopton, "Reclaiming Desire"' }
        ]
      },
      {
        title: 'The Invisible Labor',
        detail: 'She carries the cognitive and logistical burden of the household \u2014 grocery shopping, scheduling, managing relationships, remembering birthdays, the "worry work." Women spend 37% more time on unpaid domestic work than men. The resentment from unacknowledged labor creates a justified sense of "I deserve something."',
        quotes: [
          { text: 'Women who perform invisible labor report feeling really stressed out, burned out and resentful, because the work was going largely unseen and unappreciated.', source: 'Journal of Marriage and Family / PMC' },
          { text: 'I feel like furniture.', source: 'Married women\'s forum' }
        ]
      },
      {
        title: 'The Roommate Dynamic',
        detail: 'After years of child-rearing and household logistics, the marriage feels more like efficient cohabitation than romantic partnership. The empty nest exposes this \u2014 when children leave, the buffer between two people who stopped relating romantically evaporates.',
        quotes: [
          { text: 'Staying in this shell of a marriage is killing me.', source: 'Smith Debnam Law, on gray divorce' },
          { text: 'Is this all there is?', source: 'Common internal monologue from research' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'That this is all there is \u2014 efficient cohabitation until death',
        'Becoming completely invisible, even to the man she married',
        'That wanting more attention makes her needy or ungrateful',
        'Aging making her less attractive while he does not notice either way',
        'The slow realization that trying harder yields nothing'
      ],
      desires: [
        'To be noticed without trying \u2014 effortless, ambient visibility',
        'The stranger\'s compliment: "You smell amazing \u2014 what IS that?"',
        'A secret pleasure in a life that feels completely transparent',
        'Proof that she is still desirable, interesting, and worth noticing',
        'For her husband to say "Something smells really good" unprompted'
      ],
      secretWants: [
        'For someone to lean in and say "You smell incredible" \u2014 proof she still registers',
        'A beautiful secret in a life with no mysteries left',
        'The private thrill of being the best-smelling woman in the room without anyone knowing why'
      ]
    },
    failedSolutions: [
      'Getting dressed up for date night \u2014 he does not look up from his phone',
      'Expensive perfume \u2014 intentional, event-based, fades in hours, requires effort',
      'New haircut or outfit \u2014 he does not notice for three days',
      'Scented candles \u2014 change the room, not her; she does not travel with them',
      'Therapy suggestion \u2014 expensive, emotionally demanding, he probably will not go',
      'Trying harder \u2014 the cruelest failed solution, because the problem is neurological habituation, not lack of effort'
    ],
    triggerMoments: [
      'A particularly invisible day \u2014 he did not notice her new haircut, forgot dinner plans, spent the evening watching TV in silence',
      'A friend\'s husband brings flowers or makes a romantic gesture \u2014 she feels the contrast acutely',
      'She receives an unexpected compliment from a stranger and realizes how starved she is for validation',
      'Scrolling Facebook at night, seeing "treat yourself" content after he has fallen asleep',
      'An act of household labor goes unacknowledged \u2014 she organized Thanksgiving for his family, no one said thank you',
      'A body image struggle \u2014 jeans don\'t fit, caught her reflection and felt old'
    ],
    languagePatterns: [
      'Three friends asked me this week: "You smell amazing \u2014 what perfume is that?" It was my CLOTHES.',
      'I wasn\'t even trying. I was in yoga pants.',
      'People keep asking what perfume I wear. I just smile.',
      'I do this for me.',
      'He just doesn\'t see me.',
      'After this many years, you stop expecting flowers.',
      'Oh my gosh, you just made my whole day!',
      'I\'ve gotten three compliments this week \u2014 I\'m never going back.',
      'I have a secret and it smells incredible.',
      'Life\'s too short for boring laundry detergent.'
    ],
    beliefs: {
      current: [
        'This is just what long marriages are like \u2014 the romance fades for everyone',
        'I should be grateful he\'s a good provider and doesn\'t cheat',
        'Wanting more attention makes me needy or vain',
        'Luxury laundry detergent sounds ridiculous \u2014 it\'s just soap',
        'If I smell good, it should be from perfume, not detergent'
      ],
      target: [
        'You deserve to feel extraordinary every single day, not just on special occasions',
        'When your CLOTHES carry a luxury scent, you don\'t need to try \u2014 the world notices you',
        'The effortlessness IS the appeal: she didn\'t put on perfume, she just did laundry',
        'A $39 product that delivers daily compliments is not indulgent \u2014 it\'s emotional sustenance',
        'The compliments from strangers prove what she already knew: she is not invisible'
      ]
    },
    scienceInsights: [
      'Habituation is neurological: the brain literally filters out repeated stimuli. His failure to notice her is not malice \u2014 it is a brain that has categorized her as "known" (Frontiers in Psychology)',
      'Fragrance directly influences self-perceived attractiveness, youthfulness, self-esteem, and femininity \u2014 effects are particularly robust in women (Behavioural Brain Research, 2024)',
      'When body odor was fragranced, participants were rated as having higher self-esteem and being more attractive \u2014 even when judges could not smell them (PLOS ONE)',
      'Scent-evoked nostalgia predicts higher levels of positive affect, self-esteem, self-continuity, optimism, and social connectedness (ScienceDirect, Proust Effect research)'
    ],
    messagingFramework: {
      dos: [
        'Lead with the EFFORTLESS compliment \u2014 she was not trying, and that\'s the point',
        'Position the product as a "secret weapon" \u2014 a private pleasure in a transparent life',
        'Show the retelling economy: she gets complimented, tells her friend group, they all want it',
        'Frame as "everyday luxury" and "self-care," never as marriage repair',
        'Use wry Gen X humor that acknowledges long-marriage realities without bitterness',
        'Show the "side effect" framing \u2014 great detergent that HAPPENS to attract compliments'
      ],
      donts: [
        'NEVER directly call out her husband or shame her marriage',
        'NEVER frame her as desperate for attention',
        'NEVER position the product as a fix for her marriage',
        'NEVER use overtly therapeutic language \u2014 she is buying luxury, not self-help',
        'NEVER imply she needs to try harder to get noticed'
      ],
      toneNotes: 'Warm, knowing, slightly playful. She is not desperate \u2014 she is discerning. She chose a premium product and the world responded. Think: a friend sharing an incredible secret over wine.',
      neverSay: [
        'He\'ll finally notice you',
        'Make him look up from his phone',
        'Save your marriage',
        'Desperate or lonely',
        'Old or aging',
        'For your age'
      ]
    },
    adCreative: [
      {
        angle: 'The Yoga Pants Compliment',
        hook: 'I wasn\'t even trying. I need you to understand that part first.',
        primaryText: 'I wasn\'t even trying. I need you to understand that part first. I was at the grocery store in yoga pants, hair in a bun, no makeup, no perfume. Just... existing. Running errands on a Tuesday like I\'ve done a thousand Tuesdays before. And the woman bagging my groceries stopped mid-scan, leaned across the belt, and said, "I\'m so sorry, but I have to ask \u2014 what perfume are you wearing? You smell incredible." I almost laughed. I was wearing a pullover I washed five days ago. It\'s a luxury laundry detergent made by actual perfumers. The fragrance bonds into the fabric and releases with movement \u2014 for 5-7 days. I wasn\'t wearing perfume. I wasn\'t dressed up. I was just doing my Tuesday. And for the first time in longer than I can remember, somebody stopped what they were doing to tell me I was extraordinary.',
        headline: 'She Wasn\'t Even Trying.',
        description: 'Luxury detergent by master perfumers. Scent lasts 5-7 days in fabric. $49 Discovery Set, free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 5)',
        creativeDirection: 'Woman 55-60, naturally beautiful, in yoga pants and a soft pullover. Setting: grocery store. Another woman is leaning toward her, mid-conversation, clearly complimenting her. Warm, natural lighting. Static image or 15-sec UGC-style video.'
      },
      {
        angle: 'The Secret She Keeps',
        hook: 'People keep asking what perfume I wear. I just smile.',
        primaryText: 'People keep asking what perfume I wear. I just smile. I don\'t tell them. Not right away. I let them guess. I watch them lean in a little closer, trying to place it. "Is it Jo Malone? Chanel?" No. And no. It\'s my clothes. A sweater I washed last Monday. Here\'s the thing nobody tells you about being married for 30 years \u2014 your life becomes completely transparent. Everyone knows everything about you. Your husband, your kids, your friends. There are no mysteries left. But now I have one. A small, beautiful, ridiculous secret that makes strangers stop me in parking lots. I have a vanity full of $150 perfumes collecting dust. This replaced all of them.',
        headline: 'She Has a Secret.',
        description: 'They think it\'s perfume. Let them. 4 luxury scents, $49 Discovery Set. Free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 5)',
        creativeDirection: 'Close-up of a woman 55-62, slight Mona Lisa smile, eyes warm and knowing. She looks confident, almost mischievous. Soft natural light, cafe or window setting. Static image with warm tones.'
      },
      {
        angle: 'Not for Him. For Me.',
        hook: 'I did something small for myself last month. Just for me.',
        primaryText: 'I did something small for myself last month. Just for me. Not for the house. Not for the family. Not for him. I bought a bottle of luxury laundry detergent made by master perfumers. $39. I almost felt guilty. Which is ridiculous, because I\'ve spent 30 years buying things for everyone else without blinking. The first load I washed was my favorite cardigan. When I pulled it from the dryer, I held it to my face and just stood there. Peach blossom. Something warm and creamy underneath. It smelled like the woman I keep forgetting I still am. I wore it the next day. My neighbor hugged me hello and pulled back: "Oh my God, what are you WEARING?" And then \u2014 this is the part I wasn\'t expecting \u2014 he noticed. "Something smells really good," he said one evening, like he was noticing me for the first time in a long time. I didn\'t buy it for him. But he noticed anyway.',
        headline: 'Not for Him. For Me.',
        description: 'Luxury fragrance that lasts 5-7 days in fabric. $49 Discovery Set. Risk-free guarantee.',
        cta: 'Shop Now',
        destination: 'Landing Page',
        creativeDirection: 'Woman 55-60 pulling a warm sweater from the dryer, holding it close, eyes closed, slight smile. Private moment. Warm, golden laundry room or bedroom light. 20-sec video showing the full moment: open dryer, pull sweater, hold to face, smile.'
      },
      {
        angle: 'The Upgrade She Earned',
        hook: 'I have 600-thread-count sheets. A skincare routine that costs more than my first car payment.',
        primaryText: 'I have 600-thread-count sheets. A skincare routine that costs more than my first car payment. Towels from a boutique in Charleston. Good wine. Real olive oil. Cashmere that I hand-wash. And for 30 years, I washed all of it in $8 detergent from the grocery store. I don\'t know why it took me this long. I upgraded everything else in my life. But the one product that TOUCHES every single fabric in my home? Bargain bin. A friend told me about a luxury laundry detergent made by master perfumers. I thought she was being dramatic. Then she handed me a pillowcase. I held it to my face and understood immediately. My sheets smell like a five-star hotel. My clothes carry a fragrance that three strangers have asked me about. $0.61 per load. Less than my morning coffee.',
        headline: 'The Last Upgrade You Haven\'t Made.',
        description: '$0.61/load replaces candles, dryer sheets, perfume. 4 luxury scents, $49. Free shipping.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Beautiful home setting \u2014 marble countertop or styled shelf with the ML bottle among premium items (linen towels, candle, cashmere throw). Woman 55-63, tastefully styled. Warm editorial lighting. Luxury flat-lay aesthetic.'
      },
      {
        angle: 'The Three-Compliment Week',
        hook: 'Monday: the woman behind me in the coffee line tapped my shoulder.',
        primaryText: 'Monday: the woman behind me in the coffee line tapped my shoulder. "I\'m sorry, I have to ask. What is that scent?" Wednesday: my friend hugged me at book club and wouldn\'t let go. "Okay, WHAT are you wearing? You have to tell me." Friday: the receptionist at my doctor\'s office leaned across the counter and whispered, "You smell absolutely beautiful." Three compliments. One week. Zero perfume. I texted my group chat: "Third person this week asked what perfume I\'m wearing." My friend Karen replied: "WHAT IS IT." I typed back: "My laundry detergent." Three rows of shocked-face emojis. Karen ordered it that night. She called me Saturday morning to tell me her husband asked what smelled so good. She was in her bathrobe.',
        headline: 'Three Compliments. One Week.',
        description: 'Master-perfumer laundry detergent. Scent lasts 5-7 days. $49 Discovery Set, free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 5)',
        creativeDirection: 'Two options. OPTION A: Triptych showing three brief compliment moments \u2014 coffee shop, book club hug, doctor\'s office. Woman 55-60 at center. OPTION B: Text-message screen recording style, group chat reactions. UGC format. Contagious excitement.'
      }
    ],
    metaTargeting: {
      interests: [
        'Book clubs', 'Wine clubs', 'Self-care', 'Wellness',
        'Jo Malone', 'Chanel', 'Bath & Body Works', 'Yankee Candle',
        'Home fragrance', 'Romance novels', 'Hallmark Channel',
        'Women\'s empowerment', 'HGTV', 'Pottery Barn'
      ],
      behaviors: [
        'Spends 30+ minutes/day on Facebook',
        'Shares marriage humor memes',
        'Buys luxury self-care products as self-treats',
        'Controls 95% of household purchasing decisions'
      ],
      demographics: 'Women 50-65. Married 20+ years. HHI $75K-$200K+. Suburban homeowner. CPMs significantly lower than 25-44 \u2014 yet purchasing power is equal or greater.',
      stacks: [
        { name: 'Social Butterfly', interests: ['Book clubs', 'Wine clubs', 'Bunco', 'Ladies\' nights', 'Church groups', 'Volunteering'] },
        { name: 'Self-Treating Woman', interests: ['Self-care', 'Spa days', 'Skincare', 'Jo Malone', 'Nordstrom', 'Sephora', 'Luxury candles'] },
        { name: 'Home-Proud Upgrader', interests: ['HGTV', 'Pottery Barn', 'Williams-Sonoma', 'Home fragrance', 'Home decorating', 'Southern Living'] },
        { name: 'Escapism & Romance', interests: ['Romance novels', 'Hallmark Channel', 'Outlander', 'Bridgerton', 'Women\'s fiction'] }
      ]
    },
    recommendedScent: 'Belle Vie \u2014 peach blossom, creme brulee, luminous musk. The scent people ask about. Bright, polished, effortlessly confident. Or Fleur Sombre \u2014 smoked rose, blackcurrant, suede \u2014 for the woman who wants a bold, magnetic secret.',
    competitorAngle: 'She is not comparing ML to other detergents. She is comparing it to perfume, candles, spa visits, and retail therapy. ML wins because it requires zero effort (she is already doing laundry), delivers all-day results (5-7 days), and produces external validation from real humans. At $0.61/load it costs less than all alternatives AND delivers emotional rewards none of them can match.'
  },
  {
    id: 9,
    name: 'The Grieving Widow / Fresh Start',
    ageRange: '55-75',
    tier: 2,
    emoji: '\u{1F54A}\uFE0F',
    tagline: 'When you\'re ready to make the bed yours again. This is not a tagline. It is the most important sentence in the entire Maison Laundrin brand.',
    painIntensity: 5,
    coreWound: 'She lost her husband \u2014 the man whose scent was woven into every sheet, every pillow, every towel in the home they built together. His scent lingered for months or years, then faded. Now she lives in a home that smells like nothing. Not like him. Not like her. Like absence. The purchase is not about detergent \u2014 it is about claiming her new identity. She needs permission to begin again.',
    demographics: {
      income: '$50K-$150K+ in annual resources (patchwork of Social Security survivor benefits, pension, investments, life insurance, savings)',
      lifeStage: 'Newly independent after 25-50 years of marriage. 12-36 months post-loss (Phase 3: Reclamation). Making financial and sensory decisions entirely on her own for the first time.',
      location: 'Suburban or exurban, established home owned for decades. The home where children grew up and holidays happened.',
      generation: 'Baby Boomers (born 1950-1970). 11.8 million widows in the US. ~700,000 new widows per year.'
    },
    painPoints: [
      {
        title: 'The "Second Death" \u2014 When His Scent Fades',
        detail: 'Every widow describes a moment she was not prepared for: the day she lifted his pillow to her face and smelled nothing. The last molecule of his living body had finally surrendered to entropy. Grief researchers call this the "second death" or "olfactory erasure" \u2014 often described as more devastating than the initial loss because it is the loss of the last physical trace.',
        quotes: [
          { text: 'My husband died on Monday and the smell from his clothing is already going. I can\'t bear to lose it.', source: 'Mumsnet Bereavement Forum' },
          { text: 'Her smell is gone... I knew that we cannot bottle the scents of our loved ones, but I did not know how fast they leave us.', source: 'Al Jazeera, "The Scents of Our Grief"' },
          { text: '"It\'s gone," I say, panic rising.', source: 'Al Jazeera' }
        ]
      },
      {
        title: 'The Olfactory Void \u2014 A Home That Smells Like Absence',
        detail: 'When his scent is finally gone, she lives in an olfactory void. The home does not smell bad. It smells like nothing. Like potential energy with no direction. Human beings are not designed to live in olfactory neutrality \u2014 the brain registers this as wrong.',
        quotes: [
          { text: 'I was afraid to be in that bed and close my eyes there. I had felt so safe for years and now I didn\'t know where I belonged.', source: 'Widow\'s Fire Blog' },
          { text: 'For a long time, my house smelled like nothing. Not like something bad. Just... nothing.', source: 'Phase 3 widow narrative' }
        ]
      },
      {
        title: 'Guilt About Moving Forward',
        detail: 'Beneath the surface composure lies the emotion she will never speak: guilt about wanting to move forward. "If I change how the house smells, am I erasing him?" Every step toward reclamation feels like betrayal. The guilt operates below logic, in the limbic system where scent and memory are fused.',
        quotes: [
          { text: 'Part of me thinks it\'s not healthy to live like this and the other part of me thinks if I move them it\'s erasing him.', source: 'Anna B, GriefInCommon Forum' },
          { text: 'If I buy new sheets, am I saying the life we built doesn\'t matter?', source: 'Grief research narrative' }
        ]
      },
      {
        title: 'The Fear of Disappearing',
        detail: 'Without him, without the identity of "wife," without the structure of "couple," she fears she will simply disappear. 70% of women report feeling invisible by their early 50s. Losing her husband removes the last social structure that guaranteed her visibility.',
        quotes: [
          { text: 'Who am I now? Am I just a widow? I\'m no longer a wife...', source: 'BraveWidow.com' },
          { text: 'Significant grief and loss can impact our very sense of identity, and many feel as if the person they once were is lost.', source: 'Psychology Today' }
        ]
      }
    ],
    emotionalLandscape: {
      fears: [
        'That changing the home\'s scent means erasing him',
        'Disappearing \u2014 becoming invisible without the structure of "couple"',
        'Being judged for wanting something beautiful while grieving',
        'That pleasure in the bedroom means disrespecting his memory',
        'Running out of money without a partner to lean on'
      ],
      desires: [
        'Permission to begin again \u2014 from her daughter, her counselor, or a brand that understands',
        'To climb into a bed that smells like something SHE chose \u2014 something beautiful and new',
        'To transform the house from "theirs" to "hers" without erasing the love',
        'To feel present and intentional in her own home, not just surviving',
        'For someone at church to lean in and say "You smell wonderful"'
      ],
      secretWants: [
        'She is still capable of creating beauty \u2014 and she needs something to prove it',
        'Permission to feel pleasure in a space that has been defined by pain',
        'A new scent identity that says "someone who is choosing to be alive lives here"'
      ]
    },
    failedSolutions: [
      'Keeping everything the same \u2014 his pillow unwashed, his closet untouched. Time did not freeze; the scent faded and the museum deteriorated.',
      'New sheets from the department store \u2014 washed in Tide, they smelled like nothing by Tuesday. Visual change without olfactory change.',
      'His cologne on the pillow \u2014 worked for three nights, then faded. On cold fabric it was just cologne, not him.',
      'A candle from the grief gift box \u2014 scented the air while lit, but the sheets still smelled like nothing when she climbed into bed.',
      'Extra Tide, Downy, Bounce dryer sheets layered together \u2014 smelled like a hospital hallway, clinically clean and utterly impersonal.',
      'Avoiding the bedroom entirely \u2014 slept on the couch for months until her daughter insisted she sleep in her own bed.'
    ],
    triggerMoments: [
      'The day she strips the bed and washes everything \u2014 the most significant laundry day of her life (12-24 months post-loss)',
      'Daughter gives the Discovery Set as a gift, tucked in with a note: "For your new sheets, Mom"',
      'She buys new sheets \u2014 new sheets without a new scent is an incomplete transformation',
      'A woman in her grief support group mentions Maison Laundrin and describes the bed finally feeling like "mine"',
      'A milestone anniversary, his birthday, or the anniversary of his death \u2014 she marks the transition',
      'Holiday season alone \u2014 she wants the house to smell like something other than absence when the children visit'
    ],
    languagePatterns: [
      'When you\'re ready. Not before.',
      'The bed finally felt like mine.',
      'I wasn\'t erasing him. I was adding something new.',
      'Something beautiful in a life that has been short on beauty.',
      'I woke up and the scent was still there. Still beautiful. Still mine.',
      'For the first time in two years, the bed didn\'t feel empty.',
      'I just want to feel like someone who is choosing to be alive.',
      'The first beautiful thing in my new story.',
      'Ready. Not over it. Just... ready.'
    ],
    beliefs: {
      current: [
        'If I change how the house smells, I\'m erasing him',
        'I don\'t deserve something beautiful right now',
        'Detergent is detergent \u2014 it doesn\'t matter',
        'I should be over this by now',
        'Nobody would understand why this matters to me'
      ],
      target: [
        'Creating a new scent is adding a chapter, not closing the book. His story is always part of yours.',
        'You have carried the weight of grief with extraordinary grace. Something beautiful is not a reward. It is nourishment.',
        'The scent you choose for your sheets is the scent you\'ll breathe every night. It is the most intimate choice you can make for yourself.',
        'There is no timeline. There is only readiness. And readiness looks like choosing something for yourself.',
        'We understand. Completely. That\'s why we made this.'
      ]
    },
    scienceInsights: [
      'Smell is the only sense that connects directly to the limbic system \u2014 bypassing the thalamus. Scent-triggered memories are older, more emotionally intense, and more involuntary than those from any other sense.',
      'Olfactory experiences in grief constitute "genuine perceptual contact" with the deceased \u2014 she is smelling real molecular traces, not memories (Millar, 2023, Pacific Philosophical Quarterly)',
      'Smell and emotion are stored as a single fused engram, not separate memories with associations. When the scent fades, the physical substrate of the emotion is lost.',
      'A new olfactory stimulus creates a new memory anchor in the hippocampus \u2014 the emotional context of the first wash (bravery, hope, possibility) becomes permanently fused with the new scent.'
    ],
    messagingFramework: {
      dos: [
        'Lead with PERMISSION \u2014 "When you\'re ready" is the most important phrase',
        'Frame as ADDITION, never replacement \u2014 "You\'re not erasing anything. You\'re adding a chapter."',
        'Honor his memory \u2014 the product does not replace him, it gives her something new alongside the love she will always carry',
        'Use warmth, gentleness, and restraint \u2014 this is the gentlest content ML produces',
        'Celebrate her capability \u2014 "You are still the woman who makes things beautiful"',
        'Make space for the daughter as gift-giver \u2014 the gift pathway is how she receives permission'
      ],
      donts: [
        'NEVER use urgency tactics \u2014 no countdown timers, no "limited time," no scarcity. She has experienced the ultimate urgency.',
        'NEVER say "move on," "get over it," "let go," "replace him," or "start over"',
        'NEVER describe her grief back to her in excruciating detail to trigger a purchase',
        'NEVER push or rush \u2014 the posture is WAITING, not selling',
        'NEVER market to women in Phase 1 (Preservation) or Phase 2 (Ambivalence)'
      ],
      toneNotes: 'Warm, permission-giving, never pushy. Like a warm hand on the shoulder. The brand is holding the door open, not pulling her through it. "When you\'re ready, something beautiful is waiting."',
      neverSay: [
        'Move on',
        'Get over it',
        'Let go',
        'Replace him',
        'Start over',
        'It\'s time',
        'Limited time offer',
        'Don\'t miss out',
        'Act now'
      ]
    },
    adCreative: [
      {
        angle: 'When You\'re Ready',
        hook: 'Nobody told me when it would happen.',
        primaryText: 'Nobody told me when it would happen. There was no date on the calendar. No counselor who said "now." No morning alarm that announced: today you are ready. It was a Tuesday. I was standing in the bedroom holding the sheets and I just... knew. The bed had been his and mine for thirty-one years. And now it was time for it to be mine. I did not want it to smell like the past. I did not want it to smell like nothing. I wanted it to smell like a beginning. A friend from my grief group had mentioned a luxury laundry detergent \u2014 made by actual perfumers. Fragrance that bonds into the fabric and stays for days. I washed the sheets in a scent called Luxe Blanc. Cotton flower, iris, white musk. That night I climbed into bed and breathed in something I had chosen for myself. For the first time in two years, the bed did not feel empty. It felt like mine.',
        headline: 'When You\'re Ready. Not Before.',
        description: 'Luxury detergent by master perfumers. Scent lasts 5-7 days in fabric. $49 Discovery Set, free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 10)',
        creativeDirection: 'Woman 62-68, sitting on the edge of a neatly made bed, morning light through sheer curtains. Contemplative, not sad. Quiet strength. A single bottle of Luxe Blanc on the nightstand. NOT staged \u2014 real woman in her real bedroom. Static image or slow 10-sec video.'
      },
      {
        angle: 'The First Beautiful Thing',
        hook: 'I have been brave for two years.',
        primaryText: 'I have been brave for two years. I have made the coffee alone. I have paid the bills he used to handle. I have smiled at church and said "I\'m fine" until the words stopped meaning anything. I have gotten out of bed every morning in a house that did not feel right \u2014 not wrong, exactly, just... quiet in a way that surprised me every single day. I have been so brave. And I was tired of brave feeling like survival. My daughter brought me something last month. A box with four small bottles inside \u2014 a luxury laundry detergent made by perfumers. She tucked a note in the box: "For your new sheets, Mom. You deserve something beautiful." I cried before I even opened one. The first scent I tried was Douceur Vanill\u00e9e \u2014 warm vanilla orchid, almond milk, cashmere woods. That night, climbing into bed felt different. Not because the grief was gone. Because something beautiful was there alongside it.',
        headline: 'Bravery Deserves Something Beautiful.',
        description: '4 luxury scents by master perfumers. Micro-encapsulated fragrance lasts 5-7 days. Risk-free.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 10)',
        creativeDirection: 'Close-up of a woman\'s hands (60s) lifting a soft robe to her face, eyes closed, gentle expression. Warm interior lighting. Or 15-sec video: woman opening a gift box, reading the note inside, holding a bottle, then pulling on the robe that evening and breathing in. Woman 60-68, silver hair, composed, gentle.'
      },
      {
        angle: 'For the Daughter Who\'s Been Watching',
        hook: 'You have been watching her for two years.',
        primaryText: 'You have been watching her for two years. You have watched her go from frozen to functioning. From sleeping on the couch to sleeping in the bed again. From setting two places at the table to setting one. You have driven home from her house gripping the steering wheel, wondering if she is going to be okay. She is going to be okay. Last month she mentioned buying new sheets. She rearranged the bedroom. She painted the bathroom. You can see it \u2014 she is building something. She will never buy this for herself. She would say it is too nice. Maison Laundrin is a luxury laundry detergent made by master perfumers. The Discovery Set gives her all four scents for $49. Free shipping. Tuck it in with the new sheets. Include a note: "For your next chapter, Mom." She will understand what it means.',
        headline: 'For the Daughter Who\'s Been Watching.',
        description: 'Discovery Set \u2014 4 luxury scents, $49. The gift that says "your next chapter can be beautiful."',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Targets women 30-50 (the daughters). Option A: beautifully wrapped Discovery Set box on a kitchen counter beside a handwritten note card. Option B: 15-sec UGC-style video of a daughter (mid-30s to 40s) speaking to camera about giving her mom this gift. Real, not polished. Warm tones.'
      },
      {
        angle: 'Not Absence. Presence.',
        hook: 'For a long time, my house smelled like nothing.',
        primaryText: 'For a long time, my house smelled like nothing. Not like something bad. Just... nothing. The sheets were clean but they carried no scent by morning. The towels were washed but empty. The rooms were maintained but not alive. I was here, but the house did not feel inhabited. My grief counselor said something that stayed with me: "Your home should reflect the woman who is living in it now." She was right. I had been keeping this house running, but I had not been living in it. Not with intention. Not with beauty. I washed everything. Sheets, towels, the throw blanket on the couch. My house smells like someone who is choosing to be here now. Someone who is present. Someone who decided that beauty still matters. $49 for the Discovery Set \u2014 four scents, free shipping. 60-Day Scent Promise.',
        headline: 'Not Absence. Presence.',
        description: 'Luxury fragrance that bonds into fabric for 5-7 days. 4 scents, $49. Free shipping.',
        cta: 'Learn More',
        destination: 'Advertorial (Avatar 10)',
        creativeDirection: 'Interior of a real home \u2014 warm, lived-in, beautiful. Woman 60-68 in the background, slightly out of focus, watering a plant or arranging something on a shelf \u2014 she is DOING something, engaged, present. Soft, golden-hour light. Static image. The mood: someone beautiful lives here.'
      },
      {
        angle: 'Something She\'d Never Buy Herself',
        hook: 'You know her.',
        primaryText: 'You know her. She is the woman who hosted every holiday for thirty years. Who kept the most beautiful home on the street. Who always had fresh flowers on the table and coffee ready when you arrived. She lost her husband. And something in the house went quiet. She is doing better now. You can see it. She is cooking again. She is going out. She mentioned repainting the bedroom. She is rebuilding, piece by piece, in her own time. She would never buy this for herself. She would say it is too indulgent. But you know her. And you know that "fine" is not the same as "beautiful." Maison Laundrin is a luxury laundry detergent created by master perfumers. One wash and her sheets, towels, and pillowcases carry a sophisticated fragrance for five to seven days. It is the kind of thing she used to provide for everyone else. Now someone needs to provide it for her.',
        headline: 'Something She\'d Never Buy Herself.',
        description: '4 luxury scents, $49. The gift for the woman who always made everything beautiful for everyone else.',
        cta: 'Shop Now',
        destination: 'Discovery Set PDP',
        creativeDirection: 'Targets broader gift-buyer audience \u2014 friends, sisters, neighbors, church friends (women 35-65). Discovery Set box with a simple ribbon beside white flowers. Clean, elegant, gift-ready. Warm palette \u2014 ivory, gold, soft white. Do NOT show a sad or lonely woman. Emotional register: love and recognition, not pity.'
      }
    ],
    metaTargeting: {
      interests: [
        'Grief recovery', 'Bereavement support', 'Widows',
        'Hope for Widows Foundation', 'Modern Widows Club', 'GriefShare',
        'AARP', 'Self-care', 'Home decorating', 'Wellness',
        'Pottery Barn', 'Restoration Hardware', 'Brooklinen'
      ],
      behaviors: [
        'Engaged shoppers, online purchasers',
        'Recent life change indicators',
        'Active in grief support communities (Facebook groups)',
        'Gift-buyer daughters searching "comfort gifts," "sympathy gifts," "care packages"'
      ],
      demographics: 'Women 55-75, widowed (if available in targeting). Also target daughters 30-50 through gift-buyer campaigns. Requires the GENTLEST creative in the portfolio \u2014 never lead with pain.',
      stacks: [
        { name: 'Widows & Grief Community', interests: ['Grief recovery', 'Bereavement support', 'Widows', 'Hope for Widows Foundation', 'Modern Widows Club', 'GriefShare', 'AARP'] },
        { name: 'Self-Care & Fresh Start', interests: ['Self-care', 'Wellness', 'Home decorating', 'Home makeover', 'Life coaching', 'Women\'s empowerment', 'Yoga', 'Meditation'] },
        { name: 'Gift-Buyer Daughters', interests: ['Mother\'s Day', 'Gifting', 'Care packages', 'Sympathy gifts', 'Comfort gifts', 'Home goods', 'Candles'] },
        { name: 'Luxury Self-Treaters in Transition', interests: ['Luxury travel', 'Four Seasons', 'Fine linens', 'Brooklinen', 'Parachute', 'Diptyque', 'Nordstrom', 'Spa retreats'] }
      ]
    },
    recommendedScent: 'Luxe Blanc (primary \u2014 sanctuary, crisp hotel serenity, the new bed). Douceur Vanill\u00e9e (secondary \u2014 warm comfort, the cocoon). Belle Vie (tertiary \u2014 everyday confidence for her re-emerging social life). NOT Fleur Sombre initially \u2014 too bold for early Phase 3.',
    competitorAngle: 'Zero competitors occupy this space. Laundry Sauce markets to men. Tyler Glamorous Wash is the TikTok cult product. The Laundress targets affluent urbanites. Hex targets gym-goers. Nobody \u2014 not a single brand in the luxury laundry category \u2014 is speaking to the woman who needs to reclaim her bed after loss. This is uncharted territory. ML does not enter her life as a replacement for products that failed. It enters as the first act of intentional sensory beauty since the loss.'
  }
];
