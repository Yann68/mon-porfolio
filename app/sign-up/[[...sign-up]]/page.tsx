import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="w-full flex justify-center pb-6">
      <SignUp />
    </div>
  );
}
