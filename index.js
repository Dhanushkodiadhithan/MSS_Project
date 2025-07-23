function showFileName() {
  let file = document.getElementById('file');
  let fileName = document.getElementById('fileName');
  let loadingMessage = document.getElementById('loadingMessage');
  let fileText = document.getElementById('fileText');
  
  if (file.files.length > 0) {
    const name = file.files[0].name;
    fileName.textContent = name;
    
    
    loadingMessage.style.display = 'block';
    fileText.textContent = 'Loading...';

    setTimeout(() => {
      loadingMessage.style.display = 'none';
      fileText.textContent = 'Uploaded';
    }, 1000);
  } else {

    fileText.textContent = 'Upload a File';
    fileName.textContent = '';
    loadingMessage.style.display = 'none';
  }
}

function convert() {
  let inp1 = document.getElementById('inp1');
  let inp2 = document.getElementById('inp2');
  let converter = document.getElementById('converter');
  let btns = document.getElementById('centerbtns');
  let isuploaded= file.files.length > 0;
  let inputfilled = inp1.value !== '' && inp2.value !== '';

  if(!isuploaded || !inputfilled){
    alert('Please upload a file and fill in both input fields.');
    return;
  }
  converter.style.display = 'block';
  setTimeout(() => {
    converter.style.display = 'none';
    btns.style.display = 'block';
  }, 2000);
  
}

function saveFile(){
  alert('File saved successfully!');
}

function openFile(){
  alert('File opened successfully!');
}