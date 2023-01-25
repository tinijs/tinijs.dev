const splashscreenNode = document.getElementById('splashscreen');
if (splashscreenNode) {
  Reflect.defineProperty(splashscreenNode, 'hide', {
    value: () => {
      splashscreenNode.classList.add('exiting');
      setTimeout(() => splashscreenNode.remove(), 500);
    },
  });
  setTimeout(() => splashscreenNode.classList.add('too-long'), 7000);
}

export {};
