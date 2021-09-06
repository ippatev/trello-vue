export const useDraggable = () => {
  const getNextElement = (cursorPosition, currEl) => {
    // Получаем объект с размерами и координатами
    const currElCoord = currEl.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currElCenter = currElCoord.y + currElCoord.height / 2;

    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement =
      cursorPosition < currElCenter ? currEl : currEl.nextElementSibling;

    return nextElement;
  };

  return { getNextEl: getNextElement };
};
