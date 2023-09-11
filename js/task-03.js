const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const newImages = images.map((element) =>
  `<li class="gallery__list"><img src="${element.url}" alt="${element.alt}" width="260" /></li>`).join(""); 
const list = document.querySelector('ul.gallery');
list.insertAdjacentHTML('beforeend', newImages);
list.style.cssText = `
  list-style: none;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;


filter: grayscale(64%) sepia(11%) contrast(104%) invert(14%);
-webkit-filter: grayscale(64%) sepia(11%) contrast(104%) invert(14%);
-moz-filter: grayscale(64%) sepia(11%) contrast(104%) invert(14%);

  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,176,219,0.9893207282913166) 35%, rgba(0,212,255,1) 100%);
`;
