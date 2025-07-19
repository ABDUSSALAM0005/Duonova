"use client";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 704 467 355",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "duonova@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "kano, Nigeria",
  },
];

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  //Alert
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    select: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // 🔔 for alert

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [state, handleSubmit] = useForm("xnnzqpqb");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


useEffect(() => {
  if (state.succeeded) {
    setIsSubmitted(true);
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      select: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
    setTimeout(() => setIsSent(false), 5000);
  }

  // Show error if submission failed
  // if (!state.submitting && !state.succeeded && (state.errors?.length > 0 || state?.error)) {
  //   setHasError(true);
  //   setTimeout(() => setHasError(false), 6000);
  // }
}, [state.succeeded]);



  return (
    <motion.section
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      // }}
      className="py-4"
    >
      <div className="container mx-auto">
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[99] w-fit"
            >
              <Alert className="bg-green-500 text-white shadow-lg rounded-lg px-6 py-4">
                <AlertTitle>✅ Message Sent!</AlertTitle>
                <AlertDescription>
                  Thanks for reaching out. We'll get back to you shortly.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

    {/* <AnimatePresence>
  {hasError && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[99] w-fit"
    >
      <Alert className="bg-red-500 text-white shadow-lg rounded-lg px-6 py-4">
        <AlertTitle>❌ Failed to Send</AlertTitle>
        <AlertDescription className="text-white space-y-1">
          {state.errors?.length > 0 ? (
            state.errors.map((error, idx) => (
              <p key={idx}>• {error.message}</p>
            ))
          ) : (
            <p>• {state.error || "Something went wrong. Please try again."}</p>
          )}
        </AlertDescription>
      </Alert>
    </motion.div>
  )}
</AnimatePresence> */}


        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div
            data-aos="fade-right"
            className="xl:w-[54%]  order-2 xl:order-none"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-7 mb-5 bg-[#27272c] rounded-xl"
            >
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus doloribus, itaque
              </p>
              {/*input*/}
              <div className="grid grid-cols1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="firstname"
                />
                <Input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="lastname"
                />
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  id="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              {/*select*/}
              <Select
                name="select"
                value={form.select}
                onValueChange={(val) => setForm({ ...form, select: val })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a service</SelectLabel>
                    <SelectItem value="Front end web development">
                      Front end web development
                    </SelectItem>
                    <SelectItem value="content creation">Content Creation</SelectItem>
                    <SelectItem value="graphics design">Graphics Design</SelectItem>
                    <SelectItem value="social marketing">Social Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <input type="hidden" name="service" value={form.select} /> */}

              {/*textarea*/}
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type Your message here."
              />
              {/*btn*/}
              <div className="text-center md:text-start">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  size="lg"
                  className="max-w-40"
                >
                  send message
                </Button>
              </div>
            </form>
          </div>
          {/*info*/}
          <div
            data-aos="fade-left"
            className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
