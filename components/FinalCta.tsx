import MagneticButton from '@/components/MagneticButton'

export default function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="bg-[#F8FAFC] dark:bg-navy py-32 px-6 relative z-10 overflow-hidden transition-colors duration-300"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse 600px 400px at center, rgba(6,182,212,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2
          id="final-cta-heading"
          className="reveal font-syne font-bold text-5xl md:text-[64px] leading-tight text-navy dark:text-white transition-colors duration-300"
        >
          Ready To Scale Smarter?
        </h2>

        <p className="reveal font-dm text-lg text-slate-600 dark:text-muted mt-4 transition-colors duration-300" style={{ transitionDelay: '0.1s' }}>
          Join 500+ teams running growth operations on Flurbix.
        </p>

        <div
          className="reveal flex flex-wrap gap-4 justify-center mt-10"
          style={{ transitionDelay: '0.2s' }}
        >
          <MagneticButton>
            <a
              href="#pricing"
              className="bg-cyan text-navy font-bold font-dm px-9 py-3.5 rounded-lg text-base inline-block hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy"
            >
              Start Free Trial
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/contact?subject=Book a Demo"
              className="border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white font-dm px-9 py-3.5 rounded-lg text-base inline-block hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy"
            >
              Book Demo
            </a>
          </MagneticButton>
        </div>

        <p
          className="reveal font-dm text-[13px] text-slate-500 dark:text-subtle mt-6 transition-colors duration-300"
          style={{ transitionDelay: '0.3s' }}
        >
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>

      {/* Scroll reveal observer for this section */}
      <FinalCtaObserver />
    </section>
  )
}

// Inline client observer for the server component
function FinalCtaObserver() {
  // This is rendered server-side; the shared globals.css + any
  // client component that runs useScrollReveal('.reveal') will
  // handle these elements automatically.
  // We use a tiny inline script to avoid a separate file.
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  if(typeof IntersectionObserver==='undefined') return;
  var els=document.querySelectorAll('#contact .reveal');
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
    });
  },{threshold:0.15});
  els.forEach(function(el){obs.observe(el);});
})();
        `,
      }}
    />
  )
}
