// add anchors
import AnchorJS from './lib/anchor.min.js';
const anchors = new AnchorJS();
anchors.add('main h2');

// menu
const menu = document.querySelector('div.menu');

if (menu) {
  const menuButton = menu.querySelector('div.menu-button a');
  const menuAnchors = menu.querySelector('div.menu-anchors');

  const showMenu = () => {
    menuAnchors.hidden = false;
    menuButton.innerText = 'Close';
  };

  const hideMenu = () => {
    menuAnchors.hidden = true;
    menuButton.innerText = 'Menu';
  };

  anchors.elements.forEach((el) => {
    const text = el.innerText;
    if (text === 'About and Usage' || text === 'Contents') return;
    const anchor = el.querySelector('a.anchorjs-link');
    const a = document.createElement('a');
    a.href = anchor.href;
    a.innerText = el.innerText;

    a.addEventListener('click', () => {
      hideMenu();
    });

    menuAnchors.append(a);
  });

  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (menuAnchors.hidden) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  window.onclick = (event) => {
    if (!menu.contains(event.target) && !menu.hidden) hideMenu();
  };
}
