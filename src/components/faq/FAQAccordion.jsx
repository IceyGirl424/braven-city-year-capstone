import React, { useState } from 'react'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Will I actually make enough money to live?",
      answer: (
        <div>
          <p className="mb-3">
            Real talk: $1,300 every two weeks (~$33k/year) is tight in the Bay Area. Here's how members make it work:
          </p>
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            <li>Most members share apartments with 2-3 roommates</li>
            <li>Budgeting apps and meal prep help stretch the stipend</li>
            <li>Some members do weekend side gigs (tutoring, food delivery) for extra cash</li>
            <li>City Year provides resources and workshops on financial planning</li>
          </ul>
          <p>
            Plus you get health insurance covered and a $6,895 education award that can go toward student loans or future education.
          </p>
        </div>
      )
    },
    {
      question: "What if I realize this isn't for me?",
      answer: (
        <div>
          <p className="mb-3">
            You can leave early, but you'll only get the education award if you complete 1,700 hours. Here's the breakdown:
          </p>
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            <li><strong>Before 450 hours:</strong> No education award, but you keep any stipend you've earned</li>
            <li><strong>450-900 hours:</strong> Partial education award (pro-rated)</li>
            <li><strong>900-1,700 hours:</strong> Partial education award (pro-rated)</li>
            <li><strong>1,700+ hours (full term):</strong> Full $6,895 education award</li>
          </ul>
          <p className="mb-2">
            Early exit options include: medical leave, family emergencies, or finding it's not the right fit. 
            We have an open-door policy—talk to your team leader or program manager if you're struggling.
          </p>
          <p>
            <a href="#stories" className="text-primary underline font-semibold">Talk to alumni about their experiences</a>
          </p>
        </div>
      )
    },
    {
      question: "Is this just for people who want to be teachers?",
      answer: (
        <div>
          <p className="mb-3">
            Nope. City Year is a launchpad for all kinds of careers. Our alumni work at:
          </p>
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            <li><strong>Tech:</strong> Google, Meta, Salesforce</li>
            <li><strong>Education:</strong> Teach for America, KIPP, charter schools</li>
            <li><strong>Healthcare:</strong> Stanford Med, UCSF, community health centers</li>
            <li><strong>Nonprofit:</strong> United Way, Boys & Girls Clubs, local orgs</li>
            <li><strong>Graduate School:</strong> Law school, MBA programs, public policy</li>
            <li><strong>Other:</strong> Government, consulting, startups</li>
          </ul>
          <p>
            <a href="#alumni" className="text-primary underline font-semibold">See where our alumni are now</a>
          </p>
        </div>
      )
    },
    {
      question: "How bad is the burnout?",
      answer: (
        <div>
          <p className="mb-3">
            It's real, and we're honest about it. The work is demanding—you're in schools 40-45 hours a week, 
            supporting students who need extra help. But we've built support systems:
          </p>
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            <li><strong>Mental health days:</strong> 2 personal days per semester for self-care</li>
            <li><strong>Counseling services:</strong> Free, confidential therapy through our EAP program</li>
            <li><strong>Peer support groups:</strong> Weekly check-ins with your team</li>
            <li><strong>Supervisor support:</strong> Regular 1-on-1s to address challenges early</li>
            <li><strong>Training:</strong> Workshops on stress management, boundaries, and resilience</li>
          </ul>
          <p>
            Average work week: 40-45 hours. Most members find the impact they're making outweighs the challenges, 
            but it's not for everyone. That's why we encourage trying a volunteer shift first.
          </p>
        </div>
      )
    },
    {
      question: "What does a typical day look like?",
      answer: (
        <div>
          <p className="mb-3">A typical day at City Year Bay Area:</p>
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            <li><strong>7:30 AM:</strong> Arrive at school, prep for the day</li>
            <li><strong>8:00-11:30 AM:</strong> Support students in classrooms (tutoring, small groups, one-on-one)</li>
            <li><strong>11:30 AM-12:30 PM:</strong> Lunch break</li>
            <li><strong>12:30-3:00 PM:</strong> After-school programming (homework help, enrichment activities)</li>
            <li><strong>3:00-4:00 PM:</strong> Team meeting, planning, professional development</li>
            <li><strong>4:00 PM:</strong> End of day</li>
          </ul>
          <p>
            Plus monthly service days, team building events, and professional development workshops.
          </p>
        </div>
      )
    },
    {
      question: "Do I need a car?",
      answer: (
        <div>
          <p className="mb-3">
            Not necessarily. Many members use public transit (VTA, Caltrain, BART) or bike to their school sites. 
            City Year provides:
          </p>
          <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
            <li>Transit pass reimbursement (up to $100/month)</li>
            <li>Carpool coordination with teammates</li>
            <li>Flexible scheduling if you need to use transit</li>
          </ul>
          <p>
            Some members do bring cars, especially if they're placed at schools further from public transit. 
            We'll work with you to find the best placement based on your transportation situation.
          </p>
        </div>
      )
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section bg-neutral-light" style={{ padding: '100px 20px', marginBottom: 0 }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-dark">
            Brutally Honest FAQ
          </h2>
          <p className="text-lg text-neutral-dark/80">
            Real questions from real people. No corporate speak.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-neutral-dark/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-light/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg text-primary pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-neutral-dark/80 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion

