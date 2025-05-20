import ProfilePage from "@/components/templates/ProfilePage/ProfilePage";
import { Suspense } from "react";

export default function Profile() {
  return (
    <Suspense>
      <ProfilePage />
    </Suspense>
  )
}