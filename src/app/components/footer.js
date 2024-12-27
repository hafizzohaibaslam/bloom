import Image from "next/image"

export default function Footer() {

    return (
        <div id="footer" className=" h-96 flex bg-neutral-950 gap-8">
            <div className="w-1/2">
                
            </div>
            <div className="w-1/2">
            <Image
                src="/exterptise.png"
                width={250}
                height={250}
                className=" m-auto" />
            </div>
        </div>
    )
}