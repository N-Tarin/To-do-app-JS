'use strict';

const addButton = document.getElementById('button');
addButton.addEventListener(('click'), () => {

  const lists = document.getElementById('lists');//ulタグ取得
  const input = document.getElementById('new-todo');//inputタグ取得
  const newLi = document.createElement('li');//liタグつくる
  const closeBtn = document.createElement('button');//削除つくる
  const closeIcon = document.createTextNode("✖");//✖つくる
  
  lists.appendChild(newLi);//ulタグにliタグ追加

  newLi.innerHTML = input.value;//liタグ内容追加
  
  newLi.appendChild(closeBtn);//liタグに削除追加
  closeBtn.appendChild(closeIcon);//削除に✖追加
  closeBtn.className = "delete";//クラス名つける

  //終わったよマーク
  newLi.addEventListener(('click'), () => {
    const li = newLi.closest('li');
    li.classList.toggle('finished');
  });
  
  

  
  });

