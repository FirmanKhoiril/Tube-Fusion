import { SignedIn, SignedOut, SignInButton, UserButton, ClerkLoading, ClerkLoaded, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { LuUser2 } from "react-icons/lu";
import { toast } from "sonner";

const Login = () => {
  const {isSignedIn, user} = useUser()

  useEffect(() => {
    if (isSignedIn) {
      toast.success(`Successfully login with ${user?.firstName}!`);
    }
  }, [isSignedIn, user?.firstName]);

  return (
    <section className="w-full">
      <header className="">
        <ClerkLoading>
          <button className="inline-block p-1" type="button">
            <LuUser2  size={24} className="icon" />
          </button>
        </ClerkLoading>
      <SignedOut>
        <ClerkLoaded>
          <SignInButton>
              <button className="inline-block p-1 shadow-sm hover:bg-gray-100/5 transition duration-150 rounded-full" type="button">
              <LuUser2  size={24} className="icon" />
              </button>
          </SignInButton>
        </ClerkLoaded>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </section>
  )
}

export default Login