import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { LuUser2 } from "react-icons/lu";

const Login = () => {
  return (
    <section className="w-full">
      <header>
      <SignedOut>
          <SignInButton>
            <button className="inline-block p-2 bg-gray-100/5 shadow-sm hover:bg-gray-100/10 transition duration-150 rounded-full" type="button">
            <LuUser2  size={24} className="icon" />
            </button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </section>
  )
}

export default Login