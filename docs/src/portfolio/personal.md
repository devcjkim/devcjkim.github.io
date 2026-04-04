# 개인 프로젝트

## Open sources
### [backend framework] weaver2
    NestJS(TypeScript), PostgreSQL, Prisma, JWT, pnpm 모노레포

- NestJS 기반 백엔드 베이스 프레임워크. 개인 프로젝트 및 사내 프로젝트의 시작점으로 활용
- pnpm 모노레포 구조로 백엔드(core-backend)와 프론트엔드(core-frontend)를 함께 관리
- Prisma ORM 기반 DB 마이그레이션, JWT 인증(AccessToken/RefreshToken), 환경변수 관리 등 보일러플레이트 구축
- 반복적인 프로젝트 셋업 비용을 줄이기 위해 직접 설계 및 지속 개선 중

URL: [https://github.com/centell/weaver2](https://github.com/centell/weaver2)

### [web framework] weaver (구버전)
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

URL: [https://github.com/centell/weaver2](https://github.com/centell/weaver2)

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
### [Web Service] pokedex.info (개인 학습 프로젝트)
    node.js, Vue.js, Docker, mariaDB, AWS, git

- 게임 포켓몬스터의 정보 사이트 (개인 학습 목적)
- 97여 개의 테이블을 다루는 대규모 DB 설계 및 운영 경험
- docker-compose.yml을 이용한 개발 환경 공유
- Express 기반 백엔드와 Vue-cli 기반 프론트엔드를 분리한 마이크로 아키텍처 구조
- puppeteer를 이용한 정보 크롤링
- 확장성과 i18n을 고려한 DB 설계
- Sequelize를 이용한 테이블 스키마 버전관리 및 ORM 쿼리

## Tools & Bots
### [Bot] watchdog — 텔레그램 모니터링 봇
    Node.js, TypeScript, Telegram Bot API, PM2

- 서버 상태, 알림 등을 텔레그램으로 받아볼 수 있는 개인용 모니터링 봇
- PM2로 상시 구동, 텔레그램 Bot API를 활용한 푸시 알림 구현

URL: [https://github.com/centell/watchdog](https://github.com/centell/watchdog)

### [CLI Tool] book-translator — EPUB 번역 도구
    TypeScript, DeepL API, Node.js

- 일본어 EPUB 파일을 한국어로 번역하는 CLI 도구
- DeepL API Free를 활용하여 텍스트를 추출·번역 후 EPUB으로 재조합
- 번역되지 않은 일본어 서적을 읽기 위해 직접 개발

URL: [https://github.com/centell/book-translator](https://github.com/centell/book-translator)

## Desktop App
### [Windows App] Naver Message Helper
    Electron, Vue.js, javascript

- 특정 키워드로 검색되는 네이버 블로그 유저들의 아이디를 수집하는 유틸리티 프로그램
- 반복적인 수작업을 자동화하기 위해 개발
- Electron 기반으로 개발하여 Windows에서 실행 가능한 애플리케이션으로 빌드
