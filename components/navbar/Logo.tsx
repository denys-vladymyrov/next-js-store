import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SiWebstorm } from "react-icons/si";

function Logo() {
  return (
    <>
      <Button size='icon' asChild>
        <Link href='/'>
          <SiWebstorm className='w-6 h-6' />
        </Link>
      </Button>
      <div className="flex flex-col">
        <div className="text-sm">Test admin login: <span className="font-bold">link_amd@yahoo.com</span></div>
        <div className="text-sm">Password: <span className="font-bold">admin1245!</span></div>
      </div>
    </>
  );
}

export default Logo;
