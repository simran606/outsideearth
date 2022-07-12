
const shopsectiondata = [
    {
        img: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        section: "Kids",
        linkto: "kids"
    },
    {
        img: "https://media.istockphoto.com/photos/retail-display-picture-id1321332389?b=1&k=20&m=1321332389&s=170667a&w=0&h=sYZ9F08zhi8C6m7sg3TXb-2uBC49M_h1kYUHxGcy5FE=",
        section: "T-Shirts",
        linkto: "tshirts"
    },
    {
        img: "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        section: "Women's",
        linkto: "women"
    },
    {
        img: "https://images.unsplash.com/photo-1586363090844-099253d6a1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9sbyUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        section: "Polo Shirts",
        linkto: "poloshirts"
    },
    {
        img: "https://images.unsplash.com/photo-1577660002965-04865592fc60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        section: "Jackets & Sweatshirts",
        linkto: "jacketsandsweatshirts"
    },
    {
        img: "https://media.istockphoto.com/photos/cozy-patio-atmosphere-picture-id1310483234?b=1&k=20&m=1310483234&s=170667a&w=0&h=p2aRchm0zTSXpkLW1D09pKNOW4n5qvUFXvlqzcey02s=",
        section: "Space Socks",
        linkto: "spacesocks"
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Hats",
        linkto: "hats"
    },
    {
        img: "https://images.unsplash.com/photo-1606306823929-94540e36f1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFza3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
        section: "Masks",
        linkto: "masks"
    },
    {
        img: "https://images.unsplash.com/photo-1528384541731-6606de53ddaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFnJTIwYW5kJTIwdG90ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Bag & Totes",
        linkto: "bagandtotes"
    },
    {
        img: "https://images.unsplash.com/photo-1516683762090-1b43c48492e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyd2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Barware",
        linkto: "barware"
    },
    {
        img: "https://images.unsplash.com/photo-1603067389396-a3acf81e5cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9ybmFtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        section: "Space Ornaments",
        linkto: "spaceornaments"
    },
    {
        img: "https://media.istockphoto.com/photos/open-drawer-with-different-utensils-in-kitchen-top-view-picture-id1307632435?b=1&k=20&m=1307632435&s=170667a&w=0&h=9mfA_V7GqQw1mS1IiX78chY6tUaUhv8rZ1PIEcwgczQ=",
        section: "Kitchen Accessories",
        linkto: "kitchenaccessories"
    },
    {
        img: "https://images.unsplash.com/photo-1614940403522-a8c829e7eb82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Mugs & Tumblers",
        linkto: "mugsandtumblers"
    },
    {
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Pet",
        linkto: "pet"
    },
    {
        img: "https://images.unsplash.com/photo-1613339038444-ca6b1e8eb7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1c2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
        section: "Plush",
        linkto: "plush"
    },
    {
        img: "https://images.unsplash.com/photo-1517789573124-96f1f5d6b528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhY2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Space Food",
        linkto: "spacefood"
    },
    {
        img: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaGVyJTIwc3BhY2UlMjBwZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Fisher Space Pens",
        linkto: "fisherspacepens"
    },
    {
        img: "https://media.istockphoto.com/photos/office-workplace-gift-delivery-picture-id1157770292?b=1&k=20&m=1157770292&s=170667a&w=0&h=DEaYEfuFTN4EpcLJ1jYXlFXXaBOdcgI92ZP6RTz8WTA=",
        section: "Executive Gifts",
        linkto: "executivegifts"
    },
    {
        img: "https://media.istockphoto.com/photos/venetian-glass-paperweight-picture-id1322824660?b=1&k=20&m=1322824660&s=170667a&w=0&h=NerFhiZjDopiRrujjMSBwuHxD7jEvJeVkfKnwXINuNE=",
        section: "Paperweights",
        linkto: "paperweights"
    },
    {
        img: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVjdGlibGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        section: "Collectibles",
        linkto: "collectibles"
    },
    {
        img: "https://media.istockphoto.com/photos/comet-an-asteroid-a-meteorite-falls-to-the-ground-against-a-starry-picture-id1073058750?b=1&k=20&m=1073058750&s=170667a&w=0&h=l0Xk9h9otMfIaxHPVYt-J_hI5uqAyaZhLGyFzWldJ9c=",
        section: "Meteorite",
        linkto: "meteorites"
    },
    {
        img: "https://media.istockphoto.com/photos/closeup-on-sewing-tools-patchwork-tailoring-and-fashion-concept-macro-picture-id837461578?b=1&k=20&m=837461578&s=170667a&w=0&h=SADQLyFsskxTMFVwjrvD_1z88lNq9BPUId_FDFGMKAs=",
        section: "Mission Patch & Pins",
        linkto: "missionpatchandpins"
    },
    {
        img: "https://media.istockphoto.com/photos/room-for-kids-in-outer-space-decoration-style-picture-id1144429341?b=1&k=20&m=1144429341&s=170667a&w=0&h=xh_e5Pbs6-OOhNQe8WL-aLQHg8ujoJBBXtsKdr4vlM4=",
        section: "Spaceship Models",
        linkto: "spaceshipmodels"
    },
    {
        img: "https://m.media-amazon.com/images/I/71XjgWzmeOL._SL1280_.jpg",
        section: "Bedsheets",
        linkto: "bedsheets"
    },
    {
        img: "https://m.media-amazon.com/images/I/71DoZO+k+TL._AC_SL1200_.jpg",
        section: "Curtains",
        linkto: "curtains"
    },
    {
        img: "https://m.media-amazon.com/images/I/61PbED5PiyL._SL1500_.jpg",
        section: "TableCloth",
        linkto: ""
    },
    {
        img: "",
        section: "",
        linkto: ""
    },
    {
        img: "",
        section: "",
        linkto: ""
    },
    

]

export default shopsectiondata;