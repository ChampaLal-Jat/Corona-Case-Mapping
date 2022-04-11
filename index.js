function updateMap() {
    console.log("Thisis updating");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if(cases>250)
                    color="red";
                else
                    color=`rgb(${cases},0,0)`;   

                //Mark on the map
                marker = new mapboxgl.Marker({
                    draggable: false,
                    color:color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}

// updateMap();
let interval=2000;
setInterval(updateMap,interval);