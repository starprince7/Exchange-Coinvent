(this.webpackJsonptradix=this.webpackJsonptradix||[]).push([[19],{312:function(e,a,n){"use strict";n.r(a);var i=n(1),l=n(2),o=n(11),t=n(54),c=n(14),r=n(71),s=n(0);a.default=Object(o.b)(null,(function(e,a){return{registerUser:function(a){return e(Object(t.a)(a))}}}))((function(e){var a=e.registerUser;return Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("num_of_refresh"));localStorage.setItem("num_of_refresh",JSON.stringify((e>=2?-1:e)+1)),setTimeout((function(){e<=1&&window.location.reload()}),500)}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"authincation",style:{height:"auto"},children:Object(s.jsx)("div",{className:"container h-100",children:Object(s.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:Object(s.jsxs)("div",{className:"col-xl-10 col-md-10",children:[Object(s.jsx)("div",{className:"mini-logo text-center mb-5",children:Object(s.jsx)(l.b,{to:"./",children:Object(s.jsx)("img",{src:r.a,alt:"Logo"})})}),Object(s.jsxs)("div",{className:"auth-form card",children:[Object(s.jsx)("div",{className:"card-header justify-content-center",children:Object(s.jsx)("h4",{className:"card-title",children:"Create an Account"})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,i=document.querySelector(".signup_validate"),l=i.name.value,o=i.lastname.value,t=i.username.value,c=i.email.value,r=i.password.value,s=i.confirm_password.value,j=i.country.value,d=window.location.search.split("?ref=");try{n=d[1]}catch(e){alert("Err thrown in getting referral ID")}var u={name:l,lastname:o,username:t,email:c,password:r,confirmPassword:s,country:j,referral_ID:n||null};console.log(u),a(u)},name:"myform",className:"signup_validate",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Name"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",required:!0})]})}),Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Last Name"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",name:"lastname",required:!0})]})}),Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"username",name:"username",required:!0})]})}),Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{type:"email",className:"form-control",placeholder:"hello@example.com",name:"email",required:!0})]})}),Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",required:!0})]})}),Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Confirm Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password",name:"confirm_password",required:!0})]})}),Object(s.jsx)("div",{className:"col-xl-6 col-md-6",children:Object(s.jsxs)("div",{className:"form-group col-xl-6",children:[Object(s.jsx)("label",{className:"mr-sm-2",children:"Country"}),Object(s.jsxs)("select",{required:!0,className:"form-control",name:"country",children:[Object(s.jsx)("option",{value:"",children:"Select"}),Object(s.jsx)("option",{value:"Afghanistan",children:"Afghanistan"}),Object(s.jsx)("option",{value:"\xc5land Islands",children:"\xc5land Islands"}),Object(s.jsx)("option",{value:"Albania",children:"Albania"}),Object(s.jsx)("option",{value:"Algeria",children:"Algeria"}),Object(s.jsx)("option",{value:"American Samoa",children:"American Samoa"}),Object(s.jsx)("option",{value:"Andorra",children:"Andorra"}),Object(s.jsx)("option",{value:"Angola",children:"Angola"}),Object(s.jsx)("option",{value:"Anguilla",children:"Anguilla"}),Object(s.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(s.jsx)("option",{value:"Antigua and Barbuda",children:"Antigua and Barbuda"}),Object(s.jsx)("option",{value:"Argentina",children:"Argentina"}),Object(s.jsx)("option",{value:"Armenia",children:"Armenia"}),Object(s.jsx)("option",{value:"Aruba",children:"Aruba"}),Object(s.jsx)("option",{value:"Australia",children:"Australia"}),Object(s.jsx)("option",{value:"Austria",children:"Austria"}),Object(s.jsx)("option",{value:"Azerbaijan",children:"Azerbaijan"}),Object(s.jsx)("option",{value:"Bahamas",children:"Bahamas"}),Object(s.jsx)("option",{value:"Bahrain",children:"Bahrain"}),Object(s.jsx)("option",{value:"Bangladesh",children:"Bangladesh"}),Object(s.jsx)("option",{value:"Barbados",children:"Barbados"}),Object(s.jsx)("option",{value:"Belarus",children:"Belarus"}),Object(s.jsx)("option",{value:"Belgium",children:"Belgium"}),Object(s.jsx)("option",{value:"Belize",children:"Belize"}),Object(s.jsx)("option",{value:"Benin",children:"Benin"}),Object(s.jsx)("option",{value:"Bermuda",children:"Bermuda"}),Object(s.jsx)("option",{value:"Bhutan",children:"Bhutan"}),Object(s.jsx)("option",{value:"Bolivia",children:"Bolivia"}),Object(s.jsx)("option",{value:"Bosnia and Herzegovina",children:"Bosnia and Herzegovina"}),Object(s.jsx)("option",{value:"Botswana",children:"Botswana"}),Object(s.jsx)("option",{value:"Bouvet Island",children:"Bouvet Island"}),Object(s.jsx)("option",{value:"Brazil",children:"Brazil"}),Object(s.jsx)("option",{value:"British Indian Ocean Territory",children:"British Indian Ocean Territory"}),Object(s.jsx)("option",{value:"Brunei Darussalam",children:"Brunei Darussalam"}),Object(s.jsx)("option",{value:"Bulgaria",children:"Bulgaria"}),Object(s.jsx)("option",{value:"Burkina Faso",children:"Burkina Faso"}),Object(s.jsx)("option",{value:"Burundi",children:"Burundi"}),Object(s.jsx)("option",{value:"Cambodia",children:"Cambodia"}),Object(s.jsx)("option",{value:"Cameroon",children:"Cameroon"}),Object(s.jsx)("option",{value:"Canada",children:"Canada"}),Object(s.jsx)("option",{value:"Cape Verde",children:"Cape Verde"}),Object(s.jsx)("option",{value:"Cayman Islands",children:"Cayman Islands"}),Object(s.jsx)("option",{value:"Central African Republic",children:"Central African Republic"}),Object(s.jsx)("option",{value:"Chad",children:"Chad"}),Object(s.jsx)("option",{value:"Chile",children:"Chile"}),Object(s.jsx)("option",{value:"China",children:"China"}),Object(s.jsx)("option",{value:"Christmas Island",children:"Christmas Island"}),Object(s.jsx)("option",{value:"Cocos (Keeling) Islands",children:"Cocos (Keeling) Islands"}),Object(s.jsx)("option",{value:"Colombia",children:"Colombia"}),Object(s.jsx)("option",{value:"Comoros",children:"Comoros"}),Object(s.jsx)("option",{value:"Congo",children:"Congo"}),Object(s.jsx)("option",{value:"Congo, The Democratic Republic of The",children:"Congo, The Democratic Republic of The"}),Object(s.jsx)("option",{value:"Cook Islands",children:"Cook Islands"}),Object(s.jsx)("option",{value:"Costa Rica",children:"Costa Rica"}),Object(s.jsx)("option",{value:"Cote D'ivoire",children:"Cote D'ivoire"}),Object(s.jsx)("option",{value:"Croatia",children:"Croatia"}),Object(s.jsx)("option",{value:"Cuba",children:"Cuba"}),Object(s.jsx)("option",{value:"Cyprus",children:"Cyprus"}),Object(s.jsx)("option",{value:"Czech Republic",children:"Czech Republic"}),Object(s.jsx)("option",{value:"Denmark",children:"Denmark"}),Object(s.jsx)("option",{value:"Djibouti",children:"Djibouti"}),Object(s.jsx)("option",{value:"Dominica",children:"Dominica"}),Object(s.jsx)("option",{value:"Dominican Republic",children:"Dominican Republic"}),Object(s.jsx)("option",{value:"Ecuador",children:"Ecuador"}),Object(s.jsx)("option",{value:"Egypt",children:"Egypt"}),Object(s.jsx)("option",{value:"El Salvador",children:"El Salvador"}),Object(s.jsx)("option",{value:"Equatorial Guinea",children:"Equatorial Guinea"}),Object(s.jsx)("option",{value:"Eritrea",children:"Eritrea"}),Object(s.jsx)("option",{value:"Estonia",children:"Estonia"}),Object(s.jsx)("option",{value:"Ethiopia",children:"Ethiopia"}),Object(s.jsx)("option",{value:"Falkland Islands (Malvinas)",children:"Falkland Islands (Malvinas)"}),Object(s.jsx)("option",{value:"Faroe Islands",children:"Faroe Islands"}),Object(s.jsx)("option",{value:"Fiji",children:"Fiji"}),Object(s.jsx)("option",{value:"Finland",children:"Finland"}),Object(s.jsx)("option",{value:"France",children:"France"}),Object(s.jsx)("option",{value:"French Guiana",children:"French Guiana"}),Object(s.jsx)("option",{value:"French Polynesia",children:"French Polynesia"}),Object(s.jsx)("option",{value:"French Southern Territories",children:"French Southern Territories"}),Object(s.jsx)("option",{value:"Gabon",children:"Gabon"}),Object(s.jsx)("option",{value:"Gambia",children:"Gambia"}),Object(s.jsx)("option",{value:"Georgia",children:"Georgia"}),Object(s.jsx)("option",{value:"Germany",children:"Germany"}),Object(s.jsx)("option",{value:"Ghana",children:"Ghana"}),Object(s.jsx)("option",{value:"Gibraltar",children:"Gibraltar"}),Object(s.jsx)("option",{value:"Greece",children:"Greece"}),Object(s.jsx)("option",{value:"Greenland",children:"Greenland"}),Object(s.jsx)("option",{value:"Grenada",children:"Grenada"}),Object(s.jsx)("option",{value:"Guadeloupe",children:"Guadeloupe"}),Object(s.jsx)("option",{value:"Guam",children:"Guam"}),Object(s.jsx)("option",{value:"Guatemala",children:"Guatemala"}),Object(s.jsx)("option",{value:"Guernsey",children:"Guernsey"}),Object(s.jsx)("option",{value:"Guinea",children:"Guinea"}),Object(s.jsx)("option",{value:"Guinea-bissau",children:"Guinea-bissau"}),Object(s.jsx)("option",{value:"Guyana",children:"Guyana"}),Object(s.jsx)("option",{value:"Haiti",children:"Haiti"}),Object(s.jsx)("option",{value:"Heard Island and Mcdonald Islands",children:"Heard Island and Mcdonald Islands"}),Object(s.jsx)("option",{value:"Holy See (Vatican City State)",children:"Holy See (Vatican City State)"}),Object(s.jsx)("option",{value:"Honduras",children:"Honduras"}),Object(s.jsx)("option",{value:"Hong Kong",children:"Hong Kong"}),Object(s.jsx)("option",{value:"Hungary",children:"Hungary"}),Object(s.jsx)("option",{value:"Iceland",children:"Iceland"}),Object(s.jsx)("option",{value:"India",children:"India"}),Object(s.jsx)("option",{value:"Indonesia",children:"Indonesia"}),Object(s.jsx)("option",{value:"Iran, Islamic Republic of",children:"Iran, Islamic Republic of"}),Object(s.jsx)("option",{value:"Iraq",children:"Iraq"}),Object(s.jsx)("option",{value:"Ireland",children:"Ireland"}),Object(s.jsx)("option",{value:"Isle of Man",children:"Isle of Man"}),Object(s.jsx)("option",{value:"Israel",children:"Israel"}),Object(s.jsx)("option",{value:"Italy",children:"Italy"}),Object(s.jsx)("option",{value:"Jamaica",children:"Jamaica"}),Object(s.jsx)("option",{value:"Japan",children:"Japan"}),Object(s.jsx)("option",{value:"Jersey",children:"Jersey"}),Object(s.jsx)("option",{value:"Jordan",children:"Jordan"}),Object(s.jsx)("option",{value:"Kazakhstan",children:"Kazakhstan"}),Object(s.jsx)("option",{value:"Kenya",children:"Kenya"}),Object(s.jsx)("option",{value:"Kiribati",children:"Kiribati"}),Object(s.jsx)("option",{value:"Korea, Democratic People's Republic of",children:"Korea, Democratic People's Republic of"}),Object(s.jsx)("option",{value:"Korea, Republic of",children:"Korea, Republic of"}),Object(s.jsx)("option",{value:"Kuwait",children:"Kuwait"}),Object(s.jsx)("option",{value:"Kyrgyzstan",children:"Kyrgyzstan"}),Object(s.jsx)("option",{value:"Lao People's Democratic Republic",children:"Lao People's Democratic Republic"}),Object(s.jsx)("option",{value:"Latvia",children:"Latvia"}),Object(s.jsx)("option",{value:"Lebanon",children:"Lebanon"}),Object(s.jsx)("option",{value:"Lesotho",children:"Lesotho"}),Object(s.jsx)("option",{value:"Liberia",children:"Liberia"}),Object(s.jsx)("option",{value:"Libyan Arab Jamahiriya",children:"Libyan Arab Jamahiriya"}),Object(s.jsx)("option",{value:"Liechtenstein",children:"Liechtenstein"}),Object(s.jsx)("option",{value:"Lithuania",children:"Lithuania"}),Object(s.jsx)("option",{value:"Luxembourg",children:"Luxembourg"}),Object(s.jsx)("option",{value:"Macao",children:"Macao"}),Object(s.jsx)("option",{value:"Macedonia, The Former Yugoslav Republic of",children:"Macedonia, The Former Yugoslav Republic of"}),Object(s.jsx)("option",{value:"Madagascar",children:"Madagascar"}),Object(s.jsx)("option",{value:"Malawi",children:"Malawi"}),Object(s.jsx)("option",{value:"Malaysia",children:"Malaysia"}),Object(s.jsx)("option",{value:"Maldives",children:"Maldives"}),Object(s.jsx)("option",{value:"Mali",children:"Mali"}),Object(s.jsx)("option",{value:"Malta",children:"Malta"}),Object(s.jsx)("option",{value:"Marshall Islands",children:"Marshall Islands"}),Object(s.jsx)("option",{value:"Martinique",children:"Martinique"}),Object(s.jsx)("option",{value:"Mauritania",children:"Mauritania"}),Object(s.jsx)("option",{value:"Mauritius",children:"Mauritius"}),Object(s.jsx)("option",{value:"Mayotte",children:"Mayotte"}),Object(s.jsx)("option",{value:"Mexico",children:"Mexico"}),Object(s.jsx)("option",{value:"Micronesia, Federated States of",children:"Micronesia, Federated States of"}),Object(s.jsx)("option",{value:"Moldova, Republic of",children:"Moldova, Republic of"}),Object(s.jsx)("option",{value:"Monaco",children:"Monaco"}),Object(s.jsx)("option",{value:"Mongolia",children:"Mongolia"}),Object(s.jsx)("option",{value:"Montenegro",children:"Montenegro"}),Object(s.jsx)("option",{value:"Montserrat",children:"Montserrat"}),Object(s.jsx)("option",{value:"Morocco",children:"Morocco"}),Object(s.jsx)("option",{value:"Mozambique",children:"Mozambique"}),Object(s.jsx)("option",{value:"Myanmar",children:"Myanmar"}),Object(s.jsx)("option",{value:"Namibia",children:"Namibia"}),Object(s.jsx)("option",{value:"Nauru",children:"Nauru"}),Object(s.jsx)("option",{value:"Nepal",children:"Nepal"}),Object(s.jsx)("option",{value:"Netherlands",children:"Netherlands"}),Object(s.jsx)("option",{value:"Netherlands Antilles",children:"Netherlands Antilles"}),Object(s.jsx)("option",{value:"New Caledonia",children:"New Caledonia"}),Object(s.jsx)("option",{value:"New Zealand",children:"New Zealand"}),Object(s.jsx)("option",{value:"Nicaragua",children:"Nicaragua"}),Object(s.jsx)("option",{value:"Niger",children:"Niger"}),Object(s.jsx)("option",{value:"Nigeria",children:"Nigeria"}),Object(s.jsx)("option",{value:"Niue",children:"Niue"}),Object(s.jsx)("option",{value:"Norfolk Island",children:"Norfolk Island"}),Object(s.jsx)("option",{value:"Northern Mariana Islands",children:"Northern Mariana Islands"}),Object(s.jsx)("option",{value:"Norway",children:"Norway"}),Object(s.jsx)("option",{value:"Oman",children:"Oman"}),Object(s.jsx)("option",{value:"Pakistan",children:"Pakistan"}),Object(s.jsx)("option",{value:"Palau",children:"Palau"}),Object(s.jsx)("option",{value:"Palestinian Territory, Occupied",children:"Palestinian Territory, Occupied"}),Object(s.jsx)("option",{value:"Panama",children:"Panama"}),Object(s.jsx)("option",{value:"Papua New Guinea",children:"Papua New Guinea"}),Object(s.jsx)("option",{value:"Paraguay",children:"Paraguay"}),Object(s.jsx)("option",{value:"Peru",children:"Peru"}),Object(s.jsx)("option",{value:"Philippines",children:"Philippines"}),Object(s.jsx)("option",{value:"Pitcairn",children:"Pitcairn"}),Object(s.jsx)("option",{value:"Poland",children:"Poland"}),Object(s.jsx)("option",{value:"Portugal",children:"Portugal"}),Object(s.jsx)("option",{value:"Puerto Rico",children:"Puerto Rico"}),Object(s.jsx)("option",{value:"Qatar",children:"Qatar"}),Object(s.jsx)("option",{value:"Reunion",children:"Reunion"}),Object(s.jsx)("option",{value:"Romania",children:"Romania"}),Object(s.jsx)("option",{value:"Russian Federation",children:"Russian Federation"}),Object(s.jsx)("option",{value:"Rwanda",children:"Rwanda"}),Object(s.jsx)("option",{value:"Saint Helena",children:"Saint Helena"}),Object(s.jsx)("option",{value:"Saint Kitts and Nevis",children:"Saint Kitts and Nevis"}),Object(s.jsx)("option",{value:"Saint Lucia",children:"Saint Lucia"}),Object(s.jsx)("option",{value:"Saint Pierre and Miquelon",children:"Saint Pierre and Miquelon"}),Object(s.jsx)("option",{value:"Saint Vincent and The Grenadines",children:"Saint Vincent and The Grenadines"}),Object(s.jsx)("option",{value:"Samoa",children:"Samoa"}),Object(s.jsx)("option",{value:"San Marino",children:"San Marino"}),Object(s.jsx)("option",{value:"Sao Tome and Principe",children:"Sao Tome and Principe"}),Object(s.jsx)("option",{value:"Saudi Arabia",children:"Saudi Arabia"}),Object(s.jsx)("option",{value:"Senegal",children:"Senegal"}),Object(s.jsx)("option",{value:"Serbia",children:"Serbia"}),Object(s.jsx)("option",{value:"Seychelles",children:"Seychelles"}),Object(s.jsx)("option",{value:"Sierra Leone",children:"Sierra Leone"}),Object(s.jsx)("option",{value:"Singapore",children:"Singapore"}),Object(s.jsx)("option",{value:"Slovakia",children:"Slovakia"}),Object(s.jsx)("option",{value:"Slovenia",children:"Slovenia"}),Object(s.jsx)("option",{value:"Solomon Islands",children:"Solomon Islands"}),Object(s.jsx)("option",{value:"Somalia",children:"Somalia"}),Object(s.jsx)("option",{value:"South Africa",children:"South Africa"}),Object(s.jsx)("option",{value:"South Georgia and The South Sandwich Islands",children:"South Georgia and The South Sandwich Islands"}),Object(s.jsx)("option",{value:"Spain",children:"Spain"}),Object(s.jsx)("option",{value:"Sri Lanka",children:"Sri Lanka"}),Object(s.jsx)("option",{value:"Sudan",children:"Sudan"}),Object(s.jsx)("option",{value:"Suriname",children:"Suriname"}),Object(s.jsx)("option",{value:"Svalbard and Jan Mayen",children:"Svalbard and Jan Mayen"}),Object(s.jsx)("option",{value:"Swaziland",children:"Swaziland"}),Object(s.jsx)("option",{value:"Sweden",children:"Sweden"}),Object(s.jsx)("option",{value:"Switzerland",children:"Switzerland"}),Object(s.jsx)("option",{value:"Syrian Arab Republic",children:"Syrian Arab Republic"}),Object(s.jsx)("option",{value:"Taiwan, Province of China",children:"Taiwan, Province of China"}),Object(s.jsx)("option",{value:"Tajikistan",children:"Tajikistan"}),Object(s.jsx)("option",{value:"Tanzania, United Republic of",children:"Tanzania, United Republic of"}),Object(s.jsx)("option",{value:"Thailand",children:"Thailand"}),Object(s.jsx)("option",{value:"Timor-leste",children:"Timor-leste"}),Object(s.jsx)("option",{value:"Togo",children:"Togo"}),Object(s.jsx)("option",{value:"Tokelau",children:"Tokelau"}),Object(s.jsx)("option",{value:"Tonga",children:"Tonga"}),Object(s.jsx)("option",{value:"Trinidad and Tobago",children:"Trinidad and Tobago"}),Object(s.jsx)("option",{value:"Tunisia",children:"Tunisia"}),Object(s.jsx)("option",{value:"Turkey",children:"Turkey"}),Object(s.jsx)("option",{value:"Turkmenistan",children:"Turkmenistan"}),Object(s.jsx)("option",{value:"Turks and Caicos Islands",children:"Turks and Caicos Islands"}),Object(s.jsx)("option",{value:"Tuvalu",children:"Tuvalu"}),Object(s.jsx)("option",{value:"Uganda",children:"Uganda"}),Object(s.jsx)("option",{value:"Ukraine",children:"Ukraine"}),Object(s.jsx)("option",{value:"United Arab Emirates",children:"United Arab Emirates"}),Object(s.jsx)("option",{value:"United Kingdom",children:"United Kingdom"}),Object(s.jsx)("option",{value:"United States",children:"United States"}),Object(s.jsx)("option",{value:"United States Minor Outlying Islands",children:"United States Minor Outlying Islands"}),Object(s.jsx)("option",{value:"Uruguay",children:"Uruguay"}),Object(s.jsx)("option",{value:"Uzbekistan",children:"Uzbekistan"}),Object(s.jsx)("option",{value:"Vanuatu",children:"Vanuatu"}),Object(s.jsx)("option",{value:"Venezuela",children:"Venezuela"}),Object(s.jsx)("option",{value:"Viet Nam",children:"Viet Nam"}),Object(s.jsx)("option",{value:"Virgin Islands, British",children:"Virgin Islands, British"}),Object(s.jsx)("option",{value:"Virgin Islands, U.S.",children:"Virgin Islands, U.S."}),Object(s.jsx)("option",{value:"Wallis and Futuna",children:"Wallis and Futuna"}),Object(s.jsx)("option",{value:"Western Sahara",children:"Western Sahara"}),Object(s.jsx)("option",{value:"Yemen",children:"Yemen"}),Object(s.jsx)("option",{value:"Zambia",children:"Zambia"}),Object(s.jsx)("option",{value:"Zimbabwe",children:"Zimbabwe"})]})]})})]}),Object(s.jsx)("div",{className:"text-center mt-4",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-success btn-block",children:"Sign up"})})]}),Object(s.jsx)("div",{className:"new-account mt-3",children:Object(s.jsxs)("p",{children:["Already have an account? ",Object(s.jsx)(l.b,{className:"text-primary",to:"login",children:"Sign in"})]})})]})]})]})})})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)(c.a,{})]})}))}}]);
//# sourceMappingURL=19.185030db.chunk.js.map