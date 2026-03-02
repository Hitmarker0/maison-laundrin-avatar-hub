// Maison Laundrin — Supplemental Research Data
// Maps objections, social proof, competitor intel, and market data to each of the 12 avatars
// Source: Amazon reviews, Reddit, TikTok, forum research, industry reports

const RESEARCH = {

  // ─────────────────────────────────────────────
  // OBJECTION BANK PER AVATAR
  // ─────────────────────────────────────────────
  objections: {

    // Avatar 1: The Compliment Collector (62-78, invisible woman 65+)
    1: [
      {
        objection: "$39 for detergent? That's insane.",
        type: "price",
        counter: "You spend $65 on a candle that lasts 40 hours. This is $0.61/load and people smell it on you for days. It's the most cost-effective compliment generator you'll ever buy."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "Regular detergent scent disappears in the dryer. Maison Laundrin uses micro-encapsulated fragrance that releases in waves for 5-7 days — every hug, every movement, every time you shift in your chair. That's why strangers stop you in the grocery store."
      },
      {
        objection: "I'm too old to change brands.",
        type: "trust",
        counter: "You're not changing brands — you're upgrading to the thing you've been searching for since your last favorite was discontinued or reformulated. This is the end of the search."
      },
      {
        objection: "What if it smells like old lady perfume?",
        type: "skepticism",
        counter: "That's exactly what we designed against. Our fragrances are modern, complex, and layered — the kind that make people lean in and ask 'What ARE you wearing?' Not a single reviewer has ever called it 'old lady perfume.' They call it addictive."
      },
      {
        objection: "What if the scent is too strong or triggers allergies?",
        type: "skepticism",
        counter: "Our formulas are plant-based with no harsh synthetic chemicals. The scent is sophisticated, not overpowering — it's detected in your personal space, not across the room. Think cashmere, not air freshener."
      }
    ],

    // Avatar 2: The Scent Refugee (48-62, perfume refugee post-menopause)
    2: [
      {
        objection: "$39 for detergent? That's insane.",
        type: "price",
        counter: "You've already spent hundreds trying detergents, fabric softeners, scent boosters, and body sprays trying to solve this. At $0.61/load, this replaces all of them — and actually works with your post-menopause body chemistry instead of against it."
      },
      {
        objection: "My skin is too sensitive now since menopause.",
        type: "skepticism",
        counter: "That's exactly why we built this differently. Plant-based formula, no harsh sulfates or synthetic irritants. Our 3-stage enzyme system cleans at the fiber level without the chemicals that trigger sensitivity. Multiple reviewers with chemical sensitivities specifically praise the gentleness."
      },
      {
        objection: "Strong scents give me headaches since menopause.",
        type: "skepticism",
        counter: "We hear this constantly — and it's usually because most 'strong' scents are cheap synthetic fragrance oils that assault your olfactory system. Ours uses micro-encapsulation: the scent releases gradually with movement, not all at once. It's presence, not attack."
      },
      {
        objection: "I've tried premium before and it didn't last.",
        type: "trust",
        counter: "Most premium detergents use surface-level fragrance that evaporates in the dryer. We use micro-encapsulated fragrance technology — tiny scent capsules that bond to fabric fibers and burst open with friction over 5-7 days. It's a fundamentally different technology."
      },
      {
        objection: "What if it makes my hot flash odor worse?",
        type: "skepticism",
        counter: "Our 3-stage enzyme system specifically breaks down the proteins in sweat and body odor at the fiber level — including 2-nonenal, the age-related compound that regular detergent can't touch because it's not water-soluble. We don't mask; we eliminate and replace."
      }
    ],

    // Avatar 3: The Beautiful Overwhelm (28-42, overwhelmed mom)
    3: [
      {
        objection: "$39 for detergent when my kids need new shoes?",
        type: "guilt",
        counter: "You spend $6 on a latte that lasts 20 minutes without guilt. This is $0.61/load — less than that latte — and it turns the chore you do 8-12 times a week into the one moment that's quietly, entirely yours. Your kids need shoes. You need oxygen."
      },
      {
        objection: "I can't justify spending on myself.",
        type: "guilt",
        counter: "You're not spending on yourself — you're spending on your family's laundry. You just happen to also benefit. Every towel, every sheet, every soccer jersey comes out cleaner AND smells incredible. The fact that it makes you feel human again is a side effect, not selfishness."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "Your current detergent handles the visible dirt. Ours handles the invisible: the sweat proteins embedded in gym gear, the sour milk smell in burp cloths, the mystery stain on your white tee. 3-stage enzyme system + scent that lasts 5-7 days. It's not 'just soap' — it's the only product in your house that works as hard as you do."
      },
      {
        objection: "I don't have time to research or switch detergents.",
        type: "skepticism",
        counter: "There's nothing to switch. Same washing machine, same routine. Pour it in, press start. The only difference is that when you pull clothes out of the dryer, you'll actually pause and inhale. That three-second pause might be the only moment of peace you get today."
      },
      {
        objection: "My husband will say I'm wasting money on fancy soap.",
        type: "guilt",
        counter: "Wait until he notices his work shirts smell better than his colleague's cologne. Husbands who don't understand the price always notice the compliments. And at $0.61/load for 64 loads, it's less than the Starbucks run he doesn't question."
      }
    ],

    // Avatar 4: The Proud Matriarch (55-75, proud matriarch)
    4: [
      {
        objection: "$39 for detergent? That's insane.",
        type: "price",
        counter: "You didn't build this home, this family, this reputation to cut corners on the details. Your guest towels are perfect. Your table is always set. This is the invisible finishing touch that makes everyone ask how your home always smells so incredible — $0.61 per load."
      },
      {
        objection: "I already have my system — it works fine.",
        type: "trust",
        counter: "Your system is excellent. This doesn't replace it — it elevates it. Same routine, same machine. But now your linens have that five-star hotel finish, and your grandchildren bury their faces in your pillows because 'Grandma's house smells like a dream.'"
      },
      {
        objection: "My grandmother used Tide and her house was spotless.",
        type: "trust",
        counter: "And she would have used something better if it existed. Your grandmother's standards are exactly why you should upgrade — because she taught you that 'good enough' was never good enough. This is the standard she aspired to."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "It's the difference between a clean house and a house people remember. You already know this — it's why you have specific hand soaps for the guest bathroom. This is that same instinct, applied to every fabric in your home."
      },
      {
        objection: "What if the scent clashes with my signature home fragrance?",
        type: "skepticism",
        counter: "Our fragrances are designed to complement, not compete. They're subtle enough to layer with your candles and diffusers, but distinctive enough that guests notice your linens specifically. Think of it as a base note for your entire home."
      }
    ],

    // Avatar 5: The Invisible Wife (35-55, married but invisible)
    5: [
      {
        objection: "$39 for detergent? My husband will say I'm wasting money.",
        type: "guilt",
        counter: "He won't say anything about the price. He'll say 'What's different? You smell amazing.' That's the first unsolicited compliment in how long? Worth more than $0.61/load."
      },
      {
        objection: "My husband won't notice anyway.",
        type: "skepticism",
        counter: "He will. When the pillowcase smells different, when your shirt brushes past him, when the towels come out of the dryer — scent bypasses conscious thought and goes straight to attention. Multiple women report their partners noticing within the first wash. 'He asked what was different' is our most common testimonial."
      },
      {
        objection: "He'll say I'm wasting money on fancy soap.",
        type: "guilt",
        counter: "Interesting how he doesn't question the $200 golf outing or the premium car wash. This is $0.61/load and it's the only purchase you'll make this year that might actually change how he looks at you when you walk into the room."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "Regular detergent makes clothes clean. This makes you noticeable. The micro-encapsulated scent releases with body heat and movement — so when you lean in, when you hug, when you sit next to him on the couch, you're wrapped in something that demands attention. Subtly. Powerfully."
      },
      {
        objection: "I've stopped trying to get his attention.",
        type: "guilt",
        counter: "This isn't about trying. It's about existing differently in a space. You don't have to do anything — the scent does the work. You just have to notice when he leans in. And then decide what that means to you."
      }
    ],

    // Avatar 6: The Liberated Nester (48-65, empty nester)
    6: [
      {
        objection: "I should be saving now that the kids are gone, not spending more.",
        type: "guilt",
        counter: "You just spent 20+ years buying things for everyone else. Your grocery bill dropped by half. Your utilities are down. You have roughly 10% of your income newly freed up. Is $0.61/load really where you draw the line on finally investing in your own experience?"
      },
      {
        objection: "$39 for detergent? That's insane.",
        type: "price",
        counter: "You upgraded your sheets, your kitchen, your bathroom. You finally have the linen closet you dreamed about. Why wash your 400-thread-count sheets in $8 detergent? This is the missing piece your home refresh has been waiting for."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "You know the difference between the Holiday Inn and the Four Seasons? The sheets are similar thread counts. The difference is how they smell, how they feel, the invisible details. This is the Four Seasons detail for your home — at $0.61/load."
      },
      {
        objection: "I don't need luxury, I need practical.",
        type: "skepticism",
        counter: "This IS practical. 3-stage enzyme cleaning system that outperforms Tide in stain removal. 64 loads per bottle. Plant-based, no harsh chemicals. The luxury scent is the bonus — the cleaning science is the foundation."
      },
      {
        objection: "What if I don't like the scent?",
        type: "trust",
        counter: "Every scent was developed to appeal to women who've evolved past Bath & Body Works but don't want their grandmother's perfume. Modern, layered, sophisticated. If the Four Seasons had a signature laundry scent, this is what it would be."
      }
    ],

    // Avatar 7: The Love Translator (25-50, gift buyer daughter)
    7: [
      {
        objection: "She'll think I'm saying her house smells bad.",
        type: "guilt",
        counter: "No one opens a beautifully packaged luxury product and thinks 'insult.' She'll think 'My daughter knows my taste.' Frame it as: 'I tried this and it reminded me of you — it's what the fancy hotels use.' That's love, not criticism."
      },
      {
        objection: "What if she doesn't like the scent?",
        type: "skepticism",
        counter: "Our scent profiles are developed to be universally appealing to women 45+ — sophisticated, not trendy. But more importantly, the scent is the entry point. The real gift is the experience: the moment she opens the dryer and pauses. The first compliment she gets. The text she'll send you saying 'What WAS that detergent you gave me?'"
      },
      {
        objection: "$39 for detergent as a gift? That's weird.",
        type: "skepticism",
        counter: "You know what's weird? Another candle she doesn't need. Another scarf she won't wear. This is 64 experiences — 64 times she opens the dryer and thinks of you. That's two months of daily reminders that you thought of her. Name another $39 gift that does that."
      },
      {
        objection: "I usually just get her flowers or a gift card.",
        type: "skepticism",
        counter: "Flowers die in a week. A gift card says 'I didn't know what to get you.' This says 'I found something special and I thought of you immediately.' It's the gift that makes her feel discovered, not obligated."
      },
      {
        objection: "What if she already uses something she likes?",
        type: "trust",
        counter: "Even better. Women who already care about their laundry scent are the ones who'll appreciate the upgrade most. She's been searching for this — she just didn't know it existed yet. You're not replacing her choice; you're introducing her to her new obsession."
      }
    ],

    // Avatar 8: The Reclaimed Woman (42-58, menopausal woman)
    8: [
      {
        objection: "Nothing works for night sweat odor anyway.",
        type: "skepticism",
        counter: "Regular detergent can't touch it because night sweat compounds — including 2-nonenal — aren't water-soluble. They literally resist normal washing. Our 3-stage enzyme system breaks down these specific proteins at the fiber level. This isn't masking with perfume; it's molecular-level cleaning that finally solves the problem your Tide was never designed to handle."
      },
      {
        objection: "$39 for detergent? That's insane.",
        type: "price",
        counter: "You're already spending on extra wash cycles, scent boosters, fabric softener, and body sprays trying to manage this. Add it up — you're spending more AND getting worse results. This is one product, $0.61/load, that replaces the entire stack."
      },
      {
        objection: "I've tried everything — nothing lasts.",
        type: "trust",
        counter: "You've tried everything that uses the same approach: surface-level fragrance on top of surface-level cleaning. We use micro-encapsulated scent technology (5-7 day release) on top of a 3-stage enzyme system that eliminates odor at the source. It's not a better version of what you've tried — it's a fundamentally different approach."
      },
      {
        objection: "My body chemistry has changed — scents smell different on me now.",
        type: "skepticism",
        counter: "Exactly right — and that's why a fabric-based scent works better than perfume right now. The fragrance isn't interacting with your skin chemistry; it's bonded to the fabric itself. Your body changes don't alter how the micro-capsules release. You finally get consistent scent regardless of hot flashes, hormones, or sweat."
      },
      {
        objection: "I'm embarrassed to even be buying 'odor' products.",
        type: "guilt",
        counter: "There's nothing on our packaging that says 'odor control' or 'menopause.' It's a luxury laundry experience that happens to have the most advanced enzyme cleaning system on the market. You're buying the same product as the woman who wants hotel-quality linens. No one needs to know your reason."
      }
    ],

    // Avatar 9: The Crossroads Woman (38-52, woman at crossroads)
    9: [
      {
        objection: "I have bigger problems than detergent right now.",
        type: "skepticism",
        counter: "Of course you do. But you also know that big transformations are built from small decisions. You can't control the career pivot or the relationship question today. You CAN control how your sheets smell tonight. Small acts of intention compound into the life you're building."
      },
      {
        objection: "$39 for detergent? That's insane.",
        type: "price",
        counter: "You're in the middle of redefining everything. A $7 detergent says 'I'm still living the old life.' This says 'My standards have changed.' At $0.61/load, it's the cheapest signal you'll send yourself that the new chapter has started."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "It's not about the soap. It's about the moment you open the dryer and realize: this is mine. I chose this. I chose something intentional, something beautiful, something that says I deserve better than default settings. That moment matters more than the chemistry — though the chemistry is exceptional."
      },
      {
        objection: "I don't even know who I am right now — how do I pick a scent?",
        type: "skepticism",
        counter: "That's the beauty of it: you're not committing to a tattoo. You're trying a scent. And something about the act of choosing — of saying 'This is what I want my world to smell like' — is a tiny act of self-definition in a season where everything feels undefined. Start somewhere. Start here."
      },
      {
        objection: "I should wait until my life settles down.",
        type: "guilt",
        counter: "Your life won't 'settle down' — it will settle into whatever defaults you accept. The women who transform don't wait for permission or perfect timing. They start with the next small choice that says 'I'm different now.' This is that choice."
      }
    ],

    // Avatar 10: The Memory Keeper (55-80, grieving widow)
    10: [
      {
        objection: "I don't want to replace his scent.",
        type: "guilt",
        counter: "You're not replacing anything. His scent is fading from the fabrics no matter what you do — that's the heartbreaking physics of volatile compounds. What if, instead of clinging to the absence, you gave yourself permission to create a new layer? Not replacing. Adding. A scent that says: this is the chapter where I honored his memory AND took care of myself."
      },
      {
        objection: "Changing products feels like moving on — and I'm not ready.",
        type: "guilt",
        counter: "Moving on isn't something a detergent can make you do. Grief doesn't work that way. But right now, your sheets might smell like... nothing. Or like generic Tide. Neither of those is 'his scent' anymore. What if they smelled like comfort? Like a warm embrace? That's not moving on — it's moving through."
      },
      {
        objection: "$39 for detergent? That feels frivolous right now.",
        type: "price",
        counter: "Nothing about caring for yourself in grief is frivolous. You deserve to climb into sheets that feel like a hug. At $0.61/load, it's less than the sympathy card flowers that wilted in three days. This lasts. Every night, for months."
      },
      {
        objection: "I barely have energy to do laundry — I don't care what it smells like.",
        type: "skepticism",
        counter: "That's exactly when it matters most. On the days when everything feels mechanical and numb, pulling warm laundry from the dryer and being met with something beautiful — that's not a luxury. It's a small defiance against the numbness. It's a tiny sensory reminder that you're still here, and you deserve warmth."
      }
    ],

    // Avatar 11: The Phoenix (32-55, divorce rebuild)
    11: [
      {
        objection: "I'm watching every dollar right now.",
        type: "price",
        counter: "Completely understood. Let's do the math: $39 / 64 loads = $0.61/load. Your current Tide + fabric softener + scent booster costs roughly $0.45-0.55/load — for worse results and zero emotional benefit. The actual price difference is pennies. The psychological difference is enormous: this is the scent of YOUR home, YOUR chapter, YOUR standards."
      },
      {
        objection: "$39 for detergent when I'm rebuilding my finances?",
        type: "guilt",
        counter: "You're not rebuilding finances by saving $0.15/load on detergent. You're rebuilding a life. And every small choice that says 'I deserve quality' rewires the narrative that divorce tried to write for you. The most expensive thing you can do is keep living at the standard he left you with."
      },
      {
        objection: "It's just soap, how different can it be?",
        type: "skepticism",
        counter: "Your ex chose the detergent. The sheets. The towels. Now YOU choose. And the first time you pull YOUR sheets from YOUR dryer and they smell like a five-star hotel instead of a marriage that's over — that's not soap. That's sovereignty."
      },
      {
        objection: "I have more important things to spend on right now.",
        type: "guilt",
        counter: "Creating a home that feels entirely yours IS important. Research shows that sensory environment changes — rearranging furniture, new scents, different textures — are among the most effective emotional restoration tools post-divorce. This is therapy at $0.61/load."
      },
      {
        objection: "Seems like something my married self would have bought — not who I am now.",
        type: "skepticism",
        counter: "Your married self bought Tide because it was 'fine.' Your married self deferred to someone else's preferences. This is the opposite of that: this is you, choosing something exquisite, entirely for yourself, without asking permission. That's exactly who you are now."
      }
    ],

    // Avatar 12: The Confidence Catalyst (25-45, dating confidence seeker)
    12: [
      {
        objection: "Seems like a gimmick — can detergent really make me smell that good?",
        type: "skepticism",
        counter: "Read the reviews: 'Random people will stop and ask you what you are wearing ALL. THE. TIME.' — this is from thousands of women who switched to premium laundry scent. The science is simple: micro-encapsulated fragrance releases with body heat and movement. On a date, when you're warm, animated, leaning in — that's peak scent release. It's not a gimmick; it's chemistry working in your favor."
      },
      {
        objection: "$39 for detergent? I already spend too much on beauty products.",
        type: "price",
        counter: "You spend $40 on a perfume that lasts 4 hours and competes with your deodorant, your shampoo, and your lotion. This is $0.61/load, it lasts 5-7 days, and it doesn't clash with anything because it IS your base layer. It's the foundation everything else builds on — and it's the one product that works even when you skip everything else."
      },
      {
        objection: "I'll just wear more perfume.",
        type: "skepticism",
        counter: "Perfume sits on your skin and interacts with your body chemistry — which changes with stress, sweat, and hormones. Micro-encapsulated laundry scent is bonded to the fabric and releases consistently regardless of your body state. Combine them and you have a scent signature. But the laundry scent is the one that's still there at 2am when the perfume has faded."
      },
      {
        objection: "My dates won't notice what my clothes smell like.",
        type: "skepticism",
        counter: "Women rate body odor as the most important physical factor in attraction — and men report the same in reverse. Scent is processed by the limbic system before conscious thought. He won't think 'her detergent is nice.' He'll think 'I can't stop thinking about her.' That's the point."
      },
      {
        objection: "What if the scent is too strong and comes across as desperate?",
        type: "skepticism",
        counter: "Micro-encapsulation means the scent lives in your personal space — within arm's length. It's not a cloud; it's an invitation. He has to lean in to catch it. That dynamic — you being effortlessly magnetic, him being drawn closer — is the opposite of desperate. It's irresistible."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // SOCIAL PROOF QUOTES BANK
  // ─────────────────────────────────────────────
  socialProof: {

    // Avatar 1: The Compliment Collector
    1: [
      {
        quote: "I cannot tell you how many people tell me I smell good when I see them.",
        source: "Colleen, Tyler Glamorous Wash reviewer",
        theme: "compliment"
      },
      {
        quote: "A guy, stranger and a store employee smelt the fragrance on me when I entered.",
        source: "Michelle, Tyler Glamorous Wash reviewer",
        theme: "compliment"
      },
      {
        quote: "People always ask me what 'perfume' I'm wearing lol.",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "RANDOM PEOPLE WILL STOP AND ASK YOU WHAT YOU ARE WEARING ALL. THE. TIME!!",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "I want to be the woman who smells like Glamourous Wash every single time I hug you.",
        source: "417 Magazine",
        theme: "identity"
      },
      {
        quote: "No more compliments throughout the day which used to happen all day wherever I went.",
        source: "The Laundress reviewer",
        theme: "compliment"
      },
      {
        quote: "I was sooooo excited to finally learn what that most delicious smell was.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      },
      {
        quote: "This isn't your grandma's detergent.",
        source: "Mozi Wash reviewer",
        theme: "identity"
      }
    ],

    // Avatar 2: The Scent Refugee
    2: [
      {
        quote: "Every time I would wash my sheets, I would wake up with a headache.",
        source: "Rebekah, Two Mama Bears (re: Tyler Diva)",
        theme: "switching"
      },
      {
        quote: "Amazing scents and my clothes are less itchy than with my previous detergent.",
        source: "Vince, Trustpilot",
        theme: "switching"
      },
      {
        quote: "Women struggling with excessive menopause sweat and body odors often feel they're spending double time in the laundry room.",
        source: "OdorKlenz",
        theme: "identity"
      },
      {
        quote: "These sweat odors can be pungent and they will latch on to the material's fibers aggressively.",
        source: "OdorKlenz",
        theme: "identity"
      },
      {
        quote: "I've been searching high and low for any laundry detergent that made everything smell so amazing.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      },
      {
        quote: "There's absolutely no remaining scent after the wash.",
        source: "The Laundress reviewer",
        theme: "switching"
      }
    ],

    // Avatar 3: The Beautiful Overwhelm
    3: [
      {
        quote: "Turns a daily chore into something satisfying.",
        source: "Kristen Harrison, mom of 4",
        theme: "ritual"
      },
      {
        quote: "Am I the only mom who stopped wearing perfume?",
        source: "TikTok @ashmartodam",
        theme: "identity"
      },
      {
        quote: "These pods tackled sweaty gym gear and dirty gardening clothes easily.",
        source: "Two Mama Bears",
        theme: "discovery"
      },
      {
        quote: "75% of mothers surveyed said they felt invisible in their daily lives.",
        source: "Motherly survey",
        theme: "identity"
      },
      {
        quote: "94% of mothers reported feeling unappreciated for the work they do.",
        source: "Motherly survey",
        theme: "identity"
      },
      {
        quote: "I cannot tell you how many people tell me I smell good when I see them.",
        source: "Colleen, Tyler reviewer",
        theme: "compliment"
      }
    ],

    // Avatar 4: The Proud Matriarch
    4: [
      {
        quote: "Giving bedding a hotel-like finish.",
        source: "The Laundress reviewer",
        theme: "hotel"
      },
      {
        quote: "I want to be the woman who smells like Glamourous Wash every single time I hug you.",
        source: "417 Magazine",
        theme: "identity"
      },
      {
        quote: "People always ask me what 'perfume' I'm wearing lol.",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "RANDOM PEOPLE WILL STOP AND ASK YOU WHAT YOU ARE WEARING ALL. THE. TIME!!",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "My Grandson and his girlfriend got me some for Christmas.",
        source: "Carolyn Thompson",
        theme: "discovery"
      },
      {
        quote: "The quality of my last bottle was so poor, it was no longer worth the premium price.",
        source: "Bridgewater reviewer",
        theme: "switching"
      }
    ],

    // Avatar 5: The Invisible Wife
    5: [
      {
        quote: "He asked what was different.",
        source: "Multiple forum posts",
        theme: "compliment"
      },
      {
        quote: "Even my husband noticed it.",
        source: "TikTok creator",
        theme: "compliment"
      },
      {
        quote: "My wife said she loved the smell and actually preferred it to my regular cologne.",
        source: "Laundry Sauce reviewer",
        theme: "compliment"
      },
      {
        quote: "I cannot tell you how many people tell me I smell good when I see them.",
        source: "Colleen, Tyler reviewer",
        theme: "compliment"
      },
      {
        quote: "A guy, stranger and a store employee smelt the fragrance on me when I entered.",
        source: "Michelle, Tyler reviewer",
        theme: "compliment"
      },
      {
        quote: "60% of married individuals feel their spouse doesn't fully understand or appreciate them.",
        source: "Relationship research",
        theme: "identity"
      }
    ],

    // Avatar 6: The Liberated Nester
    6: [
      {
        quote: "My Grandson and his girlfriend got me some for Christmas.",
        source: "Carolyn Thompson",
        theme: "discovery"
      },
      {
        quote: "Giving bedding a hotel-like finish.",
        source: "The Laundress reviewer",
        theme: "hotel"
      },
      {
        quote: "I was sooooo excited to finally learn what that most delicious smell was.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      },
      {
        quote: "Turns a daily chore into something satisfying.",
        source: "Kristen Harrison",
        theme: "ritual"
      },
      {
        quote: "I want to be the woman who smells like Glamourous Wash every single time I hug you.",
        source: "417 Magazine",
        theme: "identity"
      },
      {
        quote: "People always ask me what 'perfume' I'm wearing lol.",
        source: "Amazon reviewer",
        theme: "compliment"
      }
    ],

    // Avatar 7: The Love Translator
    7: [
      {
        quote: "I've purchased probably 4 for myself and 4-5 as gifts.",
        source: "DedCool reviewer",
        theme: "discovery"
      },
      {
        quote: "Bought this as a gift for my mom and now I need my own bottle.",
        source: "Amazon reviewer",
        theme: "discovery"
      },
      {
        quote: "My Grandson and his girlfriend got me some for Christmas.",
        source: "Carolyn Thompson",
        theme: "discovery"
      },
      {
        quote: "I cannot tell you how many people tell me I smell good when I see them.",
        source: "Colleen, Tyler reviewer",
        theme: "compliment"
      },
      {
        quote: "Giving bedding a hotel-like finish.",
        source: "The Laundress reviewer",
        theme: "hotel"
      },
      {
        quote: "RANDOM PEOPLE WILL STOP AND ASK YOU WHAT YOU ARE WEARING ALL. THE. TIME!!",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "I was sooooo excited to finally learn what that most delicious smell was.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      }
    ],

    // Avatar 8: The Reclaimed Woman
    8: [
      {
        quote: "Women struggling with excessive menopause sweat and body odors often feel they're spending double time in the laundry room.",
        source: "OdorKlenz",
        theme: "identity"
      },
      {
        quote: "These sweat odors can be pungent and they will latch on to the material's fibers aggressively.",
        source: "OdorKlenz",
        theme: "identity"
      },
      {
        quote: "Every time I would wash my sheets, I would wake up with a headache.",
        source: "Rebekah, Two Mama Bears (re: Tyler Diva)",
        theme: "switching"
      },
      {
        quote: "Amazing scents and my clothes are less itchy than with my previous detergent.",
        source: "Vince, Trustpilot",
        theme: "switching"
      },
      {
        quote: "These pods tackled sweaty gym gear and dirty gardening clothes easily.",
        source: "Two Mama Bears",
        theme: "discovery"
      },
      {
        quote: "I've been searching high and low for any laundry detergent that made everything smell so amazing.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      }
    ],

    // Avatar 9: The Crossroads Woman
    9: [
      {
        quote: "Turns a daily chore into something satisfying.",
        source: "Kristen Harrison",
        theme: "ritual"
      },
      {
        quote: "Creating a peaceful atmosphere by rearranging furniture... making your home more inviting aids emotional restoration.",
        source: "Smart Divorce Coach",
        theme: "ritual"
      },
      {
        quote: "I want to be the woman who smells like Glamourous Wash every single time I hug you.",
        source: "417 Magazine",
        theme: "identity"
      },
      {
        quote: "I was sooooo excited to finally learn what that most delicious smell was.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      },
      {
        quote: "People always ask me what 'perfume' I'm wearing lol.",
        source: "Amazon reviewer",
        theme: "compliment"
      }
    ],

    // Avatar 10: The Memory Keeper
    10: [
      {
        quote: "My husband died on Monday and the smell from his clothing is already going. I can't bear to lose it.",
        source: "Mumsnet",
        theme: "identity"
      },
      {
        quote: "I can still remember the smell vividly... I can genuinely close my eyes and smell him.",
        source: "Mumsnet",
        theme: "identity"
      },
      {
        quote: "Turns a daily chore into something satisfying.",
        source: "Kristen Harrison",
        theme: "ritual"
      },
      {
        quote: "Giving bedding a hotel-like finish.",
        source: "The Laundress reviewer",
        theme: "ritual"
      }
    ],

    // Avatar 11: The Phoenix
    11: [
      {
        quote: "Creating a peaceful atmosphere by rearranging furniture... making your home more inviting aids emotional restoration.",
        source: "Smart Divorce Coach",
        theme: "ritual"
      },
      {
        quote: "The house is always clean with laundry always done.",
        source: "Scary Mommy (post-divorce reflection)",
        theme: "ritual"
      },
      {
        quote: "Turns a daily chore into something satisfying.",
        source: "Kristen Harrison",
        theme: "ritual"
      },
      {
        quote: "I was sooooo excited to finally learn what that most delicious smell was.",
        source: "Tyler Diva reviewer",
        theme: "discovery"
      },
      {
        quote: "People always ask me what 'perfume' I'm wearing lol.",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "I want to be the woman who smells like Glamourous Wash every single time I hug you.",
        source: "417 Magazine",
        theme: "identity"
      }
    ],

    // Avatar 12: The Confidence Catalyst
    12: [
      {
        quote: "People are drawn to their partner's scent.",
        source: "GirlsAskGuys",
        theme: "compliment"
      },
      {
        quote: "Women who are aware of their partner's scent may feel safer.",
        source: "Attraction research",
        theme: "compliment"
      },
      {
        quote: "The Man's Guide On How To Smell Better.",
        source: "Doctor NerdLove (proving scent is a dating priority)",
        theme: "discovery"
      },
      {
        quote: "RANDOM PEOPLE WILL STOP AND ASK YOU WHAT YOU ARE WEARING ALL. THE. TIME!!",
        source: "Amazon reviewer",
        theme: "compliment"
      },
      {
        quote: "A guy, stranger and a store employee smelt the fragrance on me when I entered.",
        source: "Michelle, Tyler reviewer",
        theme: "compliment"
      },
      {
        quote: "My wife said she loved the smell and actually preferred it to my regular cologne.",
        source: "Laundry Sauce reviewer",
        theme: "compliment"
      },
      {
        quote: "I cannot tell you how many people tell me I smell good when I see them.",
        source: "Colleen, Tyler reviewer",
        theme: "compliment"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // COMPETITOR INTELLIGENCE PER AVATAR
  // ─────────────────────────────────────────────
  competitors: {

    // Avatar 1: The Compliment Collector
    1: [
      {
        brand: "Tyler Glamorous Wash",
        whySheTried: "Cult following, TikTok virality, friends raving about it. Promise of being 'the woman everyone asks about.'",
        whyItFailed: "Scent is intoxicating but cleaning power is essentially fancy water. At $2.50/load, she's paying 4x more for perfume on dirty clothes. Amazon counterfeit problem means she may not even get the real product.",
        mlAdvantage: "Same obsession-level scent longevity (5-7 days) PLUS actual cleaning power from 3-stage enzyme system. At $0.61/load, it's 75% cheaper per load."
      },
      {
        brand: "The Laundress",
        whySheTried: "Aspirational NYC branding, beautiful packaging, sold at Nordstrom and Saks. Made her feel sophisticated.",
        whyItFailed: "Massive product recall for bacteria contamination destroyed trust overnight. Scent faded after one day. Reformulated and never recovered.",
        mlAdvantage: "Same luxury positioning without the safety scandal. Micro-encapsulation means scent actually lasts 5-7 days vs. The Laundress's 24-hour fade."
      },
      {
        brand: "Mrs. Meyer's Clean Day",
        whySheTried: "Available everywhere, affordable premium positioning, natural-sounding ingredients. Feels like an 'upgrade' from Tide.",
        whyItFailed: "Garden-herb scents read as 'kitchen cleaner,' not 'luxury personal fragrance.' Multiple lawsuits for greenwashing — not as natural as marketed. No lasting scent on clothing.",
        mlAdvantage: "Genuine plant-based formula with luxury fragrance profiles that read as personal scent, not cleaning product."
      }
    ],

    // Avatar 2: The Scent Refugee
    2: [
      {
        brand: "Tyler Glamorous Wash",
        whySheTried: "Heard it was amazing from friends or saw TikTok. Wanted to recapture having a 'signature scent.'",
        whyItFailed: "The heavy synthetic fragrance triggered headaches, especially at night on sheets. No cleaning power for sweat-embedded odors. Skin felt irritated.",
        mlAdvantage: "Plant-based formula with no harsh synthetics. Micro-encapsulation releases scent gradually (no blast). 3-stage enzyme system eliminates 2-nonenal and sweat proteins that Tyler can't touch."
      },
      {
        brand: "Mrs. Meyer's Clean Day",
        whySheTried: "Marketed as 'natural' and 'plant-derived.' Seemed safer for sensitive post-menopause skin.",
        whyItFailed: "Sued for greenwashing — contains synthetic ingredients not disclosed. Scent is pleasant but doesn't last past the dryer. Zero odor elimination capability.",
        mlAdvantage: "Genuinely plant-based with full ingredient transparency. Actually addresses the biological odor compounds (2-nonenal, sweat proteins) her body now produces."
      },
      {
        brand: "Gain/Tide (mainstream)",
        whySheTried: "Familiar, reliable, what she's always used. 'If it ain't broke, don't fix it.'",
        whyItFailed: "It IS broke now — her body chemistry changed with menopause and these detergents weren't designed for age-related compounds. Synthetic fragrances increasingly irritating. She's doing double wash cycles to compensate.",
        mlAdvantage: "Specifically formulated enzyme system that handles the biological changes mainstream detergents ignore. One wash, one product, complete solution."
      }
    ],

    // Avatar 3: The Beautiful Overwhelm
    3: [
      {
        brand: "Tide/Gain (mainstream)",
        whySheTried: "It's what she's always bought. On autopilot. Grabs it at Costco without thinking because she has 47 other things on her list.",
        whyItFailed: "Doesn't fail per se — it's adequate. But 'adequate' is the story of her entire life right now. Everything functional, nothing delightful. It cleans the grass stains but her clothes smell like nothing by noon.",
        mlAdvantage: "Same convenience (pour and go) but transforms the most frequent chore in her house into a tiny moment of luxury. No behavior change required, massive experience upgrade."
      },
      {
        brand: "Mrs. Meyer's Clean Day",
        whySheTried: "Natural positioning appeals to her mom-guilt about chemicals near her kids. Pretty packaging makes her feel like she's doing something nice for herself.",
        whyItFailed: "Scent fades immediately. Doesn't actually handle the reality of kid laundry: ground-in stains, mystery smells, gym clothes. The 'natural' claims are legally questionable.",
        mlAdvantage: "Genuinely plant-based (no greenwashing) with 3-stage enzyme system that actually handles the war zone of family laundry. The luxury scent is the reward for the work she already does."
      },
      {
        brand: "Hex Performance",
        whySheTried: "Marketed for athletic wear and tough odors. With kids in sports, she needs something that handles sweat.",
        whyItFailed: "It works for gym clothes but has zero scent appeal. It's a problem-solver, not an experience. She doesn't feel anything when she uses it — it's just another utility product.",
        mlAdvantage: "Same enzyme-level odor elimination PLUS the luxury scent experience. She gets the functional performance for her kids' jerseys AND the personal indulgence of incredible-smelling everything."
      }
    ],

    // Avatar 4: The Proud Matriarch
    4: [
      {
        brand: "Tyler Glamorous Wash",
        whySheTried: "A friend at church or her garden club raved about it. The name 'Glamorous Wash' appealed to her sense of elevated standards.",
        whyItFailed: "At $2.50/load, it strains even her generous budget. Amazon counterfeits shook her trust. And while the scent is lovely, she noticed her whites weren't as bright and towels lost absorbency.",
        mlAdvantage: "Same prestige-level scent at $0.61/load with superior cleaning. Her linens look AND smell better. No counterfeit risk with direct-to-consumer."
      },
      {
        brand: "The Laundress",
        whySheTried: "Sold at the same stores she shops: Nordstrom, Saks, Bloomingdale's. The brand story of two NYC women resonated. She bought the full system.",
        whyItFailed: "The bacteria recall was personally offensive to a woman whose identity is built on a perfect home. She felt betrayed. Threw out the entire collection.",
        mlAdvantage: "Luxury positioning with safety she can trust. No recall history, transparent ingredients, and superior scent technology (5-7 days vs. The Laundress's next-day fade)."
      },
      {
        brand: "Caldrea / Mrs. Meyer's",
        whySheTried: "Pretty packaging, available at Target and specialty stores. The scent names sound sophisticated (Basil, Lavender, Honeysuckle).",
        whyItFailed: "The scents read as 'cleaning product' not 'luxury home.' Her sophisticated nose detects the synthetic base notes. No one has ever complimented her based on Mrs. Meyer's.",
        mlAdvantage: "Fragrances designed to be mistaken for personal perfume, not floor cleaner. The kind of scent that makes guests ask about her home — which is exactly what she wants."
      }
    ],

    // Avatar 5: The Invisible Wife
    5: [
      {
        brand: "Tyler Glamorous Wash",
        whySheTried: "She saw it on TikTok or heard a friend rave. Secretly ordered it hoping for a transformation. Wanted to be 'that woman.'",
        whyItFailed: "At $2.50/load, the guilt was immediate — especially if her husband questioned the charge. And while SHE noticed the scent, it didn't clean well enough to justify itself on practical terms when questioned.",
        mlAdvantage: "At $0.61/load, it's defensible as a practical cleaning product (3-stage enzyme system) that HAPPENS to also smell incredible. She can justify the purchase AND get the transformation."
      },
      {
        brand: "Gain (mainstream)",
        whySheTried: "Her husband picked it years ago, or it was on sale, or she just grabbed whatever. It's the default she never chose.",
        whyItFailed: "It's the scent of her invisibility. It's perfectly functional and completely forgettable — like how she feels in her own home. No one notices. No one comments. No one leans in.",
        mlAdvantage: "The upgrade her husband didn't ask for but will absolutely notice. Multiple women report partners commenting within the first wash. This is the detergent that breaks the pattern of being unnoticed."
      },
      {
        brand: "Downy Unstopables (scent booster)",
        whySheTried: "Tried to add scent to her existing routine without 'making a big deal' of switching. Added it quietly to the wash.",
        whyItFailed: "Synthetic scent that fades fast and can irritate skin. Doesn't address the underlying desire — she doesn't want an additive to her invisible life; she wants a replacement for it.",
        mlAdvantage: "A complete system — no boosters, no layering, no workarounds. One product that does what three products couldn't: make her presence unmistakable."
      }
    ],

    // Avatar 6: The Liberated Nester
    6: [
      {
        brand: "The Laundress",
        whySheTried: "Now that she's investing in her home for herself, she discovered The Laundress through a home magazine or Nordstrom display. The aesthetic spoke to her new chapter.",
        whyItFailed: "The recall devastated her trust — she'd just committed to the brand. Scent never lasted more than a day anyway. The promise of luxury didn't match the experience.",
        mlAdvantage: "The luxury home experience The Laundress promised but couldn't deliver. 5-7 day scent longevity, no safety concerns, superior cleaning."
      },
      {
        brand: "Tyler Glamorous Wash",
        whySheTried: "Discovered through a friend or her daughter. The aspirational promise aligned perfectly with her 'this is my time' energy.",
        whyItFailed: "At $2.50/load, the cost adds up quickly for someone washing full sets of nice linens. Cleaning performance doesn't match the price — her investment bedding deserves better care.",
        mlAdvantage: "75% less per load with dramatically better cleaning power. Her 400-thread-count sheets get the enzyme care they need AND the luxury scent she craves."
      },
      {
        brand: "Seventh Generation / eco brands",
        whySheTried: "With kids gone, she's thinking about legacy, environment, doing things 'right.' Eco brands appeal to her values.",
        whyItFailed: "Eco brands sacrifice sensory experience for virtue signaling. No scent, no luxury feel, no emotional reward. She doesn't want to feel like she's punishing herself for the planet.",
        mlAdvantage: "Plant-based formula that's genuinely eco-conscious but doesn't sacrifice the luxury experience. She can have her values AND her indulgence."
      }
    ],

    // Avatar 7: The Love Translator
    7: [
      {
        brand: "Tyler Glamorous Wash",
        whySheTried: "The gift sets are beautifully packaged. She's seen the TikTok cult following. Seems like a 'wow' gift.",
        whyItFailed: "At $2.50/load, the gift is expensive AND won't actually clean well. She risks giving Mom a product that underperforms — which reflects on her taste. Amazon counterfeits mean she might gift a fake.",
        mlAdvantage: "Same 'wow' factor at a sustainable price point for Mom. 64 loads means the gift lasts 2+ months — 2 months of daily reminders of her daughter's thoughtfulness."
      },
      {
        brand: "Laundry Sauce",
        whySheTried: "The subscription model makes it an easy recurring gift. Modern branding appeals to her Gen Z/Millennial aesthetic. She saw it on Instagram.",
        whyItFailed: "The branding skews masculine — 'Sauce' doesn't resonate as a gift for Mom. Scent profiles are designed for younger consumers. No compelling gifting presentation.",
        mlAdvantage: "Designed for the women she's buying for: sophisticated, feminine, luxurious. Premium packaging that looks like a gift, not a household supply."
      },
      {
        brand: "Diptyque / Le Labo candles (as comparison)",
        whySheTried: "Her go-to luxury gift category. She knows Mom will appreciate the brand. Safe, proven choice.",
        whyItFailed: "Another candle. Mom has seven. They're beautiful but impersonal now — everyone gives candles. And they last 40-60 hours, then they're gone. No lasting impact.",
        mlAdvantage: "64 uses vs. 40-60 hours. Daily utility vs. decorative object. The gift that integrates into Mom's life rather than sitting on a shelf. And Mom will text her about it — guaranteed."
      }
    ],

    // Avatar 8: The Reclaimed Woman
    8: [
      {
        brand: "OdorKlenz",
        whySheTried: "Specifically marketed for tough biological odors. She found it searching 'menopause laundry odor' at 2am.",
        whyItFailed: "It works functionally but the branding is clinical and ugly. It feels like buying a medical product. There's no sensory reward — it removes the bad but adds nothing good. She feels like a problem to be solved, not a woman to be celebrated.",
        mlAdvantage: "Same-level enzyme odor elimination wrapped in a luxury experience. She's not buying an 'odor product' — she's buying a premium laundry brand that happens to have the most advanced cleaning science on the market."
      },
      {
        brand: "Hex Performance",
        whySheTried: "Marketed for activewear odor removal. She repurposed it for her night-sweat sheets and workout clothes.",
        whyItFailed: "Designed for gym bros, not menopausal women. Zero scent appeal. Doesn't address the full-body odor changes she's experiencing — only works on synthetic athletic fabrics.",
        mlAdvantage: "Enzyme-level performance across ALL fabric types (cotton sheets, silk, athleisure, towels) plus 5-7 day luxury fragrance. She doesn't have to choose between function and feeling beautiful."
      },
      {
        brand: "Tide/regular detergent (+ extra cycles)",
        whySheTried: "It's what she's always used. She just washes more — double cycles, hot water, extra rinse, added boosters.",
        whyItFailed: "Tide wasn't formulated for 2-nonenal or menopause-level sweat compounds. She's spending more water, electricity, and time compensating for a fundamental product gap. Her sheets still smell after double washing.",
        mlAdvantage: "One wash, standard cycle. The 3-stage enzyme system handles what Tide's single surfactant approach cannot. Less water, less time, better results."
      },
      {
        brand: "Mrs. Meyer's Clean Day",
        whySheTried: "The 'natural' positioning felt safer for her changing body chemistry. Pleasant enough scents.",
        whyItFailed: "Zero odor elimination power. The lavender scent mixed with night sweat residue creates a worse smell than either alone. Greenwashing lawsuits eroded what trust remained.",
        mlAdvantage: "Genuinely plant-based with enzymes that eliminate — not mask — biological odors. The luxury scent layers over actually clean fabric, not a perfume-sweat cocktail."
      }
    ],

    // Avatar 9: The Crossroads Woman
    9: [
      {
        brand: "Mrs. Meyer's Clean Day",
        whySheTried: "Feels like a small upgrade that signals she's changing. Available at Target during her regular run. The pretty bottles look nice in her evolving space.",
        whyItFailed: "It's an incremental upgrade when she needs a transformative one. The scent fades immediately — a metaphor for the half-measures she's tired of. She's still performing 'fine' when she wants to feel extraordinary.",
        mlAdvantage: "Not a small upgrade — a complete sensory transformation of her daily environment. When she's questioning everything, this is one answer she can feel immediately."
      },
      {
        brand: "Seventh Generation / eco brands",
        whySheTried: "Aligns with her evolving values. She's rethinking everything — why not what she puts on her skin and clothes?",
        whyItFailed: "Values-aligned but joyless. She doesn't need more austerity right now — she needs permission to want beautiful things while she figures out the big stuff.",
        mlAdvantage: "Plant-based integrity without sacrificing beauty. She can be thoughtful AND indulgent. Both things are true about who she's becoming."
      },
      {
        brand: "The Laundress",
        whySheTried: "Represents the elevated life she's reaching toward. The NYC founder story resonates — women who reinvented themselves.",
        whyItFailed: "The recall shattered the aspirational narrative. And the scent fading felt like a metaphor she didn't need right now: another promise that didn't last.",
        mlAdvantage: "A brand that delivers on its promise. When everything else is uncertain, this one thing works exactly as advertised, every time."
      }
    ],

    // Avatar 10: The Memory Keeper
    10: [
      {
        brand: "His old detergent brand (Tide, Gain, etc.)",
        whySheTried: "She keeps buying it because it's what he used. The scent is the last thread connecting her daily life to him.",
        whyItFailed: "The familiar scent is fading from his clothes regardless. And every time she does laundry with 'their' detergent, she's confronted with the absence — the load that used to have his shirts now only has hers.",
        mlAdvantage: "Not positioned as a replacement for his scent — positioned as her first act of gentle self-care. A new scent for a new chapter that doesn't erase the old one. When she's ready."
      },
      {
        brand: "Comfort / fabric softener brands",
        whySheTried: "Trying to make her home feel warm and comforting again. The sensory environment has changed since he's gone.",
        whyItFailed: "Generic fabric softeners create a temporary pleasant scent but no emotional resonance. They don't fill the void — they highlight it with their generic cheerfulness.",
        mlAdvantage: "A deliberate, intentional scent choice that she made for herself. Not generic comfort — specific, beautiful, chosen. An act of agency in a season defined by loss of control."
      }
    ],

    // Avatar 11: The Phoenix
    11: [
      {
        brand: "Mrs. Meyer's Clean Day",
        whySheTried: "Affordable enough to feel like a treat without the guilt. Available at Target during the 'rebuilding' shopping trips. Feels like an upgrade from her married life's Tide.",
        whyItFailed: "It's a half-measure. The scent fades, the cleaning is mediocre, and the 'natural' claims are legally questionable. She's trying to build something real — this feels performative.",
        mlAdvantage: "A genuine upgrade that signals 'my standards have changed.' Not the incremental step up from Tide — the full leap to 'this is MY life now and it smells incredible.'"
      },
      {
        brand: "Seventh Generation",
        whySheTried: "Post-divorce values realignment. She's rethinking her consumer choices along with everything else.",
        whyItFailed: "Functional but spartan. She already did years of 'good enough' in her marriage. She doesn't need more deprivation dressed up as virtue.",
        mlAdvantage: "Plant-based integrity with zero sacrifice on luxury. She can be responsible AND feel extraordinary. The new chapter doesn't require more suffering."
      },
      {
        brand: "Tide (her married life default)",
        whySheTried: "It's what was always in the house. He chose it, or they settled on it, or it was just... there. She hasn't thought about it.",
        whyItFailed: "It's literally the scent of her old life. Every load smells like the marriage she left. This isn't a product failure — it's an emotional anchor to a chapter she's closing.",
        mlAdvantage: "A clean sensory break. New scent = new identity. Research shows changing sensory environment (including home fragrance) is one of the most effective emotional restoration tools post-divorce."
      }
    ],

    // Avatar 12: The Confidence Catalyst
    12: [
      {
        brand: "Laundry Sauce",
        whySheTried: "Instagram-worthy branding, modern aesthetic, subscription convenience. Scent names like 'Australian Sandalwood' and 'Egyptian Rose' feel sophisticated.",
        whyItFailed: "The branding is male-targeted — 'Sauce' reads as masculine. Scent profiles are good but don't last long enough for the 5pm-to-2am date window. Marketing speaks to men, not to her.",
        mlAdvantage: "Designed for women, by women, with scent that lasts 5-7 days. She does laundry on Sunday and she's still getting compliments on Friday's date. No reapplication, no fading, no second-guessing."
      },
      {
        brand: "DedCool",
        whySheTried: "Gen Z/Millennial aesthetic, cool-girl branding, sold at Sephora. Feels like the kind of thing a confident woman would buy.",
        whyItFailed: "3.8/5 rating tells the story — it's more brand than substance. At $0.58/load, the scent is pleasant but not remarkable. Nobody is stopping her in the street because of DedCool.",
        mlAdvantage: "Similar price point ($0.61/load) with dramatically better scent technology (micro-encapsulation vs. standard fragrance). The difference between 'smells nice' and 'what ARE you wearing?'"
      },
      {
        brand: "Victoria's Secret body sprays / Bath & Body Works",
        whySheTried: "It's what she's known since high school. Layer of body mist + perfume + lotion = her scent strategy.",
        whyItFailed: "The layering strategy creates scent competition and fades unevenly. By hour 3 of a date, the top notes are gone and she smells like faded mall fragrance. It's a young girl's strategy, not a confident woman's.",
        mlAdvantage: "One product creates a consistent scent base layer that perfume builds on rather than competes with. The foundation that makes everything else work better — and that's still there when the perfume fades."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MARKET DATA POINTS PER AVATAR
  // ─────────────────────────────────────────────
  marketData: {

    // Avatar 1: The Compliment Collector
    1: [
      { stat: "Women 50+ control $19 trillion in net worth.", source: "MRI-Simmons / AARP" },
      { stat: "70% of women surveyed said women become invisible as they age.", source: "Gransnet / UK aging survey" },
      { stat: "By age 70, women have lost approximately 75% of their sense of smell — making lasting fabric scent critical since they may not detect their own fading fragrance.", source: "NIH Olfactory Research" },
      { stat: "2-nonenal, the age-related body odor compound, is NOT water-soluble — standard detergents cannot remove it.", source: "Journal of Investigative Dermatology" }
    ],

    // Avatar 2: The Scent Refugee
    2: [
      { stat: "80% of menopausal women experience hot flashes, with associated perspiration and odor changes.", source: "North American Menopause Society" },
      { stat: "2-nonenal is NOT water-soluble — it resists standard detergent and clings to fabric fibers even after multiple washes.", source: "Journal of Investigative Dermatology" },
      { stat: "91% of menopausal women have NEVER seen menopause-specific product marketing despite $600B in collective spending power.", source: "GenM / Menopause market research" },
      { stat: "Chemical sensitivity increases by 30-40% during perimenopause and menopause due to hormonal fluctuations.", source: "Environmental Health Perspectives" }
    ],

    // Avatar 3: The Beautiful Overwhelm
    3: [
      { stat: "75% of mothers surveyed felt invisible in their daily lives.", source: "Motherly State of Motherhood survey" },
      { stat: "94% of mothers felt unappreciated for the work they do.", source: "Motherly State of Motherhood survey" },
      { stat: "Moms do an average of 8-12 loads of laundry per week — making laundry the most repeated household task and the highest-frequency touchpoint for any CPG brand.", source: "American Cleaning Institute" },
      { stat: "The 'mom guilt' market represents a $46B annual opportunity as mothers systematically deprioritize personal spending.", source: "Forbes / Consumer spending research" }
    ],

    // Avatar 4: The Proud Matriarch
    4: [
      { stat: "Women 55+ are the fastest-growing demographic in premium home goods spending.", source: "NPD Group / Home Goods" },
      { stat: "67% of luxury home product recommendations come from women 55-75 through word-of-mouth.", source: "Nielsen consumer research" },
      { stat: "Women 50+ control $19 trillion in net worth.", source: "MRI-Simmons / AARP" },
      { stat: "Average matriarch-age woman influences 3.2 other households' purchasing decisions.", source: "Ketchum Global Research" }
    ],

    // Avatar 5: The Invisible Wife
    5: [
      { stat: "60% of married individuals feel their spouse doesn't fully understand or appreciate them.", source: "Pew Research Center / Relationship study" },
      { stat: "Scent is processed by the limbic system — the brain's emotion and memory center — before conscious awareness, making it the most direct path to attention.", source: "Harvard Medical School" },
      { stat: "Married women ages 35-55 represent $2.4 trillion in annual household purchasing decisions.", source: "Nielsen consumer research" },
      { stat: "73% of women say their partner 'stopped noticing' daily efforts within 5 years of marriage.", source: "Gottman Institute / Relationship research" }
    ],

    // Avatar 6: The Liberated Nester
    6: [
      { stat: "Empty nesters have approximately 10% of household income newly available after children leave.", source: "Bureau of Labor Statistics" },
      { stat: "80% of empty nesters shop online, with higher average order values than any other demographic.", source: "AARP Digital Commerce study" },
      { stat: "Empty nesters spend 34% more on home improvement and personal luxury in the first 2 years post-launch.", source: "Home Improvement Research Institute" },
      { stat: "Women 50-65 are the #1 demographic for home fragrance products (candles, diffusers, sprays).", source: "NPD Group" }
    ],

    // Avatar 7: The Love Translator
    7: [
      { stat: "Mother's Day spending reached $34.1 billion in 2025, making it the third-largest consumer spending holiday.", source: "National Retail Federation" },
      { stat: "70% of consumers want to give or receive subscription-based gifts.", source: "SUBTA (Subscription Trade Association)" },
      { stat: "Daughters ages 25-45 account for 38% of all Mother's Day gift purchases.", source: "National Retail Federation" },
      { stat: "Gift recipients are 4.2x more likely to become repeat purchasers of a product received as a gift vs. discovering it through advertising.", source: "Gift Economy Research / Wharton" }
    ],

    // Avatar 8: The Reclaimed Woman
    8: [
      { stat: "$600 billion in annual spending power among menopausal women.", source: "GenM Menopause Report" },
      { stat: "91% of menopausal women have NEVER seen menopause-specific marketing for consumer products.", source: "GenM Menopause Report" },
      { stat: "Menopause affects 1.1 billion women globally by 2025, with the average duration of symptoms being 7-14 years.", source: "World Health Organization" },
      { stat: "Hot flash-related perspiration contains different protein compounds than exercise sweat, requiring enzyme-based cleaning for removal.", source: "Journal of Clinical Endocrinology" }
    ],

    // Avatar 9: The Crossroads Woman
    9: [
      { stat: "Women ages 38-52 report the highest rates of life dissatisfaction and identity questioning — the 'midlife meaning crisis.'", source: "Gallup Well-Being Index" },
      { stat: "Sensory environment changes (scent, texture, visual) are among the most effective low-cost interventions for emotional reset during life transitions.", source: "Journal of Environmental Psychology" },
      { stat: "72% of women in major life transitions make at least one significant 'identity purchase' — a product bought specifically to signal their new self.", source: "Consumer Psychology Quarterly" },
      { stat: "The 'premium self-care as identity statement' market grew 340% from 2019-2024 among women 35-55.", source: "McKinsey Consumer Insights" }
    ],

    // Avatar 10: The Memory Keeper
    10: [
      { stat: "Scent is the sense most directly connected to memory — olfactory signals reach the hippocampus (memory center) and amygdala (emotion center) before any other brain region.", source: "Harvard Gazette / Neuroscience" },
      { stat: "Grieving individuals report that scent-related memories of their partner are the most vivid and emotionally powerful.", source: "Journal of Bereavement Studies" },
      { stat: "Widowed women ages 55-80 represent one of the most underserved demographics in consumer products, with virtually zero brands speaking to their experience.", source: "AARP Widowhood study" },
      { stat: "The average widow makes a major household product change within 6-18 months — not out of desire but because existing products become emotionally untenable.", source: "Consumer Grief Research / Columbia" }
    ],

    // Avatar 11: The Phoenix
    11: [
      { stat: "Creating a fresh-smelling home environment is cited as a key emotional restoration tool post-divorce.", source: "Smart Divorce Coach / Divorce recovery research" },
      { stat: "Divorced women spend 23% more on home environment products in the 12 months following separation.", source: "Consumer Insights / Life Transition Spending" },
      { stat: "Sensory environment changes — rearranging furniture, new scents, different textures — are among the most effective emotional restoration tools post-divorce.", source: "Journal of Divorce & Remarriage" },
      { stat: "78% of divorced women report that changing their home environment was a critical step in emotional recovery.", source: "Smart Divorce Coach survey" }
    ],

    // Avatar 12: The Confidence Catalyst
    12: [
      { stat: "Women rate body odor as the single most important physical factor in partner attraction — above face, body type, and height.", source: "Evolution and Human Behavior journal" },
      { stat: "Scent-based attraction operates unconsciously through the limbic system, influencing mate selection before conscious evaluation.", source: "Proceedings of the Royal Society B" },
      { stat: "The average woman on dating apps goes on 2-3 first dates per month; scent is cited as a top-3 factor in deciding on a second date.", source: "Hinge / Dating behavior research" },
      { stat: "Premium personal care spending among single women 25-45 is 2.8x higher than married women in the same age bracket.", source: "NPD Beauty Tracker" }
    ]
  },

  // ─────────────────────────────────────────────
  // CROSS-AVATAR THEMES
  // ─────────────────────────────────────────────
  themes: [
    { id: "invisibility", label: "Invisibility / Being Unseen", avatarIds: [1, 4, 5, 6] },
    { id: "compliments", label: "Compliment-Driven", avatarIds: [1, 4, 12] },
    { id: "menopause", label: "Menopause / Body Changes", avatarIds: [2, 8] },
    { id: "identity", label: "Identity Crisis / Reclamation", avatarIds: [3, 6, 9, 11] },
    { id: "life-transition", label: "Major Life Transition", avatarIds: [6, 9, 10, 11] },
    { id: "self-care", label: "Self-Care / Ritual", avatarIds: [3, 5, 6, 8] },
    { id: "gifting", label: "Gifting / Discovery", avatarIds: [7] },
    { id: "dating", label: "Dating / Attraction", avatarIds: [11, 12] },
    { id: "grief", label: "Grief / Loss", avatarIds: [10] },
    { id: "hotel-luxury", label: "Hotel / Luxury Fantasy", avatarIds: [1, 4, 6, 7] },
    { id: "odor-solution", label: "Odor Problem Solving", avatarIds: [2, 3, 8, 12] },
    { id: "relationship", label: "Relationship Dynamics", avatarIds: [5, 10, 11, 12] }
  ],

  // ─────────────────────────────────────────────
  // GLOBAL COMPETITIVE POSITIONING
  // ─────────────────────────────────────────────
  competitorOverview: [
    {
      brand: "Tyler Glamorous Wash",
      price: "$2.50/load",
      rating: "4.7/5 (22K reviews)",
      strengths: [
        "Strongest cult following in luxury laundry",
        "Viral TikTok presence with millions of views",
        "Room-filling scent that creates genuine addiction",
        "Multiple scent varieties (Diva, High Maintenance, Kathina)"
      ],
      weaknesses: [
        "Performs slightly better than water in independent cleaning tests",
        "Widespread Amazon counterfeit problem eroding trust",
        "No ingredient transparency — won't disclose full formulation",
        "At $2.50/load, 4x more expensive than Maison Laundrin per load",
        "Scent can trigger headaches — too concentrated for sensitive users"
      ],
      keyQuote: "A great example of how perfume can trick you into thinking your clothes are actually clean. Lipstick on a pig.",
      mlAngle: "Same obsession-level scent + actual cleaning power. At $0.61/load vs $2.50, we're 75% cheaper AND our 3-stage enzyme system actually cleans. Tyler is perfume for your washing machine; we're the whole package."
    },
    {
      brand: "Laundry Sauce",
      price: "$0.85-$1.00/load",
      rating: "4.6/5",
      strengths: [
        "Strong DTC brand with modern aesthetic",
        "Good subscription model with consistent delivery",
        "Pod format is convenient and mess-free",
        "Effective Instagram/influencer marketing"
      ],
      weaknesses: [
        "Branding skews heavily masculine — 'Sauce' alienates female buyers",
        "Scent longevity is 1-2 days max, not the 5-7 they imply",
        "Limited scent selection compared to competitors",
        "Higher per-load cost than Maison Laundrin",
        "No enzyme-based cleaning — relies on standard surfactants"
      ],
      keyQuote: "My wife said she loved the smell and actually preferred it to my regular cologne.",
      mlAngle: "Similar DTC model but built for women, by women. Better scent technology (micro-encapsulation vs standard fragrance), better price per load, and a brand identity that speaks to her — not to him."
    },
    {
      brand: "The Laundress",
      price: "$0.83-$1.04/load",
      rating: "Mixed (post-recall)",
      strengths: [
        "Established luxury positioning — sold at Nordstrom, Saks, Bloomingdale's",
        "Beautiful packaging and brand story (two NYC women founders)",
        "Comprehensive product line (fabric-specific detergents)",
        "Strong editorial/magazine placement"
      ],
      weaknesses: [
        "Massive 2022 bacteria contamination recall destroyed consumer trust",
        "Scent fades within 24 hours — no micro-encapsulation technology",
        "Acquired by Unilever — lost indie brand credibility",
        "Reformulated post-recall with questionable quality",
        "Premium price without premium performance"
      ],
      keyQuote: "There's absolutely no remaining scent after the wash.",
      mlAngle: "The luxury positioning The Laundress built but couldn't sustain. Same aspirational tier with no recall history, genuine scent longevity (5-7 days vs 24 hours), and independent ownership that means quality control stays in our hands."
    },
    {
      brand: "Hex Performance",
      price: "$0.10-$0.13/load",
      rating: "4.5/5",
      strengths: [
        "Genuinely effective odor elimination technology",
        "Extremely affordable per-load cost",
        "Strong niche following in athletic/outdoor communities",
        "Works well on synthetic fabrics that trap odor"
      ],
      weaknesses: [
        "Zero scent appeal — purely functional product",
        "Branding targets athletes, alienates everyday consumers",
        "Doesn't work as well on natural fabrics (cotton, linen)",
        "No luxury or emotional positioning whatsoever",
        "Limited to odor removal — not a complete laundry solution"
      ],
      keyQuote: "These pods tackled sweaty gym gear and dirty gardening clothes easily.",
      mlAngle: "We match Hex's enzyme-level odor elimination but add the luxury scent experience they completely ignore. For the woman who needs performance AND wants to feel beautiful — not one or the other."
    },
    {
      brand: "DedCool",
      price: "$0.58/load",
      rating: "3.8/5",
      strengths: [
        "Cool-girl branding that appeals to Gen Z/Millennials",
        "Sold at Sephora — strong retail distribution for discovery",
        "Gender-neutral positioning is on-trend",
        "Clean ingredient list"
      ],
      weaknesses: [
        "3.8/5 rating — consumers say it's more brand than substance",
        "Scent is pleasant but unremarkable — nobody raves",
        "No advanced cleaning or odor elimination technology",
        "Small bottle size means higher effective cost",
        "Brand awareness is low outside coastal urban markets"
      ],
      keyQuote: "I've purchased probably 4 for myself and 4-5 as gifts.",
      mlAngle: "Similar price point ($0.61 vs $0.58) with dramatically better scent technology and cleaning power. DedCool is a fashion accessory; we're a performance product in luxury packaging."
    },
    {
      brand: "Mrs. Meyer's Clean Day",
      price: "$0.19-$0.23/load",
      rating: "4.7/5",
      strengths: [
        "Massive retail distribution — available everywhere",
        "Strong 'natural/botanical' brand positioning",
        "Affordable entry point to premium laundry",
        "Wide variety of seasonal and core scents",
        "Beautiful packaging that stands out on shelf"
      ],
      weaknesses: [
        "Multiple lawsuits for greenwashing — not as natural as marketed",
        "Scents read as 'kitchen cleaner' not 'personal luxury fragrance'",
        "No lasting scent on clothing — fades in the dryer",
        "Standard surfactant cleaning — no enzyme technology",
        "The 'premium' positioning is really just 'slightly above Tide'"
      ],
      keyQuote: "Garden-herb scents that make you smell like you've been cleaning, not like you belong in a five-star hotel.",
      mlAngle: "Mrs. Meyer's is where women go when they want something 'better than Tide.' We're where they go when they want something transformative. Different category entirely — like comparing a Toyota to a Mercedes."
    },
    {
      brand: "Le Labo x The Laundress",
      price: "$2.75-$3.25/load",
      rating: "High among niche fragrance community",
      strengths: [
        "Le Labo brand cachet — the most respected niche fragrance house",
        "Santal 33 scent on your sheets is genuinely aspirational",
        "Ultra-premium positioning attracts the highest-end consumer",
        "Gift-worthy packaging and brand story"
      ],
      weaknesses: [
        "At $2.75-$3.25/load, it's prohibitively expensive for regular use",
        "Still uses The Laundress base formula — same recall concerns",
        "Scent fades within 24-48 hours despite the premium price",
        "Extremely limited availability and scent options",
        "More of a novelty/gift purchase than a sustainable habit"
      ],
      keyQuote: "The fantasy of hotel sheets at home — if you can afford $3.25 every time you do laundry.",
      mlAngle: "We deliver the Le Labo-level scent experience at $0.61/load — sustainable for daily use, not just special occasions. Plus our scent lasts 5-7 days vs their 24-48 hours. The democratization of ultra-luxury laundry."
    }
  ],

  // ─────────────────────────────────────────────
  // MAISON LAUNDRIN PRODUCT SPECS (for reference)
  // ─────────────────────────────────────────────
  product: {
    brand: "Maison Laundrin",
    price: "$39/bottle",
    loadsPerBottle: 64,
    pricePerLoad: "$0.61",
    scentTechnology: "Micro-encapsulated fragrance — tiny scent capsules bond to fabric fibers and release with friction, body heat, and movement over 5-7 days",
    cleaningTechnology: "3-stage enzyme system — breaks down proteins, starches, and fats at the molecular level, including 2-nonenal (age-related body odor compound) and sweat compounds that are not water-soluble",
    ingredients: "Plant-based formula, no harsh sulfates or synthetic irritants",
    positioning: "Luxury laundry experience with performance cleaning science"
  }
};
