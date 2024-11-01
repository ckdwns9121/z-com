"use client";

import { useRouter } from "next/navigation";
import LoginPage from "../_component/LoginPage";

export default function LoginRedirectPage() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <LoginPage />;
}

// useRouter => 클라이언트에서 리다이랙트
// redirect => 서버에서 리다이렉트
