import Container from "@/components/ui/Container";
import LottieAnimation from "@/components/ui/LottieAnimation";
import { Button, Input, Textarea } from "@nextui-org/react";
import contact from "@/assets/animation/contact-us.json";
import React from "react";

const ContactUsPage = () => {
  return (
    <Container>
      <div className="space-y-5 mt-16 p-5 md:p-0">
        {/* heading */}
        <h1 className="text-center text-xl md:text-4xl font-semibold gradient mt-16  mb-5">
        Contact Us
      </h1>
        {/* form body */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* form */}
          <div className="flex-1 w-full space-y-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input
                label="Name"
                placeholder="Your Name"
                id="name"
                type="text"
                className="placeholder:text-gray-500"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input
                label="Email"
                placeholder="Your Email"
                id="email"
                type="email"
                className="placeholder:text-gray-500"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Textarea
                label="Message"
                placeholder="Type your message here."
                className="placeholder:text-gray-500"
              />
            </div>
            <Button color="primary">Submit</Button>
          </div>
          {/* image */}
          <div className="flex-1 md:h-[400px] ">
            <LottieAnimation className="h-[300px]" animationData={contact} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUsPage;
