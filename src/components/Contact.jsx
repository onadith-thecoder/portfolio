import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-offwhite text-4xl sm:text-5xl">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="font-body text-muted text-base mt-6">
            Open to internship opportunities, collaborations, and conversations.
            Feel free to send me a message below.
          </p>
        </div>

        {/* CENTRED FORM */}
        <div className="bg-slate rounded-2xl p-8 border border-primary/10">

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* NAME */}
            <div>
              <label className="font-body text-muted text-xs uppercase
                                tracking-wider mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="w-full bg-navy border border-primary/10
                           rounded-xl px-4 py-3 font-body text-offwhite
                           text-sm placeholder:text-muted/50
                           focus:outline-none focus:border-primary/40
                           transition-all duration-200"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-body text-muted text-xs uppercase
                                tracking-wider mb-2 block">
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-navy border border-primary/10
                           rounded-xl px-4 py-3 font-body text-offwhite
                           text-sm placeholder:text-muted/50
                           focus:outline-none focus:border-primary/40
                           transition-all duration-200"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-body text-muted text-xs uppercase
                                tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about the opportunity..."
                className="w-full bg-navy border border-primary/10
                           rounded-xl px-4 py-3 font-body text-offwhite
                           text-sm placeholder:text-muted/50
                           focus:outline-none focus:border-primary/40
                           transition-all duration-200 resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 rounded-xl font-body font-medium
                          transition-all duration-200 text-sm
                          ${status === 'sending'
                            ? 'bg-primary/50 text-navy cursor-not-allowed'
                            : 'bg-primary text-navy hover:bg-primary/90'
                          }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* SUCCESS */}
            {status === 'success' && (
              <div className="bg-primary/10 border border-primary/30
                              rounded-xl p-4 text-center">
                <p className="font-body text-primary text-sm">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30
                              rounded-xl p-4 text-center">
                <p className="font-body text-red-400 text-sm">
                  Something went wrong. Please email me directly at onadhith@gmail.com
                </p>
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
