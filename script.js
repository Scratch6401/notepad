const div = document.createElement('div');
const title = document.createElement('h2');
const bDiv = document.createElement('div');
const note = document.createElement('textarea');
const noteSave = document.createElement('button');
const noteReset = document.createElement('button');

div.style.position = 'absolute';
div.style.top = 0;
div.style.display = 'flex';
div.style.flexFlow = 'column';
div.style.zIndex = '100';

title.innerText = 'Notepad';
title.style.margin = 0;
title.style.padding = 0;

note.style.width = '20vh';
note.style.height = '10vh';
note.style.border = '2px solid #0cb';
note.style.borderRadius = '20px';
note.style.resize = 'none';

noteSave.innerText = 'Save';
noteSave.style.marginTop = '10px';
noteSave.style.marginLeft = '12.5px';
noteSave.style.padding = '5px'
noteSave.style.width = '8vh';
noteSave.style.border = '2px solid #0cb';
noteSave.style.borderRadius = '10px';
noteSave.style.background = 'none';
noteSave.style.cursor = 'pointer';

noteReset.innerText = 'Reset';
noteReset.style.marginTop = '10px';
noteReset.style.marginLeft = '12.5px';
noteReset.style.padding = '5px';
noteReset.style.width = '8vh';
noteReset.style.border = '2px solid #0cb';
noteReset.style.borderRadius = '10px';
noteReset.style.background = 'none';
noteReset.style.cursor = 'pointer';

noteSave.onclick = () => {
  const txt = note.value;
  if (!txt) { return; }

  const blob = new Blob([txt], { type: 'text/plain' });

  const file = document.createElement('a');
  file.href = URL.createObjectURL(blob);
  file.download = 'note.txt';
  file.click();
}

noteReset.onclick = () => {
  note.value = '';
}

document.body.appendChild(div);
div.appendChild(title);
div.appendChild(note);
div.appendChild(bDiv);
bDiv.appendChild(noteSave);
bDiv.appendChild(noteReset);
