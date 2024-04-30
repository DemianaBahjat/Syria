import { useContext } from "react";
import { ContextUser } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function SearchGlobal() {
    const { searchGlobal, lastNews, child,masc } = useContext(ContextUser);
    const navigate = useNavigate()
  return (
    <div>
      <section className="martyrs">
        <div className="container py-2">
          <div className="header position-relative py-5">
            <h3 className=" text-danger">نتائج البحث</h3>
          </div>
          <div className="row gy-3 mb-4">
            {lastNews
              .filter((e) => e?.name.includes(searchGlobal))
              .map((e, i) => (
                <div className="col-md-3" key={i}>
                  <div className="image mb-2">
                    <img
                      src={`https://syrianrevolution1.com/postImages/${e.selfImg}`}
                      alt="martyr"
                      className=" w-100 rounded-3 fimg"
                    />
                  </div>
                  <p>
                    {e?.name ? e?.name : ""}
                    <br />
                    <button
                      className="btu d-inline-block mx-1 px-3 rounded-3"
                      onClick={() => navigate(`/newsDetails/${e._id}`)}
                    >
                      المزيد
                    </button>
                  </p>
                </div>
              ))}
          </div>
          <div className="row gy-3 mb-4">
            {child
              .filter((e) => e?.name.includes(searchGlobal))
              .map((e, i) => (
                <div className="col-md-3" key={i}>
                  <div className="image mb-2">
                    <img
                      src={`https://syrianrevolution1.com/imgData/${e.profileImage}`}
                      alt="martyr"
                      className=" w-100 rounded-3 fimg"
                    />
                  </div>
                  <p>
                    {e?.name ? e?.name : ""}
                    <br />
                    <button
                      className="btu d-inline-block mx-1 px-3 rounded-3"
                      onClick={() => navigate(`/NewsDetailsMartyr/${e._id}`)}
                    >
                      المزيد
                    </button>
                  </p>
                </div>
              ))}
          </div>
          <div className="row gy-3 mb-4">
            {masc
              .filter((e) => e?.title.includes(searchGlobal))
              .map((e, i) => (
                <div className="col-md-3" key={i}>
                  <div className="image mb-2">
                    <img
                      src={`https://syrianrevolution1.com/postImages/${e.profileImage}`}
                      alt="martyr"
                      className=" w-100 rounded-3 fimg"
                    />
                  </div>
                  <p>
                    {e?.title ? e?.title : ""}
                    <br />
                    <button
                      className="btu d-inline-block mx-1 px-3 rounded-3"
                      onClick={() => navigate(`/NewsDetailsMascers/${e._id}`)}
                    >
                      المزيد
                    </button>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
