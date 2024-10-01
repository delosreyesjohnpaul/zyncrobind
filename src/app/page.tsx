import DefaultLayout from "@/components/Layout/DefaultLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ZyncroBind: A leading research platform for drug discovery",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>Hello</p>
      </DefaultLayout>
    </>
  );
}
