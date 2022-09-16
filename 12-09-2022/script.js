function check_numbers(x, y) 
{
if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
{
  return true;
} 
else 
{

    
  return false;
}
}

console.log(check_numbers(525, 132));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));