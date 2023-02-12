const productosDB = [
  {
  "id": 1,
  "name": "Tuck",
  "product": "Running Shoe",
  "category": "sandalias",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "stock": 85,
  "price": 314,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 2,
  "name": "Chancey",
  "product": "Running Shoe",
  "category": "sandalias",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "stock": 10,
  "price": 224,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 3,
  "name": "Elwyn",
  "product": "Running Shoe",
  "category": "sandalias",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "stock": 17,
  "price": 416,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 4,
  "name": "Coraline",
  "product": "Running Shoe",
  "category": "sandalias",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "stock": 13,
  "price": 227,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 5,
  "name": "Carlos",
  "product": "Running Shoe",
  "category": "zapatillas",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "stock": 23,
  "price": 428,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 6,
  "name": "Mahmud",
  "product": "Running Shoe",
  "category": "zapatillas",
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "stock": 25,
  "price": 207,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 7,
  "name": "Susana",
  "product": "Running Shoe",
  "category": "zapatillas",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "stock": 67,
  "price": 378,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 8,
  "name": "Matti",
  "product": "Running Shoe",
  "category": "zapatillas",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "stock": 65,
  "price": 438,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 9,
  "name": "Raimund",
  "product": "Running Shoe",
  "category": "zapatos",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "stock": 92,
  "price": 247,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 10,
  "name": "Debby",
  "product": "Running Shoe",
  "category": "zapatos",
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "stock": 92,
  "price": 245,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 11,
  "name": "Casie",
  "product": "Running Shoe",
  "category": "zapatos",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "stock": 43,
  "price": 575,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 12,
  "name": "Regine",
  "product": "Running Shoe",
  "category": "zapatos",
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "stock": 70,
  "price": 423,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 13,
  "name": "Calvin",
  "product": "Running Shoe",
  "category": "medias",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "stock": 19,
  "price": 216,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 14,
  "name": "Halsy",
  "product": "Running Shoe",
  "category": "medias",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "stock": 62,
  "price": 350,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 15,
  "name": "Grier",
  "product": "Running Shoe",
  "category": "medias",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "stock": 99,
  "price": 224,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 16,
  "name": "Pacorro",
  "product": "Running Shoe",
  "category": "medias",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "stock": 82,
  "price": 354,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}, {
  "id": 17,
  "name": "Lenee",
  "product": "Running Shoe",
  "category": "medias",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "stock": 16,
  "price": 251,
  "picture": "https://www.rei.com/media/28d71f24-3884-47df-ad1c-e70a837719b4.jpg?size=784x588"
}
];


export default productosDB;