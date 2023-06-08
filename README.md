# 국내 여행 계획 자동 생성 서비스

## 1. 목표와 기능

## 2. 개발 환경 및 배포 URL

## 3. 프로젝트 구조

## 4. 진행 과정
* 23년 05월 30일
    * 프로젝트 시작
    * TailwindCSS를 활용하여 디자인 완료, chatGPT와의 요청·응답 성공

* 23년 05월 31일
    * 전체 디자인 변경 완료
    * 사용자가 몇가지 정보를 입력하면 이를 통해 chatGPT가 여행 계획을 만들어 주는데 성공

* 23년 06월 01일
    * chatGPT의 답변이 표시되기 전까지 로딩 이미지가 출력되도록 수정

* 23년 06월 02일
    * 로딩 화면이 나타난 후 사라지기 전까지는 스크롤이 되지 않도록 설정
    * 로딩 화면이 사라진 다음 결과가 출력된 곳으로 바로 이동하도록 설정
    * 디자인에 마이너한 수정
    * 반응형을 적용하여 1024px 미만에서는 모바일 화면이 나오도록 설정
    * 로딩 이미지 출력 위치 수정

* 23년 06월 05일
    * 리팩토링 시도
    * TailwindCSS 사용 중단, 전부 CSS 파일로 변경

* 23년 06월 07일
    * 일정 입력 방식 변경

* 23년 06월 08일
    * 일정이 제대로 입력되지 않던 오류 수정
    * 출발지와 도착지를 드롭다운 박스를 통해 입력하도록 변경
    * 해당 드롭다운 박스를 동적으로 생성하도록 변경
    * JavaScript의 기능을 분리(ongoing)
