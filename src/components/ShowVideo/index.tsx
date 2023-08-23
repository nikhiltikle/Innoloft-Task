import { createYoutubeEmbedLink } from 'functions/createYoutubeEmbedLink';
import { getYoutubeVideoId } from 'functions/getYoutubeVideoId';

interface ShowVideoProps {
  videoLink: string;
}

export default function ShowVideo({ videoLink }: ShowVideoProps) {
  const embededLink = createYoutubeEmbedLink(getYoutubeVideoId(videoLink));

  return (
    <div className="p-5 rounded-md gap-5 flex flex-col border border-platinum bg-white max-md:px-2.5">
      <p className="text-charcoal text-base font-semibold">Video</p>

      <div className="flex justify-center w-full">
        <iframe
          src={embededLink}
          className="w-[75%] h-[400px] max-md:w-full max-md:h-[210px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
