function fun1()
{
	return new Promise((res,rej)=>{
		setTimeout(() =>res(console.log('c')), 3000);
	})
}
function fun2()
{
	return new Promise((res,rej)=>{
		setTimeout(() =>res(console.log('d')), 2000);
	})
}
async function abc()
{
    try{
		console.log('a');
        console.log('b');
		await fun1();
		await fun2();
        console.log('e');
	}catch(err){console.log(err)}
}





