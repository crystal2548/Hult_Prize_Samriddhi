const yearData = {
    // '2023': {
    //     heroImage: 'https://media.edusanjal.com/__sized__/news_headers/Hult_Prize_Challenge_2023-thumbnail-1000x525-70.jpg',
    //     heroBgColor: '#FFFFFF',
    //     globalTheme: 'Redesigning Fashion',
    //     globalDescription: 'Launch a for-profit social venture to make the clothing and fashion industry more sustainable.',
    //     organizingCommittee: [
    //         {
    //             name: 'Rohan Karanjit',
    //             role: 'Campus Director',
    //             image: 'https://i.postimg.cc/XJ2kZktz/Gemini_Generated_Image_t1on0rt1on0rt1on_(1).png',
    //         },
    //         {
    //             name: 'Rhiya Joshi',
    //             role: 'Deputy Campus Director',
    //             image: 'https://i.postimg.cc/hjC1J1Ns/Gemini_Generated_Image_hfwgbjhfwgbjhfwg_(1).png',
    //         },
    //         {
    //             name: 'Rivu Adhikari',
    //             role: 'Content Writer',
    //             image: 'https://i.postimg.cc/0Qt060hf/Gemini_Generated_Image_3anlp3anlp3anlp3_(1).png',
    //         },
    //         {
    //             name: 'Nirdeshika Chauhan',
    //             role: 'Event Manager',
    //             image: 'https://i.postimg.cc/8cjBLrVy/Gemini_Generated_Image_370lls370lls370l_(1).png',
    //         },
    //         {
    //             name: 'Renu Rokaya',
    //             role: 'Correspondence',
    //             image: 'https://i.postimg.cc/prpYKntG/Gemini_Generated_Image_nw2xmenw2xmenw2x_(1).png',
    //         },
    //         {
    //             name: 'Sagun Sahukhal',
    //             role: 'Graphic Designer',
    //             image: 'https://i.postimg.cc/CL6xxPJ0/Gemini_Generated_Image_ezzxelezzxelezzx_(1).png',
    //         },
    //         {
    //             name: 'Sajan Tamang',
    //             role: 'Video Editor',
    //             image: 'https://i.postimg.cc/Y0hfQmwD/Gemini_Generated_Image_y2ktogy2ktogy2kt_(1).png',
    //         },
    //         {
    //             name: 'Salil Shrestha',
    //             role: 'Sponsor Co-ordinator',
    //             image: 'https://i.postimg.cc/zvVSTR1x/Gemini_Generated_Image_6g5hvt6g5hvt6g5h_(1).png',
    //         },
    //         {
    //             name: 'Shirish Shrestha',
    //             role: 'Technical Head',
    //             image: 'https://i.postimg.cc/C5zHbfV2/Gemini_Generated_Image_zfwsbqzfwsbqzfws_(1).png',
    //         },
    //         {
    //             name: 'Suchak Niraula',
    //             role: 'Volunteering Lead',
    //             image: 'https://i.postimg.cc/LXy3q3Gt/Gemini_Generated_Image_fs28v5fs28v5fs28_(1).png',
    //         },
    //         {
    //             name: 'Sujana Pyakurel',
    //             role: 'Event Manager',
    //             image: 'https://i.postimg.cc/JnT5y5Sc/Gemini_Generated_Image_fysmnyfysmnyfysm_(1).png',
    //         },
    //         {
    //             name: 'Aastha Shrestha',
    //             role: 'Logistics Head',
    //             image: 'https://i.postimg.cc/kGBFWtdf/Gemini_Generated_Image_wcyjqwcyjqwcyjqw_(1).png',
    //         },
    //         {
    //             name: 'Sumita Shrestha',
    //             role: 'Social Media Manager',
    //             image: 'https://i.postimg.cc/wM7cDsd5/Gemini_Generated_Image_ue7ahbue7ahbue7a_(1).png',
    //         },
    //         {
    //             name: 'Lasta Pudasaini',
    //             role: 'Photographer',
    //             image: 'https://i.postimg.cc/gJMHwH1t/Gemini_Generated_Image_pnx3nqpnx3nqpnx3_(1).png',
    //         },
    //         {
    //             name: 'Marmisha Nagarkoti',
    //             role: 'Event Manager',
    //             image: 'https://i.postimg.cc/3RLFyFzb/Gemini_Generated_Image_r4ui2qr4ui2qr4ui_(1).png',
    //         },
    //         {
    //             name: 'Prasen Chaguthi',
    //             role: 'Sponsor Manager',
    //             image: 'https://i.postimg.cc/tCm44SDG/Gemini_Generated_Image_g36vw2g36vw2g36v_(1).png',
    //         },
    //     ],
    //     teams: [

    //     ],
    //     winners: [
    //         {
    //             place: '1ST PLACE',
    //             team: 'Strawhat',
    //             image: '',
    //             description: 'Recognized for the most innovative business model that successfully addressed environmental or social gaps within the fashion value chain'
    //         },
    //         {
    //             place: '2ND PLACE',
    //             team: 'Team 3I',
    //             image: '',
    //             description: 'Awarded for a high-impact solution focused on reducing waste and promoting ethical production standards in the apparel sector.'
    //         },
    //         {
    //             place: '3RD PLACE',
    //             team: 'Team Incognito',
    //             image: '',
    //             description: 'Commended for a creative approach to redesigning consumer behavior or supply chain transparency in fashion.'
    //         },
    //     ],
    //     judges: [
    //         {
    //             name: 'Anil Pokhrel',
    //             role: 'Formal Advisor, Hult Prize IOST',
    //             image: 'https://i.postimg.cc/qvRpfsdj/Gemini_Generated_Image_dgaugodgaugodgau_(1).png'
    //         },
    //         {
    //             name: 'Susan Dangol',
    //             role: 'Community Builder for Nepal 2020/2021, Hult Prize Foundation',
    //             image: 'https://i.postimg.cc/t4T903Hr/Gemini_Generated_Image_fllprdfllprdfllp_(1).png'
    //         },
    //         {
    //             name: 'Manish Chalise',
    //             role: 'Deputy Program Co-ordinator, Coding Olympics Nepal',
    //             image: 'https://i.postimg.cc/htjKFLq0/Gemini_Generated_Image_6jui7c6jui7c6jui_(1).png'
    //         },
    //     ],
    //     sponsors: [
    //         {
    //             name: 'ICT FRAME',
    //             logo: 'https://i.postimg.cc/7L6qSg66/Media_(1).png'
    //         },
    //         {
    //             name: 'Tasty Donuts',
    //             logo: 'https://i.postimg.cc/Gp2bvk2d/Dounuts_(1).png'
    //         },
    //         {
    //             name: 'The Cake Mart',
    //             logo: 'https://i.postimg.cc/g0JG3vJG/Cake_mart_(1).png'
    //         },
    //         {
    //             name: 'Iamthegardener',
    //             logo: 'https://i.postimg.cc/QMtjcptM/Gardener_(1).png'
    //         },
    //         {
    //             name: 'Oppazz Coffee',
    //             logo: 'https://i.postimg.cc/KYzmtnzR/Oppazs_coffee_(1).png'
    //         },
    //         {
    //             name: 'Paudel Enterprises',
    //             logo: 'https://i.postimg.cc/wBv9Dhv6/paudel_(1).png'
    //         }
    //     ],
    // },

    // '2024': {
    //     heroImage: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/480695394_618392527708597_917694294798322702_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zX3XOhsI-9YQ7kNvwHcMZRz&_nc_oc=AdkK0_No6gDJr-F1CFD85p16c7KypsGq-cGzPxiPDleyrdkv4Dsj5VBjG6iMSIWR9Cw&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=eqvW_OqfQ-9oK9rNRe7Juw&oh=00_Afv1M0ZRN7OfP7MKS2vuzVSqQ9pha_dFn5zPEfKTf2MnAw&oe=69925398',
    //     heroBgColor: '#FFFFFF',
    //     globalTheme: 'Unlimited',
    //     globalDescription: 'Pitch any social enterprise idea of your choice, provided it aligns with at least one UN Sustainable Development Goal (SDG).',
    //     organizingCommittee: [
    //         {
    //             name: 'Rishav Upadhaya',
    //             role: 'Campus Director',
    //             image: 'https://i.postimg.cc/XYfWxkBZ/Gemini_Generated_Image_30ufju30ufju30uf.png',
    //         },
    //         {
    //             name: 'Devraj Khatiwada',
    //             role: 'Deputy Campus Director',
    //             image: 'https://i.postimg.cc/8zRGwmfj/Gemini_Generated_Image_ktc08pktc08pktc0.png',
    //         },
    //         {
    //             name: 'Nischal Khadgi',
    //             role: 'Photographer',
    //             image: 'https://i.postimg.cc/13GSMrV8/Gemini_Generated_Image_r3nu7vr3nu7vr3nu.png',
    //         },
    //         {
    //             name: 'Roshini Shrestha',
    //             role: 'Volunteer Head',
    //             image: 'https://i.postimg.cc/BnT3NBPQ/Gemini_Generated_Image_ndexxvndexxvndex.png',
    //         },
    //         {
    //             name: 'Shristi Subedi',
    //             role: 'Content Creator',
    //             image: 'https://i.postimg.cc/W1GVSwqG/Gemini_Generated_Image_zem1x3zem1x3zem1.png',
    //         },
    //         {
    //             name: 'Ronish Ghimire',
    //             role: 'Technical Head',
    //             image: 'https://i.postimg.cc/9Qd21YwT/Gemini_Generated_Image_pws1vppws1vppws1.png',
    //         },
    //         {
    //             name: 'Cecily Dware',
    //             role: 'Event Manager',
    //             image: 'https://i.postimg.cc/kgQCwvRb/Gemini_Generated_Image_mn2038mn2038mn20.png',
    //         },
    //         {
    //             name: 'Saurav Gautam',
    //             role: 'Social Media Manager',
    //             image: 'https://i.postimg.cc/0yYvZ0KK/Gemini_Generated_Image_a010tca010tca010.png',
    //         },
    //         {
    //             name: 'Marmisha Nagarkoti',
    //             role: 'Event Head',
    //             image: 'https://i.postimg.cc/jSHTv4nP/Gemini_Generated_Image_ug38aeug38aeug38.png',
    //         },
    //         {
    //             name: 'Rohit Dangol',
    //             role: 'Graphics Designer',
    //             image: 'https://i.postimg.cc/T3VxQJ5W/Gemini_Generated_Image_fgcjisfgcjisfgcj.png',
    //         },
    //         {
    //             name: 'Pranjal Kharel',
    //             role: 'Logistics Head',
    //             image: 'https://i.postimg.cc/RZ7mGLJc/Gemini_Generated_Image_nco23rnco23rnco2.png',
    //         },
    //         {
    //             name: 'Saksham Rimal',
    //             role: 'Sponsor Manager',
    //             image: 'https://i.postimg.cc/fRcs5fSv/Gemini_Generated_Image_2rzrrq2rzrrq2rzr_(1).png',
    //         },
    //     ],
    //     teams: [

    //     ],
    //     winners: [
    //         {
    //             place: '1ST PLACE',
    //             team: 'The Nerd Hub',
    //             image: "",
    //             description: 'Winner for demonstrating exceptional innovation and social impact during the 2024 competition.'
    //         },
    //         {
    //             place: '2ND PLACE',
    //             team: 'Pentasquad',
    //             image: "",
    //             description: 'Runner-up for their outstanding social enterprise solution in the 2024 grand finale.'
    //         },
    //     ],
    //     judges: [
    //         {
    //             name: 'Mr. Ishwor Thapa',
    //             role: 'Associate CEO at Code Himalaya',
    //             image: 'https://i.postimg.cc/rpvFPwFN/Gemini_Generated_Image_xst3apxst3apxst3.png'
    //         },
    //         {
    //             name: 'Ms. Sushma Sharma',
    //             role: 'Owner at Peculiar Jewels',
    //             image: 'https://i.postimg.cc/BvdQVnQC/Gemini_Generated_Image_c63oa6c63oa6c63o.png'
    //         },
    //         {
    //             name: 'Er. Aditya Raj',
    //             role: 'Founder & CEO at Digital Nepal',
    //             image: 'https://i.postimg.cc/hGHP5tPx/Gemini_Generated_Image_plw2thplw2thplw2.png'
    //         },
    //     ],
    //     sponsors: [

    //     ],

    // },

    // '2025': {
    //     heroImage: 'https://i.postimg.cc/dDcVgTSr/Gemini-Generated-Image-vbq360vbq360vbq3.png',
    //     heroBgColor: '#FFFFFF',
    //     globalTheme: 'Unlimited',
    //     globalDescription: 'Solve any societal problem through a business lens by aligning your startup with at least one UN SDG.',
    //     organizingCommittee: [
    //         {
    //             name: 'Pranjal Kharel',
    //             role: 'Campus Director',
    //             image: 'https://i.postimg.cc/VsHwvT1B/Gemini_Generated_Image_tfr9rltfr9rltfr9.png',
    //         },
    //         {
    //             name: 'Binisha Basnet',
    //             role: 'Deputy Campus Director',
    //             image: 'https://i.postimg.cc/bYFPrM8R/Gemini_Generated_Image_vd3qusvd3qusvd3q.png',
    //         },
    //         {
    //             name: 'Sushant Dhungel',
    //             role: 'Marketing and Communication lead',
    //             image: 'https://i.postimg.cc/FFnvzqmb/Gemini_Generated_Image_dyu8qadyu8qadyu8.png',
    //         },
    //         {
    //             name: 'Sajin Shrestha',
    //             role: 'Event Manager',
    //             image: 'https://i.postimg.cc/RCbmh89L/Gemini_Generated_Image_lnjfeqlnjfeqlnjf.png',
    //         },
    //         {
    //             name: 'Dikshya Thapa',
    //             role: 'Event Co-ordinator',
    //             image: 'https://i.postimg.cc/dQSF3Xvn/Gemini_Generated_Image_u0yl9au0yl9au0yl.png',
    //         },
    //         {
    //             name: 'Lishan Acharya',
    //             role: 'Event Co-ordinator',
    //             image: 'https://i.postimg.cc/jqkT29KZ/Gemini_Generated_Image_v32zmxv32zmxv32z.png',
    //         },
    //         {
    //             name: 'Kshitij Dahal',
    //             role: 'Technical Head',
    //             image: 'https://i.postimg.cc/PfFHJchS/Gemini_Generated_Image_3l7e4c3l7e4c3l7e.png',
    //         },
    //         {
    //             name: 'Ishika Khadka',
    //             role: "Team's Startup Adviser",
    //             image: 'https://i.postimg.cc/h43nvwgZ/Gemini_Generated_Image_7ac5q37ac5q37ac5.png',
    //         },
    //         {
    //             name: 'Subekshya Khareal',
    //             role: "Team's startup advisor",
    //             image: 'https://i.postimg.cc/zDPNvM5Q/Gemini_Generated_Image_rj3sdxrj3sdxrj3s.png',
    //         },
    //         {
    //             name: 'Ukesh Prajapati',
    //             role: 'Graphic Designer',
    //             image: 'https://i.postimg.cc/sf0zx8yq/Gemini_Generated_Image_9i2xco9i2xco9i2x.png',
    //         },
    //         {
    //             name: 'Sangam Bakhunchhe',
    //             role: 'Graphic Designer',
    //             image: 'https://i.postimg.cc/PfFHJchB/Gemini_Generated_Image_7iilcv7iilcv7iil.png',
    //         },
    //         {
    //             name: 'Sabnam Adhikari',
    //             role: 'Content & Social Media Manager',
    //             image: 'https://i.postimg.cc/nVwxr5Zy/Gemini_Generated_Image_o3qi08o3qi08o3qi.png',
    //         },
    //     ],

    //     teams: [
    //         {
    //             name: 'Change seekers',
    //             image: 'https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/485789177_637092489171934_4162321285991567319_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hEr163fMhwQQ7kNvwEZgQRB&_nc_oc=AdnG69l6tt_XCrRzU9NjeGKpzb1O31xpb9YUybb42QgcM_P8vKhA0xiE_BjumqIquzxgjW4haksqEbOho_tinEZe&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=fnmBhvORdnw0MoixKUKbwQ&oh=00_Afv5qUO7xsEKXFjNP88Qnm8biuV_BSFC6xtdb4EFqchxuw&oe=6990E463',
    //             problemStatement: 'Urban users face difficulty finding fast, reliable, and verified service professionals, leading to delays, hidden costs, and poor service quality.',
    //             solutionOverview: 'A mobile app that instantly connects users with verified local service providers using real-time matching, transparent pricing, and user reviews.',
    //             impact: 'Creates jobs for local professionals, improves service reliability, saves user time and money, and supports efficient urban service systems.',
    //             tags: ['Service Marketplace', 'On-Demand Services', 'Verified Professionals', 'Gig Economy', 'Smart Cities', 'SDG 8', 'SDG 11'],
    //             members: ['Crystal Karki', 'Samit Shrestha', 'Leejaw Chitrakar', 'Susan Limbu']
    //         },
    //         {
    //             name: 'Junkiri',
    //             image: 'https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/485841106_637093395838510_8097411742417267232_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XOhwRf3cm3kQ7kNvwFg7te7&_nc_oc=AdmDVQ70LN_3O4OwoxmkbWB-K6K_3CKj2yX_np1D641Qzf-9utMomb5_7Jj_y52qJRkbaQm8cAPCcucBwPp7FAB1&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=3rTfFlJ-1zx5PQplHQmIfA&oh=00_AfuDcuvVHREAzKk739WwHTOH0q-4Nt0iY0O0cxkLkYAukg&oe=699102CC',
    //             problemStatement: 'Farmers face multiple challenges including lack of modern equipment, quality seeds, capital, irrigation, storage, climate risks, and limited market access.',
    //             solutionOverview: 'Krishi Bazaar is an all-in-one agri-platform providing seeds, fertilizers, tools, fresh market access, agri-tech insights, weather updates, financial support, storage, logistics, and expert guidance—connecting farmers directly with businesses and urban buyers.',
    //             impact: 'Ensures fair pricing for farmers, reduces post-harvest losses, improves productivity, strengthens farm-to-market links, and promotes sustainable, organic agriculture.',
    //             tags: ['AgriTech', 'Farm-to-Market', 'Organic Farming', 'Farmer Empowerment', 'Supply Chain', 'B2B & D2C', 'Sustainable Agriculture', 'SDG 2', 'SDG 8'],
    //             members: ['Swastik Rawat', 'Rajan Panta', 'Dikshant Neupane', 'Pritika Thapa']
    //         },
    //         {
    //             name: 'Sage',
    //             image: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/485801777_637092639171919_7387220040654145371_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BPkMWKpCu6AQ7kNvwH47UN5&_nc_oc=AdnnJGUEmmkq55WgH2Qzj3lEKPWUTsK-Vx2twDbO6NW_ZVNMoT8fCNvnSXmo32VnUS6SlAMyALoaLiElfuZAOB84&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=CWROtg_jfzNjH4OMuZwqIg&oh=00_AfuUxBnQtrSzbEr1MaYLBPK2U-XVA1hoHS8orAKxqL--tw&oe=6990F1C2',
    //             problemStatement: 'Event planning is inefficient due to poor coordination, outdated tools, high costs, and lack of automation, leading to stress, overspending, and operational risks.',
    //             solutionOverview: 'EventXpert is an all-in-one event management platform offering automated budget planning, vendor coordination, guest management, and end-to-end event execution through a single app.',
    //             impact: 'Reduces event costs, improves coordination and security, supports local vendors and venues, and accelerates digital transformation in the event industry.',
    //             tags: ['EventTech', 'Event Management', 'Automation', 'Vendor Marketplace', 'Digital Coordination', 'Hospitality Tech', 'Local Business Support', 'SDG 8'],
    //             members: ['Aadarshan Dahal', 'Aayushma Luitel', 'Nimesh Adhikari', 'Rishab Adhikari']
    //         },
    //         {
    //             name: 'Drikshya',
    //             image: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/485378567_637094592505057_1770797611023032457_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EiOCKHro1LUQ7kNvwHrqurf&_nc_oc=AdlOVlJSSZKRqqncvy4sYN6I111eTokkyp-GhZMUbdjg28GnNCR2tOxGhU2rMWzLP3b2gGZKddRcUDJ6yJqQlWUd&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=hn9axW58tsmtDPwuy9vXiA&oh=00_Afv2IrvtBYiCqDrrqmGMQTbLv0KfFRryvRzq7rPYOqGmGw&oe=6990E535',
    //             problemStatement: 'Air pollution exposes billions to contaminated air, causing severe health risks, premature deaths, and long-term respiratory and eye-related issues, especially for urban commuters and workers.',
    //             solutionOverview: 'ClearShield is a reusable full-face mask with high-efficiency filtration, UV protection, and ergonomic design offering 99.9% protection against germs, dust, bacteria, and viruses.',
    //             impact: 'Improves public health protection, reduces pollution-related illnesses, lowers long-term mask costs through reusability, and promotes sustainable protective solutions.',
    //             tags: ['Air Pollution', 'HealthTech', 'Protective Gear', 'Reusable Masks', 'Urban Health', 'UV Protection', 'Public Health Innovation', 'SDG 3', 'SDG 11'],
    //             members: ["Hitesh D. Thakuri", "Aanchal Pathak", "Kanchan Joshi", "Nimesh Chaulagain"]
    //         },
    //         {
    //             name: 'Daffodils',
    //             image: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/485647074_637095025838347_8233863310609091229_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K2vSCahEn6UQ7kNvwGPfdES&_nc_oc=Admh--r99gHGYe91cBLqxjUu9Q7VrbVhuPE44hSwxNi0zGFm2xm7Vdy6OQwcnBqeyDJ6JTWjXGzW4PnOKhn242JG&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=XIOMNqNfYq-9dkdNBGo2rw&oh=00_Afvibo2VEoDF4fyBHwuefC5QvNmNqIo-CyVQ8XKlGIvFMQ&oe=6990FB0F',
    //             problemStatement: 'Nepal’s real estate market faces fraud risks, fake listings, broker dependency, poor verification systems, and lack of intelligent property matching.',
    //             solutionOverview: 'LandNova is a secure, AI-driven real estate platform connecting users with verified properties using government-based verification, AI matchmaking, virtual tours, and secure authentication.',
    //             impact: 'Reduces real estate fraud, improves transaction security, simplifies property search, and promotes transparent digital property markets in Nepal.',
    //             tags: ['PropTech', 'Real Estate Marketplace', 'AI Matchmaking', 'Fraud Prevention', 'Digital Property Platform', 'Smart Housing', 'FinTech Integration', 'SDG 9', 'SDG 11'],
    //             members: ['Samana Neupane', 'Achyuta Gajurel', ' Aaska Prajapati']
    //         },
    //         {
    //             name: 'The pirates',
    //             image: 'https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/485801000_637093305838519_3250070048004848787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XJPsvnv9UbgQ7kNvwHdf7JK&_nc_oc=AdmBKOx1DpdDIRgCFD6JaHq_luHF8_hOMnVgwRrRaIQN2DYcy193cximHkncsT2O1cf1cWMzTCqQ7otem_nnJtoU&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=sq6va_ge8W6qgG3whCUsrg&oh=00_AfuRINEQgSWuY5RkaeoovQLuHiFoHCcOJtcETC6MYTHYBA&oe=6990EBAE',
    //             problemStatement: 'Plastic pollution and carbon-intensive polyethylene production are harming Nepal’s environment while the country remains dependent on imported petroleum-based plastics.',
    //             solutionOverview: 'A sustainable bio-based polyethylene made from sugarcane molasses acting as a drop-in replacement for traditional plastic with lower carbon footprint and full recyclability.',
    //             impact: 'Reduces plastic pollution and emissions, supports local farmers and sugar industries, reduces plastic imports, and accelerates Nepal’s shift to sustainable materials.',
    //             tags: ['Sustainable Materials', 'Bio-based Plastic', 'Circular Economy', 'Plastic Alternatives', 'Green Manufacturing', 'Climate Action', 'SDG 12', 'SDG 13'],
    //             members: ['Anjeela Rana', 'Aawart K.C', 'Anustha Lamichhane', 'Ojaswee Paudel']
    //         },
    //         {
    //             name: 'Strikers',
    //             image: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/486017571_637092389171944_8315141362422384513_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Njz-GZzmKfUQ7kNvwHhQrQ_&_nc_oc=AdmGMgY_xYJG8Bqa7zhqSmkANr2Q5juNgPQWU9F4Ox27sj6dQF3j3f7HLvrFd322fAJ-8j4bzSoMPtqhl9RkumF8&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=JRYWz75ayJ5ojoYQbBT27w&oh=00_AfuTMVlrlHDVn9Etp7ugf-8ZQQtZfTGUDfXoJTlilLrJHQ&oe=6990F676',
    //             problemStatement: 'Tourists in Nepal face language barriers, safety concerns, unpredictable weather, and lack of integrated travel planning tools.',
    //             solutionOverview: 'Nepal-Trip is a smart tourism platform offering trip planning, booking, translation, offline maps, cultural information, and real-time weather updates.',
    //             impact: 'Improves tourist safety and experience, supports local tourism businesses, promotes eco-tourism, and strengthens Nepal’s tourism economy.',
    //             tags: ['TravelTech', 'Smart Tourism', 'Tourism Safety', 'Digital Travel Platform', 'Eco-Tourism', 'Cultural Tourism', 'SDG 8', 'SDG 11'],
    //             members: ['Samikshya Dhungana', 'Binita Gautam', 'Sumnima Karki', 'Karan Acharya']
    //         },
    //         {
    //             name: 'prime',
    //             image: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/485680559_637092855838564_2105750244658537246_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=carzFSYNDxgQ7kNvwGkdzfj&_nc_oc=AdmG5W40GHsNMT0NL0dvBJL3j8g2WEgdWG9vLPk8nIcUN8meIDMV59uf2wX_kGtbUwBUOGKFLR7Ezc19eLXFp3eS&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=Uq6-o0NL8NYXfEaEdQHrvg&oh=00_Afs8IEKN7PFB82S4jEE4VkRh9CHxCzQAEkuBGqglgWxd4Q&oe=6990DABD',
    //             problemStatement: 'Tourism in Nepal is concentrated in limited destinations with poor access to local guides, homestays, artisans, and cultural events.',
    //             solutionOverview: 'A one-stop platform connecting travelers with local guides, homestays, trekking updates, cultural events, and a global marketplace for Nepali art and handicrafts.',
    //             impact: 'Distributes tourism income, improves traveler safety, boosts local livelihoods, promotes Nepali culture globally, and supports community tourism.',
    //             tags: ['TravelTech', 'Community Tourism', 'Cultural Tourism', 'Trekking Safety', 'Local Marketplace', 'Sustainable Tourism', 'SDG 8', 'SDG 11'],
    //             members: ['Prajwol Shrestha', 'Bijesh karanjit', 'Avhishek Gautam', 'Shirish Shrestha']
    //         },
    //         {
    //             name: 'DreamBuilders',
    //             image: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/485847752_637093739171809_7070221904266377869_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mX7rFIHr1HgQ7kNvwFpoRhG&_nc_oc=AdkROU_DNAqL9wFdrklx4M3QStJND-i-JBhyokU1WC4PplSebhkzZOoUjoQJsIhLodMhHSUQwiUT7-Zvq5Qnjegf&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=ubbtLoeRwP0Y-zU5nwH9EQ&oh=00_AfuHbHSii44yJ6n4-VPawEeuZPlkFf22M6buW5DDilsfPA&oe=6990DBA1',
    //             problemStatement: 'Many people rely on chemical-based skincare products while Nepal lacks trusted natural skincare rooted in traditional knowledge.',
    //             solutionOverview: 'KonVeda is an eco-friendly skincare brand inspired by traditional Newa beauty practices using natural ingredients like mustard oil, turmeric, rice powder, and orange peel.',
    //             impact: 'Promotes chemical-free skincare, supports local farmers and artisans, preserves cultural traditions, and encourages sustainable beauty consumption.',
    //             tags: ['Sustainable Beauty', 'Natural Skincare', 'Herbal Cosmetics', 'Cultural Heritage', 'Eco-Friendly Products', 'Local Sourcing', 'SDG 3', 'SDG 12'],
    //             members: ['Priya Gupta', 'Barsha Dhukuchhu', 'Menuka Lage']
    //         },
    //         {
    //             name: 'Admirals',
    //             image: 'https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/485789632_637091675838682_6436543293521335305_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=if2y5j_hLskQ7kNvwFVW0X3&_nc_oc=AdnwdGmGTVRRNFsSDaiTqQ4RAPzVbcK54vTtGRZym5hnEaS-eASEw6-TNazsfEcBSdCzMeDwZ5zEsUxjmJT7SEsA&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=Xr7QlCorC64bOCObs2Zzmw&oh=00_AfurNzaXMdbTHQYeYWX_QZg32ns7uTnBTnbRj61Y7U3arg&oe=6990DE6D',
    //             problemStatement: ' Plastic waste from bottles and packaging pollutes landfills, rivers, and streets, causing environmental and health hazards.',
    //             solutionOverview: 'KonVeda is an eco-friendly skincare brand inspired by traditional Newa beauty practices using natural ingredients like mustard oil, turmeric, rice powder, and orange peel.',
    //             impact: 'Promotes chemical-free skincare, supports local farmers and artisans, preserves cultural traditions, and encourages sustainable beauty consumption.',
    //             tags: ['Sustainable Beauty', 'Natural Skincare', 'Herbal Cosmetics', 'Cultural Heritage', 'Eco-Friendly Products', 'Local Sourcing', 'SDG 3', 'SDG 12'],
    //             members: ['Name not found']
    //         },
    //         {
    //             name: 'Starstrik squad',
    //             image: 'https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/485731298_637094422505074_1221028738587488939_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VE7HwwBFAekQ7kNvwFtTcap&_nc_oc=AdksiwLJQpzEaAdzkXMQFCHJ3KluRqpzDr6p8y4EZU9mVxAuLPSZiYiXUsqLwRF8QgwXg3DtfdFZzndY4YOTC15u&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=7hWS3s1lgCrHY-C77NOUIQ&oh=00_Afve-i0EcLhLR61pPVE08UYgHs_SVp4bn9GKl1PkR90NyQ&oe=6990F3F1',
    //             problemStatement: 'Disabled individuals face high unemployment rates due to inaccessible workplaces, social stigma, discriminatory environments, and lack of tailored training opportunities.',
    //             solutionOverview: 'Equal Ground Cafe is a fully accessible social enterprise cafe that provides meaningful employment, skills training, and mentoring for individuals with disabilities while delivering high-quality service to the community.',
    //             impact: 'Empowers people with disabilities through sustainable jobs and lifelong skills, reduces social stigma through public interaction, closes skill gaps via mentoring, and demonstrates inclusive workplace design.',
    //             tags: ['Disability Inclusion', 'Social Enterprise', 'Accessible Workplace', 'Equal Opportunity', 'Skill Development', 'Inclusive Community'],
    //             members: ['Matina Ghemosu', 'Anusha Manandhar', 'Sarishma Ghimire', 'Pratikshya Limbu']
    //         }

    //     ],


    //     winners: [
    //         { place: '1ST PLACE', team: 'Starstrik squad', image: '', description: 'A café designed to provide meaningful employment opportunities for individuals with disabilities.' },
    //         { place: '2ND PLACE', team: 'DreamBuilders', image: '', description: 'Promotes chemical-free skincare, supports local farmers and artisans, preserves cultural beauty traditions, and encourages sustainable beauty consumption.' },
    //         { place: '3RD PLACE', team: 'The pirates', image: '', description: 'A sustainable, bio-based polyethylene made from sugarcane molasses that works as a drop-in replacement for traditional plastic—fully recyclable, lower carbon footprint, and compatible with existing manufacturing systems.' },
    //     ],
    //     judges: [
    //         { name: 'Mr. Suman Maharjan', role: 'Director of Operations at Fusemachines', image: "https://i.postimg.cc/tpYRqSqq/suman-maharjhan.jpg" },
    //         { name: 'Mr. Neeraj Pradhan', role: 'Co-founder of Skill Square', image: "https://i.postimg.cc/dsgSpBVs/Gemini-Generated-Image-o9k028o9k028o9k0.png" },
    //         { name: 'Mr. Priyash Pokharel', role: 'CEO at Digipal Technology Pvt.Ltd', image: "https://i.postimg.cc/dsgSpBVJ/Gemini-Generated-Image-8nxjyh8nxjyh8nxj.png" },
    //     ],
    //     sponsors: [
    //         { name: 'Ather', logo: 'https://www.mg21.com/wp-content/uploads/2024/07/Ather-Energy.png' },
    //         { name: 'Deego Nepal', logo: 'https://np-live-21.slatic.net/kf/S1724bfb4d5f143408de12e8c154744322.jpg_200x200.jpg' },
    //         { name: 'Vision Cart', logo: 'https://tse4.mm.bing.net/th/id/OIP.H-Ln8DxOa5nDccGGfRvblQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
    //         { name: 'Nhu designs', logo: 'https://www.thenhudesigns.com/images/preference/TXljU-logo1-(1).png' }
    //     ],
    // },

    // '2026': {
    //     heroImage: 'https://i.postimg.cc/dDcVgTSr/Gemini-Generated-Image-vbq360vbq360vbq3.png',
    //     heroBgColor: '#FFFFFF',
    //     globalTheme: 'Unlimited',
    //     globalDescription: 'Create a world-changing, for-profit business that addresses a global challenge and supports the UN SDGs.',
    //     organizingCommittee: [
    //         {
    //             name: 'Aadarsan Dahal',
    //             role: 'Campus Director',
    //             image: 'https://i.postimg.cc/wBgzMNx5/Aadarsan-Dahal-(1).png',
    //         },
    //         {
    //             name: 'Sagun Shrestha',
    //             role: 'Deputy Campus Director',
    //             image: 'https://i.postimg.cc/PqTHJDf7/Sagun-Shrestha.png',
    //         },
    //         {
    //             name: 'Achyuta Gajurel',
    //             role: 'Event Manager',
    //             image: 'https://i.postimg.cc/HLzgyLVL/Achyuta-Gajurel-(1).png',
    //         },
    //         {
    //             name: 'Aayush Pandey',
    //             role: 'Event Management',
    //             image: 'https://i.postimg.cc/d06Yy0LQ/Aayush-Pandey-(1).png',
    //         },
    //         {
    //             name: 'Nimesh Adhikari',
    //             role: 'Video Editor',
    //             image: 'https://i.postimg.cc/VNmwvtsD/Nimesh-Adhikari-(1).png',
    //         },
    //         {
    //             name: 'Kushal Suwal',
    //             role: 'Graphics Designer',
    //             image: 'https://i.postimg.cc/LsDp1sng/Kushal-Suwal-(1).png',
    //         },
    //         {
    //             name: 'Sumnima Karki',
    //             role: 'Social Media',
    //             image: 'https://i.postimg.cc/GpKCypHn/Sumnima-Karki-(1).png',
    //         },
    //         {
    //             name: 'Swastik Rawat',
    //             role: 'Logistics Head',
    //             image: 'https://i.postimg.cc/GpKCypHd/Swastik-Rawat-(1).png',
    //         },
    //         {
    //             name: 'Aayushma Luitel',
    //             role: 'Social Media',
    //             image: 'https://i.postimg.cc/ZqHSdqCb/Aayushma-Luitel-(1).png',
    //         },
    //         {
    //             name: 'Binita Gautam',
    //             role: 'Event Management',
    //             image: 'https://i.postimg.cc/QMhDC7Nc/Binita-Gautam-(1).png',
    //         },
    //         {
    //             name: 'Dikshant Neupane',
    //             role: 'Marketing and Communication',
    //             image: 'https://i.postimg.cc/cJ0WC31w/Dikshant-Neupane-(1).png',
    //         },
    //         {
    //             name: 'Karun Acharya',
    //             role: 'Technical Head',
    //             image: 'https://i.postimg.cc/jjtT2fqf/Karun-Acharya-(1).png',
    //         },
    //         {
    //             name: 'Sarishma Ghimire',
    //             role: 'Startup Team Advisor',
    //             image: 'https://i.postimg.cc/mrB4k9Z5/Sarishma-Ghimire-(1).png',
    //         },
    //         {
    //             name: 'Pritika Thapa',
    //             role: 'Logistics Head',
    //             image: 'https://i.postimg.cc/Ls2S5P47/Pritika-Thapa-(1).png',
    //         },
    //     ],
    //     teams: [
    //         {
    //             name: 'Helix',
    //             image: 'https://i.postimg.cc/Bn7MR240/Helix.jpg',
    //             problemStatement: 'Massive amounts of floral waste from temples and markets are currently treated as "trash," leading to landfill accumulation and waterway pollution.',
    //             solutionOverview: 'Helix operates a circular material recovery system that transforms collected floral waste into eco-friendly, charcoal-free incense and natural paper.',
    //             impact: 'The project reduces environmental pollution and advances UN Sustainable Development Goals (6, 11, 12, and 13) by turning low-cost waste into high-value sustainable products.',
    //             tags: ['Circular Economy', 'Waste Management', 'Floral Waste', 'Sustainable Products', 'SDG 6', 'SDG 11', 'SDG 12', 'SDG 13'],
    //             members: []
    //         },
    //         {
    //             name: 'CreateX',
    //             image: 'https://i.postimg.cc/VkZD2X1x/Create-X.jpg',
    //             problemStatement: 'Current clean energy solutions like solar panels only work during the day and are expensive, while traditional windmills are noisy, difficult to maintain, and present safety issues.',
    //             solutionOverview: 'PowerX is a micro wind turbine inspired by nature that generates electricity continuously 24/7 from low wind flow using a silent, bird-safe, and low-cost design.',
    //             impact: 'This technology provides an efficient, eco-friendly energy source for urban and residential areas, contributing to sustainable development by fitting seamlessly into real-world environments while remaining visually clean.',
    //             tags: ['Clean Energy', 'Wind Energy', 'Micro-Turbine', 'Urban Infrastructure', 'Sustainability', 'SDG 7', 'Renewable Energy'],
    //             members: []
    //         },
    //         {
    //             name: 'AASA',
    //             image: 'https://i.postimg.cc/zG204T56/AASA.jpg',
    //             problemStatement: 'Households struggle with inefficient food utilization due to limited nutrition knowledge and time-consuming meal planning, resulting in wasted food, financial loss, and unhealthy habits.',
    //             solutionOverview: 'Mealio is a mobile application that helps households reduce waste and save money by providing ingredient-based recipe suggestions, leftover transformation ideas, and personalized meal planning.',
    //             impact: 'The project improves health habits, achieves household financial savings, and contributes to the UN Sustainable Development Goals for Zero Hunger, Good Health, and Responsible Consumption.',
    //             tags: ['Food Waste', 'Meal Planning', 'HealthTech', 'Personalized Nutrition', 'SDG 2', 'SDG 3', 'SDG 12'],
    //             members: []
    //         },
    //         {
    //             name: 'Apex',
    //             image: 'https://i.postimg.cc/FKfDv1sq/Apex.jpg',
    //             problemStatement: 'Widespread plastic bottle pollution is caused by a lack of easy recycling methods and insufficient motivation or awareness among the public to dispose of waste properly.',
    //             solutionOverview: 'Bin Bounty implements Reverse Vending Machines (RVMs) that encourage recycling by providing users with instant rewards like cash, points, or mobile credits for returning plastic bottles.',
    //             impact: 'This system reduces environmental littering and supports a local circular economy by increasing recycling rates and aligning with global Sustainable Development Goals.',
    //             tags: ['Recycling', 'Plastic Pollution', 'Reverse Vending', 'Circular Economy', 'Incentivized Recycling', 'SDG 12', 'SDG 14'],
    //             members: []
    //         },
    //         {
    //             name: 'Astra',
    //             image: 'https://i.postimg.cc/KYKJb48X/Astra.jpg',
    //             problemStatement: 'The snack market is dominated by unhealthy junk foods that contribute to lifestyle diseases, while smallholder millet farmers face unstable incomes and climate change threatens traditional water-intensive crops.',
    //             solutionOverview: 'Astra produces Kodo millet chips that are gluten-free, high-fiber, and made with clean-label ingredients sourced directly from smallholder farmers to provide a healthy, climate-resilient snack alternative.',
    //             impact: 'The project empowers local farmers, enhances global nutrition by combating obesity and diabetes, and promotes sustainable agriculture by popularizing climate-resilient crops.',
    //             tags: ['Healthy Snacking', 'Millet Products', 'AgriTech', 'Farmer Empowerment', 'Gluten-Free', 'SDG 2', 'SDG 3', 'SDG 8'],
    //             members: []
    //         },
    //         {
    //             name: "Dreamers",
    //             image: 'https://i.postimg.cc/pLcq3Kx7/Dreamers.jpg',
    //             problemStatement: 'Plastic and paper cups cause deadly diseases, harm over 800 species through pollution, and release toxic gases like carbon monoxide when burned.',
    //             solutionOverview: 'The Edible Cup Maker (ECM) is a compact, user-friendly machine that allows cafes and vendors to create their own biodegradable and edible cups in various flavors.',
    //             impact: 'This innovation eliminates cup waste, protects human health from toxins, and enhances the eco-friendly brand image of businesses while providing a profitable, zero-waste alternative.',
    //             tags: ['Biodegradable Packaging', 'Edible Tableware', 'Zero Waste', 'Environmental Protection', 'F&B Innovation', 'SDG 12', 'SDG 15'],
    //             members: []
    //         },
    //         {
    //             name: 'GROW UP',
    //             image: 'https://i.postimg.cc/vm13yDHK/Grow-Up.jpg',
    //             problemStatement: 'Conventional polythene bags contribute significantly to environmental pollution, harming ecosystems and taking up to 500 years to decompose while releasing toxic waste.',
    //             solutionOverview: 'Verdant Loop transforms discarded banana peels and stems into 100% compostable packaging and seedling bags that look and feel like plastic but disappear in weeks.',
    //             impact: 'This innovation eliminates single-use plastic waste, turns agricultural "headaches" into a profitable circular economy, and enriches soil health by acting as a natural fertilizer as it decomposes.',
    //             tags: ['Bioplastics', 'Banana Waste', 'Compostable Packaging', 'Circular Economy', 'Sustainable Agriculture', 'SDG 12', 'SDG 13'],
    //             members: []
    //         },
    //         {
    //             name: 'Plantasy Home',
    //             image: 'https://i.postimg.cc/Bn7MR2sz/Horizon-Builders.jpg',
    //             problemStatement: 'Over 80% of plant nurseries and home growers in Nepal operate offline with limited digital reach, causing them to rely on walk-in customers and lose significant margins to middlemen.',
    //             solutionOverview: 'Plantasy Home is a sustainable e-commerce marketplace that digitizes the plant economy by connecting local growers directly to urban consumers through a centralized platform for sales and marketing.',
    //             impact: 'This project empowers local growers by increasing their income, scales the green economy in Nepal’s urban centers, and promotes mental wellness by making indoor plants more accessible for homes and workspaces.',
    //             tags: ['E-commerce', 'Plant Marketplace', 'Green Economy', 'Digital Transformation', 'Urban Gardening', 'SDG 8', 'SDG 11'],
    //             members: ['Yoman Limbu', 'Abisek Waiba', 'Bishal Lamichhane']
    //         },
    //         {
    //             name: 'Purity Path',
    //             image: 'https://i.postimg.cc/vZ23C5bR/Purity-Path.jpg',
    //             problemStatement: 'Nepal faces massive deforestation and high import costs for timber plywood while millions of tons of maize stems are burned as waste, causing air pollution and creating zero economic value for farmers.',
    //             solutionOverview: 'EcoMaize Ply transforms discarded maize stems into affordable, durable, and water-resistant building boards using eco-friendly resin and a heat-pressing process.',
    //             impact: 'The project reduces carbon emissions and deforestation, provides farmers with a new income stream, and decreases Nepal\'s dependency on expensive imported construction materials.',
    //             tags: ['Sustainable Building Materials', 'Agro-Waste', 'Deforestation Prevention', 'Green Construction', 'Circular Economy', 'SDG 11', 'SDG 13', 'SDG 15'],
    //             members: []
    //         },
    //         {
    //             name: 'Team Impact',
    //             image: 'https://i.postimg.cc/g2tN13dT/Impact.jpg',
    //             problemStatement: 'Physically active individuals and fitness enthusiasts often struggle to meet their specific protein requirements due to a lack of personalized guidance and sustainable nutritional habit systems.',
    //             solutionOverview: 'Pure Plates is an online nutrition platform that provides affordable, accessible protein nutrition through personalized meal plans and expert guidance tailored to active lifestyles.',
    //             impact: 'The platform improves community health and fitness outcomes by building sustainable dietary habits and simplifying protein assessment, aligning with global goals for good health and well-being.',
    //             tags: ['Nutrition Technology', 'Fitness', 'Personalized Diet', 'Health and Wellness', 'Protein Assessment', 'SDG 3'],
    //             members: []
    //         },
    //         {
    //             name: 'Thinker',
    //             image: 'https://i.postimg.cc/wj40nDg8/Thinker.jpg',
    //             problemStatement: 'The traditional construction industry in Nepal suffers from high costs, significant carbon footprints, and a heavy reliance on imported materials that are often not eco-friendly.',
    //             solutionOverview: 'Thinker manufactures sustainable, low-carbon building blocks and tiles using locally sourced materials and innovative eco-friendly technology to reduce the environmental footprint of housing.',
    //             impact: 'This project promotes affordable green housing, reduces national import dependency, and minimizes carbon emissions by offering a durable and sustainable alternative to conventional building materials.',
    //             tags: ['Green Building', 'Sustainable Construction', 'Eco-Friendly Materials', 'Carbon Reduction', 'Housing Innovation', 'SDG 9', 'SDG 11', 'SDG 13'],
    //             members: []
    //         },
    //         {
    //             name: '404 Labs',
    //             image: 'https://i.postimg.cc/zfL0N3X6/404Labs.jpg',
    //             problemStatement: 'Public transport in areas like Kathmandu Valley faces deadly racing between drivers for passengers, extreme wait-time uncertainty for commuters, and high pollution from inefficient vehicle use.',
    //             solutionOverview: 'BuzEase is an all-in-one transport ecosystem providing live tracking, crowd monitoring for seat availability, anti-racing safety alerts for drivers, and a cashless "Carbon Point" reward economy.',
    //             impact: 'The project improves public safety and commuting efficiency while directly supporting UN Sustainable Development Goals 3, 9, 11, and 13 by promoting sustainable urban mobility and reducing environmental impact.',
    //             tags: ['Urban Mobility', 'Public Transport', 'Smart Cities', 'Road Safety', 'IoT', 'SDG 3', 'SDG 9', 'SDG 11', 'SDG 13'],
    //             members: []
    //         }
    //     ],
    //     winners: [
    //         {place: '1ST PLACE',team: 'Helix',image: '',description: 'Transforms floral waste from temples into eco-friendly, charcoal-free incense and natural paper, reducing landfill accumulation and waterway pollution.'},
    //         {place: '2ND PLACE',team: "Dreamers",image: '',description: 'Features the Edible Cup Maker (ECM), a compact machine that allows cafes to produce biodegradable and edible cups, eliminating plastic and paper cup waste.'},
    //         {place: '3RD PLACE',team: 'CreateX',image: '',description: 'Develops PowerX, a silent and bird-safe micro wind turbine that generates clean electricity 24/7 from low wind flow for urban and residential environments.'},
    //     ],
    //     judges: [
    //         {
    //             name: 'Rabi Shakya',
    //             role: 'Cheif Strategy Officer E-Sewa Ltd.',
    //             image: ''
    //         },
    //         {
    //             name: 'Aakash Shrestha',
    //             role: 'Marketing Manager Nepcoms Services',
    //             image: ''
    //         },
    //         {
    //             name: 'Sandeep Shrestha',
    //             role: 'Chief Technical Officer Galli Maps',
    //             image: ''
    //         },
    //     ],
    //     sponsors: [
    //         { name: 'Ather', logo: 'https://i.postimg.cc/GhMMJw9h/Ather.jpg' },
    //         { name: 'Dami experience', logo: 'https://i.postimg.cc/dtWWmPD7/Dami.jpg' },
    //         { name: 'Gifting Partner', logo: 'https://i.postimg.cc/hPCCbWhG/Pal.jpg' },
    //         { name: 'Yajju Culture and Dance Dress Hire Center', logo: 'https://i.postimg.cc/Kv99rS4k/Yugi.jpg' }
    //     ],
    // },
};

export default yearData;