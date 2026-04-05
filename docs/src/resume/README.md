# Resume

김찬중 · 풀스택 개발자 (약 10년차)

- devcjkim@gmail.com
- github.com/centell

## Job
소프트웨어 개발 / 웹 풀스택 개발

## Summary
- 약 10년간 백엔드 개발을 주력으로, 프론트엔드·모바일·인프라까지 아우르는 풀스택 개발자입니다.
- NestJS(TypeScript) 기반의 백엔드 개발이 특기이며, Next.js, Flutter 등을 활용한 풀스택 개발 경험이 있습니다.
- AWS 기반 클라우드 아키텍처 설계, Docker를 이용한 배포 환경 구축 등 전반적인 인프라 경험을 갖추고 있습니다.
- 개발팀장으로서 팀 빌딩, 애자일 프로세스 도입, 기술 방향 설정 등 팀 리딩 경험이 있습니다.
- RAG 파이프라인 설계·구현, MCP 서버 직접 개발 등 LLM 기반 AI 시스템 개발 경험이 있습니다.
- 붕괴하지 않는 팀이 가장 빠르게 성장한다고 믿습니다.

## Introduce
TypeScript/Node.js를 주력으로 약 10년간 백엔드 개발을 해왔으며, 프론트엔드·모바일·인프라까지 직접 다루는 풀스택 개발자입니다.
저는 개선을 좋아합니다. 모든 것에 완벽한 상태란 없으며 계속해서 개선되고 나아질 수 있다고 생각합니다. 이것은 밖으로만 향하는 것이 아니라, 저에게도 마찬가지입니다. 제 단점과 아쉬운 점들에 대해 듣는것을 즐기며 감사히 여깁니다.
커뮤니케이션을 잘 하는 편이라는 말을 많이 듣습니다. 팀원들의 의견을 듣고 현 상황에서 가능한 방법을 찾아 문제를 해결해나가는 편입니다. 시간/비용상 안 되는 건 안 된다고 인정하고, 그 상황에서도 가장 나은 결과를 찾는걸 즐깁니다.  
팀원 모두가 견딜 수 있는 페이스로 지속적이고 안정적으로 결과를 내는 개발 문화를 지향합니다. 개발팀의 운영에 있어서 가장 중요한 것은 팀이 붕괴하지 않는 것이며, 예측할 수 있는 결과물을 계속 내는 것이라고 생각합니다. 무너지지 않는 견고한 문화를 가진 개발팀과 함께할 때 회사도 개인도 가장 빠르게 성장할 수 있다고 생각합니다.  

## Work Experiences

### 와이펫 (2023. 06. - 현재)
- 포지션: 개발팀장
- 담당업무:
  - NestJS(TypeScript) 기반 백엔드 모노레포를 설계하고, 메인 서비스·펫스테이션 등 다수의 도메인 앱과 공유 라이브러리 구조를 구축했습니다.
  - 반려동물 체온 측정·관리 API를 개발하고, 개체별 평소체온 산출 알고리즘을 연구·구현했습니다 (특허 관련 순서도 작성 포함).
  - 블루투스 스캐너와의 통신 프로토콜(바이트 레벨 데이터 해석)을 구현하고, 앱과의 연동 모듈 및 테스트 코드를 작성했습니다.
  - 쿠폰 시스템, 이벤트 모듈, QR 기반 도장깨기 시스템 등 서비스 핵심 기능을 개발했습니다.
  - 펫스테이션 오프라인 매장 구축을 주도했으며, POS·키오스크·무인주문 시스템 도입 및 결제 연동(페이히어, 포스모스)을 담당했습니다.
  - AWS 크레딧 $5,750 확보 및 불필요한 인프라 비용을 정리해 클라우드 운영 비용을 최적화했습니다.
  - 부산 클라우드 혁신센터, 베스핀글로벌 MSP 계약 등 외부 파트너십을 구축했습니다.
  - 영장류 연구소용 윈도우 블루투스 연동 프로그램(호원소프트)을 개발하고 납품했습니다.
  - 주간 스크럼 도입, 금요인사이트(일요일에 1-2시간 정도 시간을 내어 직원들의 역량 강화를 위한 교육 진행) 52회 이상 운영 등 개발팀 문화 및 역량 강화를 주도했습니다.
  - 2023년 직원 투표를 통해 최고 멤버로 선정되었습니다. <details><summary>사진 보기</summary><img src="/images/award-best-member-2023.jpeg" alt="2023 와이펫 최고 멤버" style="max-width:300px;margin-top:8px;"></details>
- 사용기술: NestJS(TypeScript), Next.js, Flutter, AWS(ECS, Amplify, S3, CloudWatch), MongoDB, Redis, SQLite, GitHub Actions 등

### 월간해킹 (2021. 08. - 2023. 05)
- 도메인: 보안, 버그바운티
- 포지션: 백엔드 개발자
- 담당업무:
  - 보안 취약점 신고·검증·보상 전 과정을 지원하는 **버그바운티 플랫폼(penet)** 풀스택 개발을 진행했습니다. 결제, 포인트, 순위, 리포트 등 서비스 핵심 도메인을 포함합니다.
  - **취약점 자동 스캐너(penet-checker)** 백엔드를 NestJS 모노레포로 설계·개발했습니다. Bull Queue 기반 비동기 스캔 워커(core-queue-worker, hyper-scan-api), 리포트 자동 생성(report-creator), pentest-tools-provider 등 공유 라이브러리로 구성했습니다.
  - 다수의 마이크로서비스 앱과 공유 라이브러리를 모노레포 구조로 관리하여 코드 재사용성과 배포 독립성을 확보했습니다.
  - 시스템 기획, 개발 환경 구축, AWS 인프라 설정 등을 담당했습니다.
- 사용기술: NestJS(TypeScript), Express(Node.js), Bull Queue, AWS(EC2, S3, SES 등), MariaDB, MongoDB, Redis 등

### 와이폴라리스 (2020. 07. - 2021. 08.)
- 도메인: AI, 무인매장
- 포지션: 백엔드 개발자
- 담당업무:
  - 무인 스낵바·편의점 운영 플랫폼 **Ketsup**의 API 서버를 신규 개발했습니다. 조직·매장·상품·주문·결제·통계·포인트 등 커머스 핵심 도메인 전반을 설계·구현했습니다.
  - Jenkins를 활용한 CI/CD 배포 파이프라인을 구축했습니다.
  - Next.js 기반 회사 홈페이지를 신규 개발했습니다.
  - CodeIgniter 기반 레거시 홈페이지의 유지보수 및 기능 추가를 담당했습니다.
- 사용기술: Express(Node.js), Next.js, Jenkins, AWS(EC2, S3, SES 등), MariaDB 등

### 유이수 (2019. 10. - 2020. 05.)
- 도메인: 쇼핑몰, 국제 커머스
- 포지션: 개발 팀장, 백엔드 개발자
- 담당업무:
  - 시스템 기획·개발 전략 디렉팅, DB 설계, 서버 및 백엔드 개발 전반을 총괄했습니다.
  - Express.js + Sequelize ORM 기반 REST API 서버를 신규 설계·개발했습니다. 역할 기반 접근 제어(권한·메뉴 관계), 공통 코드 관리, Docker 개발 환경을 포함하여 구축했습니다.
  - 초기 Flask로 작성된 레거시 프로젝트에 MVC 패턴, ORM, 보안(SSL, CORS, CSRF)을 도입했습니다.
  - 무결성이 훼손된 기존 DB를 분석하여 마이그레이션을 수행했습니다.
  - 기존 아키텍처의 비효율을 개선하여 월 서버 비용을 30만 원대에서 15만 원 이하로 절감했습니다.
  - 사내 위키 문화를 도입하여 개발 문서를 체계화했습니다.
- 사용기술: Express(Node.js), Sequelize, React.js, Docker, AWS(EC2, Lambda, API Gateway, Route 53 등), Flask(Python), Zapier 등

### 웨저 (2018. 01. - 2019. 06.)
- 도메인: AI, 챗봇, 병원
- 포지션: 웹 개발자
- 담당업무:
  - 의료 AI 챗봇 서비스 **의사소통(carebot)** 의 학습 데이터 관리 도구, RS 시나리오 매니저, 푸시 매니저 등 챗봇 운영·학습 도구를 주도적으로 개발했습니다.
  - 카카오 채널 연동 챗봇 뷰 및 예약 시스템을 개발했습니다.
  - 가비아 서버에 있던 구형 PHP 프로젝트들을 AWS로 마이그레이션했습니다.
  - Vue.js 기반 회사 홈페이지 및 바닐라 JavaScript 기반 웹 채팅 클라이언트를 개발했습니다.
  - iOS, Android 모바일 앱 개발 및 유지보수에 참여했습니다.
  - Trello, Slack, Google Docs 등 협업 도구를 팀에 도입하고 사용 문화를 정착시켰습니다.
- 사용기술: Laravel(PHP), Node.js, Vue.js, AWS(EC2, RDS, S3, SES, VPC), JavaScript, Docker, Python, MariaDB, Bash 등

### 미스터멘션 (2017. 02. - 2017. 12.)
- 도메인: 숙소 예약, 여행
- 포지션: 개발 팀장, 웹 개발자
- 담당업무:
  - 메인 개발자로서 전반적인 사이트 기능 추가 및 유지보수를 담당했습니다.
  - Laravel 기반 홈페이지 유지보수 및 기능추가를 진행했습니다.
  - AWS Essential 교육을 이수하고, 습득한 클라우드 기술을 기존 플랫폼에 직접 적용했습니다.
  - 기존 사이트와 연동되는 iOS 앱 개발을 진행했습니다.
  - Node.js 기반 채팅 시스템을 개발했습니다.
- 사용기술: Node.js, Laravel(php), AWS(EC2, S3, RDS, ELB, VPC 등), javascript, css, mySQL, git 등

### 벤디츠 (2016. 08. - 2016. 11.)
- 도메인: 이사, 견적 제안 및 거래 매칭
- 포지션: 웹 개발 인턴
- 담당업무:
  - 웹 개발 및 통계분석 업무를 담당했습니다.
  - 관리자 페이지에 매출관리, 마케팅 비용(ROAS)관리, 견적 및 사용자 통계, 유입 경로 통계 페이지 생성 등의 기능을 개발했습니다.
  - 사용자 및 업체 사용 경향 통계 분석을 진행했습니다.
  - 기존 고객 데이터를 시각화하는 작업을 진행했습니다.
- 사용기술: Laravel(PHP), mySQL, javascript, git, postman 등

## Technical Experiences
### 선호 언어
TypeScript, JavaScript(Node.js), Python, Bash, Rust, ...

### 마크업
HTML, Markdown, XML

### 백엔드
NestJS, Express(Node.js), npm, nginx, Docker, docker-compose, AWS-CLI, Laravel(php), Shell script, composer, pip, ...

### 프론트엔드
Next.js, React.js, HTML, CSS, SCSS, Bootstrap, Material-ui, SemanticUI, JQuery, UIkit, ...

### 모바일
Flutter, iOS, Android Application

### 데이터베이스 및 ORM
DB: MySQL, MariaDB, MongoDB, SQLite, PostgreSQL, Redis, Firebase
ORM: TypeORM, Mongoose, Prisma, Sequelize, Eloquent ORM, SqlAlchemy, Alembic

### 클라우드 및 인프라
AWS(EC2, ECS, S3, Amplify, Lambda, CloudWatch 등), Docker, docker-compose, nginx, ...

### 형상관리, CI/CD 및 협업
git, GitHub, GitLab, GitHub Actions, Jenkins, ...

### AI / LLM
Claude API, MCP(Model Context Protocol), RAG(Retrieval-Augmented Generation), pgvector, Gemini Embedding API, Prompt Engineering

- RAG 파이프라인 설계·구현: 텍스트 임베딩 생성(Gemini embedding-001, 768차원) → pgvector 저장 → 코사인 유사도 검색 → LLM 컨텍스트 주입
- MCP 서버 개발: 단순 연동이 아닌 서버 구현 (TypeScript, MCP SDK)
- 벡터 유사도 검색과 메타데이터 필터링(중요도·카테고리·날짜)을 조합한 에이전트 지향 검색 시스템 구현

### 기타
Electron Windows Application, ...

## Education

### 부경대학교
- 학과: 물리학과
- 졸업: 2016년

## Certifications & Training

- AWS Essential 교육 수료
