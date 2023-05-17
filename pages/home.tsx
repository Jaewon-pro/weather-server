import NavBar from "@/app/components/navbar/navbar";

function Header({ title }: { title: string })  {
  return <h1>{title}</h1>;
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Header title="IoT Project 2023" />
    </>
  )
}