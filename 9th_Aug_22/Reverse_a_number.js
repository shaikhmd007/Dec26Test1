function reversing(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reversing(32243)));