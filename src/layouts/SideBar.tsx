import {
  Home,
  Repeat,
  Clapperboard,
  Library,
  ChevronDown,
  History,
  ChevronUp,
  PlaySquare,
  Clock,
  ListVideo,
  Flame,
  Music2,
  ShoppingBag,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`"sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }"`}
      >
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Short" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subcriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`"w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 lg:flex${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImage={Home} title="Home" url="/" />
          <LargeSidebarItem
            IconOrImage={Clapperboard}
            title="Subscription"
            url="/subscriptions"
          />
          <hr />
        </LargeSidebarSection>
        <LargeSidebarSection visibleItemCount={3}>
          <LargeSidebarItem
            IconOrImage={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            IconOrImage={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrImage={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            IconOrImage={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImage={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImage={subscription.imgUrl}
              url={`@/${subscription.id}`}
              title={subscription.channelName}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrImage={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSidebarItem
            IconOrImage={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem IconOrImage={Music2} title="Music" url="/music" />
          <LargeSidebarItem
            IconOrImage={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem IconOrImage={Radio} title="Live" url="/live" />
          <LargeSidebarItem
            IconOrImage={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSidebarItem IconOrImage={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrImage={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem
            IconOrImage={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            IconOrImage={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            IconOrImage={Podcast}
            title="Podcast"
            url="/podcast"
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
}

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,

  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);

  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex flex-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div className="">{isExpanded ? "Show Less" : "Show more"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  IconOrImage: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};
function LargeSidebarItem({
  IconOrImage,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `"w-full flex items-center rounded-lg gap-4 p-3" ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrImage === "string" ? (
        <img src={IconOrImage} className="w-6 h-6 rounded-full"></img>
      ) : (
        <IconOrImage className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
