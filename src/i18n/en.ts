export const en = {
  common: {
    back: '← Back',
    backToProjects: '← Projects',
  },
  home: {
    name: 'Nicolas Gomez',
    subtitle: 'Product Engineer',
    seeProjects: 'See Projects',
    aboutMe: 'About Me',
  },
  aboutMe: {
    title: 'Product Engineer · Full-Stack & Mobile',
    tagline:
      'I build and launch subscription-based web and mobile products, combining software engineering, product strategy and storytelling.',
    description:
      'Journalist turned software engineer, focused on building user-centered products with React, React Native, TypeScript, Python and Supabase—from initial research and UX to payments, deployment and growth.',
    educationLabel: 'Education',
    education: [
      {
        degree: 'Journalism',
        institution: 'Universidad de Santiago de Chile',
        dates: '2014 — 2019',
      },
      {
        degree: 'Computer Science',
        institution: 'Duoc UC',
        dates: '2023 — 2026',
      },
    ],
    skillsLabel: 'Skills',
    skills: [
      {
        specialty: 'Product',
        items: ['Product Engineering', 'Product Strategy', 'UX Writing'],
      },
      { specialty: 'Mobile', items: ['React Native', 'Expo', 'TypeScript'] },
      { specialty: 'Web', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
      {
        specialty: 'Backend',
        items: ['Supabase', 'PostgreSQL', 'SQL', 'Edge Functions', 'RLS'],
      },
      {
        specialty: 'Subscription',
        items: ['RevenueCat', 'Stripe Billing', 'Web-to-App Identity'],
      },
      {
        specialty: 'Delivery',
        items: ['Playwright', 'GitHub', 'App Store', 'Google Play'],
      },
    ],
  },
  brainy: {
    title: 'Brainy — An ADHD-first system for starting, not just planning',
    role: 'Product Engineer · Mobile, Web-to-App & Subscription Infrastructure',
    intro: [
      'I built Brainy around a narrower problem than “productivity”: starting a task when you already know what needs to be done but still feel stuck.',
      'Instead of presenting another large to-do list, Brainy breaks work into manageable steps and gives immediate visual feedback through routines, rewards and a pixel-art companion that evolves with the user’s progress.',
    ],
    evidence: {
      heading: 'Evidence',
      items: [
        '**1K+ public downloads** on Google Play.',
        'Available on **iOS and Android**.',
        'Localized into **6 languages** on the App Store.',
        'Personalized onboarding built from **14 routine templates and 16 task templates**.',
        'Web funnel and production changes documented in a [public GitHub repository](https://github.com/niconiconico32/brainy-web).',
        'Active development through **March 2026**, including localization, billing and onboarding updates.',
      ],
      links:
        '[Live product](https://brainyadhd.com/) · [App Store](https://apps.apple.com/cl/app/brainy-tdah-tareas-y-h%C3%A1bitos/id6761862417) · [Google Play](https://play.google.com/store/apps/details?id=com.brainyahdh.app) · [Web source](https://github.com/niconiconico32/brainy-web)',
    },
    owned: {
      heading: 'What I owned',
      paragraphs: [
        'I worked across the complete product system: React Native mobile development, onboarding, task and routine modeling, Supabase authentication and data, web-to-app identity, subscription billing, entitlement validation, localization, store releases and production support.',
        'The mobile product includes task decomposition, routine tracking, voice capture, home-screen widgets and a progression system where completing routines develops a virtual companion.',
      ],
    },
    architecture: {
      heading: 'Architecture decisions',
      blocks: [
        {
          heading: 'A build-free acquisition funnel.',
          body: 'I kept the web funnel in HTML, CSS and JavaScript without a frontend build pipeline. The funnel needed to be easy to audit and fast to deploy; stateful and privileged operations remained behind Supabase Edge Functions.',
        },
        {
          heading: 'One identity from checkout to mobile.',
          body: 'The Supabase user UUID is also used as the RevenueCat App User ID. I avoided treating email as a durable identity because email matching becomes unsafe when purchases are retried, restored or opened on another device.',
        },
        {
          heading: 'Billing and access are separate responsibilities.',
          body: 'Stripe handles billing, RevenueCat represents subscription entitlement, and Supabase owns user identity and application data. A successful browser redirect is never enough to grant access: the entitlement is verified before a purchased plan is attached to an account.',
        },
        {
          heading: 'Recovery over HTTPS instead of fragile deep links.',
          body: 'Password recovery is completed on the web with a short-lived Supabase session. This avoids different callback behavior between Expo Go, development builds and production apps.',
        },
        {
          heading: 'Hosted subscription management.',
          body: 'Rather than implementing custom cancellation logic, Brainy sends users to Stripe’s hosted customer portal. That reduced the amount of sensitive billing code the product needed to own.',
        },
      ],
      closing:
        'The Stripe Live release passed **15/15 regression suites**, including identity, plan recovery, paywall, subscription management and key-rotation scenarios. [Inspect the release commit →](https://github.com/niconiconico32/brainy-web/commit/8e9225cc24ffcf19d579a7ce8c6490197f5e92c8)',
    },
    boundary: {
      heading: 'An honest boundary',
      body: 'Brainy does not diagnose or treat ADHD. It is a product designed around task-initiation friction and executive-function needs. I am careful not to turn a product hypothesis—or a polished interface—into a medical claim.',
    },
    footer: {
      stack:
        '**Stack:** React Native, Expo, TypeScript, Supabase, PostgreSQL, Edge Functions, RevenueCat, Stripe, HTML, CSS and JavaScript.',
      lastActive: '**Last active:** October 2026.',
    },
  },
  rin: {
    title: 'RIN — A web-to-app funnel that delivers a configured product',
    role: 'Product Engineer · Personalized Onboarding, Mobile & Subscription Systems',
    intro: [
      'RIN is an anime-inspired habit product for men who want to improve their discipline, focus, fitness and confidence.',
      'The interesting engineering problem was not the habit checklist. It was making acquisition, personalization, payment and the first mobile session behave like one continuous product.',
      'A user completes the diagnosis and chooses a plan on the web. When they enter the app, their habits and characters are already waiting for them.',
    ],
    system: {
      heading: 'Product system',
      items: [
        '**6-question** behavioral diagnosis.',
        '**18 canonical habits** across four improvement categories.',
        'A personalized plan containing **6 selected habits**.',
        '**6 character archetypes**, assigned without repetition.',
        '**20 progression levels** organized into **4 visual evolution forms**.',
        'Persistent accounts that preserve the plan when the user changes phones.',
        'One subscription entitlement shared across the web and mobile app.',
      ],
      links:
        '[Explore the live funnel](https://tryrin.com/) · [Privacy and product data](https://tryrin.app/privacy)',
    },
    owned: {
      heading: 'What I owned',
      paragraphs: [
        'I designed and built the web funnel, mobile handoff, habit and character model, account lifecycle, subscription flow and transactional email infrastructure.',
        'The system connects a personalized web onboarding with a React Native application using Supabase, RevenueCat, Stripe and Resend.',
      ],
    },
    architecture: {
      heading: 'Architecture decisions',
      blocks: [
        {
          heading: 'Web onboarding is part of the product.',
          body: 'I used the funnel to perform the cognitively expensive work—diagnosis, habit selection and character pairing—before the first app session. The mobile experience can therefore begin with action instead of another empty setup screen.',
        },
        {
          heading: 'The checkout result does not authorize the user.',
          body: 'RIN does not trust a success URL or client-side purchase flag. The backend verifies the RevenueCat entitlement before finalizing the plan and writing personalized habits to the user’s account.',
        },
        {
          heading: 'Canonical identifiers across every layer.',
          body: 'The same six character identifiers are used by the web funnel, PostgreSQL and the mobile application. I chose this over maintaining separate display-name mappings, which had already created the risk of plans reaching mobile with an undefined character.',
        },
        {
          heading: 'Cross-device access shaped the authentication flow.',
          body: 'An anonymous, device-bound plan would have produced a simpler demo, but it would fail as soon as someone replaced their phone. RIN persists identity through Supabase Auth and associates the purchased plan with that account.',
        },
        {
          heading: 'Each service has a constrained responsibility.',
          items: [
            'Supabase owns identity, PostgreSQL data and plan finalization.',
            'Stripe processes web billing.',
            'RevenueCat exposes the subscription entitlement to web and mobile.',
            'Resend delivers transactional account email.',
            'React Native and Expo provide the mobile client.',
          ],
        },
      ],
      closing:
        'Password recovery is deliberately completed through an HTTPS web flow instead of an app deep link, reducing environment-specific callback behavior and keeping recovery functional even when the app is not installed.',
    },
    status: {
      heading: 'Current status',
      body: 'The web funnel is live and the iOS build was submitted for App Store review in **October 2026**. RIN is still earlier than Brainy, so I am not presenting invented adoption metrics or calling it a proven growth engine. The evidence today is the working funnel, production subscription architecture and end-to-end handoff into the app.',
    },
    footer: {
      stack:
        '**Stack:** React Native, Expo, TypeScript, Supabase, PostgreSQL, Edge Functions, RevenueCat, Stripe and Resend.',
      lastActive: '**Last active:** October 2026.',
    },
  },
}
