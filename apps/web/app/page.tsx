import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { HomeRedirect } from "./components";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <div>
      <HomeRedirect />
      <LoadingSpinner />
    </div>
  );
}