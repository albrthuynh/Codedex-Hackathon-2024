
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function MapGoogle() {
  const position = { lat: 40.67, lng: -73.99 };
  const [open, setOpen] = useState(false);

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={process.env.REACT_APP_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Hamburg</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}