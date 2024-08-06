import { SignedIn, SignedOut, SignInButton, UserButton, ClerkLoading, ClerkLoaded } from "@clerk/clerk-react";
import { LuUser2 } from "react-icons/lu";
import Loading from "./Loading";

const Login = () => {
  // const {isSignedIn, user} = useUser()

  return (
    <section className="w-full">
      <header className="">
        <ClerkLoading>
         <Loading isLoading={false} width={35} height={35} />
        </ClerkLoading>
      <SignedOut>
        <ClerkLoaded>
          <SignInButton>
              <button className="inline-block p-2 bg-gray-100/5 shadow-sm hover:bg-gray-100/10 transition duration-150 rounded-full" type="button">
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