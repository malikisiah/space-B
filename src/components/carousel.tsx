export default function Carousel() {
  return (
    <div className="carousel w-full pb-24">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-accent">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-accent">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-accent">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-accent">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-accent">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-accent">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://w.wallhaven.cc/full/e7/wallhaven-e7jj6r.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-accent">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-accent">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
