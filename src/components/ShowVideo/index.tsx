import { createYoutubeEmbedLink } from 'functions/createYoutubeEmbedLink';
import { getYoutubeVideoId } from 'functions/getYoutubeVideoId';

interface ShowVideoProps {
  videoLink: string;
}

export default function ShowVideo({ videoLink }: ShowVideoProps) {
  const embededLink = createYoutubeEmbedLink(getYoutubeVideoId(videoLink));

  return (
    <div className="p-5 rounded-md gap-5 flex flex-col border border-platinum bg-white">
      <p className="text-charcoal text-base font-semibold">Video</p>

      <div className="mx-auto">
        <iframe
          src={embededLink}
          className="w-[715px] h-[400px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
