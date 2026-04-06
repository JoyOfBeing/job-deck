'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const slides = [
  // 0 — COVER
  () => (
    <div className="slide cover">
      <h1>J.O.B.</h1>
      <p className="subtitle">The Transition Company</p>
      <p className="tagline">The largest involuntary liberation in economic history is underway. We&apos;re building the infrastructure to catch the people falling out of the old system — and launch the ones ready to come alive.</p>
    </div>
  ),

  // 1 — THE MOMENT (MANIFESTO OPENER)
  () => (
    <div className="slide">
      <h3>2026</h3>
      <h1>The floor is falling out.</h1>
      <p>Layoffs aren&apos;t a news cycle anymore. They&apos;re a climate. Every week another company announces another round, another function, another &ldquo;strategic realignment&rdquo; that means the same thing: the machines can do it now.</p>
      <p>The economists are measuring it in unemployment points. The markets are pricing it as demand destruction. The headlines are calling it a crisis.</p>
      <p><strong>All of them are looking at the wrong thing.</strong></p>
    </div>
  ),

  // 2 — THE REFRAME
  () => (
    <div className="slide">
      <h3>What they&apos;re missing</h3>
      <h1>They weren&apos;t laid off. They were let out.</h1>
      <p style={{ fontSize: '1.6rem', color: 'var(--gold)', fontWeight: 300, margin: '1.5rem 0' }}>This is the largest involuntary liberation in economic history.</p>
      <p>Tens of millions of people are being stripped of the performance of productivity — and forced, for the first time in their adult lives, to ask what they would actually do if the old deal stopped being available.</p>
      <p>Most panic. They sharpen the resume, chase the next title, and compete for roles that are being automated faster than they can interview for them.</p>
      <p>But a growing number do something the economy has no variable for. <strong>They stop.</strong> Not stop working — stop <em>performing</em>. And they sit with a question they&apos;d been too busy, too comfortable, or too afraid to ask before the layoff made it unavoidable.</p>
    </div>
  ),

  // 3 — THURMAN QUOTE
  () => (
    <div className="slide close-slide">
      <p className="big-quote">&ldquo;Don&apos;t ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive.&rdquo;</p>
      <p className="attribution">&mdash; Howard Thurman</p>
    </div>
  ),

  // 4 — WHAT THE LAYOFF REVEALS
  () => (
    <div className="slide">
      <h3>What the layoff reveals</h3>
      <h1>The deal was never the job. It was the suppression.</h1>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>The trade we made</h3>
          <p>Trade your energy for a paycheck. Trade your time for an identity. Trade your aliveness for a title that tells your family what you do. A whole generation signed up for it. The machine needed compliant cognitive labor — not alive human beings — and we delivered.</p>
        </div>
        <div className="card">
          <h3>What the trade cost</h3>
          <p>Every person quietly carried a list of the things they would do if they could afford to. The cooking, the building, the teaching, the making, the healing, the time with their kids. The list got longer every year. Then one day the company eliminated the role — and the list was all that was left.</p>
        </div>
        <div className="card">
          <h3>What it revealed</h3>
          <p>These aren&apos;t people who lack skills or drive. Their skills were <em>allocated</em> — by incentive, by fear, by the gravitational pull of the paycheck — to work that didn&apos;t make them come alive. Take the paycheck away and a different set of skills surfaces almost immediately.</p>
        </div>
      </div>
    </div>
  ),

  // 5 — THE PASSAGE
  () => (
    <div className="slide">
      <h3>The passage</h3>
      <h1>This isn&apos;t a weekend workshop. It&apos;s bereavement.</h1>
      <p>The people losing their jobs are grieving an identity. Not a paycheck — an <em>identity.</em> The one they answered to at dinner parties. The one their parents finally understood. The one the whole culture told them was the point.</p>
      <p>The ones who surrender to the grief — who let it strip away the performance and sit with the terrifying question of who they are without a title — emerge as something the old economy didn&apos;t know how to hire and the new economy can&apos;t function without.</p>
      <p>The passage takes <strong>12 to 18 months</strong>. It cannot be rushed. It cannot be replaced by a Udemy course. It cannot be handled by a chatbot. And on the other side of it is a human the market will pay for — because AI can&apos;t fake what they&apos;ve become.</p>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '100%' }}>They don&apos;t start more businesses because they learned new skills. <strong>They stop suppressing the ones they already had.</strong></p>
    </div>
  ),

  // 7 — THE PROBLEM
  () => (
    <div className="slide">
      <h3>The problem</h3>
      <h1>Nobody&apos;s building a passage.</h1>
      <p>Old HR was never about resourcing humans. It manages humans <em>as</em> resources — to be optimized, utilized, and replaced. Now it&apos;s replacing them at scale.</p>
      <p>And when the severance check hits, what does HR offer? A templated goodbye and a LinkedIn Premium code. Sending people right back into the loop that just spit them out.</p>
      <p>The $2.5B outplacement industry is a $4 billion lie: that a sharper resume will land people back where they were before. <strong>But where they were before is exactly what stopped working.</strong></p>
      <p style={{ marginTop: '1rem' }}>Every CEO and CHRO knows this. Every therapist, coach, and healer knows this. Every laid-off worker knows this.</p>
      <p>None of them have an answer. <strong>We do.</strong></p>
    </div>
  ),

  // 8 — THE THESIS
  () => (
    <div className="slide">
      <h3>Our thesis</h3>
      <h1>J.O.B. is the transition company.</h1>
      <p style={{ fontSize: '1.35rem', color: 'var(--text)', fontWeight: 600, marginBottom: '1.25rem' }}>We&apos;re building the infrastructure for the largest involuntary liberation in economic history.</p>
      <p>Not a job board. Not a retraining program. Not another outplacement service with better branding.</p>
      <p>A living organism that catches people when they fall out of the old system, holds them through the 12-to-18-month passage, and launches them into the new economy on the other side.</p>
      <p>Some start businesses. Some transform organizations. Some — the therapists, healers, bodyworkers, artists, furniture makers, mediators, farmers — finally get paid for gifts the old economy never valued.</p>
      <p><strong>We&apos;re not rebuilding the old system. We&apos;re the infrastructure for the one that&apos;s replacing it.</strong></p>
    </div>
  ),

  // 9 — THE ORGANISM
  () => (
    <div className="slide">
      <h3>The organism</h3>
      <h2>Six doors. One transition.</h2>
      <p>Every experiment is a way in. Every experiment feeds the others. The whole thing is built to catch you wherever you are in the passage — and launch you when you&apos;re ready.</p>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>The Church</h3>
          <p><em>The grief container.</em> AA × Indeed × Meow Wolf had a baby. Where the &ldquo;in order to&rdquo; dissolves and the real question surfaces.</p>
        </div>
        <div className="card">
          <h3>MagicShowLand</h3>
          <p><em>The Transition Centers.</em> Physical spaces — abandoned churches, castles, colleges — where the passage happens in-person, in community.</p>
        </div>
        <div className="card">
          <h3>Magic Shows</h3>
          <p><em>The nervous system reset.</em> Multi-day stateside and multi-week Costa Rica immersions that break the fear loop and accelerate the passage.</p>
        </div>
        <div className="card">
          <h3>The J.O.B. Board</h3>
          <p><em>The marketplace for the alive.</em> Sovereign humans get paid for what AI can&apos;t do. 20% platform fee on every transaction.</p>
        </div>
        <div className="card">
          <h3>Business 3.0</h3>
          <p><em>The new operating system.</em> For the companies built by the transitioned — organisms instead of machines. Consulting, cohorts, certification.</p>
        </div>
        <div className="card">
          <h3>New Human Resources</h3>
          <p><em>The enterprise door.</em> Companies doing layoffs pay us to put their people through the passage. The revenue engine that funds the whole organism.</p>
        </div>
      </div>
    </div>
  ),

  // 10 — THE CHURCH (zoom in)
  () => (
    <div className="slide">
      <h3>The Church</h3>
      <h1>AA × Indeed × Meow Wolf had a baby.</h1>
      <p>It isn&apos;t a religion. There&apos;s no deity. No dogma. But there&apos;s sacrament — and the sacrament is the question itself: <em>what makes you come alive?</em></p>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>From AA</h3>
          <p>The container. Sunday Night Live. Small groups. Body-based check-ins that bypass the intellectualization professionals use as a defense. People admitting, out loud, that the thing they&apos;ve been performing isn&apos;t the thing they are — and being held there until something true surfaces.</p>
        </div>
        <div className="card">
          <h3>From Indeed</h3>
          <p>The practical function. People arrive because they&apos;ve lost or hate their jobs. Church is the place they go <em>after</em> LinkedIn didn&apos;t work — and the place they leave ready to build something the old economy couldn&apos;t imagine.</p>
        </div>
        <div className="card">
          <h3>From Meow Wolf</h3>
          <p>The weirdness. Church is an immersive experience, not a service. Playful, strange, alive — on purpose. The professional self can&apos;t be coaxed out through a webinar. It has to be <em>surprised.</em></p>
        </div>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '100%' }}>Live now at apply.itsthejob.com. Doctrine written. Congregation forming.</p>
    </div>
  ),

  // 11 — TRANSITION CENTERS (MagicShowLand)
  () => (
    <div className="slide">
      <h3>MagicShowLand</h3>
      <h1>Transition Centers.</h1>
      <p>Abandoned churches. Castles. Colleges that couldn&apos;t keep the lights on. Buildings the old economy can&apos;t use anymore, reactivated as physical infrastructure for the transition.</p>
      <p>The form adapts to the place — urban studios, rural retreats, neighborhood halls. The function is constant: a room you can walk into when the floor falls out, and people who will hold it with you until you can stand on the new one.</p>
      <p><strong>We&apos;re building the national network. The first three open in the first 24 months.</strong></p>
      <div className="two-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>What&apos;s inside</h3>
          <ul>
            <li>Small groups of 6–8, meeting twice a week</li>
            <li>Body-based check-ins, not performance reviews</li>
            <li>Practical skill-building alongside emotional honesty</li>
            <li>Practices that distinguish what you&apos;re feeling from the story you&apos;re telling about it</li>
            <li>Co-regulation — nervous systems in the same room</li>
            <li>An AI-native toolkit layered on top of all of it</li>
          </ul>
        </div>
        <div className="card">
          <h3>Why physical matters</h3>
          <p><strong>You can&apos;t grieve alone on Zoom.</strong> Or you can, but you won&apos;t come out the other side.</p>
          <p>People who process the loss in a room full of other humans take real risk on the other side — they start the thing, make the call, launch the practice. People who white-knuckle through it alone, refreshing LinkedIn, mostly just spiral.</p>
          <p>No AI can replicate this. Not because of a capability gap — because the thing that does the work isn&apos;t information. It&apos;s presence.</p>
        </div>
      </div>
    </div>
  ),

  // 12 — THE FLYWHEEL
  () => (
    <div className="slide">
      <h3>The flywheel</h3>
      <h1>How the organism feeds itself.</h1>
      <div className="two-col" style={{ marginTop: '0.75rem' }}>
        <div className="card">
          <h3>1 &middot; Catch them when they fall</h3>
          <p>Companies doing layoffs pay us (<strong>NHR</strong>) to put their people through the passage. The Church takes them in. Magic Shows reset their nervous systems. Transition Centers hold them physically for 12–18 months.</p>
        </div>
        <div className="card">
          <h3>2 &middot; Launch them into the new economy</h3>
          <p>The ones who come through start companies. Some become sellers on the <strong>J.O.B. Board</strong> (20% platform fee). Some build <strong>Business 3.0</strong> organisms. Some become Guides for the next cohort.</p>
        </div>
        <div className="card">
          <h3>3 &middot; They bring the next wave</h3>
          <p>Their businesses grow. Their communities refer. Their stories spread. Every alive human is a door back into the organism. EOS scaled to $145M on the same mechanic.</p>
        </div>
        <div className="card">
          <h3>4 &middot; The cycle compounds</h3>
          <p>Eventually the companies they build face their own transitions. They already trust us. The flywheel never stops — because the passage never stops.</p>
        </div>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '100%' }}><strong>NHR funds the organism. The organism feeds NHR. Every door compounds every other door.</strong></p>
    </div>
  ),

  // 13 — NHR (the revenue engine, now framed inside the whole)
  () => (
    <div className="slide">
      <h3>The revenue engine</h3>
      <h1>New Human Resources.</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text)', fontWeight: 600, marginBottom: '1.25rem' }}>Old HR offboards people. New HR sets them free.</p>
      <p>Companies letting people go pay us per seat. Their laid-off employees get the entire J.O.B. ecosystem — six months of passage through the Church, the Guides, the Board, Business 3.0, and (optionally) the Magic Show.</p>
      <p>This is our wedge into the enterprise. It&apos;s the biggest single revenue line in the organism. And it&apos;s the most legible thing we sell to a CFO — because outplacement is already a line item on every corporate P&amp;L.</p>
      <p><strong>But it&apos;s one door among six.</strong> The whole organism is what makes every door valuable — and what makes NHR something outplacement vendors can&apos;t replicate no matter how much they spend.</p>
      <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--muted)' }}>new-human-resources.vercel.app — live, taking applications</p>
    </div>
  ),

  // 14 — PRICING
  () => (
    <div className="slide">
      <h3>NHR pricing</h3>
      <h2>Priced like outplacement. Works nothing like it.</h2>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>Founder-led</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>1&ndash;50 people</p>
          <p style={{ fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, margin: '0.5rem 0', lineHeight: 1 }}>$3,500<span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>/seat</span></p>
          <p>For CEOs letting go of people they hired themselves.</p>
        </div>
        <div className="card">
          <h3>Growth-stage</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>51&ndash;1,000 people</p>
          <p style={{ fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, margin: '0.5rem 0', lineHeight: 1 }}>$2,500<span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>/seat</span></p>
          <p>For CHROs navigating a restructure. Protect the brand. Take care of the people.</p>
        </div>
        <div className="card">
          <h3>Enterprise</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>1,000+ people</p>
          <p style={{ fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, margin: '0.5rem 0', lineHeight: 1 }}>Custom</p>
          <p>For mass workforce transitions. Multi-cohort, co-branded, board-defensible.</p>
        </div>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '100%' }}>
        <strong>Magic Show add-on: +$5K stateside (multi-day) / +$10K Costa Rica (multi-week), per person.</strong>
      </p>
      <p style={{ marginTop: '0.75rem', textAlign: 'center', maxWidth: '100%', fontSize: '0.95rem', color: 'var(--muted)' }}>
        A single enterprise deal at 30,000 seats × $2,500 = <strong style={{ color: 'var(--text)' }}>$75M</strong>. 10% Magic Show uptake at a blended $7,500 = <strong style={{ color: 'var(--text)' }}>+$22.5M</strong>. One customer.
      </p>
    </div>
  ),

  // 15 — TAM
  () => (
    <div className="slide">
      <h3>Total addressable market</h3>
      <h2>We sit at the intersection of six industries — and a seventh we&apos;re inventing.</h2>
      <div className="three-col" style={{ marginTop: '1.5rem' }}>
        <div className="stat">
          <div className="stat-number">$739B</div>
          <div className="stat-label">Global HR &amp; recruiting</div>
        </div>
        <div className="stat">
          <div className="stat-number">$461B</div>
          <div className="stat-label">Mental health &amp; therapy</div>
        </div>
        <div className="stat">
          <div className="stat-number">$222B</div>
          <div className="stat-label">Wellness &amp; retreats</div>
        </div>
        <div className="stat">
          <div className="stat-number">$42B</div>
          <div className="stat-label">HR technology</div>
        </div>
        <div className="stat">
          <div className="stat-number">$5.3B</div>
          <div className="stat-label">Coaching</div>
        </div>
        <div className="stat">
          <div className="stat-number">$2.5B</div>
          <div className="stat-label">Outplacement (direct replacement)</div>
        </div>
      </div>
      <p style={{ marginTop: '2rem', textAlign: 'center', maxWidth: '100%' }}>Every one of these industries is a fragment of the same problem — nobody built a passage. <strong>The seventh industry is the transition economy itself. It doesn&apos;t exist yet. We&apos;re building it.</strong></p>
    </div>
  ),

  // 16 — COMP
  () => (
    <div className="slide">
      <h3>The comp</h3>
      <h2>Outplacement is the incumbent. EOS is the playbook.</h2>
      <table className="deck-table">
        <thead>
          <tr>
            <th></th>
            <th>LHH / Randstad</th>
            <th>EOS Worldwide</th>
            <th>J.O.B.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What</td>
            <td>Resume workshops, job search tools</td>
            <td>Operating system for businesses</td>
            <td>Transition infrastructure for the largest involuntary liberation in economic history</td>
          </tr>
          <tr>
            <td>Method</td>
            <td>LinkedIn hacks, templated advice</td>
            <td>Traction (cognitive, process)</td>
            <td>Embodiment (somatic, relational, whole-intelligence)</td>
          </tr>
          <tr>
            <td>Revenue</td>
            <td>$2.5B market, shrinking</td>
            <td>$145M, growing</td>
            <td>Wedge live, pipeline forming</td>
          </tr>
          <tr>
            <td>Output</td>
            <td>A slightly better resume</td>
            <td>Better-run companies</td>
            <td>Sovereign humans &amp; the companies they create</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '1.5rem' }}><strong>The person who scaled EOS to $145M is now building the thing that replaces outplacement.</strong></p>
    </div>
  ),

  // 17 — TRACTION
  () => (
    <div className="slide">
      <h3>What exists today</h3>
      <h2>We&apos;re not starting from zero. We&apos;re starting from live.</h2>
      <div className="two-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>Live product</h3>
          <ul>
            <li><strong>itsthejob.com</strong> — the front door. Every experiment lives here.</li>
            <li><strong>new-human-resources.vercel.app</strong> — the B2B wedge. Pricing, application flow, taking inbound.</li>
            <li><strong>Magic Show platform</strong> — multi-show portal, golden tickets, intake + waivers. Shows already produced (Nashville, Minneapolis, Big Sky).</li>
            <li><strong>The Church</strong> — live app, Sunday Night Live running, doctrine written, congregation forming.</li>
            <li><strong>The J.O.B. Board</strong> — marketplace MVP live, fixed pricing, 20% fee in place.</li>
            <li><strong>Business 3.0</strong> — framework fully built, pricing set, ready to deploy.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Network &amp; brand</h3>
          <ul>
            <li><strong>Founders&apos; combined reach:</strong> 800+ EOS implementers, 200+ Jumpsuit contractors, investor network ready to write checks.</li>
            <li><strong>Brand north stars:</strong> Meow Wolf, Blah Airlines, Dramcorp — weird on purpose, culture-shaping.</li>
            <li><strong>Investor pipeline:</strong> Wefunder community round prepped. Lead conversations open.</li>
            <li><strong>First NHR conversations:</strong> inbound applications already flowing through the new site.</li>
          </ul>
        </div>
      </div>
    </div>
  ),

  // 18 — FOUNDERS
  () => (
    <div className="slide">
      <h3>Why us</h3>
      <div className="two-col">
        <div className="card">
          <h3 style={{ color: 'var(--text)', textTransform: 'none', letterSpacing: '-0.01em', fontSize: '1.3rem' }}>Nicole Ayres</h3>
          <div className="founder-role">The Architect</div>
          <ul>
            <li>Founder, Jumpsuit — bootstrapped to $4M/yr, <strong>zero employees</strong>. The company runs itself.</li>
            <li>Co-founded Jauntboards, an AI-powered Future of Work platform &rarr; acquired (2025)</li>
            <li>Co-visionary for Business 3.0 and the RCO</li>
            <li>200+ contractor network — running a B3.0 company for 7 years before it had a name</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--text)', textTransform: 'none', letterSpacing: '-0.01em', fontSize: '1.3rem' }}>Pam Kosanke</h3>
          <div className="founder-role">The Scaler</div>
          <ul>
            <li>Former CRO, EOS Worldwide — $145M revenue, 800+ implementers</li>
            <li>Unified 700+ independent brands into a global franchise</li>
            <li>Raised $6M Series A (Mark Cuban, General Mills, CircleUp)</li>
            <li>Invented the McDonald&apos;s breakfast dollar menu. 6x world champion, Team USA.</li>
          </ul>
        </div>
      </div>
      <p style={{ marginTop: '1.5rem', textAlign: 'center', maxWidth: '100%' }}>
        <strong>Nicole&apos;s big ideas + Pam&apos;s big implementation = over $100B in combined revenue impact.</strong>
      </p>
    </div>
  ),

  // 19 — THE ASK
  () => (
    <div className="slide">
      <h3>The ask</h3>
      <h1><span className="gold">$3&ndash;5M</span> Seed Round</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>SAFE into the <strong>HoldCo</strong> — the for-profit parent that owns every door in the organism: Church, MagicShowLand Transition Centers, Magic Shows, J.O.B. Board, Business 3.0, and New Human Resources.</p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>One investment. Every door. Lead checks from our network + Wefunder community round. <strong>Own what you co-create.</strong></p>
      <div className="two-col">
        <div className="card">
          <h3>What 24 months builds</h3>
          <ul>
            <li><strong>Close first 10 NHR enterprise deals</strong> — the wedge, proven at scale</li>
            <li><strong>Open the first 3 Transition Centers</strong> — physical proof of the passage</li>
            <li><strong>Put 3,000 humans through the 6-month program</strong></li>
            <li><strong>Form the RCO</strong> — nonprofit + HoldCo + first SPVs</li>
            <li><strong>Certify first 25 Guides &amp; B3.0 implementers</strong></li>
            <li><strong>Unify the platform</strong> — one front door, many experiments</li>
          </ul>
        </div>
        <div className="card">
          <h3>Team of 7</h3>
          <ul>
            <li><strong>Chief People Officer</strong> — the role HR never actually filled</li>
            <li><strong>Head of NHR Enterprise</strong> — owns the B2B wedge</li>
            <li><strong>Head of Program Delivery</strong> — runs the 6-month passage</li>
            <li><strong>Head of Transition Centers</strong> — physical infrastructure</li>
            <li><strong>Head of Tech</strong> — unified platform + SpiritTech</li>
            <li><strong>B3.0 Program Lead</strong> — cohorts and implementers</li>
            <li><strong>Creative Director</strong> — Magic Shows, brand, experiential</li>
          </ul>
        </div>
      </div>
    </div>
  ),

  // 20 — CLOSE (handled separately)
  null,
];

function CloseSlide({ onJoin }) {
  return (
    <div className="slide close-slide">
      <h1>The old jobs are going. Let them.</h1>
      <p>For centuries we trained humans to be workers before we let them be fully human. The trade made sense when the work needed us. It doesn&apos;t anymore.</p>
      <p>The machines can have the drudgery. We want the part they can&apos;t touch.</p>
      <p>The layoffs aren&apos;t the crisis. They&apos;re the opening. Every person walking out of a corporate job this year is a person who finally gets to ask the question the paycheck kept them from asking.</p>
      <p style={{ color: 'var(--text)', fontSize: '1.5rem', fontWeight: 700, marginTop: '0.75rem' }}>Our job is to catch them on the way out — and launch them into what comes next.</p>
      <p style={{ marginTop: '1rem' }}><strong className="gold">Welcome to the transition company.</strong></p>
      <div className="cta-row">
        <button className="waitlist-trigger" onClick={onJoin}>Join the Investor Waitlist</button>
        <a href="https://donorbox.org/j-o-b-founding-member-donations" target="_blank" rel="noopener noreferrer" className="waitlist-trigger donate-btn">Invest Now with Church Donation (tax exempt)</a>
      </div>
    </div>
  );
}

function WaitlistModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', investment_level: '' });
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    const { error } = await supabase.from('deck_waitlist').insert([{
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      investment_level: form.investment_level || null,
    }]);
    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          <div className="form-success">
            <h2>You&apos;re in.</h2>
            <p>We&apos;ll be in touch when the organism is ready for you.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Join the Waitlist</h2>
        <p>Be first to invest in the transition company.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name *</label>
            <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
          <div className="form-field">
            <label>Email *</label>
            <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </div>
          <div className="form-field">
            <label>Phone</label>
            <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          </div>
          <div className="form-field">
            <label>Investment Interest</label>
            <select value={form.investment_level} onChange={e => setForm(f => ({ ...f, investment_level: e.target.value }))}>
              <option value="">Select a range</option>
              <option value="$1K-$10K">$1K – $10K</option>
              <option value="$10K-$50K">$10K – $50K</option>
              <option value="$50K-$100K">$50K – $100K</option>
              <option value="$100K-$500K">$100K – $500K</option>
              <option value="$500K+">$500K+</option>
              <option value="Just watching">Just watching for now</option>
            </select>
          </div>
          <button type="submit" className="waitlist-btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Joining...' : status === 'error' ? 'Try again' : 'Join the Organism'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Deck() {
  const [current, setCurrent] = useState(0);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const total = slides.length;

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    function handleKey(e) {
      if (showWaitlist) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, showWaitlist]);

  const lastIndex = slides.length - 1;

  return (
    <div className="deck">
      {slides.map((SlideContent, i) => (
        <div key={i} className={`slide-wrapper ${i === current ? 'active' : ''}`}>
          {i === lastIndex ? (
            <CloseSlide onJoin={() => setShowWaitlist(true)} />
          ) : (
            <SlideContent />
          )}
        </div>
      ))}

      <div className="nav-bar">
        <div className="nav-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <div className="nav-controls">
          <button className="nav-btn" onClick={prev} disabled={current === 0}>&larr;</button>
          <span className="slide-count">{current + 1}/{total}</span>
          <button className="nav-btn" onClick={next} disabled={current === total - 1}>&rarr;</button>
        </div>
      </div>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </div>
  );
}
