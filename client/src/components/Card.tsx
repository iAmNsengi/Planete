import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface CardProps {
  image: string;
  showBottom?: boolean;
  showTop?: boolean;
}
const Card = ({ image, showBottom = false, showTop = false }: CardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-neutral-700 hover:cursor-pointer relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        {showTop && (
          <>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Planete Hotel Rwanda
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Welcome to Planete Hotel
            </CardItem>
          </>
        )}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {showBottom && (
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="#"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get Started
            </CardItem>
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default Card;
