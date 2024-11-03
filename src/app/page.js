import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/model/Wizard";
import Navigation from "@/components/navigation/navigation";
import dynamic from "next/dynamic";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Wizard = dynamic(() => import("@/components/model/Wizard"),
    {
      ssr: false
    }
)
const Tornado = dynamic(() => import("@/components/model/Tornado"),
    {
        ssr: false
    }
)
export default function Home() {
    const showRender = process.env.NEXT_PUBLIC_SHOW_3D_RENDER
    console.log(showRender)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes={'100vw'} src={bg} alt={'background-image'} fill className={'-z-50 w-full h-full object-cover object-center'} />

    {/*    navigation + 3d model (from Skatchfab  */}
        <div className={'w-full h-screen'}>
          <Navigation />
          <RenderModel>
            <Tornado></Tornado>
          </RenderModel>
        </div>
    </main>
  );
}
