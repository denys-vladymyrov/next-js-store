import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SiWebstorm } from "react-icons/si";

function Logo() {
  return (
      <Button size='icon' asChild>
        <Link href='/'>
          <SiWebstorm className='w-6 h-6' />
        </Link>
      </Button>
  );
}

export default Logo;