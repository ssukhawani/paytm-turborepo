// import Image from "next/image";
// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";

// const prisma = new PrismaClient();

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-4xl">Hello</h1>
    </div>
  );
}
