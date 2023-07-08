import Image from "next/image";

type PrivateProp = {
  source: string
}

const CustomImage = ({source}: PrivateProp) => {
  return (
    <div className="">
      <Image
        src={source}
        alt=""
        width={150}
        height={150}
        className="w-full rounded-xl border-2 border-slate-700 m-1"
      />
    </div>
  )
}

export default CustomImage

