import FooterMenu from "@/components/ui/footerMenu";

export default function ScreensLayout({ children }) {
  return (
    <div className="">
      {children}
      <FooterMenu />
    </div>
  );
}
