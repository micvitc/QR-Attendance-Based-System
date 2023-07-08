import React from "react";
import { db } from "@/lib/db";
import QRCode from "react-qr-code";
import styles from "../../../styles/Home.module.css";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

export const dynamic = 'force-dynamic' 
async function Generate({ params }) {
  const session = await getAuthSession();
  try {
    if (!session) {
      return (
        <div className="p-4 h-[80vh] grid place-items-center">

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            <Link href="/signin">Sign In</Link>
          </button>
        </div>
      )
    }


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
  catch (err) {
    return (
      <div className="p-4 h-[80vh] grid place-items-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
          Something went wrong
        </button>
      </div>
    )
  }
}

export default Generate;
