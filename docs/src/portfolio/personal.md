# 개인 프로젝트

## Open sources
### [backend framework] weaver2
    NestJS(TypeScript), PostgreSQL, Prisma, pnpm 모노레포, Docker

신규 서비스의 시작점으로 활용하기 위해 직접 설계·구축한 종합 백엔드 보일러플레이트.
pnpm 모노레포 구조로 앱(apps)과 공유 라이브러리(libs)를 분리 관리하며, 반복적인 셋업 비용을 줄이는 것을 목표로 지속 개선 중.

**아키텍처**
- 3계층 구조 (Features / Infrastructure / System) 및 Command/Query 분리 Repository 패턴으로 읽기·쓰기 책임 명확화
- common, pagination, prisma, email, upload 등 공유 라이브러리 모듈화

**인증 & 보안**
- OAuth 소셜 로그인 (Google, Kakao, Naver) — passport 없이 native fetch 방식으로 직접 구현, CSRF state 검증 포함
- JWT 쿠키 기반 인증 (AccessToken / RefreshToken), 역할 기반 접근 제어 (USER / ADMIN / MODERATOR / DEVELOPER), 레이트 리미팅

**인프라 & 개발 환경**
- Kubernetes readiness / liveness 헬스체크 엔드포인트 (DB 연결·메모리·디스크 체크) 및 모니터링 대시보드 내장
- Docker / docker-compose 기반 개발·프로덕션 환경 분리
- Swagger/OpenAPI 자동 문서화, Husky 커밋 전 lint 검사, Jest E2E 테스트 환경

**기본 제공 기능**
- 게시판·댓글 CRUD, 관리자 대시보드, 이메일 인증, 약관 버전 관리 등 서비스 공통 기능 포함

URL: [https://github.com/rlidea/weaver2](https://github.com/rlidea/weaver2)

### [web framework] weaver (구버전)
    Node.js, Express.js, Sequelize, Passport

express.js 기반 웹 프레임워크 보일러플레이트. weaver2의 전신.

- Router / Model / Query / Controller 레이어 분리
- Sequelize ORM 관리, dotenv 환경변수 관리
- Passport + JWT 인증, CORS·CSRF 보호
- 편리한 validation schema, Alias 적용으로 간결한 임포트
- 시스템 로그 기능 내장
- ESLint·Prettier 코드 품질 관리, mocha 기반 테스트 환경
- 컨트롤러에서 바로 Swagger 문서화 작성

URL:
- [https://github.com/RLidea/weaver-server](https://github.com/RLidea/weaver-server)
- [https://github.com/RLidea/weaver-client](https://github.com/RLidea/weaver-client)


### [창업 도전] BodyUS
    Node.js, Express.js, Next.js, iOS(Swift), MariaDB, Docker

헬스 트레이너가 고객을 관리하고 운동을 체계적으로 지원하는 피트니스 플랫폼. 2020~2021년 창업을 목표로 기획·개발.

- 백엔드(Express.js), 웹 프론트엔드(Next.js), iOS 앱(Swift) 세 플랫폼을 1인 설계·개발
- Sequelize ORM, Passport + JWT 인증, i18n 다국어 지원, Docker 개발 환경 구성
- 트레이너의 고객 관리 및 운동 지원 워크플로우를 직접 기획하여 서비스 전반 설계
- 예비 창업 패키지에 도전한 경험

URL: [https://github.com/bodyus](https://github.com/bodyus) (Private)

### [frontend library] create-element.js
    JavaScript, DOM

- 복잡한 DOM element의 가독성·재사용성을 높이기 위해 개발한 오픈소스 라이브러리
- `ce.tagName` 한 줄로 DOM element 생성

URL: [https://www.npmjs.com/package/create-element.js](https://www.npmjs.com/package/create-element.js)

### [css library] grid-system.css
    CSS

- 부트스트랩 기반 grid 시스템 CSS. 기본 패딩·여백을 모두 제거하여 더 세밀하게 레이아웃을 제어할 수 있도록 설계

URL: [https://www.npmjs.com/package/grid-system.css](https://www.npmjs.com/package/grid-system.css)

## Web
### [Web Service] manya — 버튜버 노래 목록 관리 서비스
    NestJS(TypeScript), Next.js, MySQL

버튜버(VTuber)가 자신의 노래 목록(세트리스트)을 정리하고, 시청자가 손쉽게 조회할 수 있는 웹 서비스.
서비스 전반을 직접 기획·설계하고 NestJS 백엔드 / Next.js 프론트엔드 분리 구성으로 개발. 현재 개발 보류 중.

### [Web Service] pokedex.info (개인 학습 프로젝트)
    Node.js, Vue.js, Docker, MariaDB, AWS

포켓몬스터 정보 사이트. 대규모 DB 설계와 풀스택 아키텍처 학습을 목적으로 진행.

- 97여 개의 테이블을 다루는 DB 설계 및 운영, 확장성·i18n을 고려한 스키마 구성
- Express 백엔드 / Vue-cli 프론트엔드 분리 구성 (마이크로 아키텍처)
- puppeteer 기반 정보 크롤링, docker-compose로 개발 환경 공유

## Tools & Bots
### [MCP Server] agent-persona-system — AI 페르소나 기억 관리 시스템
    TypeScript, Node.js, Prisma, PostgreSQL(pgvector), MCP SDK

AI 에이전트(Claude 등)에 지속적인 기억·페르소나를 부여하는 MCP 서버. 실제 개인 워크플로우에 운용 중.

- pgvector 기반 의미 검색으로 관련 기억을 컨텍스트에 자동 로드
- 세션 관리, 중요도 기반 기억 분류, 기억 간 연결 관계 구현
- Claude Code MCP 서버로 연동하여 페르소나 상태 지속 유지

### [Bot] watchdog — 텔레그램 모니터링 봇
    Node.js, TypeScript, Telegram Bot API, PM2

- 서버 상태·알림을 텔레그램으로 수신하는 개인용 모니터링 봇
- PM2 상시 구동, Telegram Bot API 푸시 알림 구현

URL: [https://github.com/centell/watchdog-telegrambot](https://github.com/centell/watchdog-telegrambot) (Private)

### [CLI Tool] trans-cli — 번역 CLI 도구
    TypeScript, DeepL API, Node.js

- DeepL API를 사용하는 번역 CLI 도구
- EPUB 번역 (병렬 처리 + 챕터 캐싱), 디렉토리 일괄 번역 (파일명·디렉토리명·VTT 자막 내용) 지원

URL: [https://github.com/centell/trans-cli](https://github.com/centell/trans-cli)

## Game
### [Indie Game] WitchStella
    Godot 4(GDScript), 솔로 개발

마녀와 별을 소재로 한 인디게임. 기획부터 개발까지 1인 진행 중.

- 현실 파트(비주얼 노벨) ↔ 개념세계 파트(2D 플랫포머) 교차하는 하이브리드 구조
- 별자리 맵 기반 스테이지 선택, "텍스트 없이 레벨 디자인으로 가르친다" 철학의 튜토리얼 설계
- 씬 co-location 구조로 리팩토링하여 유지보수성 향상
- i18n 다국어 시스템, 키보드 리맵핑 설정 화면, 포커스 내비게이션 등 UI 시스템 직접 구현

URL: [https://github.com/centell/witchstella](https://github.com/centell/witchstella)

## Desktop App
### [Windows App] Naver Message Helper
    Electron, Vue.js, JavaScript

- 특정 키워드로 검색되는 네이버 블로그 유저 아이디를 수집하는 자동화 유틸리티
- 반복 수작업 자동화를 위해 개발, Electron으로 Windows 실행 파일로 빌드
