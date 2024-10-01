
"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "-if9Cw.Fm1Sjw:IFItptLVauxPduMbF29trDo4dtQz-fP40-5psAPRJ7I",
  });
  return <ChatBox />;
}
