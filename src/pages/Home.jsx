import useDocumentTitle from "@/hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("홈");

  return (
    <div className="grid place-content-center bg-hero bg-center bg-cover min-h-[calc(100vh_-_200px)]">
      <h2 className="text-white font-extralight tracking-widest text-4xl uppercase">
        Shop <span className="text-yellow-400 text-[60px]">.</span>
      </h2>
    </div>
  );
}

export default Home;
