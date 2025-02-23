import { randomBytes } from "crypto";

const generateOTP = () => {
    const otp = randomBytes(6).toString("hex");
    return otp;
};

export default generateOTP;