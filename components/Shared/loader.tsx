"use client";
import React, { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

interface LoaderProps {
  setPage?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Loader({ setPage }: LoaderProps) {
  const { ref, inView } = useInView({});

  const handleInView = useCallback(() => {
    if (setPage) {
      setPage((prevPage) => (prevPage ? prevPage + 1 : 1));
    }
  }, [setPage]);

  useEffect(() => {
    if (inView) {
      handleInView();
    }
  }, [inView, handleInView]);

  return (
    <div className="flex justify-center items-center py-4">
      <span ref={ref} className="loader"></span>
    </div>
  );
}
