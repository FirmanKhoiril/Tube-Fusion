import { SignedIn, SignedOut, SignInButton, UserButton, ClerkLoading, ClerkLoaded } from "@clerk/clerk-react";
import { LuUser2 } from "react-icons/lu";

const Login = () => {
  // const {isSignedIn, user} = useUser()

  return (
    <section className="w-full">
      <header className="">
        <ClerkLoading>
          <button className="inline-block p-2" type="button">
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