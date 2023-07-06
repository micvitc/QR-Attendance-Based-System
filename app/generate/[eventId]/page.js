// generate.js
import React from "react";
import { db } from "@/lib/db";
import QRCode from "react-qr-code";
import styles from "../../../styles/Home.module.css";

async function Generate({ params }) {
  const Participant = await db.participant.findFirst({
    where: {
      AND: {
        eventId: params.eventId,
        clubMemberId: "cljr0li8200057krc8fn3idm6",
      },
    },
  });
  const QR = Participant?.QR;
  console.log(Participant);
  return (
    <div className={styles.main}>
      <div className={styles.card}>Your QR</div>
      {QR != null && <QRCode value={QR} className={styles.containerColumn} />}
    </div>
  );
}

export default Generate;
