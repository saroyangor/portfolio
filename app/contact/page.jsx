'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

import { Alert } from '@/components/Alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useAlert from '@/hooks/useAlert'

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: '(+374) 94 963676',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'saroyan98@gmail.com',
  },
]

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const {alert, showAlert, hideAlert} = useAlert()
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm("service_8oar9bp", "template_8qrgx55", formRef.current, {
        publicKey: "5Dmov6X56jTzvXCPD",
      })
      .then(
        () => {
          setLoading(false)
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          })

          setTimeout(() => {
            hideAlert(false)
            setForm({
              name: '',
              email: '',
              message: '',
            })
          }, [3000])
        },
        (error) => {
          setLoading(false)
          console.error(error)

          showAlert({
            show: true,
            text: 'I didn\'t receive your message 😢',
            type: 'danger',
          })
        },
      )
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 0.3, duration: 0.4, ease: 'easeIn'},
      }}
      className="py-6"
    >
      {alert.show && <Alert {...alert} />}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={formRef} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Contact me in any format convenient for you.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" name="name" onChange={handleChange}/>
                <Input type="lastname" placeholder="Last Name" name="lastname" onChange={handleChange}/>
                <Input type="email" placeholder="Email address" name="email" onChange={handleChange}/>
                <Input type="phone" placeholder="Phone number" name="phone" onChange={handleChange}/>
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                onChange={handleChange}
              />
              {/* btn */}
              <Button size="md" className="max-w-40" disabled={loading} onClick={handleSubmit}>
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
