export default function Heading({ text }: { text: string }) {
  return (
    <div className=" py-5  ">
      <h1 className="xl:text-6xl uppercase md:text-5xl text-[20px] text-nowrap  text-primary border-black dark:border-white border-l-[6px] sm:border-l-[10px] sm:pl-4 pl-2  content   font-extrabold">
        {text}
      </h1>
    </div>
  );
}
