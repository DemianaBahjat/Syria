import React from "react";
import './Footer.css'
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer pt-5 pb-3 ">
        <div className="container">
          <h3 className="mb-4">الثورة السورية</h3>
          <div className="row gy-4">
            <div className="col-md-5">
              <div className="row gy-3">
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/">
                    الرئيسية
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/symbolthourauser">
                    رموز الثورة
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/graamsystem">
                    جرائم النظام
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/lastNews">
                    أخر الاخبار
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/blacklistuser">
                    القائمة السوداء
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/graemqasad">
                    جرائم قسد
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/archiefthoura">
                    أرشيف الثورة
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/blacklistuser">
                    مجرمي الحرب
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/graemdashuser">
                    جرائم داعش
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="contact-footer text-center">
                <p className=" para mb-3 p-0">تواصل معنا</p>
                <div className="social-icons-footer d-flex align-items-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=4917676000731"
                    className="text-white"
                  >
                    {" "}
                    <i className="fa-brands fa-whatsapp ms-3"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/syrian.revolution7"
                    className="text-white"
                  >
                    <i className="fa-brands fa-instagram ms-3"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@syrian.revolution7"
                    className="text-white"
                  >
                    <i className="fa-brands fa-tiktok ms-3"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/Syrian7Revolution"
                    className="text-white"
                  >
                    <i className="fa-brands fa-square-facebook ms-3"></i>
                  </a>
                  <a
                    href="https://twitter.com/syrian_revolut7"
                    className="text-white"
                  >
                    <i className="fa-brands fa-square-twitter ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div className="contact-footer text-center">
                <p className=" para mb-3 p-0"> تثبيت التطبيق</p>
                <div className="social-icons-footer d-flex align-items-center" style={{gap:'10px'}}>
                  <a href="https://download938.mediafire.com/ksvcxnlsirvg7anWQbCfZCKdsfKPWKjzXTy3_4QoqYkVC5NO2xgGhzPM1mGJ_x2c5rwhYpeGv7FG3jtSBW4miGL4VygJP9LUGeB8JEI6qn_CGv1RPBnHodPV4MUvg83-qnxtOL6CHZKHA8B66w5ERZtYZzY9jvMq1gjdOAaq/4255p8y3xparesh/Syrian.Revolution+.apk">
                    <button
                      className="btn oda"
                      style={{ border: "2px solid white", color: "white" }}
                    >
                      اندرويد
                    </button>
                  </a>
                  <a href="https://www.mediafire.com/file/w5lzwl0sxvgvqoh/Syrian.Revolution/file?dkey=zwy4s8f1ig4&r=438">
                    <button
                      className="btn"
                      style={{ border: "2px solid white", color: "white" }}
                    >
                      ايفون
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className=" para text-center p-0 m-0">
            جميع حقوق النشر محفوظة -
            <Link to="privacypolicy" style={{ textDecoration: "none" }}>
              سياسة الخصوصية{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
