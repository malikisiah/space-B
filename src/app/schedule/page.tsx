import Header from "./header";
import Table from "./table";
import Link from "next/link";

export default function Schedule() {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='flex items-center justify-center'>
        <Table />
      </div>
    </div>
  );
}
