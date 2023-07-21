import Carousel from "@/components/carousel";
import Gallery from "@/app/gallery/gallery";

export default function Page() {
  return (
    <>
      <Gallery />
      <div className='flex justify-center items-center mt-12'>
        <div className=' md:w-2/3 md:h-2/3'>
          <Carousel />
        </div>
      </div>
    </>
  );
}
