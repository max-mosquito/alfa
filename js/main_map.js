const cityBtns = document.querySelectorAll('.secondary_list_item_city');
const typeBtns = document.querySelectorAll('.secondary_list_item_type');
const headerDropdown = document.querySelectorAll('.primary_list_item');
const contentDropdown = document.querySelectorAll('.secondary_list');
const mapBlock = document.getElementById('map_pic_city');

headerDropdown.forEach((item, i) => {
   item.addEventListener('click', () => {
      contentDropdown[i].classList.toggle('active');
   })
})

const mapData = {
   novgorod: {
      center: [56.316206, 44.020977],
      marks: {
         sale:[
            [56.324664, 43.981587], 
            [56.313718, 43.988798]
         ],
         servise: [
            [56.316457, 44.063291],
         ],
      },
   },
   ufa: {
      center: [54.735152, 55.958736],
      marks: {
         sale:[
            [54.741391,  55.932155], 
            [54.728365, 55.930279]
         ],
         servise: [
            [54.710990, 56.005318],
         ],
      },
   },
   kazan: {
      center: [55.796127, 49.106414],
      marks: {
         sale:[
            [55.813484, 49.084950], 
            [55.817350, 49.145718]
         ],
         servise: [
            [55.778284, 49.075337],
            [55.780025, 49.139195],
         ],
      },
   },
   chelni: {
      center: [55.741272, 52.403662],
      marks: {
         sale:[
            [55.735129, 52.369717], 
            [55.737117, 52.412001]
         ],
         servise: [
            [55.770538, 52.374202],
            [55.769996, 52.431221],
         ],
      },
   },
   izhevsk: {
      center: [56.845096, 53.188089],
      marks: {
         sale:[
            [56.861138, 53.237159], 
            [56.844926, 53.239512]
         ],
         servise: [
            [56.860954, 53.191428],
            [56.840135, 53.194790],
         ],
      },
   },
};

//Ya map API -------------------------
let center = [56.316206, 44.020977];
let city = "novgorod";

function init(){
   const map = new ymaps.Map('map_pic_city',{
      center: center,
      zoom: 12,
   });

   mapData[city].marks.sale.forEach(item => {
      const placeMarkSale = new ymaps.Placemark(item, {}, {
         iconLayout: 'default#image',
         iconImageHref: '../img/map_icon_sale.svg',
         iconImageSize: [40, 40],
         iconImageOffset: [0, 0]
      })
      map.geoObjects.add(placeMarkSale);
   })

   mapData[city].marks.servise.forEach(item => {
      const placeMarkSale = new ymaps.Placemark(item, {}, {
         iconLayout: 'default#image',
         iconImageHref: '../img/map_icon_service.svg',
         iconImageSize: [40, 40],
         iconImageOffset: [0, 0]
      })
      map.geoObjects.add(placeMarkSale);
   })

   typeBtns.forEach((item, i) => {
      item.addEventListener('click', () => {
         map.geoObjects.removeAll();
         if(i === 0){
            mapData[city].marks.sale.forEach(item => {
               const placeMarkSale = new ymaps.Placemark(item, {}, {
                  iconLayout: 'default#image',
                  iconImageHref: '../img/map_icon_sale.svg',
                  iconImageSize: [40, 40],
                  iconImageOffset: [0, 0]
               })
               map.geoObjects.add(placeMarkSale);
            })
         }else{
            mapData[city].marks.servise.forEach(item => {
               const placeMarkSale = new ymaps.Placemark(item, {}, {
                  iconLayout: 'default#image',
                  iconImageHref: '../img/map_icon_service.svg',
                  iconImageSize: [40, 40],
                  iconImageOffset: [0, 0]
               })
               map.geoObjects.add(placeMarkSale);
            })
         }
         
      })
   })
   
}

ymaps.ready(init);

cityBtns.forEach(item => {
   item.addEventListener('click', () => {
      center = mapData[item.getAttribute('data-city')].center;
      city = item.getAttribute('data-city');
      mapBlock.children[0].remove();
      ymaps.ready(init);
   })
})

