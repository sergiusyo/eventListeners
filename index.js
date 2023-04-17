
document.addEventListener('DOMContentLoaded', function () {
    //получаем элементы , с которыми будем работать (абзац и кнопка)
    let countDisplay = document.querySelector('.count-display');
    let countButton = document.querySelector('.btn-primary');

    //создаем функцию, которая будет запускаться всякий раз, когда пользователь
    //будет нажимать на кнопку
    function incrementCount() {
        //приводим содержимое абзаца к числу
        let currentCount = parseInt(countDisplay.textContent);

        //к получившемуся числу прибавляем +1 и обратно записываем 
        //результат в textContent, т.е. в текст, находящийся внутри абзаца
        countDisplay.textContent = currentCount + 1;
    }
    //регистрируем функцию как обработчик события на кнопке
    countButton.addEventListener('click', incrementCount);

})


document.addEventListener('DOMContentLoaded', function() {
    let colorInput = document.querySelector('.color-input');
    let colorBlock = document.querySelector('.color-block');
    let clearButton = document.querySelector('.clear-color-button');
  
    function paintBlock() {
      colorBlock.style.backgroundColor = colorInput.value;
    }
  
    colorInput.addEventListener('input', paintBlock);
  
    paintBlock();
  
    clearButton.addEventListener('click', function() {
      colorBlock.style.removeProperty('background-color');
      colorInput.value = '';
    })
  })