// Example truck data (replace later with actual data source)
const trucks = [
    { id: "TRK-001", driver: "Driver A", lat: -9.9312, lng: -84.0836, status: "In Transit" },
    { id: "TRK-002", driver: "Driver B", lat: -9.9312, lng: -84.0836, status: "In Transit" },
    { id: "TRK-003", driver: "Driver C", lat: -9.9312, lng: -84.0836, status: "In Transit" },
    { id: "TRK-004", driver: "Driver D", lat: -9.9312, lng: -84.0836, status: "In Transit" },
];

// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: -9.9312, lng: -84.0836 }, // Centered on Costa Rica
    });

    // Add markers for each truck
    trucks.forEach(truck => {
        const marker = new google.maps.Marker({
            position: { lat: truck.lat, lng: truck.lng },
            map: map,
            title: `Truck ID: ${truck.id}\nDriver: ${truck.driver}\nStatus: ${truck.status}`,
        });
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `<strong>${truck.id}</strong><br>Driver: ${truck.driver}<br>Status: ${truck.status}`,

    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
};

//Add trucks table
const table = document.getElementById("trucks-table");
trucks.forEach(truck => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${truck.id}</td>
        <td>${truck.driver}</td>
        <td>${truck.lat.toFixed(2)}, ${truck.lng.toFixed(2)}</td>
        <td>${truck.status}</td>
    `;
    table.appendChild(row);
});

