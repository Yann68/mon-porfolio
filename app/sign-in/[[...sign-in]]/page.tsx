import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="w-full flex justify-center pb-6">
      <SignIn />
    </div>
  );
}
