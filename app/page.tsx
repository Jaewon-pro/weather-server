import NavBar from "@/app/components/navbar/navbar";

function Header({ title }: { title: string })  {
  return <h1>{title}</h1>;
}

export default function () {
  return (
    <div>
      <NavBar />
      <Header title="IoT Project 2023" />
    </div>
  );
}
