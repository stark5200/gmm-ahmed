import Image from "next/image";
function CustomImage(source: string ) {

  return (
    <div className="">
      <Image
        src={source}
        alt=""
        width={150}
        height={150}
        className="w-full rounded-xl border-4 border-slate-700 m-5"
      />
    </div>
  )
}

export default CustomImage

