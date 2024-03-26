'use client';

import { useAppContext } from 'apps/fathers-club/context';
import { useNavigation } from 'apps/fathers-club/hooks/useNavigation';
import { supabase } from 'apps/fathers-club/lib/supabase';
import { validEmail } from 'apps/fathers-club/lib/utils';
import { User } from 'apps/fathers-club/types/User';
import { useState } from 'react';

const Login = () => {
  const { router } = useNavigation();

  const { setUser } = useAppContext() || {};
  const [data, setData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const login = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    // eslint-disable-next-line react-hooks/rules-of-hooks

    const { email, password } = data;
    if (email.length < 4 || password.length < 4)
      return alert('Please enter a valid email or password');
    if (!validEmail(email)) return alert('Please enter a valid email');
    try {
      setLoading(true);
      const { data: dataSupabase, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });
      if (error) {
        console.log(error);
        return setError('Sorry impossible to login');
      }
      if (dataSupabase) {
        const { user, session } = dataSupabase;
        const { access_token, refresh_token } = session;
        await supabase.auth.setSession({
          access_token: refresh_token,
          refresh_token: '',
        });
        //here once the session is set we need to hard refresh
        console.log('main user', user);
        if (setUser) setUser(user as User);
        router.refresh();
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        Email
        <input
          type="text"
          name="email"
          value={data?.email}
          onChange={handleChange}
        />
      </div>
      <div>
        Password
        <input
          type="password"
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
      </div>
      {error && <div>{error}</div>}
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
