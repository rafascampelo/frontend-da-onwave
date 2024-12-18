import NextAuthSessionProvider from "@/providers/sessionProvider";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Onwave",
  description: "APP para a gestão do seu comercio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} overflow-y-hidden`}>
        <main className="w-full h-full">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </main>
      </body>
    </html>
  );
}
