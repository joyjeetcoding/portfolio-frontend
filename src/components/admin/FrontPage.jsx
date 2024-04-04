"use client";
import useGetTiteSummary from "@/hooks/admin/frontpage/useGetTiteSummary";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const FrontPage = ({ navbar }) => {
  const { frontbox } = useGetTiteSummary();

  return (
    <div className={`${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div>
        {frontbox.map((item) => (
          <div key={item._id} className="p-2">
            <div className="p-2 my-2 border sm:w-1/2 border-green-500 relative text-black">
              <Link href={`/admin/frontpage/${item._id}`}>
                <FaEdit size={15} className="absolute right-2" />
              </Link>

              <p>
                <span className="font-semibold">Title:</span> {item.title}
              </p>
              <p>
                <span className="font-semibold">Summary:</span> {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
