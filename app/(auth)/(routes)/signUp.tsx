'use client';
import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SignUpForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();
  // start the sign up process.
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== 'complete') {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push('/');
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="w-[400px] shadow dark:shadow-primary rounded-md text-secondary dark:text-primary bg-slate-900 p-5">
      {!pendingVerification && (
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="firstName">Nom</label>
            <input
              className="placeholder:opacity-50 text-primary dark:text-primary"
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Prénom</label>
            <input
              className="placeholder:opacity-50 text-primary dark:text-primary"
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              type="lastName"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="placeholder:opacity-50 text-primary dark:text-primary"
              onChange={(e) => setEmailAddress(e.target.value)}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="placeholder:opacity-50 text-primary dark:text-primary"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <Button onClick={handleSubmit}>Sign up</Button>
        </form>
      )}
      {pendingVerification && (
        <div>
          <form>
            <input
              className="placeholder:opacity-50 text-primary dark:text-primary"
              value={code}
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={onPressVerify}>Verify Email</Button>
          </form>
        </div>
      )}
      <div className="flex">
        <p>Déja inscrit?</p>
        <Link
          className="text-destructive"
          href={'sign-in'}>
          Connexion
        </Link>
      </div>
    </div>
  );
}
