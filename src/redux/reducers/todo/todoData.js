const todoData = [
   {
      id: 0,
      full_name: "Danica Krout",
      image: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
      task: "Managed regional artificial intelligence",
      start_date: "8/1/2018",
      due_date: "4/25/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: true,
      tag: "uiux"
   },
   {
      id: 1,
      full_name: "Leslie Breddy",
      image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      task: "Phased optimal productivity",
      start_date: "12/27/2017",
      due_date: "4/23/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 2,
      full_name: "Cort Tibb",
      image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      task: "Cross-group tangible paradigm",
      start_date: "4/27/2018",
      due_date: "8/21/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: true,
      starred: false,
      tag: "backend"
   },
   {
      id: 3,
      full_name: "Daisie Kingsman",
      image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
      task: "Down-sized fault-tolerant access",
      start_date: "4/2/2018",
      due_date: "7/24/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: true,
      starred: true,
      tag: "uiux"
   },
   {
      id: 4,
      full_name: "Ive Poleye",
      image: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
      task: "Front-line incremental methodology",
      start_date: "11/16/2018",
      due_date: "6/8/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: true,
      priority: true,
      starred: true,
      tag: "frontend"
   },
   {
      id: 5,
      full_name: "Raff Crimes",
      image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      task: "Customer-focused logistical interface",
      start_date: "5/16/2018",
      due_date: "1/10/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: false,
      starred: true,
      tag: "backend"
   },
   {
      id: 6,
      full_name: "Perle Handke",
      image: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      task: "Integrated zero tolerance attitude",
      start_date: "11/20/2018",
      due_date: "6/28/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: true,
      starred: false,
      tag: "uiux"
   },
   {
      id: 7,
      full_name: "Aubrette Pardi",
      image: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      task: "Extended asymmetric forecast",
      start_date: "1/21/2018",
      due_date: "4/26/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: true,
      starred: false,
      tag: "frontend"
   },
   {
      id: 8,
      full_name: "Sascha Drinkale",
      image: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      task: "Digitized analyzing instruction set",
      start_date: "8/25/2018",
      due_date: "2/26/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: true,
      priority: false,
      starred: false,
      tag: "backend"
   },
   {
      id: 9,
      full_name: "Sammy Testin",
      image: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
      task: "Public-key dedicated collaboration",
      start_date: "1/26/2018",
      due_date: "8/13/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: false,
      starred: false,
      tag: "uiux"
   },
   {
      id: 10,
      full_name: "Flinn Baumann",
      image: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
      task: "Proactive bi-directional application",
      start_date: "6/13/2018",
      due_date: "8/14/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 11,
      full_name: "Faustina Lightbourne",
      image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      task: "Optimized intermediate function",
      start_date: "7/9/2018",
      due_date: "5/23/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: false,
      starred: true,
      tag: "backend"
   },
   {
      id: 12,
      full_name: "Janetta McLaughlan",
      image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      task: "Intuitive context-sensitive extranet",
      start_date: "10/5/2018",
      due_date: "3/14/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: true,
      starred: true,
      tag: "uiux"
   },
   {
      id: 13,
      full_name: "Eamon Coutts",
      image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
      task: "Proactive 6th generation definition",
      start_date: "11/14/2018",
      due_date: "12/23/2017",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 14,
      full_name: "Isac Ackenhead",
      image: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
      task: "Fundamental responsive analyzer",
      start_date: "7/20/2018",
      due_date: "2/9/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: true,
      priority: false,
      starred: false,
      tag: "backend"
   },
   {
      id: 15,
      full_name: "Seline Dundridge",
      image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      task: "Advanced empowering capability",
      start_date: "10/13/2018",
      due_date: "1/13/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: true,
      starred: false,
      tag: "uiux"
   },
   {
      id: 16,
      full_name: "Morrie Anneslie",
      image: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      task: "Proactive motivating emulation",
      start_date: "1/19/2018",
      due_date: "3/16/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: true,
      tag: "frontend"
   },
   {
      id: 17,
      full_name: "Nichole Tansly",
      image: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      task: "Integrated homogeneous monitoring",
      start_date: "10/17/2018",
      due_date: "11/9/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: false,
      starred: true,
      tag: "backend"
   },
   {
      id: 18,
      full_name: "Wilek Fancutt",
      image: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      task: "Automated human-resource Graphic Interface",
      start_date: "3/4/2018",
      due_date: "11/1/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: true,
      tag: "uiux"
   },
   {
      id: 19,
      full_name: "Franky Curedell",
      image: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
      task: "Grass-roots homogeneous frame",
      start_date: "8/26/2018",
      due_date: "12/3/2017",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: true,
      starred: false,
      tag: "frontend"
   },
   {
      id: 20,
      full_name: "Vally Campo",
      image: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
      task: "Object-based object-oriented capability",
      start_date: "9/10/2018",
      due_date: "1/26/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: true,
      starred: true,
      tag: "backend"
   },
   {
      id: 21,
      full_name: "Gayler Richold",
      image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      task: "Future-proofed disintermediate encryption",
      start_date: "3/16/2018",
      due_date: "12/7/2017",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: true,
      starred: true,
      tag: "uiux"
   },
   {
      id: 22,
      full_name: "Dulcy Halpeine",
      image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      task: "Sharable content-based toolset",
      start_date: "6/15/2018",
      due_date: "1/21/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 23,
      full_name: "Reinaldos Fannon",
      image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
      task: "Persevering dynamic pricing structure",
      start_date: "3/23/2018",
      due_date: "11/16/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: false,
      starred: true,
      tag: "backend"
   },
   {
      id: 24,
      full_name: "Zsa zsa Strelitz",
      image: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
      task: "Extended uniform forecast",
      start_date: "3/8/2018",
      due_date: "3/17/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: true,
      priority: false,
      starred: true,
      tag: "uiux"
   },
   {
      id: 25,
      full_name: "Felicia Gorbell",
      image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      task: "Upgradable asynchronous flexibility",
      start_date: "3/7/2018",
      due_date: "5/24/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: true,
      starred: false,
      tag: "frontend"
   },
   {
      id: 26,
      full_name: "Deena Iiannoni",
      image: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      task: "Right-sized scalable adapter",
      start_date: "1/17/2018",
      due_date: "9/12/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: false,
      tag: "backend"
   },
   {
      id: 27,
      full_name: "Eirena Fitzroy",
      image: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      task: "Intuitive holistic synergy",
      start_date: "1/12/2018",
      due_date: "4/8/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: true,
      starred: true,
      tag: "uiux"
   },
   {
      id: 28,
      full_name: "Remy Amphlett",
      image: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      task: "Function-based bandwidth-monitored open architecture",
      start_date: "7/27/2018",
      due_date: "1/21/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: true,
      priority: true,
      starred: false,
      tag: "frontend"
   },
   {
      id: 29,
      full_name: "Olivette Bertelsen",
      image: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
      task: "Robust exuding policy",
      start_date: "9/4/2018",
      due_date: "12/21/2017",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: true,
      starred: true,
      tag: "backend"
   },
   {
      id: 30,
      full_name: "Carleen Birchwood",
      image: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
      task: "Multi-lateral exuding complexity",
      start_date: "6/16/2018",
      due_date: "4/19/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: true,
      tag: "uiux"
   },
   {
      id: 31,
      full_name: "Mathew Ambage",
      image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      task: "Operative fault-tolerant archive",
      start_date: "9/4/2018",
      due_date: "2/25/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 32,
      full_name: "Orelle Reddihough",
      image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      task: "Ergonomic regional synergy",
      start_date: "4/18/2018",
      due_date: "3/13/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: true,
      starred: false,
      tag: "backend"
   },
   {
      id: 33,
      full_name: "Lanae Marieton",
      image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
      task: "Managed encompassing approach",
      start_date: "12/17/2017",
      due_date: "11/3/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: true,
      priority: false,
      starred: false,
      tag: "uiux"
   },
   {
      id: 34,
      full_name: "Renault Devenny",
      image: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
      task: "Profit-focused coherent local area network",
      start_date: "11/19/2018",
      due_date: "8/16/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 35,
      full_name: "Petronille Awcock",
      image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      task: "Sharable analyzing moderator",
      start_date: "8/26/2018",
      due_date: "3/6/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: true,
      starred: true,
      tag: "backend"
   },
   {
      id: 36,
      full_name: "Siegfried De Stoop",
      image: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      task: "Optional foreground data-warehouse",
      start_date: "4/26/2018",
      due_date: "11/30/2017",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: false,
      tag: "uiux"
   },
   {
      id: 37,
      full_name: "Jayne Bower",
      image: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      task: "Stand-alone heuristic moratorium",
      start_date: "6/13/2018",
      due_date: "1/29/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: false,
      starred: false,
      tag: "frontend"
   },
   {
      id: 38,
      full_name: "Liliane Flasby",
      image: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      task: "Distributed needs-based matrices",
      start_date: "5/18/2018",
      due_date: "1/24/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: false,
      priority: false,
      starred: true,
      tag: "backend"
   },
   {
      id: 39,
      full_name: "Deva Bordes",
      image: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
      task: "Open-architected optimal challenge",
      start_date: "5/31/2018",
      due_date: "8/6/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project B",
      completed: false,
      priority: true,
      starred: false,
      tag: "uiux"
   },
   {
      id: 40,
      full_name: "Ezmeralda Presley",
      image: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
      task: "Versatile scalable matrix",
      start_date: "10/9/2018",
      due_date: "7/23/2018",
      comments: "Most developer friendly and highly customizable react - redux & bs4 admin dashboard template.",
      project: "Project A",
      completed: true,
      priority: true,
      starred: true,
      tag: "frontend"
   }
];

export default todoData;
