const canvas = document.getElementById("canvas_element");
const context = canvas.getContext('2d');

// Draw a smiley face

let eye_height = 40;

function updateFace() {
  context.fillStyle = '#229';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#ffff00'
  context.fillRect(20, 0, canvas.width - 40, 20);
  context.fillRect(0, 20, canvas.width, canvas.height - 40);
  context.fillRect(20, canvas.height - 20, canvas.width - 40, 20);

  context.fillStyle = '#000';
  context.fillRect(40, eye_height, 20, 20);
  context.fillRect(canvas.width - 60, eye_height, 20, 20);

  context.fillRect(40, 140, canvas.width - 80, 20);
  context.fillRect(20, 120, 20, 20);
  context.fillRect(canvas.width - 40, 120, 20, 20);
}
