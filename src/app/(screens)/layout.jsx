import FooterMenu from "@/components/ui/footerMenu";

export default function ScreensLayout({ children }) {
  return (
    <div>
      {children}
      <FooterMenu />
    </div>
  );
}
