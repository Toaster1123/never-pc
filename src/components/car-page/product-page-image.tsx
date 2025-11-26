import { cn } from "@/lib";
import React from "react";

interface Props {
  image: string;
  loading: boolean;
}

export const ProductPageImage: React.FC<Props> = ({ loading, image }) => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      {image && image.length > 0 && !loading ? (
        <img
          src={image}
          alt="carImage"
          className="w-full h-auto max-w-[700px] max-h-[600px] object-contain shadow-2xl rounded-2xl"
        />
      ) : (
        <div
          className={cn(
            "w-full flex items-center justify-center h-96 rounded-2xl",
            loading && "animate-pulse bg-gray-300"
          )}
        >
          {loading ? "loading..." : "No image"}
        </div>
      )}
    </div>
  );
};
