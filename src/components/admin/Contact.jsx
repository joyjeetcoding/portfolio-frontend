"use client";
import useGetContact from "@/hooks/admin/contact/useGetContact";

const Contact = ({ navbar }) => {
  const { contactbox } = useGetContact();

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={`${navbar ? "hidden" : "block"}`}>
      <div>
        <div className="p-2">
          <div>
            {contactbox.map((item) => (
              <div className="p-2 my-2 border sm:w-1/2 border-green-500 relative text-black">
                <p>
                  <span className="font-semibold">Name:</span> {item.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${item.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                    onClick={() => handleEmailClick(item.email)}
                  >
                    {item.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Subject:</span> {item.subject}
                </p>
                <p>
                  <span className="font-semibold">Message:</span> {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
