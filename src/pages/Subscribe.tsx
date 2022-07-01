import { Logo } from "../components/Logo";

export function Subscribe(){
    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]0">
                    <Logo />

                </div>

            </div>
            <img src="/src/assets/Group.png" className="mt-10" />

        </div>
    )
}