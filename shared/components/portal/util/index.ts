export const closeModalByEvent = () => {
  const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
  document.dispatchEvent(escEvent);
};
