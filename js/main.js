'use strict'
{
  const btn = document.getElementById('btn')

  btn.addEventListener('click',() => {
    const uuu = ['0','１','２','３','4','5','6','7','8','9','10','11','12','13','14','15','16',"17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
    btn.textContent = uuu[Math.floor(Math.random() * uuu.length)];
    btn.classList.toggle('kaitenn');
    btn.classList.toggle('kaitenn1');

  });


}