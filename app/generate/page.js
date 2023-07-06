import React from "react";
import QRCode from "react-qr-code";
import styles from "../../styles/Home.module.css";

function Generate() {
  // const [qrCodeValue, setQrCodeValue] = useState("");
  

  return (
    <div className="flex items-center justify-center">
      {/* <div className={styles.card}>Generate QR</div> */}

        <QRCode value={"qrCodeValue"} className={styles.containerColumn} />

    </div>
  );
}

export default Generate;
