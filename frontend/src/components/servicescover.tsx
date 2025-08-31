
export default function ServiceCover() {
  return (
    <section className="w-full flex justify-center items-center bg-[#584910]">
      <div className="w-full flex justify-center items-center overflow-hidden" style={{ minHeight: 180 }}>
        <img
          src="/servicescover.png"
          alt="MC Tamba Facebook Cover"
          className="w-full h-[315px] object-cover  shadow-lg "
          style={{ maxWidth: "100%", height: "400px" }}
        />
      </div>
    </section>
  );
}