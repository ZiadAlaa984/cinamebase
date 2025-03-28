export default function Heading({ text }: { text: string }) {
  return (
    <div className=" py-5 ">
      <h1 className="xl:text-6xl uppercase md:text-5xl text-2xl text-nowrap  text-primary border-l-[10px] pl-4  content   font-extrabold">
        {text}
      </h1>
    </div>
  );
}
