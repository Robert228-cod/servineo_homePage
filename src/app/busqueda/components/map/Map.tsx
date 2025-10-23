'use client';

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { Fixer } from "@/app/busqueda/interface/Fixer_Interface";
import { LatLngExpression } from "leaflet";

import RecenterMap from "./RecenterMap";
import UserMarker from "./UserMaker";
import FixerMarker from "./FixerMaker";
import MapEvents from "./MapEvents";
import MapCircle from "./MapCircle";
import LocationButton from "./LocationButton";
import { distanceKm } from "@/app/busqueda/utils/distance";

const defaultPosition: [number, number] = [-17.39381, -66.15693];

export default function Map() {
  const [fixers, setFixers] = useState<Fixer[]>([]);
  const [position, setPosition] = useState<[number, number]>(defaultPosition);
  const [zoom, setZoom] = useState(14);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Cargar fixers desde JSON local
  useEffect(() => {
    import('@/jsons/fixers.json')
      .then((module) => setFixers(module.default))
      .catch((err) => {
        console.error("Error cargando fixers:", err);
        setError("No se pudieron cargar los fixers locales");
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Posición inicial y geolocalización
  useEffect(() => {
    const savedPos = localStorage.getItem("mapPosition");
    const savedZoom = localStorage.getItem("mapZoom");
    if (savedPos) setPosition(JSON.parse(savedPos));
    if (savedZoom) setZoom(Number(savedZoom));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
        () => setError("No se pudo obtener tu ubicación")
      );
    } else setError("No se pudo obtener tu ubicación");
  }, []);

  // 🔹 Guardar posición y zoom en localStorage
  useEffect(() => {
    localStorage.setItem("mapPosition", JSON.stringify(position));
    localStorage.setItem("mapZoom", zoom.toString());
  }, [position, zoom]);

  // 🔹 Actualizar posición desde eventos del mapa
  const handleMove = (pos: LatLngExpression) => {
    const [lat, lng] = Array.isArray(pos) ? pos : [pos.lat, pos.lng];
    setPosition([lat, lng]);
  };

  // 🔹 Filtrar fixers cercanos (≤8 km) y disponibles
  const nearbyFixers = fixers.filter(
    (f) => f.available && distanceKm(position, [f.lat, f.lng]) <= 8
  );

  if (loading) return <div>Cargando mapa...</div>;

  return (
    <div className="relative z-0" style={{ height: "60vh", width: "100%", marginTop: "80px" }}>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <RecenterMap position={position} />
        <UserMarker position={position} />
        <MapCircle center={position} radius={8000} />

        {nearbyFixers.map((f) => (
          <FixerMarker key={f.id} fixer={f} />
        ))}

        <MapEvents onClick={handleMove} />

        {nearbyFixers.length === 0 && (
          <Popup position={position} closeButton={false} autoPan={true}>
            ⚠️ No se encontraron fixers cercanos
          </Popup>
        )}
      </MapContainer>

      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
              () => setError("No se pudo obtener tu ubicación")
            );
          }
        }}
      />

      {error && <div className="mt-2 text-red-500">{error}</div>}
    </div>
  );
}
