import Image from "next/image";

interface FeatureCardProps {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  description: string;
  isSvg?: boolean;
  svgContent?: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imgSrc, imgAlt, imgWidth, imgHeight, title, description, isSvg, svgContent }) => {
  return (
    <a className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
      {isSvg ? (
        svgContent
      ) : (
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      )}
      <h2 className="mt-2 text-lg font-bold text-white">{title}</h2>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </a>
  );
};

export default FeatureCard;
