import Link from 'next/link';


// const HomeLink: React.FC = () => {
//   return (
//     <nav role="navigation">
//       <Link href="/"><li>Home</li></Link>
//     </nav>
//   );
// }

export default function HomeLink() {
  return (
    <nav role="navigation">
      <Link href="/"><li>Home</li></Link>
    </nav>
  );
}
