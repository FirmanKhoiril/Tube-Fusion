import { SignedIn, SignedOut, UserButton, ClerkLoading, ClerkLoaded, useUser, useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";
import { LuUser2 } from "react-icons/lu";
import { toast } from "sonner";

const Login = () => {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    if (isSignedIn) {
      toast.success(`Successfully logged in with ${user?.firstName}!`);
    }
  }, [isSignedIn, user?.firstName]);

  const handleSignInClick = () => {
    openSignIn();
  };

  return (
    <section className="w-full">
      <header>
        <ClerkLoading>
          <button className="inline-block p-1" type="button">
            <LuUser2 size={24} className="icon" />
          </button>
        </ClerkLoading>
        <SignedOut>
          <ClerkLoaded>
            <button
              onClick={handleSignInClick}
              className="inline-block p-1 shadow-sm hover:bg-gray-100/5 transition duration-150 rounded-full"
              type="button"
            >
              <LuUser2 size={24} className="icon" />
            </button>
          </ClerkLoaded>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </section>
  );
};

export default Login;
