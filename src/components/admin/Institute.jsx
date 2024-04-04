import useGetInstitute from "@/hooks/admin/institute/useGetInstitute";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { BsTrash3Fill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const Institute = ({ navbar }) => {
  const { institutebox } = useGetInstitute();

  const handleDelete = async (id) => {
    console.log("Deleted Id: -", id);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_INSTITUTE}/${id}`, {
        method: "DELETE",
      });

      if (!res) {
        return;
      }
      toast.success("Succesfully deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={`${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div>
        <div className="p-2">
          <div>
            {institutebox.map((item) => (
              <div
                id={item._id}
                className="p-2 my-2 border sm:w-1/2 border-green-500 relative text-black"
              >
                <Link href={`/admin/institute/${item._id}`}>
                  <FaEdit
                    size={15}
                    className="absolute right-8 cursor-pointer"
                  />
                </Link>
                <BsTrash3Fill
                  size={15}
                  className="absolute right-2 text-red-600 cursor-pointer"
                  onClick={() => handleDelete(item._id)}
                />
                <p>
                  <span className="font-semibold">Institute Name:</span>{" "}
                  {item.instituteName}
                </p>
                <p>
                  <span className="font-semibold">Institute Year:</span>{" "}
                  {item.insituteYear}
                </p>
                <p>
                  <span className="font-semibold">Institute Degree:</span>{" "}
                  {item.degree}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institute;
