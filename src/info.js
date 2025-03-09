const data = {
  header: {
    navLinks: ["Home", "Courses", "Programs", "Why Us", "Reviews", "Contact"],
    cta: "Get Started"
  },
  hero: {
    headline: "Transforming Students into Job-Ready Professionals!",
    subheading:
      "At Talent Scope, we bridge the gap between college education and industry expectations. Our expert-led training programs ensure students develop the technical skills, problem-solving abilities, and communication expertise needed to secure top software jobs.",
    cta: "Know More",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/403013d638d7468461b925376926959844753eb7",
    
  },
  offeredCourses: {
    title: "Empowering students with industry-ready skills to crack placements with confidence!",
    categories: {
      "Aptitude & Reasoning": [
        "Quantitative Aptitude (Numbers, Algebra, Profit & Loss, Time & Distance)",
        "Logical Reasoning (Puzzles, Blood Relations, Seating Arrangements)",
        "Data Interpretation (Graphs, Charts, Tables)"
      ],
      "Verbal Ability": [
        "Vocabulary Building & Reading Comprehension",
        "Grammar & Sentence Correction",
        "Group Discussions & Interview Communication"
      ],
      "Employability Skills": [
        "Resume Writing & Personal Branding",
        "Confidence Building & Public Speaking",
        "Stress Management & Teamwork"
      ],
      "Technical Skills": [
        "Programming: C, Java, Python (Hands-on training)",
        "Data Structures & Algorithms",
        "Database & Backend Technologies"
      ]
    }
  },
  whatWeConduct: {
    title: "Beyond just training, we create career opportunities!",
    sections: [
      {
        name: "Trainings (CRT - Campus Recruitment Training)",
        details: "Master Aptitude, Reasoning, and Verbal Skills to crack competitive exams. Enhance problem-solving abilities with company-specific tests. Learn from industry experts with real-world case studies."
      },
      {
        name: "Workshops (AIML, Drone, OT)",
        details: "Artificial Intelligence & Machine Learning – Learn AI tools and techniques. Drone Technology – Explore autonomous flying technology. Operational Technology (OT) – Understand IT in industrial automation."
      },
      {
        name: "Internships",
        details: "Hands-on industry exposure with real-world projects. Gain practical skills in software development, AI, and emerging technologies. Work alongside professionals and build a strong portfolio."
      },
      {
        name: "Technologies Hands-on Training",
        details: "Deep dive into C, Java, and Python with interactive coding sessions. Work on mini-projects and industry simulations. Build deployable applications with mentor guidance."
      }
    ]
  },
  whyTalentScope: {
    title: "What makes us different? Our commitment to YOUR success!",
    reasons: [
      "Best-in-Class Learning Materials - Access expert-curated books and e-learning portals to practice anytime, anywhere.",
      "Tailor-Made Programs - Training customized based on student strengths & weaknesses for maximum impact.",
      "Career-Oriented Coaching - Our courses help in clearing GRE, GMAT, GATE, and Bank Exams alongside placements.",
      "Expert Faculty - Industry veterans with years of corporate and academic experience.",
      "Continuous Support - 24/7 doubt resolution, mentoring, and career guidance.",
      "Proven Track Record - Successfully trained students from top colleges, ensuring high placement success rates."
    ]
  },
  customerReviews: [
    {
      review: "Talent Scope’s CRT training helped me land my dream job! The practical approach and expert guidance made all the difference.",
      name: "Rahul M., Placed at TCS"
    },
    {
      review: "The workshops on AI and Drone Tech were fantastic! Hands-on learning with real-world applications helped me build projects for my resume.",
      name: "Samantha R., AI Enthusiast"
    },
    {
      review: "I struggled with coding, but Talent Scope’s structured hands-on training in Java helped me build confidence. Highly recommended!",
      name: "Anil K., Software Developer"
    }
  ],
  contactUs: {
    title: "Have questions? We’re here to help!",
    address: "Talent Scope Career Solutions Pvt. Ltd. H: No, 9-76, Behind Meghana Theater, Lilith Nagar, Dilsukhnagar, Hyderabad.",
    phone: ["+91 73374 70938", "+91 91778 40513"],
    email: "talentscope.crt@gmail.com",
    formFields: ["Name", "Email", "Message"]
  },
  footer: {
    quickLinks: ["Home", "Courses", "Programs", "Why Us", "Reviews", "Contact"],
    socialMedia: ["Facebook", "LinkedIn", "Twitter"],
    copyright: "© 2024 Talent Scope Career Solutions Pvt. Ltd. All Rights Reserved."
  }
};

// Export specific sections
export const header = data.header;
export const hero = data.hero;
export const offeredCourses = data.offeredCourses;
export const whatWeConduct = data.whatWeConduct;
export const whyTalentScope = data.whyTalentScope;
export const customerReviews = data.customerReviews;
export const contactUs = data.contactUs;
export const footer = data.footer;

// Default export for full data (if needed)
export default data;
