let array=[{
    name:'고구마',
    price:1000
},{
    name:'감자',
    price:500
},{
    name:'바나나',
    price:1500
}]

//배열 요소 꺼내기
let popped=array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('-pop() 메소드를 호출한 이후의 배열');
console.log(array);

//배열에 요소 넣기
array.push(popped);
array.push({
    name:'사과',
    price:2000
});

console.log('-push() 메소드를 호출한 이후의 배열');
console.log(array);


