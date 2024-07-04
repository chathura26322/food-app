import { assets, socialMedia } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-black py-12 w-full">
      <div className="flex justify-center items-center">
        <img
          src={assets.logo}
          alt="KFC Logo"
          className="h-[120px] w-[120px] mx-4"
        />
        <hr className="bg-white w-1/2 border-2" />
        <div className="flex space-x-4 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialMedia.instagram}
              alt="Instagram"
              className="h-12 w-12"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialMedia.facebook}
              alt="Facebook"
              className="h-12 w-12"
            />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialMedia.tiktok} alt="TikTok" className="h-12 w-17" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialMedia.youtube}
              alt="YouTube"
              className="h-12 w-12"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-around text-white mt-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold">ABOUT</h3>
          <ul>
            <li>About Us</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">ORDER NOW</h3>
          <ul>
            <li>Mains</li>
            <li>Meals & Beverages</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">POLICY</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">MY ACCOUNT</h3>
          <ul>
            <li>Sign In</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white mt-8">
        &copy; 2024 KFC Sri Lanka. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
