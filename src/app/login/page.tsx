import { AuthForm } from "@/components/auth/auth-form";
import { Logo } from "@/components/logo";
import AuthImage from "@/public/Abstract Curves and Colors.jpeg";
import Image from "next/image";
const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relative">
      <div className="relative w-full flex flex-col bg-muted p-10 text-foreground">
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10" />
        <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10" />
        <Image
          src={AuthImage}
          alt="Login Image"
          fill
          className="w-full h-full object-cover"
        />
        <div className="relative z-20 flex items-center">
          <Logo />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2 text-primary-foreground">
            <p className="text-lg ">
              &ldquo;Pictoria AI is a game changer for me. I have been able to
              generate high quality professional headshots within minutes. It
              has saved me countless hours of work and cost as well.&ldquo;
            </p>
            <footer className="text-sm">- Jane Doe</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center p-8 h-full w-full">
        <div className="w-[350px] max-w-xl mx-auto">
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default AuthenticationPage;
