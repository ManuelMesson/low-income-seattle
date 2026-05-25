import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIcon2xUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useTranslation } from 'react-i18next';
import { telLink } from '@/lib/url';

export interface MapMarker {
  id: string | number;
  name: string;
  address?: string;
  phone?: string;
  coords: { lat: number; lng: number };
}

interface Props {
  markers: MapMarker[];
  height?: string;
}

const SEATTLE: [number, number] = [47.6062, -122.3321];

let iconConfigured = false;
function configureDefaultIcon(): void {
  if (iconConfigured) return;
  const DefaultIcon = L.icon({
    iconUrl: markerIconUrl,
    iconRetinaUrl: markerIcon2xUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  iconConfigured = true;
}

export function ResourceMap({ markers, height = '560px' }: Props) {
  const { t } = useTranslation();

  useEffect(() => {
    configureDefaultIcon();
  }, []);

  const validMarkers = markers.filter((m) => m.coords);

  return (
    <div
      className="w-full overflow-hidden rounded-lg border"
      style={{ height }}
      role="region"
      aria-label={t('resources.viewMap')}
    >
      <MapContainer
        center={SEATTLE}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validMarkers.map((m) => (
          <Marker key={m.id} position={[m.coords.lat, m.coords.lng]}>
            <Popup>
              <strong>{m.name}</strong>
              {m.address ? (
                <>
                  <br />
                  {m.address}
                </>
              ) : null}
              {m.phone ? (
                <>
                  <br />
                  <a href={telLink(m.phone)}>{m.phone}</a>
                </>
              ) : null}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
