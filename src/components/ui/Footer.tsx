import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#fcdd9f] p-5 md:p-0">
        <div className="py-16 flex flex-col md:flex-row md:items-center justify-around space-y-5 md:space-y-0">
          {/* logo and short description */}
          <div>
            <h1 className=" text-gradient text-2xl md:text-3xl font-bold">
              BabyBliss
            </h1>
            <p className="mt-2 ">Bringing Comfort and Joy to Every Moment</p>
          </div>
          {/* pages */}
          <div>
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul>
              <li>
                <Link href="/policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* social icons */}
          <div>
            <h4 className="text-lg font-semibold">Follow us on:</h4>
            <ul>
              <li>
                <p>Facebook</p>
              </li>
              <li>
                <p>LinkedIn</p>
              </li>
              <li>
                <p>Twitter</p>
              </li>
              <li>
                <p>Youtube</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">
          &copy; 2024 BabyBliss. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
