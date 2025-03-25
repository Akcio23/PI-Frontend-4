import { ButtonLogin, ButtonSignIn } from "./_components/Buttons.jsx";

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10  h-96 justify-center items-center">
        <p className="text-white text-center font-bold">Seja bem vindo ao portal clima!</p>
        <div className="flex gap-5 ">
          <ButtonLogin />
          <ButtonSignIn />
        </div>

      </div>


    </div>
  );
}
