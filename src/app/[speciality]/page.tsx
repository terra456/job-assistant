import { getVacancy } from "@/lib/api";

export default async function SpecialityPage({
  params,
}: {
  params: Promise<{ speciality: string }>
}) {
  const { speciality } = await params;
  const post = await getVacancy(speciality);
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.speciality}</p>
    </div>
  )
}