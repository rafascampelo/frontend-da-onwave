import Head from "next/head";
import "../globals.css";
import { UserProvider } from "../context/user";

export const metadata = {
  title: "Onwave",
  description: "APP para a gestão do seu comercio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <a rel="preconnect" href="https://fonts.googleapis.com" />
        <a
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <a
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex  flex-col items-center  h-screen bg-gradient-to-b justify-center">
        <main>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <UserProvider>{children}</UserProvider>
        </main>
      </body>
    </html>
  );
}
