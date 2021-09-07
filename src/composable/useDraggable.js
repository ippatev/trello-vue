export const useDraggable = () => {
  const getNextElement = (cursorPosition, currEl) => {
    const currElCoord = currEl.getBoundingClientRect();
    const currElCenter = currElCoord.y + currElCoord.height / 2;

    const nextElement =
      cursorPosition < currElCenter ? currEl : currEl.nextElementSibling;

    return nextElement;
  };

  return { getNextEl: getNextElement };
};
