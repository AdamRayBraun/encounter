var Overlay = {};

var DIV = 'div';

Overlay.text = null;

Overlay.init = function()
{
  // just set width or height if we can and trap mouseclicks
  var container = document.createElement(DIV);
  container.id = 'overlay';
  // may not need this
  container.addEventListener('mousedown', function (event) { event.preventDefault(); }, false);
  container.style.cssText = '/* width:100px; */ /* height:50px; */ opacity:0.5; cursor:pointer';

  // textBox adds padding, alignment, background
  var textBox = document.createElement(DIV);
  textBox.id = 'textBox';
  // padding order: top right bottom left
  // TODO gradient needs multiple declarations to work in all browsers, as per stats.js/examples/theming.html
  textBox.style.cssText = 'padding:0px 5px 0px 5px; text-align:left; background-color:#000; background-image:-webkit-linear-gradient(top, rgba(255,255,255,.4) 0%, rgba(0,0,0,.35) 100%)';
  container.appendChild(textBox);

  // text is the content
  Overlay.text = document.createElement(DIV);
  Overlay.text.id = 'text';
  Overlay.text.style.cssText = 'color:#0ff; font-family:Helvetica,Arial,sans-serif; font-size:36px; font-weight:bold; /* line-height:18px */';
  textBox.appendChild(Overlay.text);

  // place the overlay in the page
  container.style.position = 'absolute';
  container.style.top = '0px';
  document.body.appendChild(container);
}

Overlay.update = function()
{
  switch (Levels.state.current)
  {
    case 'attract':
      Overlay.text.innerHTML = 'PRESS SPACE';
      break;
    case 'combat':
      // TODO Player.livesLeft
      Overlay.text.innerHTML = 'W' + Levels.worldNumber + ' E' + Levels.enemiesRemaining;
      break;
    default:
      console.error('unknown state: ', Levels.state.current);
  }
}