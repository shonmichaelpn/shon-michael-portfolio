export const projects = [
{
  id:"mentor-ai", no:"01", title:"Mentor AI",
  blurb:"An interactive programming learning platform that combines structured lessons, coding challenges, deterministic validation and AI-generated mentoring feedback.",
  tech:["Next.js","TypeScript","React","Tailwind CSS","MongoDB","Mongoose","Gemini API","Vitest"],
  github:"https://github.com/shonmichaelpn/Mentor-ai",
  demo:"https://mentor-ai-rosy-eta.vercel.app/",
  image:"./MentorAI/Mentor_welcome.png",
  gallery:[
    "./MentorAI/Mentor_welcome.png",
    "./MentorAI/Mentor_register.png",
    "./MentorAI/Mentor_verifymail.png",
    "./MentorAI/Mentor_login.png",
    "./MentorAI/Mentor_home.png",
    "./MentorAI/Mentor_learn.png"
  ],
  problem:{t:"Learning to code needs more than a page of documentation.",
    d:"Learners need a path that explains concepts, checks understanding, gives them a place to practice and responds when their code fails. Without that structure, it is easy to get stuck between passive tutorials and feedback that is too vague to act on."},
  solution:{t:"A guided learning loop with feedback you can trust.",
    d:"Mentor AI combines JavaScript and Python lessons with timed knowledge checks, browser-based JavaScript execution and coding challenges. Deterministic validation checks correctness first, then Gemini explains errors and offers mentoring feedback. Progress is saved against the learner's account."},
  workflow:["Learner chooses a JavaScript or Python path","Lesson introduces a concept with examples","Knowledge check confirms understanding","Learner solves a coding challenge","Validator checks the result deterministically","AI explains mistakes and suggests the next step"],
  roles:[
    {t:"Learner",d:"Work through lessons, take timed tests, run JavaScript in the browser and submit coding challenges for feedback."},
    {t:"Mentor AI",d:"Explain errors and provide targeted guidance based on validated code behavior."},
    {t:"Platform",d:"Secure accounts with JWT and email OTP verification, persist course progress in MongoDB, and safely handle code execution timeouts."}
  ],
  contribution:["Next.js App Router application architecture","JavaScript and Python course content","Browser-based JavaScript runner with timeout handling","Deterministic challenge validation before AI evaluation","Gemini-powered feedback and error explanations","JWT authentication and email OTP registration flow","MongoDB and Mongoose progress persistence","Unit and API tests with Vitest"]
},
{
  id:"cityreport", no:"02", title:"CityReport",
  blurb:"A smart-city infrastructure reporting system. Citizens report public problems; authorities work through them on role-based dashboards instead of a shared inbox.",
  tech:["React","Node.js","Express","MongoDB","JWT","Git","GitHub","Postman"],
  github:"https://github.com/shonmichaelpn/CityReport-Infrastructure_Reporting_System",
  demo:null,
  image:"./CityReport/Cityreport-welcome-preview.png",
  gallery:[
    "./CityReport/Cityreport-welcome-preview.png",
    "./CityReport/Cityreport-login-preview.png",
    "./CityReport/Cityreport-user-dashboard-preview.png",
    "./CityReport/Cityreport-reporting-form-preview.png",
    "./CityReport/Cityreport-authority-dashboard-preview.png",
    "./CityReport/Cityreport-authority-map(loc)-view-preview.png",
    "./CityReport/Cityreport-admin-dashboard-preview.png"
  ],
  problem:{t:"Reporting a problem is easy. Managing ten thousand of them isn't.",
    d:"Citizens have no simple channel for infrastructure complaints, and the office receiving them has no structure for sorting, assigning or tracking what arrives. Reports get duplicated, lost, or answered twice. CityReport closes that gap by putting reporting and complaint management in the same system."},
  solution:{t:"One record, three views, a status that always means something.",
    d:"A complaint is created once and then read differently by each role. Citizens submit and track. Authorities see only what's assigned to them and move it forward. Admins oversee the whole queue. Access control is enforced on the server, not hidden in the UI."},
  workflow:["Citizen submits an infrastructure complaint","Complaint is stored and categorised","Admin reviews and routes it","Authority handles the reported issue","Status is updated at every step","Citizen tracks it through to resolution"],
  roles:[
    {t:"Citizen",d:"Report infrastructure issues, add details and location, and follow the progress of everything they've submitted."},
    {t:"Authority",d:"See assigned complaints only, update status as work progresses, and close issues once resolved."},
    {t:"Admin",d:"Manage users and complaints, route incoming reports and keep the overall workflow healthy."}
  ],
  contribution:["Full-stack development, end to end","React frontend with role-specific dashboards","Node and Express REST API","MongoDB schema design and integration","JWT authentication with role-based route guards","Testing and debugging across all three roles"]
},
{
  id:"bridgeaid", no:"03", title:"BridgeAid",
  blurb:"A donation platform that matches what donors actually have with what verified organisations actually need — instead of hoping the two overlap.",
  tech:["Node.js","Express","MongoDB","Git","GitHub"],
  github:"https://github.com/shonmichaelpn/BridgeAid",
  demo:null,
  image:"./BridgeAid/Bridgeaid-Welcome-preview.png",
  gallery:[
    "./BridgeAid/Bridgeaid-Welcome-preview.png",
    "./BridgeAid/Bridgeaid-User-home-preview.png",
    "./BridgeAid/Bridgeaid-Organization-items-avail-preview.png",
    "./BridgeAid/Bridgeaid-Admin-user-management-preview.png"
  ],
  problem:{t:"Generosity isn't the bottleneck. Matching is.",
    d:"Donation drives routinely produce the wrong things in the wrong quantities, while the organisations receiving them have no structured way to say what they're short of this week. The result is warehouses of unusable goods next to unmet needs."},
  solution:{t:"A published need, a pledged item, a confirmed delivery.",
    d:"Verified organisations post specific requirements. Donors browse open needs and pledge against them. The organisation reviews the pledge, accepts it, and marks it delivered — so every donation has a state, and nothing sits in ambiguity."},
  workflow:["Organisation posts a specific request","Admin verifies the organisation","Donor finds a matching need","Donor pledges an item","Organisation reviews and accepts","Donation is marked as delivered"],
  roles:[
    {t:"Donor",d:"Browse verified requests, pledge items they can actually supply, and keep a record of past donations."},
    {t:"Organisation",d:"Register for verification, publish precise needs, review incoming pledges and confirm deliveries."},
    {t:"Admin",d:"Verify organisations, monitor activity and keep the platform free of bad actors."}
  ],
  contribution:["Backend development with Node and Express","Frontend implementation","MongoDB data modelling for pledges and requests","Testing across donor, organisation and admin flows","Project documentation"]
},
];