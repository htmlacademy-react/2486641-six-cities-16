import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { City } from '../types/types';
import { DefaultLocation, MapUrl } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City | undefined
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city?.location.latitude ?? DefaultLocation.Latitude,
          lng: city?.location.longitude ?? DefaultLocation.Longitude
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        MapUrl.Template,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
