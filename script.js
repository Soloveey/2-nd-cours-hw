function seasonYears() {
    let numberMonth = prompt('Введите номер месяца');
   if (numberMonth == 1 || numberMonth == 2 || numberMonth == 12) {
    alert ('Зима');
  }else  if (numberMonth == 3 || numberMonth == 4 || numberMonth == 5) {
    alert ('Весна');
  }else  if (numberMonth == 6 || numberMonth == 7 || numberMonth == 8) {
    alert ('Лето');
  }else  if (numberMonth == 9 || numberMonth == 10 || numberMonth == 11) {
    alert ('Осень');
  }else   if (isNaN(numberMonth)) {
    alert ('Ошибка!!! Номер месяца должен быть числовым значением.');
  }else  if (numberMonth < 1 || numberMonth > 12) {
    alert ('Ошибка!!! Такого месяца не существует.');
  } else {
    alert (numberMonth);
  }
  }
  