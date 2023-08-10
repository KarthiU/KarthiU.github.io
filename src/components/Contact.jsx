import { useState, useRef } from "react"; 
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { github, linkedin, insta } from '../assets'; 
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

//qhURh-AV3CfAeFCMi
//template_pvkjjuv
//service_damq46o
const Contact = () => {
  const formRef = useRef(); 
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true)
    emailjs.send('service_damq46o','template_pvkjjuv',  {
      from_name: form.name, 
      to_name: 'Karthigan', 
      from_email: form.email, 
      to_email: 'karthigan2004.work@gmail.com',
      message: form.message,
    },
    'qhURh-AV3CfAeFCMi').then(() => {
      setLoading(false)
      alert('Thank you, I will get back as soon as I can!'); 
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => { 
      setLoading(false)
      console.log(error);  
      alert('Something went wrong.')
    })
  }
 
  return (
    <> 
      <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden justify-center">
      <motion.div variants={textVariant}>  
        <p className={`${styles.sectionSubText} text-primary`}>Get in Touch with me</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>CONTACT.</h2>  
        <div className="flex flex-row place-content-center">
            <div
              onClick={() => window.open 
              ('https://github.com/KarthiU', "_blank")} 
              className="bg-primary w-20 h-20 rounded-full flex justify-center m-5
              items-center cursor-pointer hover:bg-[#2e9fe0] ">
                <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain "> 

                </img> 
            </div>
            <div
              onClick={() => window.open 
              ('https://www.instagram.com/karthigan_u/', "_blank")} 
              className="bg-primary w-20 h-20 rounded-full flex justify-center m-5
              items-center cursor-pointer hover:bg-[#2e9fe0] ">
                <img
                src={insta}
                alt="github"
                className="w-1/2 h-1/2 object-contain "> 

                </img> 
            </div>
            <div
              onClick={() => window.open 
              ('http://www.linkedin.com/in/karthiganu2004', "_blank")} 
              className="bg-primary w-20 h-20 rounded-full flex justify-center m-5
              items-center cursor-pointer hover:bg-[#2e9fe0] ">
                <img 
                src={linkedin}
                alt="linkedin" 
                className="w-1/2 h-1/2 object-contain "> 
 
                </img> 
            </div>
      </div>
      </motion.div>
        <motion.div className="flex-[0.66] bg-secondary p-8 rounded-2xl" variants={slideIn('left','tween', 0.3, 1)}>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <h3 className="text-primary text-[28px] font-bold">Send an Email</h3>
            <label className="flex flex-col">
              <span className="text-primary font-bold mb-4">Your Name</span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#bfe1e4] py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outlined-none border-none font-medium
                focus:outline outline-offset-2 outline-2 outline-primary"
              />
            </label>      
            <label className="flex flex-col">
              <span className="text-primary font-bold mb-4">Your Email</span>
              <input 
                type="email"
                name="email"
                value={form.email} 
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#bfe1e4] py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outlined-none border-none font-medium
                focus:outline outline-offset-2 outline-2 outline-primary
                "
              />
            </label>
            <label className="flex flex-col">
              <span className="text-primary font-bold mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="bg-[#bfe1e4] py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outlined-none border-none font-medium
                focus:outline outline-offset-2 outline-2 outline-primary"
              />
            </label>
            <button 
            type="submit"
            className="bg-[#bfe1e4] shadow text-[#e6f8fc] w-32 px-[5] py-[15px] rounded-md hover:bg-tertiary hover:text-white ">
              {loading ? 'Sending...':'Send'}
              </button>
          </form> 
        </motion.div>
      </div>
    </>
  )
} 
  
export default SectionWrapper(Contact, "contact"); 
