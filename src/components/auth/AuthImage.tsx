import Image from "next/image";
import authImage from '@/assets/auth_image.svg'

const AuthImage = () => {
    return (
        <div className="h-[500px]">
        <Image
          src={authImage}
          alt="auth_image"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="object-contain h-full w-full"
        />
      </div>
    );
};

export default AuthImage;