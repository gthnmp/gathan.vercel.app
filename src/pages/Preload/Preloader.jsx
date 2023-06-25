
const PreloadImages = () => {
  const items = [];
  
  for (let i = 1; i <= 9; i++) {
    const imageUrl = `/assets/${i}.jpg`;
    const item = (
      <div key={`layer__item-${i}`} className=".layers__item absolute w-full h-full overflow-hidden bg-blue-950">
        <div className=".layers__item-img w-full h-full bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
    );
    items.push(item);
  }
  return items
}


export default function Preloader() {

  return (
    <div id="preload" className="fixed top-0 w-screen h-screen bg-green-500 z-[100]">
      {/* <PreloadImages/> */}
      {/* <div id = "preload-number">foo</div>
      <div id = "preload-image"></div> */}
    </div>
  );
}
