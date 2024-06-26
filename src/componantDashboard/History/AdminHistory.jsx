import React from "react";
import styles from "./History.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/Context";
export default function AdminHistory() {
  const { history } = useUser();
  const navigate = useNavigate();

  return (
    <div className={styles.AllHistory}>
      {history
        .slice()
        .reverse()
        .filter((e) =>
          e?.upUser
            ? e.upUser?.role === "admin" || e?.upUser?.role === "supervisor"
            : e?.user
            ? e?.user?.role === "admin" ||
              e?.user?.role === "supervisor" ||
              e?.user?.role === "user"
            : e?.data?.role === "admin" ||
              e?.data?.role === "supervisor" ||
              e?.data?.role === "user"
        )
        .map((e, i) => (
          <div className={styles.oneNotific} key={i}>
            <p>
              قام{" "}
              {e?.upUser
                ? e?.upUser?.role === "user"
                  ? "المستخدم"
                  : e?.upUser?.role === "admin"
                  ? "الادمن"
                  : e?.upUser?.role === "supervisor"
                  ? "المشرف"
                  : e?.upUser?.role === "owner"
                  ? "المالك"
                  : ""
                : e?.user
                ? e?.user?.role === "user"
                  ? "المستخدم"
                  : e?.user?.role === "admin"
                  ? "الادمن"
                  : e?.user?.role === "supervisor"
                  ? "المشرف"
                  : e?.user?.role === "owner"
                  ? "المالك"
                  : ""
                : e?.data?.role === "user"
                ? "المستخدم"
                : e?.data?.role === "admin"
                ? "الادمن"
                : e?.data?.role === "supervisor"
                ? "المشرف"
                : e?.data?.role === "owner"
                ? "المالك"
                : ""}{" "}
              <span style={{ color: "#2d2dc3", margin: "0 2px" }}>
                {e?.upUser
                  ? e?.upUser?.username
                  : e?.user
                  ? e?.user.username
                  : e?.data?.name}
              </span>
              <span>
                {e?.type === "register user success" ? (
                  "بانشاء حساب جديد"
                ) : e?.type === "user login" ? (
                  "بستجيل دخول"
                ) : e?.type === "delete user" ? (
                  <>
                    بحذف
                    {e?.data?.role === "user"
                      ? " المستخدم "
                      : e?.data?.role === "supervisor"
                      ? " المشرف "
                      : e?.data?.role === "admin"
                      ? " الادمن "
                      : ""}{" "}
                    <small style={{ color: "#2d2dc3" }}>
                      {e?.data?.username}
                    </small>
                  </>
                ) : //////////////come back/////////////////
                e?.type === "update user" ? (
                  "بتحديث بياناتة "
                ) : ////////////come back/////////////
                e?.type === "update user docImg" ? (
                  <>
                    برفع صورة وثيقة ل{" "}
                    <small style={{ color: "#2d2dc3" }}>
                      {e?.data?.username}
                    </small>
                  </>
                ) : e?.type === "user update password" ? (
                  "بتغييؤ كلمة المرور الخاصة بة"
                ) : e?.type === "accept user doc" ? (
                  <>
                    بقبول وثيقة{" "}
                    <small>
                      {e?.data?.role === "admin"
                        ? "الادمن"
                        : e?.data?.role === "supervisor"
                        ? "المشرف"
                        : e?.data?.role === "user"
                        ? " المستخدم "
                        : e?.data?.role === "owner"
                        ? " المالك "
                        : ""}
                    </small>
                    <small>{e?.data?.username}</small>
                  </>
                ) : //////////////////paypal and message//////////////////

                e?.type === "add message" ? (
                  " باضافة رسالة توجية "
                ) : e?.type === "update message" ? (
                  "بتحديث رسالة التوجية"
                ) : e?.type === "add paypal" ? (
                  " باضافة حساب بيبال "
                ) : e?.type === "update paypal" ? (
                  " بتحديث حساب بيبال "
                ) : e?.type === "delete" ? (
                  " بحذف حساب بيبال "
                ) : e?.type === "add desktop" ? (
                  " باضافة رابط تحميل التطبيق للايفون "
                ) : e?.type === "add android" ? (
                  " بأضافة رابط تحميل التطبيق للاندرويد "
                ) : ////////////////masscers /////////////////////

                e?.type === "add massacres data post" ? (
                  "برفع منشور"
                ) : e.type === "update massacres data post" ? (
                  " بتعديل منشور "
                ) : e?.type === "delete massacres data post" ? (
                  <>
                    {" "}
                    بحذف منشور{" "}
                    <small style={{ color: "#2d2dc3", fontSize: "14px" }}>
                      {e?.data?.title.slice(0, 40)}
                    </small>
                  </>
                ) : /////////////////////////child////////////////////
                e?.type === "add child data post" ? (
                  "برفع منشور"
                ) : e.type === "update child data post" ? (
                  " بتعديل منشور "
                ) : e?.type === "delete child data post" ? (
                  <>
                    {" "}
                    بحذف منشور{" "}
                    <small style={{ color: "#2d2dc3", fontSize: "14px" }}>
                      {e?.data?.name.slice(0, 40)}
                    </small>
                  </>
                ) : e?.type === "accept child data post" ? (
                  <>
                    {" "}
                    بقبول منشور{" "}
                    <small style={{ color: "#2d2dc3", fontSize: "14px" }}>
                      {e?.data?.name.slice(0, 40)}
                    </small>
                  </>
                ) : ////////////////list///////////////////////////////
                e?.type === "add list data post" ? (
                  "برفع منشور"
                ) : e.type === "updata list data post" ? (
                  " بتعديل منشور "
                ) : e?.type === "delete list data post" ? (
                  <>
                    {" "}
                    بحذف منشور{" "}
                    <small style={{ color: "#2d2dc3", fontSize: "14px" }}>
                      {e?.data?.name.slice(0, 40)}
                    </small>
                  </>
                ) : e?.type === "accept list data post" ? (
                  <>
                    {" "}
                    بقبول منشور{" "}
                    <small style={{ color: "#2d2dc3", fontSize: "14px" }}>
                      {e?.data?.name.slice(0, 40)}
                    </small>
                  </>
                ) : ////////////////////////////
                e?.type === "update user from dashboard" ? (
                  <>
                    بتحديث بيانات
                    <small style={{ color: "#2d2dc3", fontSize: "14px" }}>
                      {e?.data?.username}
                    </small>
                  </>
                ) : (
                  ""
                )}
              </span>
            </p>
            {/* /////////////////////user///////////////// */}
            {e?.type === "register user success" ||
            e?.type === "user login" ||
            e?.type === "update user" ||
            e?.type === "delete user" ||
            e?.type === "update user docImg" ||
            e?.type === "user update password" ||
            e?.type === "accept user doc" ||
            e?.type === "update user from dashboard" ? (
              <button
                className={styles.display}
                onClick={() =>
                  navigate(`/dashboard/singleUser/${e?.data?._id}`)
                }
              >
                عرض المستخدم
              </button>
            ) : (
              ""
            )}
            {/* //////////////message and paypal/////////////// */}
            {e?.type === "add message" ||
            e?.type === "update message" ||
            e?.type === "add paypal" ||
            e?.type === "update paypal" ||
            e?.type === "delete" ||
            e?.type === "add desktop" ||
            e?.type === "add android" ? (
              <button
                className={styles.display}
                onClick={() =>
                  navigate(`/dashboard/singlemessageandpaypal/${e?.data?._id}`)
                }
              >
                عرض المنشور
              </button>
            ) : (
              ""
            )}
            {/* //////////////////////masscers///////////////// */}
            {e?.type === "add massacres data post" ||
            e?.type === "update massacres data post" ||
            e?.type === "delete massacres data post" ? (
              <button
                className={styles.display}
                onClick={() =>
                  navigate(
                    `/dashboard/dataChildDisplaySitemascr/${e?.data?._id}`
                  )
                }
              >
                عرض المنشور
              </button>
            ) : (
              ""
            )}
            {/* /////////////////child//////////////////////// */}

            {e?.type === "add child data post" ||
            e?.type === "delete child data post" ||
            e?.type === "accept child data post" ||
            e?.type === "update child data post" ? (
              <button
                className={styles.display}
                onClick={() =>
                  navigate(`/dashboard/dataChildDisplaySite/${e?.data?._id}`)
                }
              >
                عرض المنشور
              </button>
            ) : (
              ""
            )}
            {/* /////////////////list////////////////// */}
            {e?.type === "add list data post" ||
            e?.type === "delete list data post" ||
            e?.type === "accept list data post" ||
            e?.type === "updata list data post" ? (
              <button
                className={styles.display}
                onClick={() =>
                  navigate(`/dashboard/dataDisplaySite/${e?.data?._id}`)
                }
              >
                عرض المنشور
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
}
