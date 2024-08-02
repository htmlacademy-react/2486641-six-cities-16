import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {DefaultLocation, MapUrl} from '../../const';
import 'leaflet/dist/leaflet.css';
import { CityType, Offer, Offers } from '../../types/types';
import { getCity } from '../../utils';

type MapProps = {
  cityName: CityType['name'];
  offers: Offers;
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapUrl.MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MapUrl.MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {cityName, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const city = getCity(cityName);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.flyTo([city?.location.latitude ?? DefaultLocation.latitude, city?.location.longitude ?? DefaultLocation.longitude], city?.location.zoom);
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
