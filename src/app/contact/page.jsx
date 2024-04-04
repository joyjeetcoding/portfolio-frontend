"use client";
import Image from "next/image";
import Contact from "../../assets/Contact.png";
import { useState } from "react";
import usePostContact from "@/hooks/admin/contact/usePostContact";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const {loading, postContactInfo} = usePostContact();

  const handleSubmit = async(e) => {
    e.preventDefault();

    await postContactInfo(name, email, subject, message, setName, setEmail, setSubject, setMessage);

  }


  return (
    <div className="px-3 py-6 ">
      <Toaster />
      <div>
        <h1 className="font-submain font-extrabold text-4xl text-center underline">
          CONTACT ME
        </h1>
      </div>
      <div className="lg:flex lg:relative">
        <div className="hidden lg:block">
          <Image src={Contact} className="w-[40%] absolute -top-6 right-1/2" />
        </div>
        <div className="p-4 w-full">
          <div className="">
            <form onSubmit={handleSubmit} className="lg:absolute right-[10%] lg:w-full font-main flex flex-col justify-center items-center max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs my-2 p-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs my-2 p-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full max-w-xs my-2 p-6"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full max-w-xs my-2 p-6 size-40"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button className="btn my-2 w-full">
                {
                  loading ? <span className="loading loading-dots"></span> : "Submit"
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
