import FavoritesPage from "@/components/templates/FavoritesPage/FavoritesPage";
import { Suspense } from "react";

export default function Favorites() {
  return (
    <Suspense>
      <FavoritesPage />
    </Suspense>
  )
}