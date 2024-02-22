import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <div className="w-full flex flex-col p-[30px] h-[80vh]">
        <div className="ml-[400px] mt-[100px] bg-[url('/images/image1.jpg')] w-1/2 h-3/4 bg-cover bg-no-repeat absolute">
        </div>
        <div className="pl-[150px] z-[20] mt-[150px] flex flex-col gap-[50px]">
          <div className="flex flex-col w-full h-full flex flex-col justify-center">
            <h1 className="text-[1.5em] font-bold">ICELAND</h1>
            <h1 className="text-[6em] font-bold text-[#EB1648]">KRAFLA</h1>
          </div>
          <div className="text-[.9em]">
            <p className="">LATITUDE (DD) <strong>14.50</strong></p>
            <p className="">LONGITUDE (DD) <strong>90.88</strong></p>
            <p className="">ELEVETION (M) <strong>90.88</strong></p>
          </div>
          <div className="mt-[auto] flex flex-row gap-[20px]">
            <button className="rounded-full bg-[#EB1648] w-[40px] h-[40px] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024"><path fill="#FFF" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"/><path fill="#FFF" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"/></svg></button>
            <button className="rounded-full bg-[#7DA389] w-[40px] h-[40px] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 2048 2048"><path fill="#FFF" d="m2042 1024l-941 941l-90-90l787-787H0V960h1798l-787-787l90-90z"/></svg></button>
          </div>
        </div>
        <div className="ml-[auto] mr-[250px] z-[20] mt-[50px] w-[200px] text-[#FFF]">
          <div className="bg-[#EB1648] flex flex-row p-[10px] justify-center items-center gap-[10px]">
            <h1 className="font-bold text-[1em]">CHILLE</h1>
            <div className="w-1/5 bg-[lightgray] h-[1px]"></div>
            <h2 className="ml-[auto]">02</h2>
          </div>
        </div>
        

      </div>
    </main>
  );
}
