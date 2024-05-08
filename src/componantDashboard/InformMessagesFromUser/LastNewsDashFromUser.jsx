import React from 'react'
import style from "../../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../context/Context';

export default function LastNewsDashFromUser() {
    const navigate = useNavigate();
      const { listDash } = useUser();
  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / الاخبار</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم الخبر</th>
              <th>اسم الناشر</th>

              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {listDash.map((user, index) =>
              user.category === "lastNews" && user.isAccepted === false ? (
                <tr key={index}>
                  <td>{user.name} </td>
                  <td>{user?.user?.username} </td>

                  <td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() => {
                        navigate(`/dashboard/displaylastnewsfromuser/${user._id}`);
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

