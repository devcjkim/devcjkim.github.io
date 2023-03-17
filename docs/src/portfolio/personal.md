# 개인 프로젝트

## Open sources
### [web framework] weaver
    Node.js, express.js, sequelize, passport, ...
- 여러 기술들을 엮은 express.js 기반 웹 프레임워크
- dotenv 를 이용한 환경 변수 관리
- eslint & prettier 적용
- sequelize 를 이용한 ORM 관리
- Router, Model, Query, Controller 로 분리
- CORS, CSRF 보호
- passport, jwt 를 이용한 인증
- 시스템 로그 기능
- mocha 기반 테스트 환경
- 편리한 validation schema
- Alias 적용으로 편리한 임포트
- 컨트롤러에서 바로 Swagger 를 작성하여 문서화

URL: [https://github.com/rlidea/weaver-server](https://github.com/rlidea/weaver-server)

### [창업] BodyUS
    Node.js, express.js, React, ...
- 개인 피트니스. 운동 학습 및 관리 서비스
- 헬스 트레이너가 고객을 쉽게 관리하고, 운동을 체계적으로 지원할 수 있도록 설계됨
- 2020 - 2021 무렵 창업을 준비했으나 예비 창업 패키지 사업에 붙지 못해 좌절
- 웹 및 모바일 앱(웹앱)으로 준비됨

URL: [https://github.com/bodyus](https://github.com/bodyus) (Private)

### [frontend library] create-element.js
    javascript, DOM

- 복잡한 dom element 들의 가독성 및 재사용성을 위해 개발한 오픈소스 프로젝트.
- `ce.tagName`만으로 dom element 를 생성

URL: [https://www.npmjs.com/package/create-element.js](https://www.npmjs.com/package/create-element.js)

### [css library] grid-system.css
    css

- 부트스트랩 기반의 grid 시스템 css. 모든 패딩과 여백이 제거되어 더 매뉴얼하게 부트스트랩 grid 를 사용.

URL: [https://www.npmjs.com/package/grid-system.css](https://www.npmjs.com/package/grid-system.css)

## Web
### [Web Service] pokedex.info(개발중단됨)
    node.js, electron, Vue.js, Docker, mariaDB, AWS, git

- 게임 포켓몬스터의 정보 사이트
- 다수의 테이블을 사용하는 서비스를 구축해보고자 시작.(97여 개의 테이블이 사용됨)
- docker-compose.yml을 이용한 개발 환경 공유
- git을 이용한 버전 관리
- github, Trello 등 적극적인 협업도구 사용
- express 기반의 백앤드 프로젝트와 Vue-cli 기반으 프론트앤드 프로젝트를 구분한 마이크로 아키텍팅 구조
- puppeteer 를 이용하여 정보 크롤링
- 확장성과 i18n을 고려한 DB 설계
- sequelize 를 이용한 테이블 스키마 버전관리 및 ORM을 이용한 쿼리

## Desktop App
### [Windows App] Naver Message Helper
    Electron, Vue.js, javascript

- 특정 키워드로 검색되는 네이버 블로그 유저들의 아이디를 수집하는 프로그램
- 헬스장에서 홍보용 쪽지를 보내는데 시간이 너무 많이 드는 것을 소호하여 선물삼아 개발
- Electron 기반으로 개발하여 Windows에서 실행 가능한 어플리케이션으로 빌드
