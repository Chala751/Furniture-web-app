import React from 'react'
import { Input } from '@/componentes/ui/input'
import { Textarea } from '@/componentes/ui/Textarea'
import { Button } from '@/componentes/ui/button'
import { Card, CardContent } from '@/componentes/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="bg-[#F1E0C6] min-h-screen py-16 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#6B4F3C] mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg">
          Have a question or need help? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        {/* Contact Form */}
        <motion.form
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-md rounded-xl p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Message sent!')
          }}
        >
          <h3 className="text-2xl font-semibold text-[#6B4F3C] mb-4">Send a Message</h3>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message..." rows={5} required />
          <Button type="submit" className="bg-[#6B4F3C] hover:bg-[#5a3f30] text-white">
            Submit
          </Button>
        </motion.form>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="bg-white border-0 shadow-sm p-4 flex items-start gap-4">
            <Mail className="text-[#6B4F3C]" />
            <div>
              <h4 className="font-semibold text-[#6B4F3C]">Email</h4>
              <p className="text-gray-700 text-sm">support@furnistyle.com</p>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm p-4 flex items-start gap-4">
            <Phone className="text-[#6B4F3C]" />
            <div>
              <h4 className="font-semibold text-[#6B4F3C]">Phone</h4>
              <p className="text-gray-700 text-sm">+1 234 567 8910</p>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm p-4 flex items-start gap-4">
            <MapPin className="text-[#6B4F3C]" />
            <div>
              <h4 className="font-semibold text-[#6B4F3C]">Address</h4>
              <p className="text-gray-700 text-sm">
                123 Interior Lane, Suite 45<br />Adama City, ST 45678
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/*  Embedded Map */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#6B4F3C] mb-4 text-center">Visit Our Showroom</h3>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="FurniStyle Showroom Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.452738993514!2d106.70042311526025!3d10.776384292320056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0d8912345d%3A0xe3c4a013bb8d1234!2sFurniture%20Showroom!5e0!3m2!1sen!2sus!4v161234567890!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
