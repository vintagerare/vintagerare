// import link artifacts
import Link from 'next/link';

// import { parseISO, format } from "date-fns";
// import { PhotographIcon } from "@heroicons/react/outline";

import CategoryBadge from "./CategoryBadge";
import CardPhoto from './CardPhoto';
import CardTitle from './CardTitle';

import { ICard } from '../types/card.js';

type Props = {
    card: ICard;
    listView: boolean;
}

const CardRow: React.FC<Props> = ({ card, listView }: Props) => {
  const dataUrl = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  const additionalDetails = (
    <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0 w-5 h-5">
        {/* {post.author.image && ( // Reserved for Set Icon
          <Image
            src={AuthorimageProps.src}
            blurDataURL={AuthorimageProps.blurDataURL}
            loader={AuthorimageProps.loader}
            objectFit="cover"
            layout="fill"
            alt={post?.author?.name}
            placeholder="blur"
            sizes="30px"
            className="rounded-full"
          />
        )} */}
      </div>
      {/* <span className="text-sm">{post.author.name}</span> // Reserved for Set Name */}
    </div>
    <span className="text-xs text-gray-300 dark:text-gray-600">
      &bull;
    </span>
    {/* <time // Reserved for time of print.
      className="text-sm"
      dateTime={post?.publishedAt || post._createdAt}>
      {format(
        parseISO(post?.publishedAt || post._createdAt),
        "MMMM dd, yyyy"
      )}
    </time> */}
    </div>
  );

  // Only linkify if we are in the list view.
  const cardLink = (listView) ? `cards/${card.slug}` : "";

  return (
    <>
      <div className="group relative rounded-xl bg-slate-900 mb-8 p-8 pb-2">
        <div className="grid gap-6 grid-cols-2 ">
          <CardPhoto href={cardLink} src={card.normalVersion} subtext="Normal Version" />
          <CardPhoto href={cardLink} src={card.rareVersion} subtext="Rare Version" />
        </div>
        <CategoryBadge color={card.category} />
        <CardTitle href={cardLink} titleText={card.title} />
        {card.description && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            {card.description}
          </p>
        )}
      </div>
    </>
  )
}

// export Thumbnail module
export default CardRow;
