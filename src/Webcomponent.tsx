import { FC, useState } from "react";

type WebComponentProps = {
  initialCount: string;
};

const btnClassName =
  "rounded-full w-10 aspect-square grid place-items-center bg-blue-500 text-white";

export const Webcomponent: FC<WebComponentProps> = ({ initialCount }) => {
  const [count, setCount] = useState(parseInt(initialCount));
  return (
    <div className="border-px border-gray-200 shadow-md p-6 flex flex-col items-center justify-center gap-4 font-mono">
      <p className="font-semibold text-gray-950 text-md">Count is: {count}</p>
      <div className="flex gap-2">
        <button
          className={btnClassName}
          onClick={() => setCount((prev) => prev - 1)}
        >
          <span>-</span>
        </button>

        <button
          className={btnClassName}
          onClick={() => setCount((prev) => prev + 1)}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
