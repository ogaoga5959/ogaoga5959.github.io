"use strict";
let today = new Date();  //Date 클라스형의 객체 today 생성
console.log(today.toGMTString()); //객체 today에 메소드 .toGMTString()호출


let str = new String("chois");
console.log(str.toUpperCase()); //메소드 호출
console.log(str.length); //프로퍼티 접근

let arr = new Array(1000, "chois");
console.log(arr[0]);

//앞의 객체와 Math 객체는 사용방법이 다름. 클라스 변수, 클라스 메소드
//1. 앞의 경우 객체를 먼저 생성한 후 프로퍼티 또는 메소드를 사용
//2. Math는 객체 생성 없이 사용할 수 있다. 클라스 이름.메소드() 또는 클라스이름.프로퍼티

let a = Math.sqrt(2); //클라스이름.메소드()
console.log(a);
console.log(Math.PI); // 클라스이름.프로퍼티

class Student {
    constructor(str) {
        this.name = str;

    }
print() {
    //메소드 정의
    console.log(this.name);
}
}
let s = new Student("이승연");
s.print();

//JS에서는 함수도 객체다
function test1() {
    console.log("test1");
}
test1();
let test2 = function () {  //우변 함수 객체 생성, 좌변 함수 객체의 레퍼런스를 저장
    console.log("test2");
};
test2();