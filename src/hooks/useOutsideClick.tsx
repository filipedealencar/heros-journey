import { useEffect, RefObject, useRef } from "react";

interface IOutsideClick {
  refs: RefObject<HTMLElement>[];
  callback: () => void;
}

const useOutsideClick = ({ refs, callback }: IOutsideClick) => {
  const handleClick = (event: MouseEvent) => {
    const isOutsideClick = !refs.some(
      (ref) => ref.current && ref.current.contains(event.target as Node)
    );
    if (isOutsideClick) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refs, callback]);
};

export default useOutsideClick;
