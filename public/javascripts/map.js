var map = L.map('main_map').setView([4.620954912490272, -74.15970790265966],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMaps</a> contributors'
}).addTo(map);