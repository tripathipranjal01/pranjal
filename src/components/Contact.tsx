import React, { useState } from 'react';
import { Mail, Calendar, MessageCircle, Zap, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentRole: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        currentRole: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about FLASHFIRE? Our team is here to help you get started on your journey to landing your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Email Us</p>
                    <p className="text-gray-600 text-sm sm:text-base">feedback.flashfire@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Book a Demo</p>
                    <p className="text-gray-600 text-sm sm:text-base">Schedule a free consultation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 sm:p-8 rounded-2xl text-white shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-4">Why Choose FLASHFIRE?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">95%</div>
                  <div className="text-orange-100 text-xs sm:text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">220+</div>
                  <div className="text-orange-100 text-xs sm:text-sm">Hours Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">10K+</div>
                  <div className="text-orange-100 text-xs sm:text-sm">Jobs Landed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                  <div className="text-orange-100 text-xs sm:text-sm">AI Working</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  We have received your message. Our team will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Role</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm sm:text-base"
                    placeholder="Tell us about your job search goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 sm:py-4 px-6 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Ready to Transform Your Career?</h3>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've accelerated their careers with FLASHFIRE's AI-powered job search automation.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:scale-105"
            >
              Start Your Free Trial Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;