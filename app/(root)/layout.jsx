import Leftsidebar from "@/components/common/Leftsidebar";
import Rightsidebar from "@/components/common/Rightsidebar";




export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-[#9d9292]" >
        <div className="flex">
          <div>
            <Leftsidebar />
          </div>
          <div className="w-full container mx-auto  bg-[#000000]   ">
            {children}
          </div>
          <div>
            <Rightsidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
