import Leftsidebar from "@/components/common/Leftsidebar";
import MobileNav from "@/components/common/MobileNav";
import Rightsidebar from "@/components/common/Rightsidebar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#9d9292]" >
        <MobileNav />
        <div className="flex">
          <div>
            <Leftsidebar />
          </div>
          <div className="w-full container mx-auto relative  ">
            {children}
          </div>
          <div className=" hidden lg:flex ">
            <Rightsidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
