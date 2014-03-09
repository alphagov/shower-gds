/*
 * Includes the blue footer bar element on every slide.
 * Set up a footerText object with left and right properties before
 * this script is executed.
 */

if (footerText && (footerText.left || footerText.right)) {

  var slides = document.getElementsByTagName('section');
  var leftText = footerText.left || '';
  var rightText = footerText.right || '';

  for (var i = 0; i < slides.length; i++) {
    var div = slides[i].getElementsByTagName('div')[0];

    var footerElement = document.createElement('div');
    footerElement.className = 'footer';
    footerElement.innerHTML = leftText + ' <span class="right">' + rightText + '</span>';

    div.appendChild(footerElement);
  }

}
