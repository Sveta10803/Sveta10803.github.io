function pow (x, n) {
  var result=1;
  for (var i=1;i<=n;i++){
		result*=x;
	}
	return alert(result);
}
var userNum=prompt('Введите число');
var power=prompt('Введите степень возведения');
if (power<=1) {
alert('Внимание! Введите целую степень, большую 1');
} else pow(userNum,power);
