import { useState } from "react";
import toast from "react-hot-toast";

function handleInputErrors(name, email, subject, message) {
  if(!name || !email || !subject || !message) {
    toast.error("All the fields are necessary")
    return;
  }

  return true;
}


const usePostContact = () => {
  const [loading, setLoading] = useState(false);

  const postContactInfo = async (
    name,
    email,
    subject,
    message,
    setName,
    setEmail,
    setSubject,
    setMessage
  ) => {

    const success = handleInputErrors(name, email, subject, message);

    if(!success)
      return;

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CONTACT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Successfully Submitted");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {
      toast.error(error.message);
    } finally {
        setLoading(false)
    }
  };

  return { loading, postContactInfo };
};

export default usePostContact;
