# 회사 프로젝트

## 와이펫 (2023 - 현재)

### [Service] 와이펫 — 반려동물 건강관리 B2C 플랫폼
    NestJS(TypeScript), Flutter, MongoDB, Redis, AWS(ECS, Amplify, S3, CloudWatch), GitHub Actions
> 역할: 개발팀장. 백엔드 아키텍처 설계 및 서비스 전반 개발 주도

- 반려동물 체온 측정 칩 및 블루투스 스캐너와 연동하여 체온 데이터를 수집·관리하는 플랫폼 개발
- NestJS 기반 백엔드 모노레포 아키텍처 설계 및 구축 (메인 서비스, 펫스테이션, 공통 라이브러리 구조 포함)
- B2C 서비스 전반의 백엔드 시스템을 주도적으로 설계 및 개발
- 개체별 평소 체온 산출 알고리즘을 설계·구현하여 개인화된 이상 탐지 기능 적용 (특허 진행 중)
- 쿠폰 시스템, 이벤트 모듈, QR 기반 도장깨기 등 핵심 서비스 기능 개발
- AWS 인프라 최적화 및 구조 개선을 통해 운영 비용 절감 (AWS 크레딧 $5,750 활용)

URL: https://ypet.co.kr

### [Service] 와이펫 세이프 — 체온 스캐너 B2B 솔루션
    NestJS(TypeScript), MongoDB, AWS

- 블루투스 체온 스캐너 기반 데이터 수집 및 관리용 B2B 솔루션 개발
- B2C 대비 단순화된 구조로 백엔드 API 설계 및 구현 담당
- 블루투스 장비와의 바이트 레벨 통신 프로토콜 구현 및 데이터 파싱 로직 개발
- 프론트엔드/앱 팀과 연동되는 API 스펙 설계 및 협업 진행

### [System] 펫스테이션 — 반려동물 테마 오프라인 매장 시스템
    NestJS(TypeScript), Next.js, POS(OLLSTAR), 키오스크(KingBrothers), 페이히어, 포스모스

-	반려동물 테마 오프라인 매장 운영 시스템 구축 주도 (2024년 11월 그랜드 오픈)
-	POS, 키오스크, 무인 주문 시스템 도입 및 다중 결제 시스템 연동
-	매장 운영 데이터 및 정산 데이터 수집/관리 파이프라인 설계
-	오프라인 매장과 온라인 플랫폼 간 데이터 연동 구조 설계

- URL: https://www.ypetsafe.com/

### [Desktop App] 호원소프트 — 블루투스 스캐너 연동 윈도우 프로그램
    Electron, TypeScript, SQLite, Bluetooth

- 연구소용 개체 체온 관리 윈도우 애플리케이션 단독 개발 및 납품
- 블루투스 스캐너 연결/해제 및 실시간 데이터 수신 처리 구현
- 바이트 레벨 데이터 해석 및 구조화 로직 개발
- 측정 데이터 SQLite 저장 및 클립보드 내보내기 기능 구현

### [Leadership] 개발팀 구축 및 운영

- 개발팀 구성 및 기술 방향 설정 주도
- 스크럼 도입으로 개발 프로세스 개선 및 협업 효율 향상
- OKR 기반 목표 관리 및 분기별 성과 관리 체계 운영
- 주간 기술 공유 세션(금요 인사이트) 운영 (52회 이상)
- 외부 파트너십 구축 (AWS, 클라우드 센터, 벤더사 협업 등)

### [외주] SB솔루션 — 웹 서비스 유지보수 및 기능 개발
    NestJS(TypeScript), AWS

- 와이펫이 수주한 외주 프로젝트 개발 담당으로 유지보수 및 신규 기능 개발 수행
- 외주 프로젝트 개발 담당으로 유지보수 및 신규 기능 개발 수행
- 기존 서비스 구조 분석 후 안정적인 기능 확장 진행
- 작업 이력을 체계적으로 관리하며 개발 프로세스 유지

https://www.sb-solutions.co.kr/product/soomirang

## 월간해킹 (2021 - 2023)
### [Server] Penet-checker-backend
    Nest.js(Node.js, Typescript), monorepo, bull, mariaDB, redis, mongoDB, AWS 등

- 보안 취약점 점검 플랫폼의 백엔드 아키텍처 설계 및 개발
- Nest.js Monorepo 구조로 여러 도메인 서비스 분리 및 통합 관리
  - 사용자(checker-api): 고객이 사용하는 클라이언트가 요청하는 REST API 프로젝트. 검사 결과를 제외한 다른 요청들을 책임짐
  - 취약점 검사(core-api): 웹사이트 및 모바일 어플리케이션(iOS, Android)의 보안 문제를 점검하고, 그 데이터를 저장
  - 취약점 검사(core-worker): core-api를 통해 받은 요청을 queue 에 넣고 수행. 주로 검사 및 저장 작업에 사용 (취약점 검사에 시간이 많이 걸려서 각각의 이벤트의 실행을 보장하기 위해 queue 를 이용하여 처리)
  - 취약점 결과 보고서 출력(report-creator): 저장된 검사 결과 데이터를 보고서 형태로 생성
  - 관리자(checker-admin-api): 고객을 관리하기 위한 클라이언트가 요청하는 REST API 프로젝트
- Bull Queue를 활용하여 장시간 작업 및 신뢰성 요구 이벤트 처리
- MariaDB, Redis, MongoDB를 역할에 맞게 분리하여 사용
- Toss Payments 기반 결제 시스템 연동
- 프론트엔드 팀과 API 스펙을 실시간 공유하며 협업

### [Server] 악성메일 모의훈련 서비스 (Mailing Test)
    Express(Node.js, javascript), AWS, mariaDB 등

- 메가존 클라우드를 통해 보안 솔루션으로 제공되는 악성메일 모의훈련 서비스
- 보안 교육용 피싱 메일 시뮬레이션 서비스 개발
- 실제 서비스 형태의 메일을 모방하여 사용자 행동을 추적
- 메일 열람, 링크 클릭, 입력 정보, 첨부파일 다운로드 등의 이벤트 수집 및 분석
- 결과 데이터를 기반으로 리포트 생성 기능 구현

### [Server] Hyper Scan
    Express(Node.js, javascript), AWS, rabbitMQ, mariaDB 등

- 메가존 클라우드를 통해 보안 솔루션으로 제공되는 취약점 검사 서비스
- 웹/모바일 애플리케이션 대상 취약점 점검 서비스 개발
- 비동기 작업 처리를 위해 RabbitMQ 기반 이벤트 큐 구조 적용
- 검사 결과 데이터를 기반으로 리포트 생성 시스템 구현

### [Server] Penet 버그 바운티 커뮤니티
    Express(Node.js, javascript), sequelize, mariaDB, Vue.js, AWS 등

- 의뢰인과 보안 연구자를 연결하는 버그 바운티 플랫폼 개발
- 사용자 역할에(의뢰인, 해커) 따라 다른 UI 및 기능 제공
- 권한 기반 접근 제어 및 데이터 관리 기능 구현

## 와이폴라리스 (2020 - 2021)
### [Server] Ketsup API 서버
    Express(Node.js, javascript), AWS, sequelize, passport, mariaDB, github 등

- REST API 서버 신규 구축 및 시스템 설계 참여
- 시스템 기획 및 개발 전략 문서화, 개발 환경 구축, 서버 및 백엔드 개발 등
- Sequelize를 활용한 기존 DB 매핑 및 ORM 기반 개발
- JWT 기반 인증 및 Naver/Kakao OAuth 로그인 구현
- KaKao Pay 등을 이용한 결제 시스템 연동

### [Web Service] 와이폴라리스 홈페이지
    React.js, Next.js, Material-UI, styled-components, AWS SES, nodemailer

- 반응형 기업 홈페이지 개발 및 유지보수 
- 애니메이션 및 동영상 효과 적용
- SEO 최적화 및 검색 노출 개선

### [Web Service] Ketsup Snackbar 관리자 사이트
    php, code igniter, nginx

- 무인 매장 서비스 관리자 페이지 유지보수 및 기능 개선
- 기존 API 연동 및 기능 확장 작업 수행

## Youyishou  (2019 - 2020)
### 디어유 프로젝트
    2019. 01. - 2020. 06.
    Express(Node.js), AWS, sequelize, passport, mariaDB, github

- 기존 시스템 구조 분석 및 개선된 아키텍처 제안 및 개발 주도
- Docker 기반 개발 환경 구성 및 협업 환경 표준화
- Express 기반 백엔드 및 React 프론트엔드 구조 분리
- Sequelize를 활용한 ORM 및 마이그레이션 기반 DB 관리

### 유이수 통합 유통 관리 시스템
    2019. 11. - 2020. 03.
    python,Flask, mySQL, git, Zapier, AWS(EC2, Lambda, API gateway, Route 53 등) 등.

- 중국 수출용 유통 관리 시스템 개발 및 유지보수
- 주문/재고/판매 데이터 통합 관리 시스템 구축
- Zapier + AWS Lambda를 활용한 외부 주문 데이터 자동 수집 구조 설계
- 데이터 무결성 및 보안 이슈 분석 및 개선

### 유이수 배송 정보 관리 시스템
    2019. 11. - 2020. 12.
    python,Flask, mySQL, git, Zapier, AWS(EC2, Lambda, API gateway, Route 53 등) 등.

- 중국 수출용 유통 관리 시스템 개발 및 유지보수
- 주문/재고/판매 데이터 통합 관리 시스템 구축
- Zapier + AWS Lambda를 활용한 외부 주문 데이터 자동 수집 구조 설계
- 데이터 무결성 및 보안 이슈 분석 및 개선

### 네트워크/서버 시스템 개편
    2019. 11.
    AWS VPC, SSL, Linux

- 증가하는 트래픽 대응을 위한 인프라 구조 개선
- 서버 보안 강화 및 네트워크 아키텍처 재구성

### 미니앱 관리 시스템
    2019. 10. - 2019. 12.
    php, wordpress, mysql, Lambda, Zapier

- 위챗 기반 미니앱 관리 시스템 유지보수 및 기능 추가
- 서버리스(Lambda) 기반 데이터 처리 구조 활용

## Weisure (2018 - 2019)
### [Chatbot / Web Service] 의사소통
    2018.01 - 2019.06
    php, Laravel, AWS, docker-compose, python, javascript, Vue.js, node.js, mariaDB, git, Ubuntu, bash

- 의료서비스 특화 챗봇 서비스
- 웨저의 주요 프로젝트. 서비스의 2.0 개발이 결정되어 초창기부터 참여함
- 카카오톡/네이버 톡톡/웹을 지원하는 챗봇 서비스 개발
- 챗봇 데이터 관리 및 학습/라벨링 도구 개발
- 데이터 입력자 편의성을 위한 내부 도구 설계 및 구현
- Docker 기반 개발/배포 환경 표준화
- 웹 채팅 위젯 개발 및 프론트엔드 기능 구현

URL: http://drsotong.com (서비스 종료)

### [Web Service] 의사소통 회사 소개 홈페이지
    2018.05
    php, html, css, AWS, docker-compose, javascript, git, Ubuntu, bash

- 의료서비스 특화 챗봇 서비스인 의사소통의 소개 페이지

URL: http://drsotong.com (서비스 종료)

### [Web Service] 경성바이크
    2018.04
    php, XE, docker-compose, git

- 자전거 정보 공유 및 교육 서비스를 제공하는 커뮤니티 홈페이지
- 평범한 스팩의 커뮤니티형 사이트. 요구사항이 단순하여 XE를 사용하여 틀을 만들고 특이 기능들은 php를 이용하여 개발
- docker-compose 를 이용하여 개발 환경 설정

URL: http://kyungsungbike.com (서비스 종료)

### [Android App] Gotcha
    2018.01 - 2018.03
    Java, Android, git

- 방문 새차 서비스 Gotcha 의 지점, 직원, 고객 관리를 위한 어플리케이션
- 방문 새차를 하는 직원들이 고객 관리를 편리하게 하도록 개발된 태블릿 어플리케이션
- API 문서 작성 및 안드로이드 앱 개발 담당
- **짧은 기간 내 Java Android 개발을 빠르게 습득**하여 기한 내 완료

## Mr, Mention (2017)
### [Web Service] 미스터 트립 버틀러
    2017. 10. - 2017. 11.
    node.js, firebase, firebase cli, html, css, javascript, git

- Firebase 기반의 운영자와 사용자 간 1:1 웹 채팅 서비스.
- 미스터멘션과 별개의 DB를 사용하는 채팅 서비스를 빠르게 개발할 것을 요구 받아서 Firebase를 선택함
- Firebase Javascript SDK 를 이용하여 웹 채팅 기능 개발
- 사용자가 SNS 로그인을 한 뒤, 채팅을 시도하면 해당 유저의 uid가 를 key로 하고 메시지들이 value로 저장되는 기능을 개발함
- 관리자 페이지를 만들어, 관리자가 채팅을 시도한 사용자들의 목록을 확인할 수 있도록 함(각 uid에 해당하는 회원 이름 및 최신 메시지를 출력). 목록에서 사용자를 선택하면 해당 사용자와 채팅할 수 있도록 함
- 기능 개발 이후 팀원에게 전달, 프로젝트에 적용됨.

### [Server] 미스터멘션 AWS 서버 아키텍팅
    2017. 10.
    AWS, Ubuntu, server settings, nginx, tomcat, mariaDB, bash, scheduler

- 버전 2 홈페이지 서비스를 위해 AWS 기반으로 서버 아키텍팅 및 세팅 작업 진행
- 순간적으로 사용자가 많이 접속 했을 때 서비스가 멈춰버리거나, 제대로 DB백업이 되지 않거나, 트래픽 한계를 계속해서 넘어가는 등 기존 서버의 한계를 극복하기 위해 AWS 서비스를 이용하기로 결정됨 사내에 서버기술을 아는 인원이 없어 문제 해결을 위해 지원함
- apt-get 등 기본적인 Linux 사용법을 파악 한 뒤 AWS EC2에 Nginx, Tomcat 등을 설정함. 버전2 홈페이지는 Java Spring으로 개발되고 있었으므로 Tomcat을 주 포트(80)로 설정함
- EC2, RDS, S3, Route53, Auto Scaling, Load Balancer 등을 사용하여 서버 구성을 계획함
- 정적인 데이터는 S3에, DB는 RDS - mariaDB를 사용하고 서비스는 Multi AZ 구성의 EC2를 사용하며 Load Balancer 와 Route53을 이용하여 사용자와의 통신을 제어. 이때 EC2의 cpu사용량을 기준으로 Auto Scaling 을 적용해 최대 6개의 EC2가 작동할 수 있도록 설계함

### [iOS App] 미스터멘션 어플리케이션
    2017. 08. - 2017. 09.
    Swift, cocoapod, php, git, postman, ftp

- 회사의 요구에 따라 iOS 네이티브 앱 개발을 기획부터 개발까지 담당
- Swift3를 빠르게 학습하여 단기간에 개발 착수, 홈페이지 유지보수와 병행하여 기한 내 완료
- 게스트 사용자의 기능에 집중하여 개발됨. 회원가입 및 인증, 방 검색, 방 목록보기, 예약진행, 결제진행 등의 기능을 포함
- php 를 이용하여 mySQL과 json 통신하는 API 를 개발하여 적용함.

URL: https://apps.apple.com/kr/app/%EB%AF%B8%EC%8A%A4%ED%84%B0%EB%A9%98%EC%85%98/id1296156335

### [Web Service] 미스터멘션
    2017. 02. - 2017. 12.
    php, Laravel, MySQL, javascript, git, vagrant, Linux(CentOS), Server Settings

- 플랫폼 홈페이지 유지보수, 기능 개선 및 추가
- 코드 리팩토링, 이미지 처리 방식 개선 등으로 접속 속도 최적화
- 기능상의 문제, UI/UX 관련 문제, 버그 등을 파악하여 개선
- GIt을 이용한 코드 관리 - Local, Bare, Test, Service 로 나누어 서비스에 적용하기 전에 동일 환경의 서버에서 확인 한 뒤 적용
- 가격 정보 입력 폼 변경, 디자인 변경, 방 자세히보기 페이지 기능 변경, 관리자 페이지 기능 추가 등 지속적인 기능 추가

URL: https://mrmention.co.kr

## Venditz (2016)
### [Web Service] 이사모아 관리자 페이지 기능 추가
    2016. 09. - 2016.11.
    php, Laravel, MySQL, javascript, git, postman    

- 매출관리, 마케팅 비용(ROAS)관리, 견적 및 사용자 통계, 유입 경로 통계 페이지 생성
- MySQL 을 이용한 RUID(read, update, insert, delete)
- Laravel 프레임워크기반으로 MVC 패턴으로 개발
- raw query를 이용해 json 형식으로 데이터를 리턴하는 API를 만들어 사용
- Axisj를 이용해 API의 정보를 리스트로 만들고, ajax로 임의의 항목을 클릭하면 해당 업체의 상세 정보가 하단에 설정한 레이어에 표현됨
- google visualization을 이용하여 API의 정보를 그래프로 표현

URL: https://www.app24moa.com
