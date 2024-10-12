import logo from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import logo6 from "@/assets/logo6.png";
import Image from "next/image";
import Container from "./Container";

const Company = () => {
  return (
    <div className="bg-[#fef8eb] mt-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-10">
          <Image src={logo} alt="Logo" width={100} />
          <Image src={logo2} alt="Logo" width={100} />
          <Image src={logo3} alt="Logo" width={100} />
          <Image src={logo4} alt="Logo" width={100} />
          <Image src={logo5} alt="Logo" width={100} />
          <Image src={logo6} alt="Logo" width={100} />
        </div>
      </Container>
    </div>
  );
};

export default Company;
