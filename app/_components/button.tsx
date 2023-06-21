"use client";

import Link from "next/link";

export default function Button({
  href,
  text = "undefined",
  subtext,
  arrowPosition = "right",
  textSize = "normal",
  mainActionStyle = false,
  actionButton = false,
  htmlType = "button",
}: {
  href: string;
  text?: string;
  subtext?: string;
  arrowPosition?: "left" | "right" | "none";
  textSize?: "large" | "normal" | "small";
  mainActionStyle?: boolean;
  actionButton?: boolean;
  htmlType?: "button" | "submit" | "reset";
}) {
  const buttonStyles = {
    normal:
      "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30",
    main: "group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30",
  };
  const textStyles = {
    large: "flex gap-2 justify-center text-3xl font-semibold whitespace-nowrap",
    normal:
      "flex gap-2 justify-center text-2xl font-semibold whitespace-nowrap",
    small: "flex gap-2 justify-center text-xl font-semibold whitespace-nowrap",
  };

  return (
    <>
      {actionButton ? (
        // 📤 Button for actions like Send a Form
        <button
          className={mainActionStyle ? buttonStyles.main : buttonStyles.normal}
          type={htmlType}
        >
          <h2 className={textStyles[textSize]}>
            {/* ◀️◀️◀️ */}
            {arrowPosition == "left" && (
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>
            )}

            {text}

            {/* ▶️▶️▶️ */}
            {arrowPosition == "right" && (
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            )}
          </h2>

          {subtext && (
            <span className="m-0 max-w-[30ch] text-sm opacity-50">
              Click to Sign up now!
            </span>
          )}
        </button>
      ) : (
        // 🗃️ Button for transitions between routes
        <Link
          href={href}
          className={mainActionStyle ? buttonStyles.main : buttonStyles.normal}
        >
          <h2 className={textStyles[textSize]}>
            {/* ◀️◀️◀️ */}
            {arrowPosition == "left" && (
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>
            )}

            {text}

            {/* ▶️▶️▶️ */}
            {arrowPosition == "right" && (
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            )}
          </h2>

          {subtext && (
            <span className="m-0 max-w-[30ch] text-sm opacity-50">
              Click to Sign up now!
            </span>
          )}
        </Link>
      )}
    </>
  );
}
