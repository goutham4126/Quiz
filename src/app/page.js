import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link href="/pdf">PDF</Link>
      <Link href="/prompt">Prompt</Link>
    </div>
  );
}
