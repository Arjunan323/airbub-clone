import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h1 className="text-4xl mb-3 w-64">{title}</h1>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-2 py-2">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
