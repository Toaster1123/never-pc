import { cn } from "@/lib";
import React from "react";

interface Props {
  items: string[];
  selectedItem: string | null;
  setSelect: React.Dispatch<React.SetStateAction<string | null>>;
  className?: string;
}

export const Selector: React.FC<Props> = ({
  items,
  className,
  selectedItem,
  setSelect,
}) => {
  const sortedItems = items.sort((a, b) => a.localeCompare(b));
  const [open, setOpen] = React.useState(false);
  return (
    <div className={cn("rounded-lg", className)}>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`relative inline-block ${className}`}
      >
        <button
          className={cn(
            "bg-white border hover:border-blue-500! border-gray-300 rounded px-4 py-2 flex items-center justify-between w-full min-w-44",
            !open && "text-gray-500"
          )}
        >
          <span>{selectedItem || "Все товары"}</span>
          <span
            className={cn(
              "ml-1 pt-1",
              open
                ? "transition-all rotate-180 translate-y-1"
                : "transition-all rotate-0"
            )}
          >
            ▼
          </span>
        </button>

        {open && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-96 overflow-y-auto min-w-44 selector-slider">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelect(null)}
            >
              Все товары
            </li>
            {sortedItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelect(item)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
