'use client';
import { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  // start the sign In process.
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === 'complete') {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push('/');
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
    } catch (err: any) {
      console.error('error', err.errors[0].longMessage);
    }
  };

  return (
    <div>
      <div className="w-[400px] shadow dark:shadow-primary rounded-md text-secondary dark:text-primary bg-slate-900 p-5">
        <h3 className="mb-3 text-center text-xl">Connectez-vous</h3>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="py-1 px-2 rounded placeholder:opacity-50 text-primary dark:text-primary"
              onChange={(e) => setEmailAddress(e.target.value)}
              id="email"
              name="email"
              type="email"
              placeholder="Entrer votre adresse e-mail"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="py-1 px-2 rounded placeholder:opacity-50 text-primary dark:text-primary"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              placeholder="Entrer votre mot de passe"
            />
          </div>
          <Button onClick={handleSubmit}>Sign In</Button>
        </form>
        <div className="flex p-2 space-x-2">
          <p>Pas encore inscris?</p>
          <Link
            className="text-destructive"
            href={'sign-up'}>
            Inscription
          </Link>
        </div>
      </div>
    </div>
  );
}
