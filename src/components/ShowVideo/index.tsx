export default function ShowVideo() {
  return (
    <div className="p-5 rounded-md gap-5 flex flex-col border border-bright-gray bg-white">
      <p className="text-charcoal text-base font-semibold">Video</p>

      <div className="mx-auto">
        <iframe
          src="https://www.youtube.com/embed/6vA4BuJM3_g"
          className="w-[715px] h-[400px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
