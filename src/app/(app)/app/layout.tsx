import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";
import { BASE_API_URL } from "@/lib/constants";
import { Pet } from "@/lib/types";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(BASE_API_URL);
  if (!response.ok) {
    throw new Error("Could not fetch pets");
  }
  const data: Pet[] = await response.json();

  console.log(data);
  return (
    <>
      <BackgroundPattern />
      <div className="max-w-[1050px] min-h-screen mx-auto px-4 flex flex-col">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}
