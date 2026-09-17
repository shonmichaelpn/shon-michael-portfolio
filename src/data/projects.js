export const projects = [
{
  id:"cityreport", no:"01", title:"CityReport",
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
  id:"bridgeaid", no:"02", title:"BridgeAid",
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
}];