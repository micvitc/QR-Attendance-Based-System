// generate.js
import React from "react";
import { db } from "@/lib/db";
import QRCode from "react-qr-code";
import styles from "../../../styles/Home.module.css";
import { getAuthSession } from "@/lib/auth";

async function Generate({ params }) {
  const session = await getAuthSession();
  const ClubMember = await db.clubMember.findFirst({
    where: { VITEmail: session.user.email },
  });
  const Participant = await db.participant.findFirst({
    where: {
      AND: {
        eventId: params.eventId,
        clubMemberId: ClubMember.id,
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
