import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
    name: "Lakindu Rathmanagolla",
    initials: "LV",
    url: "https://lakindu.vercel.app",
    location: "Colombo Sri lanka",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description:
        "skilled freelancer specializing in creating websites, e-commerce platforms, landing pages, and web applications. ",
    summary:
        "With a passion for crafting user-friendly and visually appealing digital solutions , I help businesses establish a strong online presence and achieve their goals.",
    avatarUrl: "/me.png",
    skills: [
        "Wordpress",
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "Python",
        "Go",
        "Postgres",
        "Docker",
        "Kubernetes",
        "Java",
        "C++",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
        // { href: "#", icon: CodeIcon, label: "Projects" },
        // { href: "#", icon: PencilLine, label: "Notes" },
    ],
    contact: {
        email: "lakindu62@gmail,com",
        tel: "0775124585",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/lakindu62",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/lakindu-rathmanagolla-aa8b3a26a/",
                icon: Icons.linkedin,

                navbar: true,
            },
           
           
            email: {
                name: "Send Email",
                url: "lakindu62@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "Happy Mind",
            href: "https://happymind.lk",
            badges: [],
            location: "Remote",
            title: "Community Manager",
            logoUrl: "/happyMind.png",
            start: "July 2023",
            end: "Nov 2023",
            description:
                "I was responsible for ensuring the highest standards of quality and performance for the company's online platform.",
        },
    ],
    education: [
        {
            school: "Sri Lanka Institute of Information Technology",
            href: "https://www.sliit.lk/",
            degree: "BSc (Hons) in Information Technology Specialising in Software Engineering",
            logoUrl: "/sliit.png",
            start: "2022",
            end: "",
        },
        {
            school: "British Computer Society",
            href: "https://www.bcs.org/",
            degree: "Professional Graduate Diploma in IT",
            logoUrl: "/bcs.png",
            start: "2021",
            end: "2024",
        },
    ],
    projects: [
        {
            title: "CACTI STREETWEAR",
            href: "https://cactistreetwear.com/",
            dates: "",
            active: true,
            description:
                "Developed and launched Cacti Street Wear, a Sri Lankan clothing e-commerce site, featuring a user-friendly interface, secure payment integration, and seamless navigation to enhance the shopping experience for fashion enthusiasts.",
            technologies: [
                "Wordpress",
                "Elementor",
                "Woocommerce",
                "Sand",
                "One pay",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://cactistreetwear.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/cacti.png",
            video: "",
        },
        {
            title: "Downsouth Ceylon",
            href: "https://downsouthceylon.com/",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Developed and designed the e-commerce site for Downsouth Ceylon, a brand that celebrates coastal living through limited edition garments, timeless styles, and quality craftsmanship. The website captures the essence of beach life, offering users a seamless and engaging shopping experience. Embrace the serenity of nature and join the Downsouth tribe through a platform that blends fashion with the tranquil spirit of Sri Lanka's southern coast",
            technologies: [
                "Wordpress",
                "Elementor",
                "Woocommerce",
                "Sand",
                "One pay",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://downsouthceylon.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/downsouthCeylon.png",
            video: "",
        },
        {
            title: "Landscovery Immigration",
            href: "https://landscovery.vercel.app/",
            dates: "",
            active: true,
            description:
                "Designed and developed the website for Landscovery Immigration, a Canada-based immigration company. The site features an intuitive appointment booking system, allowing clients to easily schedule consultations. The platform ensures a user-friendly experience, offering comprehensive information on immigration services and facilitating smooth communication between clients and the company",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://landscovery.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                // {
                //     type: "Source",
                //     href: "https://github.com/dillionverma/llm.report",
                //     icon: <Icons.github className="size-3" />,
                // },
            ],
            image: "/landscovery.png",
            video: "",
        },
        {
            title: "MFR Technologies",
            href: "https://www.mfrtechnologies.com/",
            dates: "",
            active: true,
            description:
                "Designed and developed a dynamic landing page for an IT company, featuring an integrated blog and content management system (CMS). The platform allows for easy content updates and management, ensuring the latest industry insights and company news are readily available. The user-friendly design enhances visitor engagement and effectively communicates the company's expertise and services",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Hypgrah",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://www.mfrtechnologies.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/mfr.png",
            video: "",
        },
    ],
    hackathons: [
        {
            title: "IDEALIZE",
            dates: "",
            location: "University Of Moratuwa",
            description:
                "Participated in the IDEALIZE Hackathon, where my team and I developed an innovative event management platform. This platform connects admins, including those from large-scale schools, with participants. It streamlines event organization, enhances communication, and ensures smooth coordination, making it easier to manage and participate in various events.",
            image: "/idealize.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "Intellicon",
            dates: "",
            location: "Sri Lanka Institute of Information Technology Malabe",
            description:
                "Participated in the Inteliicon Ideathon, where my team and I brainstormed and generated innovative ideas for AI implementation. We focused on exploring cutting-edge technologies and developing strategic plans to integrate AI solutions across various industries, aiming to enhance efficiency, productivity, and user experience",
            image: "/intellicon.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        // {
        //     title: "FirstNet Public Safety Hackathon",
        //     dates: "March 23rd - 24th, 2018",
        //     location: "San Francisco, California",
        //     description:
        //         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
        //     icon: "public",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
        //     links: [],
        // },
        // {
        //     title: "DeveloperWeek Hackathon",
        //     dates: "February 3rd - 4th, 2018",
        //     location: "San Francisco, California",
        //     description:
        //         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
        //     links: [
        //         {
        //             title: "Github",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/cryptotrends/cryptotrends",
        //         },
        //     ],
        // },
        // {
        //     title: "HackDavis",
        //     dates: "January 20th - 21st, 2018",
        //     location: "Davis, California",
        //     description:
        //         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
        //     win: "Best Data Hack",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
        //     links: [
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://devpost.com/software/my6footprint",
        //         },
        //         {
        //             title: "ML",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/Wallet6/my6footprint-machine-learning",
        //         },
        //         {
        //             title: "iOS",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/Wallet6/CarbonWallet",
        //         },
        //         {
        //             title: "Server",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/Wallet6/wallet6-server",
        //         },
        //     ],
        // },
        // {
        //     title: "ETH Waterloo",
        //     dates: "October 13th - 15th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
        //     links: [
        //         {
        //             title: "Organization",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/ethdocnet",
        //         },
        //     ],
        // },
        // {
        //     title: "Hack The North",
        //     dates: "September 15th - 17th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a virtual reality application allowing users to see themselves in third person.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Streamer Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/justinmichaud/htn2017",
        //         },
        //         {
        //             title: "Client Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/RTSPClient",
        //         },
        //     ],
        // },
        // {
        //     title: "Hack The 6ix",
        //     dates: "August 26th - 27th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/ShareShip/ShareShip",
        //         },
        //         {
        //             title: "Site",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://share-ship.herokuapp.com/",
        //         },
        //     ],
        // },
        // {
        //     title: "Stupid Hack Toronto",
        //     dates: "July 23rd, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/nsagirlfriend/nsagirlfriend",
        //         },
        //     ],
        // },
        // {
        //     title: "Global AI Hackathon - Toronto",
        //     dates: "June 23rd - 25th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
        //     win: "1st Place Winner",
        //     links: [
        //         {
        //             title: "Article",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/TinySamosas/",
        //         },
        //     ],
        // },
        // {
        //     title: "McGill AI for Social Innovation Hackathon",
        //     dates: "June 17th - 18th, 2017",
        //     location: "Montreal, Quebec",
        //     description:
        //         "Developed realtime facial microexpression analyzer using AI",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
        //     links: [],
        // },
        // {
        //     title: "Open Source Circular Economy Days Hackathon",
        //     dates: "June 10th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
        //     win: "1st Place Winner",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/genecis",
        //         },
        //     ],
        // },
        // {
        //     title: "Make School's Student App Competition 2017",
        //     dates: "May 19th - 21st, 2017",
        //     location: "International",
        //     description:
        //         "Improved PocketDoc and submitted to online competition",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
        //     win: "Top 10 Finalist | Honourable Mention",
        //     links: [
        //         {
        //             title: "Medium Article",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        //         },
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://devpost.com/software/pocketdoc-react-native",
        //         },
        //         {
        //             title: "YouTube",
        //             icon: <Icons.youtube className="h-4 w-4" />,
        //             href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/pocketdoc-react-native",
        //         },
        //     ],
        // },
        // {
        //     title: "HackMining",
        //     dates: "May 12th - 14th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed neural network to optimize a mining process",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
        //     links: [],
        // },
        // {
        //     title: "Waterloo Equithon",
        //     dates: "May 5th - 7th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
        //     links: [
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://devpost.com/software/pocketdoc-react-native",
        //         },
        //         {
        //             title: "YouTube",
        //             icon: <Icons.youtube className="h-4 w-4" />,
        //             href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/pocketdoc-react-native",
        //         },
        //     ],
        // },
        // {
        //     title: "SpaceApps Waterloo",
        //     dates: "April 28th - 30th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/earthwatch",
        //         },
        //     ],
        // },
        // {
        //     title: "MHacks 9",
        //     dates: "March 24th - 26th, 2017",
        //     location: "Ann Arbor, Michigan",
        //     description:
        //         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/threejs-planes",
        //         },
        //     ],
        // },
        // {
        //     title: "StartHacks I",
        //     dates: "March 4th - 5th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
        //     win: "1st Place Winner",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source (Mobile)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/mattBlackDesign/recipic-ionic",
        //         },
        //         {
        //             title: "Source (Server)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/mattBlackDesign/recipic-rails",
        //         },
        //     ],
        // },
        // {
        //     title: "QHacks II",
        //     dates: "February 3rd - 5th, 2017",
        //     location: "Kingston, Ontario",
        //     description:
        //         "Developed a mobile game which enables city-wide manhunt with random lobbies",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source (Mobile)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/human-huntr-react-native",
        //         },
        //         {
        //             title: "Source (API)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/mattBlackDesign/human-huntr-rails",
        //         },
        //     ],
        // },
        // {
        //     title: "Terrible Hacks V",
        //     dates: "November 26th, 2016",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a mock of Windows 11 with interesting notifications and functionality",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        //         },
        //     ],
        // },
        // {
        //     title: "Portal Hackathon",
        //     dates: "October 29, 2016",
        //     location: "Kingston, Ontario",
        //     description:
        //         "Developed an internal widget for uploading assignments using Waterloo's portal app",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/UWPortalSDK/crowmark",
        //         },
        //     ],
        // },
    ],
} as const;
