import { Link } from 'react-router-dom'
import logobrainy from '@/assets/logobrainy.png'

const linkClass =
  'text-[#F5F1E8] underline decoration-[#F5F1E8]/30 underline-offset-4 transition-colors hover:decoration-[#F5F1E8]'

const bodyClass = 'text-base leading-relaxed text-[#F5F1E8]/80'

function Brainy() {
  return (
    <div className="min-h-svh bg-black px-6 py-16 text-[#F5F1E8] sm:py-24">
      <article className="mx-auto flex max-w-3xl flex-col gap-12">
        <Link
          to="/projects"
          className="text-sm text-[#F5F1E8]/60 underline-offset-4 hover:text-[#F5F1E8] hover:underline"
        >
          ← Projects
        </Link>

        <header className="flex flex-col gap-4">
          <img
            src={logobrainy}
            alt="Brainy"
            className="h-24 w-auto self-start"
          />
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Brainy — An ADHD-first system for starting, not just planning
          </h1>
          <p className="font-heading text-base font-medium text-[#F5F1E8]/70 sm:text-lg">
            Product Engineer · Mobile, Web-to-App &amp; Subscription
            Infrastructure
          </p>
          <p className={bodyClass}>
            I built Brainy around a narrower problem than “productivity”:
            starting a task when you already know what needs to be done but
            still feel stuck.
          </p>
          <p className={bodyClass}>
            Instead of presenting another large to-do list, Brainy breaks work
            into manageable steps and gives immediate visual feedback through
            routines, rewards and a pixel-art companion that evolves with the
            user’s progress.
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Evidence
          </h2>
          <ul className={`list-disc space-y-2 pl-5 ${bodyClass}`}>
            <li>
              <strong className="font-semibold text-[#F5F1E8]">
                1K+ public downloads
              </strong>{' '}
              on Google Play.
            </li>
            <li>
              Available on{' '}
              <strong className="font-semibold text-[#F5F1E8]">
                iOS and Android
              </strong>
              .
            </li>
            <li>
              Localized into{' '}
              <strong className="font-semibold text-[#F5F1E8]">
                6 languages
              </strong>{' '}
              on the App Store.
            </li>
            <li>
              Personalized onboarding built from{' '}
              <strong className="font-semibold text-[#F5F1E8]">
                14 routine templates and 16 task templates
              </strong>
              .
            </li>
            <li>
              Web funnel and production changes documented in a{' '}
              <a
                href="https://github.com/niconiconico32/brainy-web"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                public GitHub repository
              </a>
              .
            </li>
            <li>
              Active development through{' '}
              <strong className="font-semibold text-[#F5F1E8]">
                October 2026
              </strong>
              , including localization, billing and onboarding updates.
            </li>
          </ul>
          <p className={bodyClass}>
            <a
              href="https://brainyadhd.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Live product
            </a>{' '}
            ·{' '}
            <a
              href="https://apps.apple.com/cl/app/brainy-tdah-tareas-y-h%C3%A1bitos/id6761862417"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              App Store
            </a>{' '}
            ·{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.brainyahdh.app"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Google Play
            </a>{' '}
            ·{' '}
            <a
              href="https://github.com/niconiconico32/brainy-web"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Web source
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            What I owned
          </h2>
          <p className={bodyClass}>
            I worked across the complete product system: React Native mobile
            development, onboarding, task and routine modeling, Supabase
            authentication and data, web-to-app identity, subscription billing,
            entitlement validation, localization, store releases and production
            support.
          </p>
          <p className={bodyClass}>
            The mobile product includes task decomposition, routine tracking,
            voice capture, home-screen widgets and a progression system where
            completing routines develops a virtual companion.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Architecture decisions
          </h2>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              A build-free acquisition funnel.
            </h3>
            <p className={bodyClass}>
              I kept the web funnel in HTML, CSS and JavaScript without a
              frontend build pipeline. The funnel needed to be easy to audit and
              fast to deploy; stateful and privileged operations remained behind
              Supabase Edge Functions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              One identity from checkout to mobile.
            </h3>
            <p className={bodyClass}>
              The Supabase user UUID is also used as the RevenueCat App User ID.
              I avoided treating email as a durable identity because email
              matching becomes unsafe when purchases are retried, restored or
              opened on another device.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Billing and access are separate responsibilities.
            </h3>
            <p className={bodyClass}>
              Stripe handles billing, RevenueCat represents subscription
              entitlement, and Supabase owns user identity and application data.
              A successful browser redirect is never enough to grant access: the
              entitlement is verified before a purchased plan is attached to an
              account.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Recovery over HTTPS instead of fragile deep links.
            </h3>
            <p className={bodyClass}>
              Password recovery is completed on the web with a short-lived
              Supabase session. This avoids different callback behavior between
              Expo Go, development builds and production apps.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Hosted subscription management.
            </h3>
            <p className={bodyClass}>
              Rather than implementing custom cancellation logic, Brainy sends
              users to Stripe’s hosted customer portal. That reduced the amount
              of sensitive billing code the product needed to own.
            </p>
          </div>

          <p className={bodyClass}>
            The Stripe Live release passed{' '}
            <strong className="font-semibold text-[#F5F1E8]">
              15/15 regression suites
            </strong>
            , including identity, plan recovery, paywall, subscription
            management and key-rotation scenarios.{' '}
            <a
              href="https://github.com/niconiconico32/brainy-web/commit/8e9225cc24ffcf19d579a7ce8c6490197f5e92c8"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Inspect the release commit →
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            An honest boundary
          </h2>
          <p className={bodyClass}>
            Brainy does not diagnose or treat ADHD. It is a product designed
            around task-initiation friction and executive-function needs. I am
            careful not to turn a product hypothesis—or a polished interface—into
            a medical claim.
          </p>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[#F5F1E8]/10 pt-8 text-sm leading-relaxed text-[#F5F1E8]/60">
          <p>
            <span className="font-semibold text-[#F5F1E8]">Stack:</span> React
            Native, Expo, TypeScript, Supabase, PostgreSQL, Edge Functions,
            RevenueCat, Stripe, HTML, CSS and JavaScript.
          </p>
          <p>
            <span className="font-semibold text-[#F5F1E8]">Last active:</span>{' '}
            October 2026.
          </p>
        </footer>
      </article>
    </div>
  )
}

export default Brainy
