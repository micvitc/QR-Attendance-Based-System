// generate.js
import React from "react";
import { db } from "@/lib/db";
import QRCode from "react-qr-code";
import styles from "../../styles/Home.module.css";

async function Generate() {
  const Participant = await db.participant.findFirst({
    where: {
      AND: { eventId: eventId, clubMemberId: clubMemberId },
    },
  });
  const QR = Participant?.QR;
  console.log(Participant);
  return (
    <div className={styles.main}>
      <div className={styles.card}>Generate QR</div>
      {QR != "" && <QRCode value={QR} className={styles.containerColumn} />}
    </div>
  );
}

export default Generate;
