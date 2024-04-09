import Image from "next/image";
import COIN from "@/public/coins.jpg"
export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="relative h-screen w-1/2 overflow-clip">
      <Image src={COIN} alt="coin" placeholder="blur" className="object-cover object-bottom" />
      <div className="absolute bottom-4 left-4 text-xs p-1 bg-black rounded">
          Photo de <a href="https://unsplash.com/fr/@a_ismail?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ash _ Ismail</a> sur <a href="https://unsplash.com/fr/photos/pieces-rondes-en-or-sur-textile-noir-OLRWjFIRvxY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

      </div>
      </div>
      <div className="relative flex place-items-center">
        <div className="max-w-prose p-24">
          <div className="text-3xl md:text-6xl uppercase pb-6 font-black">
            Site suspendu !
          </div>
          <p className="opacity-75">Malgrés plusieurs relances, nous attendons toujours le réglement des factures emissent depuis le changement de propriétaires, soit depuis janvier 2023.</p>
        </div>
      </div>

    </main>
  );
}
