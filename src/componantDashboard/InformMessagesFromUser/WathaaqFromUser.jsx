import React from 'react'
import style from "../../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../context/Context';

export default function WathaaqFromUser() {
    const navigate = useNavigate();
      const { listDash } = useUser();
  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / وثائق</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم الوثيقة</th>
              <th>اسم الناشر</th>

              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {listDash.map((user, index) =>
              user.category === "damwathaaq" && user.isAccepted === false ? (
                <tr key={index}>
                  <td>{user.name} </td>
                  <td>{user?.user?.username} </td>

                  <td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() => {
                        navigate(
                          `/dashboard/displaywathaaqfromuser/${user._id}`
                        );
                      }}
                    >
                      عرض
                    </button>
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

