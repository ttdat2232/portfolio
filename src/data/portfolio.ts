import { useLanguage } from "@/contexts/LanguageContext.tsx";

const portfolioDataJa = {
    information: {
        name: "チュオン・ティエン・ダット",
        address: "ニャチャン、カインホア",
        phoneNumber: "0965784310",
        linkedIn: "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-tr%C6%B0%C6%A1ng-ti%E1%BA%BFn-645a58255/",
        github: "https://github.com/ttdat2232/",
        professionalSummary: "2年以上のフルスタック開発経験を持つ、意欲的で成果を重視する.NET開発者。C#、.NETを使用した堅牢なバックエンドシステムの開発を専門としています。高性能なRESTful APIの開発、最適化、保守において実績があります。アジャイル/スクラム開発手法の経験を持ち、クリーンアーキテクチャやOOP、SOLID原則などの概念を活用して、スケーラブルで保守性の高いコードを提供します。"
    },
    skill: {
        techStack: {
            backend: [".NET", "C#", "Golang"],
            frontend: ["HTML", "CSS", "JavaScript", "Angular"],
            database: ["PostgreSQL", "MSSQL Server"],
            devops: ["Docker", "Docker Compose"],
            messageQueue: ["RabbitMQ"],
            versionControl: ["SVN", "Git", "Github", "Gitlab"]
        },
        Concept: {
            designPattern: ["Factory", "Builder", "Mediator", "Observer", "Decorator", "Singleton"],
            OOP: ["OOP", "SOLID"],
            Architecture: ["Clean Architecture", "N-Layer"]
        },
        language: [
            {
                Name: "英語",
                Description: "ビジネス環境での読み書き及び会話が可能"
            },
            {
                Name: "日本語",
                Description: "N3学習中"
            }
        ]
    },
    experience: [
        {
            company: {
                name: "SquareOne Soft",
                FromTo: "2024年10月 - 2025年11月",
                Place: ["在宅勤務", "ホーチミン市"]
            },
            role: ".NET開発者",
            techStack: [".NET", "PostgreSQL", "HTML", "CSS", "JavaScript", "jQuery", "Golang"],
            project: {
                description: "GolangとASP.NET Coreの両方を使用してRESTful APIを開発・保守。Entity Framework Coreでデータベース操作を実装し、最適化されたLINQ式でクエリ実行時間を短縮。ASP.NET MVCを使用した古い金融プロジェクトの保守を担当。ブログシステムプラットフォームにブログ機能を実装。"
            }
        },
        {
            company: {
                name: "IDB Cooperation",
                FromTo: "2023年8月 - 2024年8月",
                Place: ["ホーチミン市"]
            },
            role: ".NET開発者",
            techStack: [".NET", "Asterisk", "RabbitMQ", "MSSQL Server", "HTML", "CSS", "JavaScript"],
            project: {
                description: "AsteriskをASP.NETシステムに統合。着信コールのスケジュール実行を実装。ユーザーの発信コールを処理。社内AIエージェントを介して通話品質を分析。RESTful APIを開発。8人のアジャイル/スクラムチームで協力し、スプリント計画、コードレビュー、デイリースタンドアップに参加。マイクロサービスの設計とサードパーティサービスの統合を支援。"
            }
        }
    ],
    education: {
        Name: "FPT大学",
        Graduated: "2020-2024"
    }
};

const portfolioDataVi = {
    information: {
        name: "Trương Tiến Đạt",
        address: "Nha Trang, Khánh Hòa",
        phoneNumber: "0965784310",
        linkedIn: "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-tr%C6%B0%C6%A1ng-ti%E1%BA%BFn-645a58255/",
        github: "https://github.com/ttdat2232/",
        professionalSummary: "Lập trình viên .NET có động lực cao và định hướng kết quả với hơn 2 năm kinh nghiệm thực tế trong phát triển full-stack, chuyên về các hệ thống backend mạnh mẽ sử dụng C#, .NET. Có khả năng đã được chứng minh trong việc phát triển, tối ưu hóa và duy trì các API RESTful hiệu suất cao. Có kinh nghiệm trong các phương pháp Agile/Scrum, tận dụng các khái niệm như Clean Architecture và các nguyên tắc OOP, SOLID để cung cấp mã nguồn có thể mở rộng và bảo trì."
    },
    skill: {
        techStack: {
            backend: [".NET", "C#", "Golang"],
            frontend: ["HTML", "CSS", "JavaScript", "Angular"],
            database: ["PostgreSQL", "MSSQL Server"],
            devops: ["Docker", "Docker Compose"],
            messageQueue: ["RabbitMQ"],
            versionControl: ["SVN", "Git", "Github", "Gitlab"]
        },
        Concept: {
            designPattern: ["Factory", "Builder", "Mediator", "Observer", "Decorator", "Singleton"],
            OOP: ["OOP", "SOLID"],
            Architecture: ["Clean Architecture", "N-Layer"]
        },
        language: [
            {
                Name: "Tiếng Anh",
                Description: "Có khả năng viết và nói trong môi trường kinh doanh"
            },
            {
                Name: "Tiếng Nhật",
                Description: "Đang học N3"
            }
        ]
    },
    experience: [
        {
            company: {
                name: "SquareOne Soft",
                FromTo: "10/2024 - 11/2025",
                Place: ["Làm việc tại nhà", "Thành phố Hồ Chí Minh"]
            },
            role: "Lập trình viên .NET",
            techStack: [".NET", "PostgreSQL", "HTML", "CSS", "JavaScript", "jQuery", "Golang"],
            project: {
                description: "Phát triển và duy trì các API RESTful sử dụng cả Golang và ASP.NET Core. Triển khai các hoạt động cơ sở dữ liệu với Entity Framework Core, giảm thời gian thực thi truy vấn bằng các biểu thức LINQ được tối ưu hóa. Bảo trì một dự án tài chính cũ sử dụng ASP.NET MVC. Triển khai các tính năng Blog trong một nền tảng hệ thống blog."
            }
        },
        {
            company: {
                name: "IDB Cooperation",
                FromTo: "08/2023 - 08/2024",
                Place: ["Thành phố Hồ Chí Minh"]
            },
            role: "Lập trình viên .NET",
            techStack: [".NET", "Asterisk", "RabbitMQ", "MSSQL Server", "HTML", "CSS", "JavaScript"],
            project: {
                description: "Tích hợp Asterisk vào hệ thống ASP.NET. Lên lịch thực hiện các cuộc gọi đến. Xử lý các cuộc gọi đi của người dùng. Phân tích chất lượng cuộc gọi thông qua các agent AI nội bộ. Phát triển các API RESTful. Hợp tác trong một nhóm Agile/Scrum gồm 8 người, tham gia vào việc lập kế hoạch sprint, đánh giá mã nguồn và các cuộc họp đứng hàng ngày. Hỗ trợ thiết kế các microservice và tích hợp các dịch vụ của bên thứ ba."
            }
        }
    ],
    education: {
        Name: "Đại học FPT",
        Graduated: "2020-2024"
    }
};

const portfolioDataEng = {
    information: {
        name: "Truong Tien Dat",
        address: "Nha Trang, Khanh Hoa",
        phoneNumber: "0965784310",
        linkedIn: "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-tr%C6%B0%C6%A1ng-ti%E1%BA%BFn-645a58255/",
        github: "https://github.com/ttdat2232/",
        professionalSummary: "Highly motivated and results-driven .NET Developer with 2+ years of hands-on experience in full-stack development, specializing in robust backend systems using C#, .NET. Proven ability to develop, optimize, and maintain high-performance RESTful APIs. Experienced in Agile/Scrum methodologies, leveraging concepts like Clean Architecture and OOP, SOLID principles to deliver scalable, maintainable code."
    },
    skill: {
        techStack: {
            backend: [".NET", "C#", "Golang"],
            frontend: ["HTML", "CSS", "JavaScript", "Angular"],
            database: ["PostgreSQL", "MSSQL Server"],
            devops: ["Docker", "Docker Compose"],
            messageQueue: ["RabbitMQ"],
            versionControl: ["SVN", "Git", "Github", "Gitlab"]
        },
        Concept: {
            designPattern: ["Factory", "Builder", "Mediator", "Observer", "Decorator", "Singleton"],
            OOP: ["OOP", "SOLID"],
            Architecture: ["Clean Architecture", "N-Layer"]
        },
        language: [
            {
                Name: "English",
                Description: "Able to write and speak in a business environment"
            },
            {
                Name: "Japanese",
                Description: "Learning N3"
            }
        ]
    },
    experience: [
        {
            company: {
                name: "SquareOne Soft",
                FromTo: "10/2024 - 11/2025",
                Place: ["Work From Home", "Ho Chi Minh"]
            },
            role: ".NET Developer",
            techStack: [".NET", "PostgreSQL", "HTML", "CSS", "JavaScript", "jQuery", "Golang"],
            project: {
                description: "Developed and maintained RESTful APIs using both Golang and ASP.NET Core. Implemented database operations with Entity Framework Core, reduced query execution time with optimized LINQ expressions. Maintained an old finance project using ASP.NET MVC. Implemented Blog features in a blog system platform."
            }
        },
        {
            company: {
                name: "IDB Cooperation",
                FromTo: "08/2023 - 08/2024",
                Place: ["Ho Chi Minh"]
            },
            role: ".NET Developer",
            techStack: [".NET", "Asterisk", "RabbitMQ", "MSSQL Server", "HTML", "CSS", "JavaScript"],
            project: {
                description: "Integrated Asterisk into the ASP.NET system. Scheduled inbound calls to be fired. Handled user outbound calls. Analyzed calling quality via internal AI agents. Developed RESTful APIs. Collaborated in an Agile/Scrum team of 8, participating in sprint planning, code reviews, and daily stand-ups. Assisted in designing microservices and integrating third-party services."
            }
        }
    ],
    education: {
        Name: "FPT University",
        Graduated: "2020-2024"
    }
};

export const portfolioData = () => {
    let langContext = useLanguage();
    switch (langContext.language) {
        case "en":
            return portfolioDataEng
        case "ja":
            return portfolioDataJa
        case "vi":
            return portfolioDataVi
        default:
            return portfolioDataEng
    }
}