import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'vi',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      vi: {
        translation: {
          now: 'Hiện tại',
          fullname: 'Vũ Phương Nam',
          personal: 'Thông tin cá nhân',
          birthdate: 'Ngày sinh',
          birthdate_c: '23/12/1997',
          sex: 'Giới tính',
          male: 'Nam',
          address: 'Địa chỉ',
          address_c: 'Đống Đa - Hà Nội',
          language: 'Ngôn ngữ',
          vietnamese: 'Tiếng Việt',
          english: 'Tiếng Anh',
          skill: 'Kỹ năng',
          technical_skills: 'Kỹ năng chuyên môn',
          databases: 'Cơ sở dữ liệu',
          clouds: 'Clouds',
          other_skills: 'Các kỹ năng khác',
          software: 'Methodologies & Tools',
          introduction:
            'Tôi đã làm việc với vai trò của một lập trình viên được 4 năm. Tôi có kiến thức tốt về JavaScript và tôi cũng có thể làm việc với một số ngôn ngữ khác như Python và Java,... Ngoài ra, tôi đã có kinh nghiệm làm việc với các ứng dụng sử dụng lambda function trên nền tảng AWS và kiến trúc serverless. Tôi có thể tuân theo nguyên tắc phát triển dựa trên thử nghiệm (TDD) để đảm bảo chất lượng và độ tin cậy của mã nguồn dự án.',
          education: 'HỌC VẤN',
          experience: 'KINH NGHIỆM',
          university: 'Học viện Công nghệ Bưu Chính - Viễn Thông',
          education_c: 'Bằng cấp: Kỹ sư\nChuyên ngành: An toàn thông tin\nXếp loại tốt nghiệp: Khá',
          amela_c: 'Hợp tác và phát triển phần mềm với các khách hàng đến từ Nhật Bản.',
          ekoios_c: 'Hợp tác và phát triển phần mềm với các khách hàng quốc tế.',
          project: 'Dự án đã làm',
          monolith_c:
            '- Mô tả: Ứng dụng Web/Mobile cho hệ thống ghép đôi.\n- Công nghệ: NodeJS (Express.js), ReactJS, React Native. \n- Databases: MySQL, MongoDB.\n- Vai trò: Phát triển và bảo trì phần backend, frontend (web client và web admin). \n- Chức năng chính: Tìm hiểu và xây dựng hệ thống mới từ hệ thống cũ, tìm kiếm người dùng để ghép đôi, chức năng chat user-user user-admin, gửi thông báo, email, sms, ...',
          tps_c:
            '- Mô tả: Hệ thống web dành cho dịch vụ giao vận sản phẩm từ Nhật Bản ra nước ngoài hoặc trong nước.\n- Công nghệ: NodeJS (Express.js), ReactJS. \n- Databases: MySQL.\n- Vai trò: Phát triển Backend and frontend web (client and admin). \n- Chức năng chính: Xây dựng luồng đặt hàng và vận tải hàng hoá ra nước ngoài, tạo chức năng chat real-time chat. Tích hợp các api của các nhà vận chuyển theo yêu cầu khách hàng (Tích hợp Fedex, DHL cho khách hàng ở nước ngoài, tích hợp Dmail cho khách hàng nội địa). Thanh toán online và tích hợp thanh toán định kỳ sử dụng Stripe.',
          coa_c:
            '- Mô tả: Ứng dụng di động và trang web quản trị cho một thẩm mỹ viện ở Nhật Bản.\n- Công nghệ: NodeJS (NestJS), ReactJS, React Native. \n- Databases: MySQL.\n- Vai trò: Phân tích hệ thống cũ, phát triển backend, and frontend web (admin). \n- Chức năng chính: Xây dựng hệ thống đặt lịch hẹn khám (React Big Calendar & Socket.io), chức năng thanh toán online và thanh toán định kỳ (Stripe), gửi thông báo (OneSignal), ...',
          cis_c:
            '- Mô tả: Migrate hệ thống cũ sang hệ thống mới từ source code cũ viết bằng Java và VB.Net, phát triển thành hệ thống web mới viết bằng nodejs cho hệ thống giao hàng bằng đường hàng không và đường biển.\n- Công nghệ: NodeJS (Express.js)/ReactJS & Java/VB.NET\n- Databases: OracleDB, MongoDB.\n- Vai trò: Phân tích and dựng lại hệ thống cũ và phát triển backend cho hệ thống mới.',
          sls_c:
            '- Mô tả: Làm việc trên các dịch vụ nền tảng đám mây của AWS để phân tích và mô hình hóa dữ liệu, tạo và triển khai các giải pháp hệ thống cho hãng máy bay Air Canada.\n- Công nghệ: AWS Services such as Lambda functions (NodeJS), Glue Jobs (Python), Kinesis Data Applications (Java Flink), Kafka, SNS, SQS, CloudWatch, CloudFormation, State Machine, Athena, S3, EC2, DynamoDB, RDS, SSM, SCM,... - Databases: AWS Dynamodb, AWS RDS.\n- Vai trò: Tiến hành phân tích và phát triển backend. Đóng góp, hỗ trợ SA thiết kế hệ thống và triển khai hệ thống sử dụng Serverless framework. Triển khai unit test dựa trên test-driven development (TDD) sử dụng Jest với Lambda functions, pytest với Glue Jobs, và JUnit 5 với KDA.',
          trustpay_c:
            '- Mô tả: Development Web blockchain for staking coin system.\n- Công nghệ: NodeJs/ReactJs.\n- Vai trò: Backend development.',
          other_skills_c: 'Kỹ năng làm việc nhóm, kỹ năng làm việc độc lập, kỹ năng review code cho member khác, ...',
          hobbies: 'SỞ THÍCH',
          movie: 'Xem phim',
          music: 'Âm nhạc',
          gaming: 'Trò chơi điện tử',
          certificate: 'Chứng chỉ',
          point: 'Điểm',
          programmer_php: 'Lập trình viên PHP',
        },
      },
      en: {
        translation: {
          now: 'Now',
          fullname: 'Vu Phuong Nam',
          personal: 'Personal',
          birthdate: 'Birthdate',
          birthdate_c: 'December 23 1997',
          sex: 'Sex',
          male: 'Male',
          address: 'Address',
          address_c: 'Dong Da - Ha Noi',
          language: 'Language',
          vietnamese: 'Vietnamese',
          english: 'English',
          skill: 'Skill',
          technical_skills: 'Technical Skills',
          databases: 'Databases',
          clouds: 'Clouds',
          other_skills: 'Other Skills',
          software: 'Methodologies & Tools',
          introduction:
            "I have been working as a developer for 4 years, with a strong knowledge of JavaScript, and I can also work with Python, Java, .... Beside that, I have experienced in building applications using lambda function, AWS services, and serverless architecture. I am skilled in developing RESTful APIs and integrating third-party services for seamless functionality. I am capable of applying test-driven development (TDD) principles to ensure source code quality and reliability.",
          education: 'EDUCATION',
          experience: 'EXPERIENCE',
          university: 'Posts and Telecommunications Institute of Technology',
          education_c:
            'Degree: Engineer of Information Technology\nMajor: Information Security\nDegree classification: Good',
          amela_c: 'Collaborated with and developed software for Japanese customers.',
          ekoios_c: 'Collaborated with and developed software for global customers.',
          project: 'PROJECT',
          monolith_c:
            '- Description: Web/Mobile application for matching couple system.\n- Technologies: NodeJS (Express.js), ReactJS. \n- Databases: MySQL, MongoDB. \n- Responsibilities: Investigate old system and migrate to new system, development and maintenance of backend, frontend (web client and web admin). \n- Main functions: Migrate old data, matching couple, chat real-time user-user user-admin, send notification, sms, email, ...',
          tps_c:
            '- Description: Web system for product delivery service from Japan overseas.\n- Technologies: NodeJS (Express.js), ReactJS.\n- Databases: MySQL.\n- Responsibilities: Backend and frontend web (client and admin) development.\n- Main functions: Build Real-time chat system (Socket.io). Integration with third-party transport vendors\' APIs (FedEx Express API, DHL Express API, Dmail Express API for domestic Japan). Online payment and subscription integration (Stripe).',
          coa_c:
            '- Description: Mobile Application and web admin for a Japanese Beauty Clinic.\n- Technologies: NodeJS (NestJS), ReactJS, React Native. \n- Databases: MySQL.\n- Responsibilities: Analysis requirement, design database, development and maintenance of backend, and frontend (web admin). \n- Main functions: Build real-time calendar booking system (React big calendar and Socket.io). Online payment and subscription (Stripe). Push notifications (OneSignal), ...',
          cis_c:
            '- Description: Migrate old system and develop a new web system for delivering goods by air and sea.\n- Technologies: NodeJS (Express.js) / ReactJS & Java/VB.NET\n- Databases: OracleDB, MongoDB.\n- Responsibilities: Analysis and re-deploy old source code and backend development for new system.',
          sls_c:
            '- Description: Worked on cloud platforms to analyze and model data, creating / Implementing system solutions for Air Canada.\n- Technologies: AWS Services such as Lambda functions (NodeJS), Glue Jobs (Python), Kinesis Data Applications (Java Flink), Kafka, SNS, SQS, CloudWatch, CloudFormation, State Machine, Athena, S3, EC2, DynamoDB, RDS, SSM, SCM,... - Databases: AWS Dynamodb, AWS RDS.\n- Responsibilities: Conducted analysis and backend development. Assisted in designing architecture and implementing it using the Serverless framework. Implemented test-driven development (TDD) tests using Jest for Lambda functions, pytest for Glue Jobs, and JUnit 5 for KDA.',
          trustpay_c:
            '- Description: Development Web blockchain for staking coin system.\n- Technology: NodeJs/ReactJs.\n- Responsibility: Backend development.',
          other_skills_c: 'Teamwork skill, independent work skill, review code skill, ...',
          hobbies: 'HOBBIES',
          movie: 'Movie',
          music: 'Music',
          gaming: 'Gaming',
          certificate: 'Certificate',
          point: 'Points',
          programmer_php: 'PHP programmer',
        },
      },
    },
  });
