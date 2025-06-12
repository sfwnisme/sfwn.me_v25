"use client"
import Button from "@/components/Button/Button";
import Style from "./NotFoundPage.module.css";
import { useRouter } from "next/navigation";
export default function NotFoundPage() {

  const router = useRouter()

  return (
    <div className={Style['not-found']}>
      <h1 className={Style.title}>Oops!</h1>
      <h2 className={Style.subtitle}>The page you’re searching for isn’t available</h2>
      <Button onClick={() => router.push("/")}>Back to home</Button>
    </div>
  )
}