'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const slides = [
  // 0 — COVER
  () => (
    <div className="slide cover">
      <h1>J.O.B.</h1>
      <p className="subtitle">The &ldquo;New Human&rdquo; Resources</p>
      <p className="tagline">The $739B HR industry was built to manage workers. We&apos;re building the one that sets them free.</p>
    </div>
  ),

  // 1 — THE MOMENT
  () => (
    <div className="slide">
      <h3>The moment</h3>
      <h1>Three things happened at once.</h1>
      <ul>
        <li><strong>AI started replacing human labor at scale.</strong> 300M jobs affected globally (Goldman Sachs). Mass layoffs from Oracle, Meta, Google, Microsoft, Amazon — and it&apos;s just getting started.</li>
        <li><strong>Work broke humans.</strong> We were trained to be workers, never fully human. Healthcare chained to compliance. Identity fused to job title. Burnout, fragmentation, loss of meaning.</li>
        <li><strong>A generation did the inner work anyway.</strong> Millions invested in therapy, somatic work, plant medicine, meditation. They developed capacities the market never valued. Until now.</li>
      </ul>
    </div>
  ),

  // 2 — THE PROBLEM
  () => (
    <div className="slide">
      <h3>The problem</h3>
      <h1>Human Resources was never about resourcing humans.</h1>
      <p>Old HR manages humans <em>as</em> resources &mdash; to be optimized, utilized, and replaced.</p>
      <p>Now it&apos;s replacing them at scale. And when the severance check hits, what does HR offer? A LinkedIn Premium code and a templated goodbye &mdash; sending people right back into the same loop that just rejected them.</p>
      <p><strong>The $2.5B outplacement industry is a $4 billion lie:</strong> that a sharper resume will land people back where they were before. But where they were before is exactly what stopped working.</p>
      <p style={{ marginTop: '1rem' }}>Every CEO and CHRO knows this. None of them have an answer.</p>
    </div>
  ),

  // 3 — THE FULLER QUOTE
  () => (
    <div className="slide close-slide">
      <p className="big-quote">&ldquo;You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.&rdquo;</p>
      <p className="attribution">&mdash; Buckminster Fuller</p>
    </div>
  ),

  // 4 — THE INSIGHT
  () => (
    <div className="slide">
      <h3>The insight</h3>
      <h1>The only skills left are the ones we were never trained for.</h1>
      <p>Presence. Discernment. Somatic intelligence. Nervous system regulation. Grief literacy. Leadership in uncertainty.</p>
      <p>These aren&apos;t soft skills. They&apos;re <strong>the only skills AI can&apos;t replicate.</strong> And they&apos;re the ones a human being actually needs to survive the next decade.</p>
      <p>The people laid off right now don&apos;t need another job. They need a container to grieve what they lost, a guide for the territory they&apos;re in, and the skills the next economy actually pays for.</p>
      <p><strong>That&apos;s a product. Nobody&apos;s built it. We have.</strong></p>
    </div>
  ),

  // 5 — THE SOLUTION
  () => (
    <div className="slide">
      <h3>The solution</h3>
      <h1>J.O.B. &mdash; The Joy of Being</h1>
      <p style={{ fontSize: '1.35rem', color: 'var(--text)', fontWeight: 600, marginBottom: '1.5rem' }}>A living organism that wakes humans up, trains them in what AI can&apos;t replicate, and launches them into the new human economy.</p>
      <p>We don&apos;t help your people find another job. We help them remember they were never just one.</p>
      <p>Some will start companies. Some will transform organizations. Some &mdash; the therapists, the healers, the bodyworkers, the artists &mdash; will finally get paid for gifts the old economy never valued.</p>
      <p><strong>We&apos;re not building a pipeline back into the old system. We&apos;re building the new economy itself.</strong></p>
    </div>
  ),

  // 6 — THE WEDGE: NHR
  () => (
    <div className="slide">
      <h3>The wedge</h3>
      <h1>New Human Resources.</h1>
      <p style={{ fontSize: '1.35rem', color: 'var(--text)', fontWeight: 600, marginBottom: '1.25rem' }}>A B2B offboarding benefit for companies letting people go with dignity.</p>
      <p>Old HR offboards people. New HR sets them free.</p>
      <p>We sell a six-month transformation program to companies doing layoffs. They pay per seat. Their laid-off employees get the entire J.O.B. ecosystem &mdash; self-discovery, mentorship, community, AI training, human training, and an optional Magic Show.</p>
      <p><strong>It&apos;s the door every CHRO has been quietly looking for.</strong> And it&apos;s the wedge that funds everything else in the organism.</p>
      <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--muted)' }}>new-human-resources.vercel.app &mdash; live</p>
    </div>
  ),

  // 7 — HOW IT WORKS
  () => (
    <div className="slide">
      <h3>How it works</h3>
      <h2>Six months to become someone AI can&apos;t replace.</h2>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>01 &middot; Self-Discovery</h3>
          <p>Months of guided deprogramming. Strip the identity the old job reinforced. Find the authentic one underneath.</p>
        </div>
        <div className="card">
          <h3>02 &middot; Mentorship</h3>
          <p>1:1 with a J.O.B. Guide who can hold the space for unprecedented times. Not a career coach.</p>
        </div>
        <div className="card">
          <h3>03 &middot; Community</h3>
          <p>Live cohorts and integration circles. The opposite of applying to 100+ jobs alone on LinkedIn.</p>
        </div>
        <div className="card">
          <h3>04 &middot; AI Training</h3>
          <p>Practical fluency with the tools that just replaced their old role. Think with the machines, not against them.</p>
        </div>
        <div className="card">
          <h3>05 &middot; Human Training</h3>
          <p>Presence, discernment, somatic intelligence, leadership in uncertainty. The skills AI will never replace.</p>
        </div>
        <div className="card">
          <h3>06 &middot; The Magic Show</h3>
          <p>Optional immersion. Stateside (multi-day) or Costa Rica (multi-week). The transformation, not the orientation.</p>
        </div>
      </div>
    </div>
  ),

  // 8 — THE PRICING
  () => (
    <div className="slide">
      <h3>The pricing</h3>
      <h2>Priced like outplacement. Works nothing like it.</h2>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>Founder-led</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>1&ndash;50 people</p>
          <p style={{ fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, margin: '0.5rem 0' }}>$3,500<span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>/seat</span></p>
          <p>For CEOs letting go of people they hired themselves.</p>
        </div>
        <div className="card">
          <h3>Growth-stage</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>51&ndash;1,000 people</p>
          <p style={{ fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, margin: '0.5rem 0' }}>$2,500<span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>/seat</span></p>
          <p>For CHROs navigating a restructure. Protect the brand. Take care of the ones you&apos;re letting go.</p>
        </div>
        <div className="card">
          <h3>Enterprise</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>1,000+ people</p>
          <p style={{ fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, margin: '0.5rem 0' }}>Custom</p>
          <p>For mass workforce transitions. Multi-cohort, co-branded, board-defensible.</p>
        </div>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '100%' }}>
        <strong>Magic Show add-on: +$5K stateside / +$10K Costa Rica, per person.</strong>
      </p>
      <p style={{ marginTop: '0.75rem', textAlign: 'center', maxWidth: '100%', fontSize: '0.95rem', color: 'var(--muted)' }}>
        One enterprise deal &mdash; 30,000 people at $2,500/seat = <strong style={{ color: 'var(--text)' }}>$75M</strong>. 10% Magic Show uptake at blended $7,500 = another <strong style={{ color: 'var(--text)' }}>$22.5M</strong>. One customer.
      </p>
    </div>
  ),

  // 9 — THE FLYWHEEL
  () => (
    <div className="slide">
      <h3>The flywheel</h3>
      <h1>NHR isn&apos;t just the revenue engine. It&apos;s the top of the funnel for everything else.</h1>
      <p>Every laid-off human who goes through NHR enters the J.O.B. organism. What happens next <em>is</em> the business model:</p>
      <div className="two-col" style={{ marginTop: '0.75rem' }}>
        <div className="card">
          <h3>They become supply</h3>
          <p>Some become sovereign humans offering services on <strong>The J.O.B. Board</strong>. We take 20% of every transaction.</p>
        </div>
        <div className="card">
          <h3>They go deeper</h3>
          <p>Some attend <strong>Magic Shows</strong> (+$5&ndash;10K). Some travel to <strong>MagicShowLand</strong> retreats. Some become facilitators.</p>
        </div>
        <div className="card">
          <h3>They start companies</h3>
          <p>Some launch <strong>Business 3.0</strong> companies &mdash; organisms instead of machines. We consult, certify, and license the framework.</p>
        </div>
        <div className="card">
          <h3>They bring the next cohort</h3>
          <p>The companies they start eventually lay people off too. Guess which offboarding program they already trust.</p>
        </div>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '100%' }}><strong>NHR pays us to build the new economy. The new economy feeds NHR. The flywheel never stops.</strong></p>
    </div>
  ),

  // 10 — THE ORGANISM / MANY DOORS
  () => (
    <div className="slide">
      <h3>The organism</h3>
      <h2>Many doors. One house.</h2>
      <p>NHR is the wedge. The organism is everything the wedge funds and feeds.</p>
      <div className="three-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>The Church</h3>
          <p>The deprogramming door. Sunday Night Live, elders, doctrine. Where the inner work happens.</p>
        </div>
        <div className="card">
          <h3>The J.O.B. Board</h3>
          <p>The marketplace door. Sovereign humans get paid for what AI can&apos;t do. 20% platform fee.</p>
        </div>
        <div className="card">
          <h3>Magic Shows</h3>
          <p>The experiential door. Immersions that reset the nervous system and break the fear loop.</p>
        </div>
        <div className="card">
          <h3>Business 3.0</h3>
          <p>The organizational door. The operating system for companies that want to be organisms, not machines.</p>
        </div>
        <div className="card">
          <h3>MagicShowLand</h3>
          <p>The physical door. Abandoned churches, castles, colleges &mdash; turned into IRL training grounds.</p>
        </div>
        <div className="card">
          <h3>New Human Resources</h3>
          <p>The enterprise door. The wedge that funds the whole organism.</p>
        </div>
      </div>
    </div>
  ),

  // 11 — TAM
  () => (
    <div className="slide">
      <h3>Total addressable market</h3>
      <h2>We sit at the intersection of six industries.</h2>
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
          <div className="stat-label">Outplacement (our direct replacement)</div>
        </div>
      </div>
      <p style={{ marginTop: '2rem', textAlign: 'center', maxWidth: '100%' }}>Every one of these industries is a fragment of the same problem. <strong>Capture 1% of outplacement in year one = $25M. Capture 1% of HR = $7.39B. We&apos;re the whole organism.</strong></p>
    </div>
  ),

  // 12 — THE COMP
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
            <td>Transformation program for laid-off humans + the economy they step into</td>
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

  // 13 — TRACTION
  () => (
    <div className="slide">
      <h3>What exists today</h3>
      <h2>We&apos;re not starting from zero. We&apos;re starting from live.</h2>
      <div className="two-col" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>Live product</h3>
          <ul>
            <li><strong>itsthejob.com</strong> &mdash; the front door. Every experiment lives here.</li>
            <li><strong>new-human-resources.vercel.app</strong> &mdash; the B2B wedge. Pricing, application flow, taking inbound.</li>
            <li><strong>Magic Show platform</strong> &mdash; multi-show portal, invite-only golden tickets, intake + waivers. First shows already produced (Nashville, Minneapolis, Big Sky).</li>
            <li><strong>The Church</strong> &mdash; live app, Sunday Night Live running, doctrine written.</li>
            <li><strong>The J.O.B. Board</strong> &mdash; marketplace MVP live, fixed pricing, 20% fee in place.</li>
            <li><strong>Business 3.0</strong> &mdash; framework fully built, pricing set, ready to deploy.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Network &amp; brand</h3>
          <ul>
            <li><strong>Founders&apos; combined reach:</strong> 800+ EOS implementers, 200+ Jumpsuit contractors, investor network ready to write checks.</li>
            <li><strong>Brand north stars:</strong> Meow Wolf, Blah Airlines, Dramcorp &mdash; weird on purpose, culture-shaping.</li>
            <li><strong>Investor pipeline:</strong> Wefunder community round prepped. Lead conversations already open.</li>
            <li><strong>First NHR conversations:</strong> inbound applications already flowing through the new site.</li>
          </ul>
        </div>
      </div>
    </div>
  ),

  // 14 — FOUNDERS
  () => (
    <div className="slide">
      <h3>Why us</h3>
      <div className="two-col">
        <div className="card">
          <h3 style={{ color: 'var(--text)', textTransform: 'none', letterSpacing: '-0.01em', fontSize: '1.3rem' }}>Nicole Ayres</h3>
          <div className="founder-role">The Architect</div>
          <ul>
            <li>Founder, Jumpsuit &mdash; bootstrapped to $4M/yr, <strong>zero employees</strong>. The company runs itself.</li>
            <li>Co-founded Jauntboards, an AI-powered Future of Work platform &rarr; acquired (2025)</li>
            <li>Co-visionary for Business 3.0 and the RCO</li>
            <li>200+ contractor network &mdash; has been running a B3.0 company for 7 years before it had a name</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--text)', textTransform: 'none', letterSpacing: '-0.01em', fontSize: '1.3rem' }}>Pam Kosanke</h3>
          <div className="founder-role">The Scaler</div>
          <ul>
            <li>Former CRO, EOS Worldwide &mdash; $145M revenue, 800+ implementers</li>
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

  // 15 — THE ASK
  () => (
    <div className="slide">
      <h3>The ask</h3>
      <h1><span className="gold">$3&ndash;5M</span> Seed Round</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>SAFE into the <strong>HoldCo</strong> &mdash; the for-profit parent that owns NHR, the J.O.B. Board, Magic Shows, MagicShowLand, Business 3.0, and every future experiment.</p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>One investment. Every door. Lead checks from our network + Wefunder community round.</p>
      <div className="two-col">
        <div className="card">
          <h3>What the money builds (24 months)</h3>
          <ul>
            <li><strong>Close first 10 NHR enterprise deals</strong> &mdash; the wedge, proven at scale</li>
            <li><strong>Build the program delivery engine</strong> &mdash; Guides network, cohort ops, Magic Show logistics</li>
            <li><strong>Form the RCO</strong> &mdash; nonprofit + HoldCo + first SPVs</li>
            <li><strong>Activate the flywheel</strong> &mdash; unified platform across NHR, Church, Board, B3.0</li>
            <li><strong>Certify first 25 Guides &amp; B3.0 implementers</strong></li>
            <li><strong>Put 3,000+ humans</strong> through the J.O.B. journey</li>
          </ul>
        </div>
        <div className="card">
          <h3>Team of 7</h3>
          <ul>
            <li><strong>Chief People Officer</strong> &mdash; the role HR never actually filled</li>
            <li><strong>Head of NHR Enterprise</strong> &mdash; owns the B2B wedge</li>
            <li><strong>Head of Program Delivery</strong> &mdash; runs the six-month experience</li>
            <li><strong>Head of Tech</strong> &mdash; unified platform + SpiritTech</li>
            <li><strong>Head of Ops &amp; Finance</strong> &mdash; entities, money, compliance</li>
            <li><strong>B3.0 Program Lead</strong> &mdash; cohorts and implementers</li>
            <li><strong>Creative Director</strong> &mdash; Magic Shows, brand, experiential</li>
          </ul>
        </div>
      </div>
      <p style={{ marginTop: '1rem' }}><strong>What exists today:</strong> The wedge is live. The IP is built. Two founders who&apos;ve touched $100B+ in revenue impact. And a network of companies ready to buy the thing no one else is selling.</p>
    </div>
  ),

  // 16 — CLOSE (handled separately)
  null,
];

function CloseSlide({ onJoin }) {
  return (
    <div className="slide close-slide">
      <h1>The job was never the job.</h1>
      <p>For thousands of years, we trained humans to be workers but never fully human.</p>
      <p>Now AI is taking the old jobs. Good. Let it.</p>
      <p>Because there&apos;s only one job left. And it&apos;s the only one that ever mattered.</p>
      <p style={{ color: 'var(--text)', fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>Being human is the job now.</p>
      <p style={{ marginTop: '1rem' }}><strong className="gold">Welcome to the &ldquo;New Human&rdquo; Resources.</strong></p>
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
        <p>Be first to invest in the new Human Resources.</p>
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
