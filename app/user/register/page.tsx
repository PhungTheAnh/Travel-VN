import BannerPage from "@/app/component/bannerPage/bannerPage";
import InputUser from "@/app/component/header/inputUser";
import Link from "next/link";

const Register = () => {
  const pageTitle = 'Đăng ký'
  return (
    <div className="w-full h-full">
      <BannerPage pageTitle={pageTitle} banner={" bg-[url('/banner/dalat2.jpg')]"}/>
      <div className="w-full py-[50px] xl:py-[80px] bg-white">
        <div
          className="w-[90%] max-w-[768px] mx-auto flex flex-col items-center justify-center gap-[20px] shadow-[0_10px_20px_#00000022] hover:shadow-[0_10px_20px_#00000066] rounded-xl py-[60px] px-[30px] bg-[#e1eaf8] transition-all duration-300">
          <p className="text-[24px] md:text-[28px] text-[#384a95] font-bold text-center">{pageTitle}</p>
          <InputUser name={'Tên người dùng'}/>
          <InputUser name={'Email'}/>
          <InputUser name={'Số điện thoại'}/>
          <InputUser name={'Mật khẩu'}/>
          <p
            className="w-full text-white py-2.5 px-5 text-lg font-semibold rounded-lg bg-[#4366c5] text-center cursor-pointer">{pageTitle}</p>
          <p className="text-sm italic font-normal text-[#666]">Bạn đã có tài khoản ? <Link
            className="underline text-primary" href="/user/register">Đăng nhập</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;