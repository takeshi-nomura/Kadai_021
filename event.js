const changebtn = document.getElementById('btn');
const text = document.getElementById('text');

changebtn.addEventListener('click', () => {
  setTimeout(() => {
    const newMessage = document.querySelector('#text');
    newMessage.textContent = 'ボタンをクリックしました';
    console.log({ text: newMessage.textContent });
  }, 2000);
});
