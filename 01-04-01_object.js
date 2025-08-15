// 4.1 객체

//빈 객체(빈 서랍장)을 만드는 두가지 방법
let box = new Object(); //`객체 생성자` 문법
let boxbox ={};        //`객체 리터럴` 문법 ⭐주로 이거

//키:값 쌍의 프로퍼티
//키는 이름,식별자 라고 불리움.
let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30,        // 키: "age", 값: 30
  "Happy now?": true //단어조합 프로퍼티 키는 ""로 묶기

};

//👓확인
console.log(user);


//프로퍼티 값 읽기
alert(user.name +'\n'+
      user.age
      );


//프로퍼티 값은 모든 자료형이 올 수 있다. 불린형 추가도 가능
user.isAdmin = true;

//`delete` 연산자로 프로퍼티 삭제
delete user.age;

//👓확인
console.log(user)

//const로 선언된 상수 객체의 내용은 수정될 수 있다. 
//뭔가 = 이렇게 재할당하면서 전체적으로 설정할때만 ERROR ✖️
//그냥  { } 이렇게 객체의 안쪽 내용을 수정하는 것은 OK 👌
const user2 = {
    name: "존"
}
user2.name = "피터"

//👓확인
console.log(user2)


// 아래처럼 띄어쓰기로 이뤄진-프로퍼티의 키 추가할 땐, 문법 에러가 발생 
// user.likes birds = true
// user."likes birds" = true
//그래서 나온 게

//대괄호 표기법 set
user["likes birds?"]=true;

//👓확인
console.log(user);

//대괄호 표기법 get
alert("user의 프로퍼티 중 `likes birds?` 값은? ▶"+ user["likes birds?"]);

//대괄호 표기법 delete
delete user["likes birds?"];

//👓확인
console.log(user);

//계산된 프로퍼티 computed property
//프로퍼티 이름을 변수에서 가져오겠단 뜻
let fruit = prompt("어떤 과일 사실래여?","예: apple")
let bag = {
  [fruit] : 5,
}
console.log(bag);
bag[fruit] = 10;
console.log(bag);

//단축 프로퍼티 키값이 동일한 경우 
// name: name이걸 name이렇게만 써줘도됨
const makerUser = (name,age) => {
  return {
    name, //name:name과 같음
    age,//age:age와 같음
  }
}

