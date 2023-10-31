import {FC, memo, useCallback, useMemo, useRef} from "react";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import classNames from "classnames";
import styles from './AppGoogleMap.module.scss';
import {Geo} from "@/entities/User/model/types/IUser.ts";

export type Coordinates = {lat: number, lng: number};


const defOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    mapId: '5d19bb324d51c37f'
}

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

interface AppGoogleMapProps {
    className?: string;
    userLocation: Geo;
    zoom?: number;
    borderRadius?: number;
}
export const AppGoogleMap: FC<AppGoogleMapProps> = memo((props) => {

    const {
        borderRadius = 8,
        zoom = 2,
        userLocation,
        className
    } = props;

    const userLocationLatLng = useMemo(() => {
        return {
            lat: +userLocation.lat,
            lng: +userLocation.lng
        }
    }, [userLocation]);

    const mapRef = useRef<google.maps.Map>();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCUxV7Ub2kp327zmvaOAqgp2OYaDcmhZi4",
        libraries: ['places'],
        mapIds: ['5d19bb324d51c37f']
    });

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(() => {
        mapRef.current = undefined;
    }, []);

    return <div className={classNames(className, styles.AppGoogleMap)}>
        {
            isLoaded ? <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '100%',
                    borderRadius: `${borderRadius}px`
                }}
                center={userLocationLatLng}
                zoom={zoom}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defOptions}>
                {

                    <MarkerF position={{lat: +userLocation.lat, lng: +userLocation.lng}}/>
                }
            </GoogleMap> : <h1>Loading...</h1>
        }
    </div>
});
