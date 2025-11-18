import { cn } from "@/lib";
import React from "react";

interface Props {
  image: string;
  loading: boolean;
}

export const ProductPageImage: React.FC<Props> = ({ loading, image }) => {
  return (
    <div className="w-full flex justify-center h-full">
      {image && image.length > 0 && !loading ? (
        <img
          src={image}
          alt="carImage"
          className="shadow-2xl h-full max-h-[500px]"
        />
      ) : (
        <div
          className={cn(
            "w-full flex items-center justify-center h-96",
            loading && "animate-pulse bg-gray-300"
          )}
        >
          {loading ? "loading..." : "No image"}
        </div>
      )}
    </div>
  );
};
