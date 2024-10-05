import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/model/Wizard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt={'background-image'} fill className={'-z-50 w-full h-full object-cover object-center'} />

    {/*    navigation + 3d model (from Skatchfab  */}
        <div className={'w-full h-screen'}>
          <RenderModel>
            <Wizard></Wizard>
          </RenderModel>
        </div>
    </main>
  );
}
