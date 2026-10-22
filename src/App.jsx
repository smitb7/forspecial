import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { love, storyCards, quizQuestions } from './data'
import coupleMainPhoto from './assets/couple-main.jpeg'

/* ─── Stars ───────────────────────────────────────────────── */
function Stars() {
  return (
    <div className="stars" aria-hidden="true">
      {Array.from({ length: 50 }).map((_, i) => (
        <span key={i} className="star" style={{
          top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
          '--dur': `${2.5 + Math.random() * 4}s`, '--delay': `${Math.random() * 5}s`,
          '--op': `${0.3 + Math.random() * 0.55}`,
          width: `${1 + Math.random() * 2}px`, height: `${1 + Math.random() * 2}px`,
        }} />
      ))}
    </div>
  )
}

function Heart({ className = '' }) {
  return <span className={`heart ${className}`} aria-hidden="true">♥</span>
}

function Progress({ step, total }) {
  return (
    <div className="progress-wrap" aria-label={`Step ${step} of ${total}`}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <span>{step} / {total}</span>
    </div>
  )
}

/* ─── Special Date Badge ──────────────────────────────────── */
function SpecialDate() {
  const parts = [
    { value: '20', label: 'DAY' },
    { value: '10', label: 'MONTH' },
    { value: '2026', label: 'YEAR' },
  ]
  return (
    <div className="special-date-wrap" aria-label="Our special date: 20 October 2026">
      <div className="special-date-tag">✦ OUR SPECIAL DATE ✦</div>
      <div className="special-date-blocks">
        {parts.map((p, i) => (
          <>
            <div key={p.label} className="date-block" style={{ animationDelay: `${i * 0.15}s` }}>
              <span className="date-value">{p.value}</span>
              <span className="date-label">{p.label}</span>
            </div>
            {i < parts.length - 1 && <span key={`sep-${i}`} className="date-sep">·</span>}
          </>
        ))}
      </div>
    </div>
  )
}

/* ─── Proposal Screen ─────────────────────────────────────── */
function ProposalScreen({ onYes }) {
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 })
  const [noMoved, setNoMoved] = useState(false)
  const noButtonRef = useRef(null)

  const dodgeNo = (event) => {
    const button = noButtonRef.current
    if (!button) return
    const padding = 18
    const width = button.offsetWidth || 112
    const height = button.offsetHeight || 48
    const maxLeft = Math.max(padding, window.innerWidth - width - padding)
    const maxTop = Math.max(padding, window.innerHeight - height - padding)
    let best = { left: padding, top: padding, distance: -1 }
    for (let i = 0; i < 32; i += 1) {
      const left = padding + Math.random() * Math.max(1, maxLeft - padding)
      const top = padding + Math.random() * Math.max(1, maxTop - padding)
      const pointerX = Number.isFinite(event?.clientX) ? event.clientX : window.innerWidth / 2
      const pointerY = Number.isFinite(event?.clientY) ? event.clientY : window.innerHeight / 2
      const distance = Math.hypot(left + width / 2 - pointerX, top + height / 2 - pointerY)
      if (distance > best.distance) best = { left, top, distance }
    }
    setNoPosition({ left: best.left, top: best.top })
    setNoMoved(true)
  }

  const noButtonHandlers = {
    ref: noButtonRef,
    onPointerEnter: dodgeNo,
    onClick: (e) => { e.preventDefault(); dodgeNo(e) },
    onTouchStart: (e) => { e.preventDefault(); dodgeNo(e) },
  }

  return (
    <main className="proposal-stage">
      <span className="proposal-float proposal-float-one" aria-hidden="true">♥</span>
      <span className="proposal-float proposal-float-two" aria-hidden="true">♡</span>
      <span className="proposal-float proposal-float-three" aria-hidden="true">✦</span>
      <span className="proposal-float proposal-float-four" aria-hidden="true">♥</span>
      <section className="proposal-card screen-enter">
        <div className="proposal-chip"><span>✧</span> A LITTLE QUESTION FOR YOU <span>✧</span></div>
        <div className="proposal-art" aria-hidden="true">
          <div className="proposal-orbit proposal-orbit-one" />
          <div className="proposal-orbit proposal-orbit-two" />
          <div className="proposal-heart">♥</div>
          <span className="proposal-spark proposal-spark-one">✦</span>
          <span className="proposal-spark proposal-spark-two">✧</span>
          <span className="proposal-spark proposal-spark-three">♡</span>
        </div>
        <p className="proposal-script">To my favourite person</p>
        <h1 className="proposal-title">Will you <em>marry me?</em></h1>
        <p className="proposal-copy">
          Some stories are written by fate — and I believe ours is one of them.
          <br className="desktop-break" /> So, I have one very important question…
        </p>
        <div className="proposal-divider"><span /><b>♥</b><span /></div>
        <div className="proposal-buttons">
          <button className="proposal-yes" onClick={onYes}><span>♥</span> Yes, a thousand times! <i>✦</i></button>
          {!noMoved && <button {...noButtonHandlers} className="proposal-no">No 🙈</button>}
        </div>
        <p className="proposal-hint">{noMoved ? 'Hehe, that little button is shy 🙈💕' : 'Psst… try choosing your answer 😉'}</p>
      </section>
      <div className="proposal-footer">MADE WITH ALL MY LOVE <span>♥</span></div>
      {noMoved && createPortal(
        <button {...noButtonHandlers} className="proposal-no proposal-no-floating"
          style={{ top: `${noPosition.top}px`, left: `${noPosition.left}px` }}>No 🙈</button>,
        document.body
      )}
    </main>
  )
}

/* ─── Proposal Accepted ───────────────────────────────────── */
function ProposalAccepted({ onContinue }) {
  return (
    <main className="proposal-stage">
      <section className="proposal-card proposal-accepted screen-enter">
        <div className="proposal-chip"><span>✧</span> THE BEST YES EVER <span>✧</span></div>
        <div className="accepted-icon" aria-hidden="true">💍</div>
        <div className="accepted-heart" aria-hidden="true">♥</div>
        <p className="proposal-script">You just made me the happiest person</p>
        <h1 className="proposal-title">It's a <em>forever</em> thing!</h1>
        <p className="proposal-copy">
          This is the beginning of our beautiful story — written by fate, sealed with a yes.
          <strong> Today, tomorrow, always — it's you.</strong>
        </p>
        <blockquote className="proposal-quote">
          "Some meetings are written in the stars. I truly believe ours was one of them."
        </blockquote>
        <SpecialDate />
        <button className="proposal-yes proposal-continue" onClick={onContinue}>
          Continue to our story <span>→</span>
        </button>
        <p className="proposal-hint">There's a little more love waiting for you inside. ♡</p>
      </section>
      <div className="proposal-footer">FOREVER &amp; ALWAYS <span>♥</span></div>
    </main>
  )
}

/* ─── Photo Gallery Screen ────────────────────────────────── */
const photoData = [
  {
    src: null,           // set below from love.galleryPhotos
    caption: 'You in your element ✨',
    tag: 'PHOTO 01',
  },
  {
    src: null,
    caption: 'That smile that started everything 🥹',
    tag: 'PHOTO 02',
  },
  {
    src: null,
    caption: 'Every detail, beautiful 💍',
    tag: 'PHOTO 03',
  },
]

function GalleryScreen({ onNext, onBack, photos }) {
  const [lightbox, setLightbox] = useState(null) // index of open photo

  const items = photoData.map((p, i) => ({ ...p, src: photos[i] || null })).filter(p => p.src)

  return (
    <section className="gallery-screen screen-enter">
      <div className="section-kicker">A LITTLE COLLECTION</div>
      <h2>Moments of <em>you.</em></h2>
      <p className="gallery-subtitle">
        Every photo of you is my favourite. Here are a few. 🤍
      </p>

      {/* Photo grid */}
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button
            key={i}
            className="gallery-tile"
            style={{ animationDelay: `${i * 0.14}s` }}
            onClick={() => setLightbox(i)}
            aria-label={`View ${item.caption}`}
          >
            <div className="gallery-tile-img">
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="gallery-tile-overlay">
                <span className="gallery-tile-tag">{item.tag}</span>
                <span className="gallery-tile-zoom">⤢</span>
              </div>
            </div>
            <p className="gallery-tile-caption">{item.caption}</p>
          </button>
        ))}
      </div>

      <button className="primary-button wide-button" onClick={onNext}>
        Continue <span>→</span>
      </button>
      <button className="text-button" onClick={onBack}>← Back</button>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <div className="lightbox-nav">
              <button
                className="lightbox-arrow"
                onClick={() => setLightbox((lightbox - 1 + items.length) % items.length)}
                aria-label="Previous"
              >‹</button>
              <img src={items[lightbox].src} alt={items[lightbox].caption} className="lightbox-img" />
              <button
                className="lightbox-arrow"
                onClick={() => setLightbox((lightbox + 1) % items.length)}
                aria-label="Next"
              >›</button>
            </div>
            <p className="lightbox-caption">{items[lightbox].caption}</p>
            <div className="lightbox-dots">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`lightbox-dot${i === lightbox ? ' active' : ''}`}
                  onClick={() => setLightbox(i)}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/* ─── App Root ────────────────────────────────────────────── */
export default function App() {
  const [screen, setScreen] = useState('proposal')
  const [cardIndex, setCardIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showLetter, setShowLetter] = useState(false)
  const [hearts, setHearts] = useState(false)

  const startStory = () => { setScreen('story'); setCardIndex(0) }

  const nextCard = () => {
    if (cardIndex < storyCards.length - 1) setCardIndex(cardIndex + 1)
    else setScreen('gallery') // → goes to gallery after story
  }

  const answerQuiz = (answerIndex) => {
    const next = [...answers, answerIndex]
    setAnswers(next)
    if (quizIndex < quizQuestions.length - 1) setQuizIndex(quizIndex + 1)
    else setScreen('final')
  }

  const restart = () => {
    setScreen('welcome')
    setCardIndex(0); setQuizIndex(0)
    setAnswers([]); setShowLetter(false); setHearts(false)
  }

  const photos = love.galleryPhotos || []

  return (
    <main className="app-shell">
      <Stars />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="grain" />

      {!['proposal', 'proposalAccepted'].includes(screen) && (
        <header className="topbar">
          <a className="brand" href="#" onClick={e => { e.preventDefault(); restart() }}>
            <span className="brand-mark">♡</span> For You, Vishva
          </a>
          <span className="top-note">MADE WITH LOVE <Heart /></span>
        </header>
      )}

      {screen === 'proposal' && <ProposalScreen onYes={() => setScreen('proposalAccepted')} />}
      {screen === 'proposalAccepted' && <ProposalAccepted onContinue={() => setScreen('welcome')} />}

      {/* ── Welcome ── */}
      {screen === 'welcome' && (
        <section className="welcome-screen screen-enter">
          <div className="welcome-photo-wash" style={{ backgroundImage: `url(${coupleMainPhoto})` }} aria-hidden="true" />
          <div className="tiny-label">
            <span className="label-line" /> A LITTLE SURPRISE FOR YOU <span className="label-line" />
          </div>
          <div className="hero-heart-wrap">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-heart">♥</div>
            <span className="float-emoji float-a">✦</span>
            <span className="float-emoji float-b">♡</span>
            <span className="float-emoji float-c">✧</span>
          </div>
          <p className="script-line">To my favourite person</p>
          <h1>Hey, <em>{love.herName}.</em></h1>
          <p className="welcome-copy">{love.subtitle}</p>
          <SpecialDate />
          <div className="welcome-divider"><span /><Heart /><span /></div>
          <p className="welcome-prompt">Ready to take a little trip through <br className="desktop-break" />the beginning of our story?</p>
          <button className="primary-button" onClick={startStory}>Let's begin <span>↗</span></button>
          <p className="footnote">A small reminder that you are so, so wonderful.</p>
        </section>
      )}

      {/* ── Story ── */}
      {screen === 'story' && (
        <section className="content-screen screen-enter">
          <div className="section-kicker">OUR STORY, IN LITTLE PIECES</div>
          <h2>Every story has a beginning.<br /><em>This one is ours.</em></h2>
          <Progress step={cardIndex + 1} total={storyCards.length} />
          <article className="story-card" key={cardIndex}>
            <div className="card-topline">
              <span>{storyCards[cardIndex].eyebrow}</span>
              <span className="card-count">0{cardIndex + 1} <i>/ 0{storyCards.length}</i></span>
            </div>
            <div className="story-art story-photo-art">
              <img src={storyCards[cardIndex].photo || coupleMainPhoto} alt={`Memory from ${storyCards[cardIndex].title}`} />
              <div className="story-photo-shade" />
              <span className="story-photo-heart">♥</span>
              <span className="story-photo-label">A MEMORY TO KEEP</span>
            </div>
            <div className="story-date"><span /> {storyCards[cardIndex].date}</div>
            <h3>{storyCards[cardIndex].title}</h3>
            <p className="story-copy">{storyCards[cardIndex].text}</p>
            <div className="card-bottom"><span className="mini-hearts">♥ ♥ ♥</span><span>WITH ALL MY HEART</span></div>
          </article>
          <button className="primary-button wide-button" onClick={nextCard}>
            {cardIndex === storyCards.length - 1 ? 'See something special →' : 'Keep going'} <span>→</span>
          </button>
          <button className="text-button" onClick={() => setScreen('welcome')}>← Back to the beginning</button>
        </section>
      )}

      {/* ── Gallery ── */}
      {screen === 'gallery' && (
        <GalleryScreen
          photos={photos}
          onNext={() => setScreen('quiz')}
          onBack={() => { setScreen('story'); setCardIndex(storyCards.length - 1) }}
        />
      )}

      {/* ── Quiz ── */}
      {screen === 'quiz' && (
        <section className="content-screen quiz-screen screen-enter">
          <div className="section-kicker">A VERY IMPORTANT QUIZ</div>
          <div className="quiz-icon">💌</div>
          <h2>How well do you know<br /><em>your biggest fan?</em></h2>
          <Progress step={quizIndex + 1} total={quizQuestions.length} />
          <article className="quiz-card" key={quizIndex}>
            <div className="quiz-number">QUESTION 0{quizIndex + 1}</div>
            <h3>{quizQuestions[quizIndex].question}</h3>
            <div className="answer-list">
              {quizQuestions[quizIndex].answers.map((answer, index) => (
                <button className="answer-option" key={answer} onClick={() => answerQuiz(index)}>
                  <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{answer}</span>
                  <span className="answer-arrow">↗</span>
                </button>
              ))}
            </div>
          </article>
          <p className="footnote">Psst... there are no wrong answers. (Well, almost.)</p>
        </section>
      )}

      {/* ── Final ── */}
      {screen === 'final' && (
        <section className="content-screen final-screen screen-enter">
          <div className="section-kicker">AND SO OUR STORY BEGINS</div>
          <div className="final-heart">♥<span>✦</span></div>
          <p className="script-line">My favourite beginning</p>
          <h2>It was always<br /><em>meant to be you.</em></h2>
          <p className="final-copy">
            Fate has a beautiful way of bringing the right people together.
            I don't know everything yet — but I already know you are someone truly special.
          </p>
          <div className="final-stats">
            <div><strong>∞</strong><span>beautiful days ahead</span></div>
            <div className="stats-divider" />
            <div><strong>1</strong><span>person I'd choose</span></div>
          </div>
          <button className="primary-button wide-button"
            onClick={() => { setShowLetter(!showLetter); setHearts(true) }}>
            {showLetter ? 'Close my letter' : 'Open your little letter'} <span>♡</span>
          </button>
          {showLetter && (
            <article className="letter-card screen-enter">
              <div className="letter-top">A LETTER FOR YOU <Heart /></div>
              <p>{love.letter}</p>
              <div className="letter-signoff">Always yours <span>♥</span></div>
            </article>
          )}
          {hearts && <div className="heart-burst" aria-hidden="true">♥　♡　♥　✦　♥</div>}
          <p className="signature">Made with all my love, <strong>{love.yourName}</strong></p>
          <button className="text-button" onClick={restart}>↻ Back to the beginning</button>
        </section>
      )}

      {!['proposal', 'proposalAccepted'].includes(screen) && (
        <footer className="site-footer">
          <span>© FOREVER &amp; ALWAYS</span>
          <span>ONE HEART, TWO PEOPLE <Heart /></span>
        </footer>
      )}
    </main>
  )
}
