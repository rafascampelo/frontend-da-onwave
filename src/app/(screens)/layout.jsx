import "../globals.css";
import FooterMenu from "@/components/ui/footerMenu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="fund">
          {children}
          <FooterMenu />
        </div>
      </body>
      </html>
  
  );
}
