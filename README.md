

# 3d웹 행운 프로젝트 To Be luckier
배포(vercel) : https://goodluck-steel.vercel.app/  
노션 : https://best-athlete-e88.notion.site/To-Be-luckier-9b31bcbf243848249a9171c431c9af20

##  페이지 소개
### 강화하기
- 모의 강화를 통해서 액땜을 할 수 있는 사이트  
![image](https://github.com/suhong99/goodluck/assets/120103909/af7065cd-a746-482f-8be4-e3ad985069ed)

### 운좋은 시바
- 시바를 산책 시켜 행복한 일을 만들어 주기  
- 획득 물품 목록은 비콘 및 마이페이지에서 확인 가능하며, 로그인 시 DB에 데이터 저장  
![image](https://github.com/suhong99/goodluck/assets/120103909/0cd0d486-730e-453a-a135-3ad6336b9834)


### 헤더
- 네비바 및 로그인 버튼 (로그인 시 유저메뉴로 바뀌며 팝업창으로 마이페이지 이동 및 비로그인)  
![image](https://github.com/suhong99/goodluck/assets/120103909/dd62d3f4-2129-4bcc-a581-79bdd2125808)

### 마이페이지
-  강화 내역 및 시바 획득물품 확인   
![image](https://github.com/suhong99/goodluck/assets/120103909/f28874bf-e3d5-43da-83bf-32ae10a63b59)

## 기능 구현 및 트러블 슈팅
[노션링크](https://www.notion.so/71bf8c2fc4d343de8ddcb8b2abaa2223)

### drei/HTML 태그와 React.ContextApi의 호완성 문제 디버깅
[drei의 HTML컴퍼넌트의 구현 원리에 의한 ContextApi와의 호완 문제 디버깅](https://ungumungum.tistory.com/129)

### 시바 이동 로직 설계 및 비교
[position, velocity, applyForce, wheel 의 4가지 방법을 직접 도입 및 비교하여 position 방식으로 이동 구현](https://ungumungum.tistory.com/125)

### 웹 폰트 최적화
[필요한 글리프만 추출하여 16108Kb → 22Kb로 최적화](https://ungumungum.tistory.com/124)

### 유틸리티 타입을 활용한 타입 추출
```typescript
type EventType<T> = T extends { type: infer U } ? U : never;

type ShibaEventType = {
  [K in keyof typeof SHIBA_EVENT]: EventType<(typeof SHIBA_EVENT)[K][number]>;
}[keyof typeof SHIBA_EVENT];
```

##  기술 스택
<div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <br/>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"/>
<img src="https://img.shields.io/badge/zustand-000000?style=for-the-badge&logoColor=white">
  <br/>
<img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white">
<img src="https://img.shields.io/badge/R3F-000000?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/react/cannon-000000?style=for-the-badge&logoColor=white">
</div>

## 폴더 구조
```md
┣ 📂app                     : Next.js 앱 라우터에 의해 관리되고 라우팅 구조를 정의하는 코드
┣ 📂features                : 페이지 별로 코드를 관리
┃ ┣ 📂enforcement           
┃ ┃ ┣ 📂components          
┃ ┃ ┣ 📂hooks
┃ ┣ 📂 ... 
┣ 📂public                  : asset 관리
┃ ┣ 📂font
┃ ┣ 📂images
┃ ┣ 📂models
┣ 📂remote                  : Firebase와 API 통신을 위한 코드
┃ ┣ 📂models                : Firebase와 API 통신에 필요한 데이터 모델 정의
┣ 📂shared                  : 공유되는 코드
┃ ┣ 📂components
┃ ┃ ┣ 📂3dmodel
┃ ┃ ┣ 📂header
┃ ┃ ┣ 📂portal
┃ ┣ 📂constants            
┃ ┣ 📂hooks                 
┃ ┣ 📂styles
┃ ┗ 📂utils
┗ 📂store                   : 전역 변수 상태 관리
```

## 파이어베이스 data 구조
```markdown
USERS
└── userId (Document)
├── ENFORCEMENT (Sub-Collection)
│ └── id (Document)
│ ├── date(fieldA): TimeStamp
│ ├── percent(fieldB): number
│ └── status(fieldC): string
└── SHIBA (Sub-Collection)
└── id (Document)
│ ├── date(fieldA): TimeStamp
└── type(fieldB): string
```

## 👉🏻 기타 이미지출처

https://pxhere.com/
