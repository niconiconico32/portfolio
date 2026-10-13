import { Link } from 'react-router-dom'
import rinlogo from '@/assets/rinlogo.png'

const linkClass =
  'text-[#F5F1E8] underline decoration-[#F5F1E8]/30 underline-offset-4 transition-colors hover:decoration-[#F5F1E8]'

const bodyClass = 'text-base leading-relaxed text-[#F5F1E8]/80'

function Rin() {
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
            src={rinlogo}
            alt="RIN"
            className="h-24 w-auto self-start"
          />
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            RIN — A web-to-app funnel that delivers a configured product
          </h1>
          <p className="font-heading text-base font-medium text-[#F5F1E8]/70 sm:text-lg">
            Product Engineer · Personalized Onboarding, Mobile &amp;
            Subscription Systems
          </p>
          <p className={bodyClass}>
            RIN is an anime-inspired habit product for men who want to improve
            their discipline, focus, fitness and confidence.
          </p>
          <p className={bodyClass}>
            The interesting engineering problem was not the habit checklist. It
            was making acquisition, personalization, payment and the first
            mobile session behave like one continuous product.
          </p>
          <p className={bodyClass}>
            A user completes the diagnosis and chooses a plan on the web. When
            they enter the app, their habits and characters are already waiting
            for them.
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Product system
          </h2>
          <ul className={`list-disc space-y-2 pl-5 ${bodyClass}`}>
            <li>
              <strong className="font-semibold text-[#F5F1E8]">6-question</strong>{' '}
              behavioral diagnosis.
            </li>
            <li>
              <strong className="font-semibold text-[#F5F1E8]">
                18 canonical habits
              </strong>{' '}
              across four improvement categories.
            </li>
            <li>
              A personalized plan containing{' '}
              <strong className="font-semibold text-[#F5F1E8]">
                6 selected habits
              </strong>
              .
            </li>
            <li>
              <strong className="font-semibold text-[#F5F1E8]">
                6 character archetypes
              </strong>
              , assigned without repetition.
            </li>
            <li>
              <strong className="font-semibold text-[#F5F1E8]">
                20 progression levels
              </strong>{' '}
              organized into{' '}
              <strong className="font-semibold text-[#F5F1E8]">
                4 visual evolution forms
              </strong>
              .
            </li>
            <li>
              Persistent accounts that preserve the plan when the user changes
              phones.
            </li>
            <li>
              One subscription entitlement shared across the web and mobile app.
            </li>
          </ul>
          <p className={bodyClass}>
            <a
              href="https://tryrin.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Explore the live funnel
            </a>{' '}
            ·{' '}
            <a
              href="https://tryrin.app/privacy"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Privacy and product data
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            What I owned
          </h2>
          <p className={bodyClass}>
            I designed and built the web funnel, mobile handoff, habit and
            character model, account lifecycle, subscription flow and
            transactional email infrastructure.
          </p>
          <p className={bodyClass}>
            The system connects a personalized web onboarding with a React
            Native application using Supabase, RevenueCat, Stripe and Resend.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Architecture decisions
          </h2>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Web onboarding is part of the product.
            </h3>
            <p className={bodyClass}>
              I used the funnel to perform the cognitively expensive
              work—diagnosis, habit selection and character pairing—before the
              first app session. The mobile experience can therefore begin with
              action instead of another empty setup screen.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              The checkout result does not authorize the user.
            </h3>
            <p className={bodyClass}>
              RIN does not trust a success URL or client-side purchase flag. The
              backend verifies the RevenueCat entitlement before finalizing the
              plan and writing personalized habits to the user’s account.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Canonical identifiers across every layer.
            </h3>
            <p className={bodyClass}>
              The same six character identifiers are used by the web funnel,
              PostgreSQL and the mobile application. I chose this over
              maintaining separate display-name mappings, which had already
              created the risk of plans reaching mobile with an undefined
              character.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Cross-device access shaped the authentication flow.
            </h3>
            <p className={bodyClass}>
              An anonymous, device-bound plan would have produced a simpler
              demo, but it would fail as soon as someone replaced their phone.
              RIN persists identity through Supabase Auth and associates the
              purchased plan with that account.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-base font-semibold">
              Each service has a constrained responsibility.
            </h3>
            <ul className={`list-disc space-y-2 pl-5 ${bodyClass}`}>
              <li>
                Supabase owns identity, PostgreSQL data and plan finalization.
              </li>
              <li>Stripe processes web billing.</li>
              <li>
                RevenueCat exposes the subscription entitlement to web and
                mobile.
              </li>
              <li>Resend delivers transactional account email.</li>
              <li>React Native and Expo provide the mobile client.</li>
            </ul>
          </div>

          <p className={bodyClass}>
            Password recovery is deliberately completed through an HTTPS web
            flow instead of an app deep link, reducing environment-specific
            callback behavior and keeping recovery functional even when the app
            is not installed.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Current status
          </h2>
          <p className={bodyClass}>
            The web funnel is live and the iOS build was submitted for App Store
            review in{' '}
            <strong className="font-semibold text-[#F5F1E8]">
              October 2026
            </strong>
            . RIN is still earlier than Brainy, so I am not presenting invented
            adoption metrics or calling it a proven growth engine. The evidence
            today is the working funnel, production subscription architecture
            and end-to-end handoff into the app.
          </p>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[#F5F1E8]/10 pt-8 text-sm leading-relaxed text-[#F5F1E8]/60">
          <p>
            <span className="font-semibold text-[#F5F1E8]">Stack:</span> React
            Native, Expo, TypeScript, Supabase, PostgreSQL, Edge Functions,
            RevenueCat, Stripe and Resend.
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

export default Rin
