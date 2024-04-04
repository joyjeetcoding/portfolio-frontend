import useGetAbout from "@/hooks/admin/about/useGetAbout";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const About = ({ navbar }) => {
  const { aboutbox } = useGetAbout();

  return (
    <div className={`${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div>
        <div className="p-2">
          <div>
            {aboutbox.map((item) => (
              <div
                id={item._id}
                className="p-2 my-2 border sm:w-1/2 border-green-500 relative text-black"
              >
                <Link href={`/admin/about/${item._id}`}>
                  <FaEdit
                    size={15}
                    className="absolute right-2 cursor-pointer"
                  />
                </Link>
                <p>
                  <span className="font-semibold">About:</span> {item.about}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
