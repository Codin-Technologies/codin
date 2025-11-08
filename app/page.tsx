import Image from "next/image";
import TMSLayout from "./(pages)/layout";
import Dashboard from "./(pages)/dashboard";

export default function Home() {
  return (
    <TMSLayout>
      <Dashboard/>
    </TMSLayout>
  );
}
