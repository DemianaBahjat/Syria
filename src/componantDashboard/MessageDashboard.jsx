import { useState } from "react";
import styles from "../styleDashboard/AddSuperVisor.module.css";
import axios from "axios";
import Joi from "joi";
export default function MessageDashboard() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ category: "message" });
    const [ success, setSuccess ] = useState( false );
    const[errorListUser,setErrorListUser] = useState([])
    /////////////////////////////
       function validationAddUser() {
         let schema = Joi.object({
           category: Joi.string().required(),
           content: Joi.string().required().messages({
             "string.empty": "  الرسالة مطلوبة",
             "any.required": "  الرسالة مطلوبة",
           }),
         });
         return schema.validate(message, { abortEarly: false });
       }
    async function handleSubmit( e ) {
    setSuccess(false)
      e.preventDefault();
        let responseValidateUser = validationAddUser();
        if ( responseValidateUser.error ) {
            setErrorListUser( [ responseValidateUser.error.details ] );
        } else {
            setErrorListUser('')
            setLoading( true )
            await axios
                .post(
                    `https://syrianrevolution1.com/messagePaypal/add/${localStorage.getItem(
                        "idUserLogin"
                    )}`, message,
                    {
                        headers: {
                            Authorization: localStorage.getItem( "token" ),
                        },
                    }
                )
                .then( ( result ) => {
                    console.log(result)
                    if ( result.data.success === "MessagePaypal added successfully" ) {
                        setLoading( false )
                        setSuccess( true );
                    }
                } )
                .catch( ( error ) => {
                    setLoading( false );
                    console.log( error )
                } );
        }
  }
  return (
    <div className={styles.AddSuperVisor}>
      <div className={styles.head}>
        <p>رسالة التوجية</p>
      </div>
      <form action="" className={styles.form}>
        {success && (
          <p className="alert alert-success alerthemself">
            تمت اضافة الرسالة بنجاح
          </p>
        )}
        {errorListUser &&
          errorListUser.map((error, index) => (
            <p key={index} className="alert alert-secondary alerthemself">
              {error[index].message}
            </p>
          ))}
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1} style={{ width: "100%" }}>
              <label htmlFor=""> رسالة التوجية</label>
              <textarea
                onChange={(e) =>
                  setMessage((prevState) => ({
                    ...prevState,
                    content: e.target.value,
                  }))
                }
                placeholder="   رسالة التوجية"
                className="form-control"
                style={{ height: "50vh" }}
                required
              ></textarea>
            </div>
          </div>
          <div className={styles.btnbottom} style={{ justifyContent: "start" }}>
            <button
              className={`add`}
              style={{ color: "white", backgroundColor: "green" }}
              onClick={handleSubmit}
            >
              {loading ? (
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                "أرسال"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
