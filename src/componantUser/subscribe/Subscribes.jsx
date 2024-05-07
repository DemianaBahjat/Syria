import React from "react";

export default function Subscribes() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "#00011C80",
        top: 0,
        left: 0,
      }}
    >
      <div
        className="gh"
        style={{
          padding: "30px 10px",
          width: "40%",
          height: "38%",
          transform: "translateY(150px)",
          backgroundColor: "#F7F7F7",
          borderRadius: "5px",
          margin: "auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
          }}
        >
       شارك المحتوي الان
        </p>

        <input type="text" className="form-control" />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translatex(-50%)",
            display: "flex",
            gap: "5px",
          }}
        >
          <button className="btn btn-danger">رجوع</button>
          <button className="btn btn-primary">نسخ رابط المنشور</button>
        </div>
      </div>
    </div>
  );
}
