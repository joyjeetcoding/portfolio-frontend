"use client";
import { useState } from "react";
import usePostContact from "@/hooks/admin/contact/usePostContact";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { loading, postContactInfo } = usePostContact();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postContactInfo(
      name,
      email,
      subject,
      message,
      setName,
      setEmail,
      setSubject,
      setMessage
    );
  };

  return (
    <div className="hero min-h-screen bg-base-200 font-submain">
      <Toaster />

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-lg lg:text-5xl font-extrabold">GET IN TOUCH</h1>
          <p className="py-6 text-xs lg:text-lg">
          Please feel free to utilize the form below to get in touch with me. I welcome any inquiries or opportunities and will respond promptly to your message. Thank you for considering reaching out
          </p>
        </div>
        <div className="card shrink-0 lg:w-full w-[90%] lg:max-w-sm shadow-2xl max-w-sm bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs my-2 p-6 text-xs lg:text-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs my-2 p-6 text-xs lg:text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full max-w-xs my-2 p-6 text-xs lg:text-lg"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              type="text"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full max-w-xs my-2 p-6 size-40 text-xs lg:text-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="btn  btn-primary my-2 w-full text-xs lg:text-lg">
              {loading ? (
                <span className="loading loading-dots"></span>
              ) : (
                "Submit"
              )}
            </button>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
    // <div className="px-3 py-6 ">
    //   <div>
    //     <h1 className="font-submain font-extrabold text-4xl text-center underline">
    //       CONTACT ME
    //     </h1>
    //   </div>
    //   <div className="flex lg:flex-row flex-col items-center lg:justify-center h-screen lg:relative">
    //     <div className="hidden lg:block">
    //       <Image src={Contact} className="w-[40%] absolute -top-6 right-1/2" />
    //     </div>
    //     <div className="p-4 w-full">
    //       <div className="">
    //         <form onSubmit={handleSubmit} className="lg:absolute top-0 right-[10%] lg:w-full font-main flex flex-col justify-center items-center max-w-xs mx-auto">

    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactsPage;
