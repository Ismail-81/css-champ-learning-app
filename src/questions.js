// Background Questions
export const background = [
  {
    questionNo: 1,
    questionText: "Change the background color of the div with class 'box' to blue, and set its height and width to 100px.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { background-color: blue; height: 100px; width: 100px; }"
  },
  {
    questionNo: 2,
    questionText: "Change the background color of the div with class 'box' to red, and set its height and width to 150px.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { background-color: red; height: 150px; width: 150px; }"
  },
  {
    questionNo: 3,
    questionText: "Change the background color of the div with class 'box' to green, and set its width to 200px and height to 100px.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { background-color: green; height: 100px; width: 200px; }"
  },
  {
    questionNo: 4,
    questionText: "Change the background color of the div with class 'box' to yellow, and make it a perfect square of 120px.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { background-color: yellow; height: 120px; width: 120px; }"
  },
  {
    questionNo: 5,
    questionText: "Change the background color of the div with class 'box' to black, and set its width to 80px and height to 200px.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { background-color: black; height: 200px; width: 80px; }"
  },
  {
    questionNo: 6,
    questionText: "There are three divs with classes 'red', 'green', and 'blue'. Set each to be 100px square, with their background colors matching their class name.",
    htmlCode: "<div class='red'></div><div class='green'></div><div class='blue'></div>",
    answerCss: ".red { background-color: red; height: 100px; width: 100px; } .green { background-color: green; height: 100px; width: 100px; } .blue { background-color: blue; height: 100px; width: 100px; }"
  },
  {
    questionNo: 7,
    questionText: "Create two divs with classes 'left' and 'right'. Each should be 100px wide and 150px tall. Set 'left' to orange and 'right' to purple.",
    htmlCode: "<div class='left'></div><div class='right'></div>",
    answerCss: ".left { background-color: orange; height: 150px; width: 100px; } .right { background-color: purple; height: 150px; width: 100px; }"
  },
  {
    questionNo: 8,
    questionText: "Make a circle div with class 'circle'. It should be 100px by 100px with a red background and fully rounded corners.",
    htmlCode: "<div class='circle'></div>",
    answerCss: ".circle { background-color: red; height: 100px; width: 100px; border-radius: 50%; }"
  },
  {
    questionNo: 9,
    questionText: "Create a div with class 'banner'. Set its width to 100%, height to 80px, and background color to lightblue.",
    htmlCode: "<div class='banner'></div>",
    answerCss: ".banner { background-color: lightblue; height: 80px; width: 100%; }"
  },
  {
    questionNo: 10,
    questionText: "Create three small boxes with classes 'one', 'two', and 'three'. Each should be 50px square. Set 'one' to pink, 'two' to cyan, and 'three' to lime.",
    htmlCode: "<div class='one'></div><div class='two'></div><div class='three'></div>",
    answerCss: ".one { background-color: pink; height: 50px; width: 50px; } .two { background-color: cyan; height: 50px; width: 50px; } .three { background-color: lime; height: 50px; width: 50px; }"
  }
];


// Text Color Questions
export const color = [
  {
    questionNo: 1,
    questionText: "Set the text color of the heading (h1) to darkblue and the paragraph (p) to gray.",
    htmlCode: "<h1>Hello</h1><p>World</p>",
    answerCss: "h1 { color: darkblue; } p { color: gray; }"
  },
  {
    questionNo: 2,
    questionText: "Create two paragraphs with classes 'note' and 'warning'. Make 'note' text green and 'warning' text red.",
    htmlCode: "<p class='note'>This is a note</p><p class='warning'>This is a warning</p>",
    answerCss: ".note { color: green; } .warning { color: red; }"
  },
  {
    questionNo: 3,
    questionText: "Style the span inside a paragraph to be blue while keeping the rest of the text black.",
    htmlCode: "<p>This is <span>important</span> text</p>",
    answerCss: "p { color: black; } span { color: blue; }"
  },
  {
    questionNo: 4,
    questionText: "Make all links (a) purple, and turn them orange when hovered.",
    htmlCode: "<a href='#'>Click Me</a>",
    answerCss: "a { color: purple; } a:hover { color: orange; }"
  },
  {
    questionNo: 5,
    questionText: "Make the first list item red and the second list item blue.",
    htmlCode: "<ul><li>One</li><li>Two</li></ul>",
    answerCss: "li:first-child { color: red; } li:nth-child(2) { color: blue; }"
  },
  {
    questionNo: 6,
    questionText: "Create a heading with class 'title' and a paragraph with class 'footer'. Make 'title' navy and 'footer' teal.",
    htmlCode: "<h1 class='title'>Header</h1><p class='footer'>Footer</p>",
    answerCss: ".title { color: navy; } .footer { color: teal; }"
  },
  {
    questionNo: 7,
    questionText: "Create two paragraphs. Make the first one red, the second one green.",
    htmlCode: "<p class='first'>First</p><p class='second'>Second</p>",
    answerCss: ".first { color: red; } .second { color: green; }"
  },
  {
    questionNo: 8,
    questionText: "Make all headings (h1, h2, h3) violet in color.",
    htmlCode: "<h1>One</h1><h2>Two</h2><h3>Three</h3>",
    answerCss: "h1, h2, h3 { color: violet; }"
  },
  {
    questionNo: 9,
    questionText: "Create a button with class 'btn'. Set its text color to white and background color to black.",
    htmlCode: "<button class='btn'>Click</button>",
    answerCss: ".btn { color: white; background-color: black; }"
  },
  {
    questionNo: 10,
    questionText: "Create a paragraph where even words are orange and odd words are black.",
    htmlCode: "<p><span>One</span> <span>Two</span> <span>Three</span> <span>Four</span></p>",
    answerCss: "span:nth-child(odd) { color: black; } span:nth-child(even) { color: orange; }"
  }
];


// Font Size Questions
export const fontSize = [
  {
    questionNo: 1,
    questionText: "Set the main heading (h1) to have a font size of 36px, and make the paragraph (p) text smaller with a font size of 18px.",
    htmlCode: "<h1>Heading</h1><p>Paragraph</p>",
    answerCss: "h1 { font-size: 36px; } p { font-size: 18px; }"
  },
  {
    questionNo: 2,
    questionText: "Style all list items (li) so that their text size is 20px and the text appears bold.",
    htmlCode: "<ul><li>One</li><li>Two</li><li>Three</li></ul>",
    answerCss: "li { font-size: 20px; font-weight: bold; }"
  },
  {
    questionNo: 3,
    questionText: "Create two paragraphs: one with class 'small' and one with class 'large'. The 'small' paragraph should have a font size of 12px, and the 'large' one should have 24px.",
    htmlCode: "<p class='small'>Tiny</p><p class='large'>Big</p>",
    answerCss: ".small { font-size: 12px; } .large { font-size: 24px; }"
  },
  {
    questionNo: 4,
    questionText: "Style headings so that h1 has a font size of 32px, h2 has 24px, and h3 has 18px to make them gradually smaller.",
    htmlCode: "<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>",
    answerCss: "h1 { font-size: 32px; } h2 { font-size: 24px; } h3 { font-size: 18px; }"
  },
  {
    questionNo: 5,
    questionText: "Set the paragraph (p) text size to 16px. Inside that paragraph, make the span text slightly bigger at 20px.",
    htmlCode: "<p>This is <span>important</span></p>",
    answerCss: "p { font-size: 16px; } span { font-size: 20px; }"
  },
  {
    questionNo: 6,
    questionText: "Create a div with class 'title'. Give the whole title text a font size of 150%. Inside it, make the paragraph (subtitle) smaller with 80%.",
    htmlCode: "<div class='title'>Heading<p>Subtitle</p></div>",
    answerCss: ".title { font-size: 150%; } .title p { font-size: 80%; }"
  },
  {
    questionNo: 7,
    questionText: "Style three spans with different classes: 'tiny' should have 10px font size, 'medium' should be 16px, and 'huge' should be 28px.",
    htmlCode: "<span class='tiny'>A</span><span class='medium'>B</span><span class='huge'>C</span>",
    answerCss: ".tiny { font-size: 10px; } .medium { font-size: 16px; } .huge { font-size: 28px; }"
  },
  {
    questionNo: 8,
    questionText: "Make all paragraphs (p) have a font size of 18px, but only the very first paragraph should also be bold.",
    htmlCode: "<p>First</p><p>Second</p>",
    answerCss: "p { font-size: 18px; } p:first-child { font-weight: bold; }"
  },
  {
    questionNo: 9,
    questionText: "Style two buttons: one with class 'btn' should have smaller text at 14px, and another with class 'big-btn' should have larger text at 22px.",
    htmlCode: "<button class='btn'>Small</button><button class='big-btn'>Big</button>",
    answerCss: ".btn { font-size: 14px; } .big-btn { font-size: 22px; }"
  },
  {
    questionNo: 10,
    questionText: "Style a form: the label text should be smaller at 14px, while the input box text should be larger at 18px.",
    htmlCode: "<label>Name</label><input type='text'>",
    answerCss: "label { font-size: 14px; } input { font-size: 18px; }"
  }
];


// Border Questions
export const border = [
  {
    questionNo: 1,
    questionText: "Add a solid black border of 2px thickness around a div with the class 'box'.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { border: 2px solid black; }"
  },
  {
    questionNo: 2,
    questionText: "Give a div with the class 'dashed' a dashed red border that is 3px thick.",
    htmlCode: "<div class='dashed'></div>",
    answerCss: ".dashed { border: 3px dashed red; }"
  },
  {
    questionNo: 3,
    questionText: "Create a circle using a div with the class 'round'. It should be 100px wide and tall, have a yellow background, and a solid blue border that is 4px thick.",
    htmlCode: "<div class='round'></div>",
    answerCss: ".round { width: 100px; height: 100px; background: yellow; border: 4px solid blue; border-radius: 50%; }"
  },
  {
    questionNo: 4,
    questionText: "Style a paragraph so it has a green solid top border (2px) and an orange solid bottom border (2px).",
    htmlCode: "<p class='styled'>Text</p>",
    answerCss: ".styled { border-top: 2px solid green; border-bottom: 2px solid orange; }"
  },
  {
    questionNo: 5,
    questionText: "Make two divs: one with the class 'one' and one with 'two'. 'One' should have a purple dotted border (2px) and 'two' should have a solid gray border (2px).",
    htmlCode: "<div class='one'></div><div class='two'></div>",
    answerCss: ".one { border: 2px dotted purple; } .two { border: 2px solid gray; }"
  },
  {
    questionNo: 6,
    questionText: "Add a border only to the left side of a div with the class 'left-box'. The border should be brown, solid, and 5px thick.",
    htmlCode: "<div class='left-box'></div>",
    answerCss: ".left-box { border-left: 5px solid brown; }"
  },
  {
    questionNo: 7,
    questionText: "Style a button with the class 'btn' so it has a black solid border (2px) and rounded corners with an 8px radius.",
    htmlCode: "<button class='btn'>Click</button>",
    answerCss: ".btn { border: 2px solid black; border-radius: 8px; }"
  },
  {
    questionNo: 8,
    questionText: "Give a div with the class 'fancy' a pink double border that is 4px thick.",
    htmlCode: "<div class='fancy'></div>",
    answerCss: ".fancy { border: 4px double pink; }"
  },
  {
    questionNo: 9,
    questionText: "Style a div with the class 'top' so it only has a top border. The border should be blue, dashed, and 3px thick.",
    htmlCode: "<div class='top'></div>",
    answerCss: ".top { border-top: 3px dashed blue; }"
  },
  {
    questionNo: 10,
    questionText: "Make an image with the class 'photo' have a solid black border (5px) and make its corners fully rounded into a circle.",
    htmlCode: "<img class='photo' src='https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />",
    answerCss: ".photo { border: 5px solid black; border-radius: 50%; }"
  }
];


// Margin Questions
export const margin = [
  {
    questionNo: 1,
    questionText: "Add an equal margin of 20px to all four sides of a div with the class 'box'.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { margin: 20px; }"
  },
  {
    questionNo: 2,
    questionText: "Style a paragraph with the class 'text' so it has a 10px margin at the top and a 30px margin at the bottom.",
    htmlCode: "<p class='text'>Hello</p>",
    answerCss: ".text { margin-top: 10px; margin-bottom: 30px; }"
  },
  {
    questionNo: 3,
    questionText: "Add different margins to a box: 5px on top, 10px on the right, 15px on the bottom, and 20px on the left.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { margin: 5px 10px 15px 20px; }"
  },
  {
    questionNo: 4,
    questionText: "Center a div with the class 'center' horizontally by using margin auto. The div should also have a fixed width of 200px.",
    htmlCode: "<div class='center'></div>",
    answerCss: ".center { width: 200px; margin: 0 auto; }"
  },
  {
    questionNo: 5,
    questionText: "Add only a left margin of 50px to an image with the class 'pic'.",
    htmlCode: "<img class='pic' src='https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />",
    answerCss: ".pic { margin-left: 50px; }"
  },
  {
    questionNo: 6,
    questionText: "Add margin of 15px to the top and bottom, and 30px to the left and right of a div with the class 'box'.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { margin: 15px 30px; }"
  },
  {
    questionNo: 7,
    questionText: "Apply a margin of 20px only to the first paragraph in a group of paragraphs.",
    htmlCode: "<p>First</p><p>Second</p>",
    answerCss: "p:first-child { margin: 20px; }"
  },
  {
    questionNo: 8,
    questionText: "Give a heading (h1) with the class 'title' a top margin of 40px and a bottom margin of 10px.",
    htmlCode: "<h1 class='title'>Welcome</h1>",
    answerCss: ".title { margin-top: 40px; margin-bottom: 10px; }"
  },
  {
    questionNo: 9,
    questionText: "Give all list items inside an unordered list (ul) an equal margin of 25px on all sides.",
    htmlCode: "<ul><li>One</li><li>Two</li><li>Three</li></ul>",
    answerCss: "ul li { margin: 25px; }"
  },
  {
    questionNo: 10,
    questionText: "Place two divs side by side. Add a 20px right margin only to the first div so there is space between them.",
    htmlCode: "<div class='left'></div><div class='right'></div>",
    answerCss: ".left { margin-right: 20px; }"
  }
];


// Padding Questions
export const padding = [
  {
    questionNo: 1,
    questionText: "Add 20px of padding to all four sides inside a div with the class 'box'.",
    htmlCode: "<div class='box'>Content</div>",
    answerCss: ".box { padding: 20px; }"
  },
  {
    questionNo: 2,
    questionText: "Style a paragraph with the class 'text' so it has 10px padding at the top and 30px padding at the bottom.",
    htmlCode: "<p class='text'>Hello</p>",
    answerCss: ".text { padding-top: 10px; padding-bottom: 30px; }"
  },
  {
    questionNo: 3,
    questionText: "Add different paddings to a box: 5px at the top, 10px on the right, 15px at the bottom, and 20px on the left.",
    htmlCode: "<div class='box'></div>",
    answerCss: ".box { padding: 5px 10px 15px 20px; }"
  },
  {
    questionNo: 4,
    questionText: "Style a button with padding of 12px on the top and bottom, and 25px on the left and right.",
    htmlCode: "<button class='btn'>Click Me</button>",
    answerCss: ".btn { padding: 12px 25px; }"
  },
  {
    questionNo: 5,
    questionText: "Give an image with the class 'pic' 50px of padding on the left side only.",
    htmlCode: "<img class='pic' src='https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />",
    answerCss: ".pic { padding-left: 50px; }"
  },
  {
    questionNo: 6,
    questionText: "Style a card div with padding of 15px on the top and bottom, and 30px on the left and right.",
    htmlCode: "<div class='card'>Card Content</div>",
    answerCss: ".card { padding: 15px 30px; }"
  },
  {
    questionNo: 7,
    questionText: "Add 20px of padding only to the first paragraph inside a section element.",
    htmlCode: "<section><p>First</p><p>Second</p></section>",
    answerCss: "section p:first-child { padding: 20px; }"
  },
  {
    questionNo: 8,
    questionText: "Give a heading (h1) with the class 'title' 40px padding at the top and 10px padding at the bottom.",
    htmlCode: "<h1 class='title'>Welcome</h1>",
    answerCss: ".title { padding-top: 40px; padding-bottom: 10px; }"
  },
  {
    questionNo: 9,
    questionText: "Give all list items inside a ul equal padding of 25px on all sides.",
    htmlCode: "<ul><li>One</li><li>Two</li><li>Three</li></ul>",
    answerCss: "ul li { padding: 25px; }"
  },
  {
    questionNo: 10,
    questionText: "Create two divs displayed inline. Add 20px of padding only to the right side of the first div so its text does not touch the edge.",
    htmlCode: "<div class='left'>Left</div><div class='right'>Right</div>",
    answerCss: ".left { padding-right: 20px; }"
  }
];
