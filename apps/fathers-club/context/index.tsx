'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from '../types/User';
//import { createClient } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
interface IAppContext {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  supabase: any;
}
const AppContext = createContext<IAppContext | undefined>(undefined);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  //   const supabase = createClient(
  //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //     process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  //   );
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const { data }: any = await supabase.auth.getSession();
        if (data) {
          console.log(data);
          setUser(data.user);
        }
        //supabase fetch current user
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);
  if (loading) return <div>Loading.......</div>;
  return (
    <AppContext.Provider value={{ user, setUser, supabase }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
