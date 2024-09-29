/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { reviews } from "@/data";



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl ",
        // light styles
        " ",
        // dark styles
        ""
      )}
      style={{
        backgroundColor: "#faefe0",
      }}
    >
      <div className="flex justify-center items-center ">
        <img className="" width={150} height={60} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            
          </figcaption>
          
        </div> 
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
      <div
        className="relative flex mt-20  mb-20 w-full flex-col items-center justify-center  rounded-lg bg-gradient-to-br from-white dark:from-background"
        style={{
          backgroundColor: "#faefe0",
        }}
      >
        <Marquee pauseOnHover className="[--duration:10s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        
      </div>
    </>
  );
}
