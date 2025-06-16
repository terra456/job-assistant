import { getVacancie } from "@/lib/api";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vacancie = await getVacancie(Number(id));

  return (
    <div>
      <main>
        <h1>{vacancie.title}</h1>
        <p>{vacancie.description}</p>
      </main>
    </div>
  );
}
