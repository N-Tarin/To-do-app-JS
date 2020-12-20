'use strict';

const addButton = document.getElementById('button');
addButton.addEventListener(('click'), () => {

  // 空だったら
  const title = document.getElementById('new-todo');
  if (title.value == '') {
    alert('何かしよう！');
  } else {

    const lists = document.getElementById('lists');//ulタグ取得
    const input = document.getElementById('new-todo');//inputタグ取得
    const newLi = document.createElement('li');//liタグつくる
    
    lists.appendChild(newLi);//ulタグにliタグ追加
    newLi.innerHTML = input.value;//liタグ内容追加
    
    const closeBtn = document.createElement('button');//削除ボタンつくる
    const closeIcon = document.createTextNode("✖");//✖つくる
    closeBtn.appendChild(closeIcon);//削除に✖追加
    newLi.appendChild(closeBtn);//liタグに削除追加
    closeBtn.className = "delete";//クラス名つける
    

    // //終わったよマーク
    newLi.addEventListener(('click'), () => {
      const li = newLi.closest('li');
      const checkBtn = document.createElement('button');//チェックボタンつくる
      const checkIcon = document.createTextNode("✔");//✔つくる

      newLi.prepend(checkBtn);//liタグにチェックボタン追加
      checkBtn.prepend(checkIcon);//チェックボタンに✔追加
      checkBtn.className = "check";//クラス名つける
      
      li.classList.toggle('finished');
    });
    
    
    // タスク消す
    closeBtn.addEventListener(('click'), () => {
      const deleteLi = closeBtn.closest('li');
      deleteLi.remove();
    });
  }
});

