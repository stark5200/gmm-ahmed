// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import pictu
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  ...

  
});

const SwiperComp = () {
  <h1>Swiper Comp</h1> 
  <div className="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full rounded">
          <Image src={"/pictures/2_Kapselhotel.jpg"}
            alt="image" width={350} height={350}/>
        </div>
        <div className={"w-full col-span-2 row-span-2 rounded"}>
          <Image src="/pictures/1_Kapselhotel.jpg"
            alt="image" width={720} height={720} />
        </div>
        <div className="w-full rounded">
          <Image src={"/pictures/3_Kapselhotel.jpg"}
            alt="image" width={350} height={350}/>
        </div>
        <div className="w-full rounded">
          <Image src={"/pictures/62_Kapselhotel.jpg"}
            alt="image" width={350} height={350}/>
        </div>
        <div className="w-full rounded">
          <Image src={"/pictures/61_Kapselhotel.jpg"}
            alt="image" width={350} height={350}/>
        </div>
        <div className="w-full rounded">
          <Image src={"/pictures/10_Kapselhotel.jpg"}
            alt="image" width={350} height={350}/>
        </div>
      </div>
}

export default SwiperComp