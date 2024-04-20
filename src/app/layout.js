import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import GlobalState from "@/context/GlobalContext";
import Navbar from "@/components/userView/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: '/profile_avater.png'
  },
  title: "My Portfolio"
}

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  // const isAdminPath = pathname.startsWith("/admin");

  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} `}>
        <AuthContextProvider>
          <GlobalState>
            {/* {!isAdminPath ? <Navbar /> : null} */}
            <Navbar/>
            {children}
          </GlobalState>
        </AuthContextProvider>
      </body>
    </html>
  );
}
