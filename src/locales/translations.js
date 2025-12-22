export const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    work: 'Work',

    // Home Page
    heroTitle: 'Software Engineer',
    heroTitleAccent: '& Graduate Student',
    heroDescription: 'Currently pursuing a Master\'s degree in Information Science at Tohoku University while gaining practical experience in software development. Specializing in web applications with Ruby on Rails, Go, and modern frontend technologies.',
    viewMyWork: 'View My Work',
    aboutMe: 'About Me',
    skillsTitle: 'Skills & Technologies',
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'A showcase of my academic projects, professional work, and hackathon achievements',
    contactTitle: "Let's Connect",
    contactDescription: "I'm always interested in new opportunities, collaborations, and learning experiences. Feel free to reach out if you'd like to discuss projects or potential opportunities.",
    getInTouch: 'Get In Touch',
    readMore: 'Read More',
    moreContentSoon: 'More Projects Coming Soon',

    // Skills
    skills: [
      { key: 'rails', name: 'Ruby on Rails' },
      { key: 'go', name: 'Golang' },
      { key: 'react', name: 'React' },
      { key: 'typescript', name: 'TypeScript' },
      { key: 'aws', name: 'AWS' },
      { key: 'postgresql', name: 'PostgreSQL' },
      { key: 'mysql', name: 'MySQL' },
      { key: 'python', name: 'Python' },
      { key: 'r', name: 'R' },
      { key: 'grpc', name: 'gRPC' },
      { key: 'docker', name: 'Docker' },
      { key: 'terraform', name: 'Terraform' },
      { key: 'tensorflow', name: 'TensorFlow' }
    ],

    // Projects
    projects: [
      {
        title: 'Passkey Authentication System',
        description: 'Implemented modern passwordless authentication using Passkey technology at MoneyForward, enhancing security and user experience.',
        tags: ['Ruby on Rails', 'Passkey', 'Authentication'],
        status: 'Live',
        category: 'Professional'
      },
      {
        title: 'Task Management Application',
        description: 'Developed a comprehensive task management system as part of Tohoku University student project, focusing on team collaboration and productivity.',
        tags: ['Go', 'React', 'PostgreSQL'],
        status: 'Development',
        category: 'Academic'
      },
      {
        title: 'JPHACK 2023 Award Winner',
        description: 'Created an innovative solution that won the J-Stream Award at JPHACK 2023, one of Japan\'s largest hackathons.',
        tags: ['Hackathon', 'Innovation', 'Team Project'],
        status: 'Completed',
        category: 'Hackathon'
      }
    ],

    // Personality Section
    personalityTitle: 'Personality & Strengths',
    personalityConcept: 'Rational Mind, Inclusive Heart. Driving teams with logic and positivity.',
    personalityIntro: 'My strength lies in the hybrid of "rational judgment" based on objective data analysis and "social drive" to build trust with people.',
    personalityPoints: [
      {
        title: 'Analytical & Rational',
        description: 'I value "why" and evidence. Even in ambiguous situations, I clarify facts and making rational decisions to eliminate project uncertainties.'
      },
      {
        title: 'Social & Inclusive',
        description: 'I don\'t just rely on logic; I also leverage social skills and inclusivity. I excel at accepting diverse backgrounds and building unified teams where no one is left behind.'
      },
      {
        title: 'Articulate & Influential',
        description: 'I have the ability to translate complex logic into understandable language. By communicating with enthusiasm while respecting others\' emotions, I drive projects forward.'
      }
    ],
    personalityTags: [
      '#AnalyticalThinking',
      '#RationalJudgment',
      '#ProcessImprovement',
      '#Woo',
      '#Positivity',
      '#Includer',
      '#TeamBuilding'
    ],

    // Profile Page
    aboutMeTitle: 'About Me',
    profileDescription: "I'm a graduate student at Tohoku University pursuing a Master's in Information Science, with hands-on experience in software development at leading tech companies. I'm passionate about building scalable web applications and exploring cutting-edge technologies.",
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    hackathonWins: 'Hackathon Awards',

    // Experience Categories
    academicExperience: 'Academic Experience',
    professionalExperience: 'Professional Experience',
    extracurricularActivities: 'Extracurricular Activities',

    skillsTechnologies: 'Skills & Technologies',
    education: 'Education',
    beyondCode: 'Beyond Development',
    personalText1: 'When I\'m not coding or studying, I enjoy participating in hackathons, exploring new technologies, and contributing to open-source projects. I believe in continuous learning and staying at the forefront of technological innovation.',


    // Experience Data
    academicExp: [
      {
        role: 'Graduate Student',
        company: 'Tohoku University - Graduate School of Information Sciences',
        year: '2024 - Present (Expected 2026)',
        description: 'Pursuing Master\'s degree in Information Science. Conducting research on the relationship between psychological traits and dementia. Also leading a student project for task management application development.',
        technologies: ['Dementia Research', 'Data Analysis', 'System Design', 'Project Management']
      },
      {
        role: 'Bachelor of Engineering',
        company: 'Tohoku University - School of Engineering',
        year: '2020 - 2024',
        description: 'Completed Bachelor\'s degree in Engineering with focus on computer science and software development. Built strong foundation in algorithms, data structures, and system architecture.',
        technologies: ['Computer Science', 'Algorithms', 'Software Engineering', 'Mathematics']
      }
    ],

    professionalExp: [
      {
        role: 'Software Engineer Intern',
        company: 'MoneyForward Inc.',
        year: '2025 - Present',
        description: 'Implementing Passkey authentication system using Ruby on Rails. Working on security enhancements and modern authentication solutions for financial technology platform.',
        technologies: ['Ruby on Rails', 'Passkey', 'Authentication', 'Security']
      },
      {
        role: 'Software Engineer Intern',
        company: 'Showcase Gig Inc.',
        year: '2024 - 2025',
        description: 'Developed web applications using Go programming language. Gained experience in backend development, API design, and cloud infrastructure management.',
        technologies: ['Go', 'API Development', 'Cloud Infrastructure', 'Backend']
      },
      {
        role: 'Software Engineer Intern',
        company: 'Infratop Inc.',
        year: '2022 - 2024',
        description: 'Developed web applications using Ruby on Rails and AWS cloud services. Gained hands-on experience in full-stack development and cloud deployment.',
        technologies: ['Ruby on Rails', 'AWS', 'Full-stack Development', 'Cloud Services']
      }
    ],

    extracurricularExp: [
      {
        role: 'Study Abroad Student',
        company: 'University at Albany, SUNY',
        year: 'February - March 2025',
        description: 'Short-term language study abroad program. Focused on improving English communication skills and experiencing cross-cultural exchange through the Intensive English Language Institute.',
        technologies: ['English Communication', 'Cross-cultural Exchange', 'Language Learning']
      },
      {
        role: 'Hackathon Winner',
        company: 'JPHACK 2023',
        year: 'November 2023',
        description: 'Won J-Stream Award at JPHACK 2023, one of Japan\'s largest hackathons. Developed innovative solution within 24-hour timeframe with team collaboration.',
        technologies: ['Hackathon', 'Innovation', 'Team Leadership', 'Rapid Prototyping'],
      }
    ],

    // Education
    educationData: [
      {
        degree: 'Master of Information Science',
        school: 'Tohoku University - Graduate School of Information Sciences',
        year: '2024 - 2026 (Expected)',
        description: 'Specializing in software engineering and system design. Leading student project for task management application development.'
      },
      {
        degree: 'Bachelor of Engineering',
        school: 'Tohoku University - School of Engineering',
        year: '2020 - 2024',
        description: 'Graduated with focus on computer science and software development. Built strong foundation in engineering principles and programming.'
      }
    ],

    // Skills Categories
    skillsCategories: {
      'Backend': ['Ruby on Rails', 'Go', 'Node.js', 'API Design'],
      'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      'Cloud & DevOps': ['AWS', 'Docker', 'CI/CD', 'Infrastructure'],
      'Database': ['PostgreSQL', 'MySQL', 'Redis', 'Database Design'],
      'Tools & Others': ['Git', 'Linux', 'Agile', 'System Design']
    },

    // Blog Page
    blogTitle: 'Blog & Insights',
    blogDescription: 'Thoughts on software development, academic research, and technology trends',
    blogPosts: [
      {
        title: 'Implementing Passkey Authentication in Rails',
        excerpt: 'A deep dive into modern passwordless authentication and how to implement Passkey technology in Ruby on Rails applications.',
        category: 'Development'
      },
      {
        title: 'Lessons from JPHACK 2023',
        excerpt: 'Reflections on winning the J-Stream Award at Japan\'s largest hackathon and the importance of rapid prototyping.',
        category: 'Hackathon'
      },
      {
        title: 'Balancing Academia and Industry',
        excerpt: 'How to manage graduate studies while gaining practical experience in the software industry.',
        category: 'Career'
      }
    ],

    // Footer
    footerDescription: 'Graduate Student & Software Engineer based in Sendai, Japan',
    connect: 'Connect',
    contact: 'Contact',
    allRightsReserved: 'All rights reserved.',
    madeWithLove: 'Made with ❤️ in Sendai',

    // Common
    viewProject: 'View Project',
    live: 'Live',
    development: 'Development',
    completed: 'Completed',
    minRead: 'min read'
  },

  jp: {
    // Header
    home: 'ホーム',
    about: 'プロフィール',
    work: '実績',

    // Home Page
    heroTitle: 'ソフトウェアエンジニア',
    heroTitleAccent: '& 大学院生',
    heroDescription: '東北大学大学院情報科学研究科で修士課程を履修しながら、ソフトウェア開発の実務経験を積んでいます。Ruby on Rails、Go、モダンなフロントエンド技術を用いたWebアプリケーション開発を専門としています。',
    viewMyWork: '実績を見る',
    aboutMe: 'プロフィール',
    skillsTitle: 'スキル・技術',
    projectsTitle: '主要プロジェクト',
    projectsSubtitle: '学術プロジェクト、実務経験、ハッカソン実績のショーケース',
    contactTitle: 'お気軽にご連絡ください',
    contactDescription: '新しい機会、コラボレーション、学習体験に常に興味を持っています。プロジェクトや潜在的な機会について話し合いたい場合は、お気軽にお声がけください。',
    getInTouch: 'お問い合わせ',
    readMore: '続きを読む',
    moreContentSoon: 'より多くのプロジェクトが近日公開予定',

    // Skills
    skills: [
      { key: 'rails', name: 'Ruby on Rails' },
      { key: 'go', name: 'Golang' },
      { key: 'react', name: 'React' },
      { key: 'typescript', name: 'TypeScript' },
      { key: 'aws', name: 'AWS' },
      { key: 'postgresql', name: 'PostgreSQL' },
      { key: 'mysql', name: 'MySQL' },
      { key: 'python', name: 'Python' },
      { key: 'r', name: 'R' },
      { key: 'grpc', name: 'gRPC' },
      { key: 'docker', name: 'Docker' },
      { key: 'terraform', name: 'Terraform' },
      { key: 'tensorflow', name: 'TensorFlow' }
    ],

    // Projects
    projects: [
      {
        title: 'Passkey認証システム',
        description: 'MoneyForwardにてPasskey技術を用いた現代的なパスワードレス認証を実装し、セキュリティとユーザーエクスペリエンスを向上させました。',
        tags: ['Ruby on Rails', 'Passkey', '認証'],
        status: '稼働中',
        category: '実務'
      },
      {
        title: 'タスク管理アプリケーション',
        description: '東北大学学生プロジェクトの一環として、チームコラボレーションと生産性に焦点を当てた包括的なタスク管理システムを開発しました。',
        tags: ['Go', 'React', 'PostgreSQL'],
        status: '開発中',
        category: '学業'
      },
      {
        title: 'JPHACK 2023 受賞作品',
        description: '日本最大級のハッカソンJPHACK 2023にてJ-Stream賞を受賞した革新的なソリューションを開発しました。',
        tags: ['ハッカソン', 'イノベーション', 'チームプロジェクト'],
        status: '完了',
        category: 'ハッカソン'
      }
    ],

    // Personality Section
    personalityTitle: '性格と強み',
    personalityConcept: 'ロジカルな頭脳と、ポジティブな求心力。事実に基づいて判断し、熱意を持ってチームを動かす。',
    personalityIntro: '私の強みは、客観的なデータ分析に基づいた「合理的な判断力」と、初対面の人とも信頼関係を築ける「社交的な推進力」を兼ね備えていることです。',
    personalityPoints: [
      {
        title: 'Analytical & Rational（分析と合理性）',
        description: '「なぜそうなるのか？」という根拠を大切にします。曖昧な状況でも事実を整理し、白黒を明確に切り分けることで、プロジェクトにおける迷いをなくし、合理的な意思決定をサポートします。'
      },
      {
        title: 'Social & Inclusive（社交性と受容性）',
        description: '論理一辺倒ではなく、チームビルディングにおいては「社交性」「ポジティブ」「包含」の資質を発揮します。多様なバックグラウンドを持つメンバーを柔軟に受け入れ、誰も取り残さない一体感のあるチームを作ることが得意です。'
      },
      {
        title: 'Articulate（言語化と伝達）',
        description: '複雑な分析結果やロジックを、誰もが理解できる言葉で表現する「コミュニケーション」力があります。理屈で正論を述べるだけでなく、相手の感情に配慮しながら熱意を持って伝えることで、周囲を巻き込みながらプロジェクトを前進させます。'
      }
    ],
    personalityTags: [
      '#分析思考',
      '#弁別性',
      '#合理的判断',
      '#改善プロセス',
      '#社交性',
      '#ポジティブ',
      '#受容力',
      '#チームビルディング'
    ],

    // Profile Page
    aboutMeTitle: 'プロフィール',
    profileDescription: '東北大学大学院情報科学研究科で修士課程を履修し、大手テック企業でのソフトウェア開発の実務経験を持つ大学院生です。スケーラブルなWebアプリケーションの構築と最先端技術の探求に情熱を注いでいます。',
    yearsExperience: '年の経験',
    projectsCompleted: 'プロジェクト完了',
    hackathonWins: 'ハッカソン受賞',

    // Experience Categories
    academicExperience: '学業経験',
    professionalExperience: '実務経験',
    extracurricularActivities: '課外活動',

    skillsTechnologies: 'スキル・技術',
    education: '学歴',
    beyondCode: '開発以外の活動',
    personalText1: 'コーディングや勉強をしていない時は、ハッカソンへの参加、新しい技術の探求、オープンソースプロジェクトへの貢献を楽しんでいます。継続的な学習と技術革新の最前線に立つことを信条としています。',


    // Experience Data
    academicExp: [
      {
        role: '大学院生',
        company: '東北大学大学院情報科学研究科',
        year: '2024年 - 現在（2026年修了予定）',
        description: '情報科学の修士課程を履修中。認知症と心理的特徴の関係性についての研究に従事。タスク管理アプリケーション開発の学生プロジェクトもリードしている。',
        technologies: ['認知症研究', 'データ分析', 'システム設計', 'プロジェクト管理']
      },
      {
        role: '工学学士',
        company: '東北大学工学部',
        year: '2020年 - 2024年',
        description: 'コンピュータサイエンスとソフトウェア開発に焦点を当てた工学学士を取得。アルゴリズム、データ構造、システムアーキテクチャの強固な基盤を構築。',
        technologies: ['コンピュータサイエンス', 'アルゴリズム', 'ソフトウェア工学', '数学']
      }
    ],

    professionalExp: [
      {
        role: 'ソフトウェアエンジニア',
        company: '株式会社マネーフォワード',
        year: '2025年 - 現在',
        description: 'Ruby on Railsを使用したPasskey認証システムの実装。金融技術プラットフォームのセキュリティ強化と現代的な認証ソリューションに従事。',
        technologies: ['Ruby on Rails', 'Passkey', '認証', 'セキュリティ']
      },
      {
        role: 'ソフトウェアエンジニア',
        company: '株式会社Showcase Gig',
        year: '2024年 - 2025年',
        description: 'Go言語を使用したWebアプリケーションの開発。バックエンド開発、API設計、クラウドインフラ管理の経験を積む。',
        technologies: ['Go', 'API開発', 'クラウドインフラ', 'バックエンド']
      },
      {
        role: 'ソフトウェアエンジニアインターン',
        company: '株式会社インフラトップ',
        year: '2022年 - 2024年',
        description: 'Ruby on RailsとAWSクラウドサービスを使用したWebアプリケーションの開発。フルスタック開発とクラウドデプロイメントの実務経験を獲得。',
        technologies: ['Ruby on Rails', 'AWS', 'フルスタック開発', 'クラウドサービス']
      }
    ],

    extracurricularExp: [
      {
        role: '交換留学生',
        company: 'ニューヨーク州立大学オルバニー校',
        year: '2025年2月 - 3月',
        description: '語学学習を目的とした短期留学プログラム。集中英語講座（IELI）を通じて、英語コミュニケーション能力の向上と異文化交流に注力。',
        technologies: ['英語コミュニケーション', '異文化交流', '語学学習']
      },
      {
        role: 'ハッカソン受賞者',
        company: 'JPHACK 2023',
        year: '2023年11月',
        description: '日本最大級のハッカソンJPHACK 2023にてJ-Stream賞を受賞。24時間という制限時間内でチームコラボレーションにより革新的なソリューションを開発。',
        technologies: ['ハッカソン', 'イノベーション', 'チームリーダーシップ', '迅速なプロトタイピング']
      }
    ],

    // Education
    educationData: [
      {
        degree: '情報科学修士',
        school: '東北大学大学院情報科学研究科',
        year: '2024年 - 2026年（修了予定）',
        description: 'ソフトウェア工学とシステム設計を専攻。タスク管理アプリケーション開発の学生プロジェクトをリード。'
      },
      {
        degree: '工学学士',
        school: '東北大学工学部',
        year: '2020年 - 2024年',
        description: 'コンピュータサイエンスとソフトウェア開発に焦点を当てて卒業。工学の原理とプログラミングの強固な基盤を構築。'
      }
    ],

    // Skills Categories
    skillsCategories: {
      'バックエンド': ['Ruby on Rails', 'Go', 'Node.js', 'API設計'],
      'フロントエンド': ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      'クラウド・DevOps': ['AWS', 'Docker', 'CI/CD', 'インフラ'],
      'データベース': ['PostgreSQL', 'MySQL', 'Redis', 'データベース設計'],
      'ツール・その他': ['Git', 'Linux', 'アジャイル', 'システム設計']
    },

    // Blog Page
    blogTitle: 'ブログ・インサイト',
    blogDescription: 'ソフトウェア開発、学術研究、技術トレンドに関する考察',
    blogPosts: [
      {
        title: 'RailsでのPasskey認証実装',
        excerpt: '現代的なパスワードレス認証の詳細解説と、Ruby on RailsアプリケーションでのPasskey技術の実装方法。',
        category: '開発'
      },
      {
        title: 'JPHACK 2023からの学び',
        excerpt: '日本最大級のハッカソンでJ-Stream賞を受賞した経験と、迅速なプロトタイピングの重要性について。',
        category: 'ハッカソン'
      },
      {
        title: '学業と実務のバランス',
        excerpt: 'ソフトウェア業界で実務経験を積みながら大学院での研究を両立する方法。',
        category: 'キャリア'
      }
    ],

    // Footer
    footerDescription: '仙台を拠点とする大学院生・ソフトウェアエンジニア',
    connect: '連絡先',
    contact: 'お問い合わせ',
    allRightsReserved: 'All rights reserved.',
    madeWithLove: '仙台で❤️を込めて作成',

    // Common
    viewProject: 'プロジェクトを見る',
    live: '稼働中',
    development: '開発中',
    completed: '完了',
    minRead: '分で読める'
  }
};