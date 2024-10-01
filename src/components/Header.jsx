export default function Header() {
  return (
    <menu className="bg-green-400 ">
      <div>
        <h1 className="font-sans font-bold ml-4">
          Med
          <span className="italic font-mukta text-black-400">Preg</span>{" "}
          <span className="text-4xl text-maroon-400">+</span>
        </h1>
      </div>
      <div className="flex justify-end">
        <ol className="flex  space-x-4 list-none ml-auto mr-9 mb-3 font-roboto-condensed">
          <li>Home</li>
          <li>Dictionary</li>
          <li>Sign Up</li>
        </ol>
      </div>
    </menu>
  );
}
