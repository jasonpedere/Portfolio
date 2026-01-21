# Customization Examples - Web Services Marketing Page

## Common Customization Scenarios

### 1. Change CTA to WhatsApp

Replace the `handleCTA` function:

```typescript
const handleCTA = () => {
  const phoneNumber = '639171234567'; // Your WhatsApp number
  const message = encodeURIComponent('Hi! I want to get a website for my business.');
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
};
```

### 2. Add Facebook Messenger CTA

```typescript
const handleCTA = () => {
  const fbPageId = 'yourpagename'; // Your Facebook page username
  window.location.href = `https://m.me/${fbPageId}`;
};
```

### 3. Open Email Client

```typescript
const handleCTA = () => {
  const email = 'contact@yourbusiness.com';
  const subject = encodeURIComponent('Website Inquiry');
  const body = encodeURIComponent('Hi, I would like to know more about your web services.');
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};
```

### 4. Open Modal/Contact Form

```typescript
const [showContactModal, setShowContactModal] = useState(false);

const handleCTA = () => {
  setShowContactModal(true);
};

// In JSX:
{showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
```

### 5. Change Price Currency

Find and replace in the Pricing Section:

```typescript
// Current:
<span className="text-6xl md:text-7xl font-bold text-white">₱4,999</span>

// To USD:
<span className="text-6xl md:text-7xl font-bold text-white">$99</span>

// To other currency:
<span className="text-6xl md:text-7xl font-bold text-white">€89</span>
```

### 6. Add More Features to Pricing

In the Pricing Section, add more `<PricingFeature />` components:

```typescript
<PricingFeature text="SSL certificate included" />
<PricingFeature text="Email setup assistance" />
<PricingFeature text="Social media integration" />
<PricingFeature text="Contact form setup" />
```

### 7. Change Color Scheme

Replace gradient colors throughout:

```typescript
// Current: Cyan to Indigo
className="bg-gradient-to-r from-cyan-600 to-indigo-600"

// To Green to Emerald:
className="bg-gradient-to-r from-green-600 to-emerald-600"

// To Orange to Red:
className="bg-gradient-to-r from-orange-600 to-red-600"

// To Purple to Pink:
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

### 8. Add Testimonial Section

Add this new section component:

```typescript
interface TestimonialProps {
  name: string;
  business: string;
  text: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, business, text, rating }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-slate-300 mb-4 italic">"{text}"</p>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-slate-500 text-sm">{business}</p>
      </div>
    </div>
  );
};

// In main component:
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-white text-center mb-12">
      What Our Clients Say
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      <Testimonial
        name="Maria Santos"
        business="Santos Salon & Spa"
        text="Best decision for my business! Bookings increased by 40% in just 2 months."
        rating={5}
      />
      <Testimonial
        name="Juan Reyes"
        business="Reyes Auto Repair"
        text="Professional website at an affordable price. Customer support is excellent!"
        rating={5}
      />
      <Testimonial
        name="Lisa Chen"
        business="Chen's Restaurant"
        text="Now customers can book tables online. So convenient for everyone!"
        rating={5}
      />
    </div>
  </div>
</section>
```

### 9. Add FAQ Section

```typescript
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-700/50 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-4 text-white hover:text-cyan-400 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="text-slate-400 pb-4 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

// Usage:
<section className="py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-white text-center mb-12">
      Frequently Asked Questions
    </h2>
    <div className="space-y-2">
      <FAQItem
        question="How long does it take to build my website?"
        answer="Most websites are completed within 7-14 business days, depending on complexity and content availability."
      />
      <FAQItem
        question="Can I make changes to my website after it's built?"
        answer="Yes! You get an easy-to-use admin panel to update content, images, and manage bookings yourself."
      />
      <FAQItem
        question="What if I don't like the design?"
        answer="We work with you until you're satisfied. You see the full working website before paying anything."
      />
    </div>
  </div>
</section>
```

### 10. Add Video Hero Background

```typescript
// In Hero Section:
<section className="relative pt-32 pb-20 px-6 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>
  
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl"></div>
  
  {/* Rest of hero content */}
</section>
```

### 11. Add Countdown Timer for Limited Offer

```typescript
const [timeLeft, setTimeLeft] = useState({
  days: 3,
  hours: 12,
  minutes: 45,
  seconds: 30
});

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev.seconds > 0) {
        return { ...prev, seconds: prev.seconds - 1 };
      } else if (prev.minutes > 0) {
        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      } else if (prev.hours > 0) {
        return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
      } else if (prev.days > 0) {
        return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
      }
      return prev;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

// Display countdown:
<div className="flex gap-4 justify-center mb-8">
  <div className="bg-slate-900 p-4 rounded-lg">
    <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
    <div className="text-slate-500 text-sm">Days</div>
  </div>
  <div className="bg-slate-900 p-4 rounded-lg">
    <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
    <div className="text-slate-500 text-sm">Hours</div>
  </div>
  <div className="bg-slate-900 p-4 rounded-lg">
    <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
    <div className="text-slate-500 text-sm">Mins</div>
  </div>
  <div className="bg-slate-900 p-4 rounded-lg">
    <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
    <div className="text-slate-500 text-sm">Secs</div>
  </div>
</div>
```

### 12. Add Google Analytics Tracking

```typescript
const handleCTA = () => {
  // Track CTA click
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Get Your Website Now',
      value: 1
    });
  }
  
  window.location.href = '#contact';
};
```

### 13. Add Live Chat Widget (Tawk.to Example)

Add this to the component:

```typescript
useEffect(() => {
  // Load Tawk.to script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://embed.tawk.to/YOUR_TAWK_ID/default';
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);
```

### 14. Add Scroll-to-Top Button

```typescript
const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// In JSX:
{showScrollTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg z-50"
  >
    ↑
  </button>
)}
```

### 15. Add Animation on Scroll

```typescript
useEffect(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

// Add this class to elements you want to animate:
<div className="animate-on-scroll opacity-0">
  {/* Content */}
</div>

// Add to your CSS or Tailwind config:
// .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
```

## Tips for Best Results

1. **Test all changes** on mobile devices
2. **Keep load times fast** - optimize images and minimize scripts
3. **A/B test** different headlines and CTAs
4. **Track conversions** with analytics
5. **Update content regularly** to keep it fresh
6. **Add social proof** - testimonials and case studies
7. **Optimize SEO** - meta tags, descriptions, keywords

---

**Ready to customize?** Start with small changes and test frequently!
