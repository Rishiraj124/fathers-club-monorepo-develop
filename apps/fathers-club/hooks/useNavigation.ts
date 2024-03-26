import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useState } from 'react';

//its a convention to have "use" in the start of hooks naming
export const useNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>(''); //'Tab 1' or 'tAB 2' or 'tab 3'
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return {
    open,
    setOpen,
    active,
    setActive,
    pathname,
    params,
    router,
    searchParams,
  };
};
