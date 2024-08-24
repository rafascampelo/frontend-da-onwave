
import "./globals.css";

export const metadata = {
  title: "Onwave",
  description: "APP para a gestão do seu comercio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
