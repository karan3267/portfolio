import React from "react";

function Sider() {
  return (
    <div className="fixed left-5 bottom-0 sm:static md:pb-5">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 md:text-2xl text-gray-500 ">
        <a href="https://www.instagram.com/karan.reddy_/?next=%2Fkaran.reddy%2F">
          <i class="ri-instagram-line"></i>
        </a>
        <a href="mailto:mail.google.com/mail/u/0/#inbox">
          <i class="ri-mail-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/sri-karan-reddy-mandha/">
          <i class="ri-linkedin-box-fill"></i>
        </a>
        <a href="https://github.com/karan3267">
          <i class="ri-github-fill"></i>
        </a>

        <div className="bg-gray-500 w-[1px] h-40 md:hidden"></div>
      </div>
    </div>
  );
}

export default Sider;
