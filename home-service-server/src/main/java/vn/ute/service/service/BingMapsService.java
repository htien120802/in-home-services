package vn.ute.service.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.CoordinatesDto;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;
import java.nio.charset.StandardCharsets;

@Service
public class BingMapsService {
    double SEMI_MAJOR_AXIS_MT = 6378137;
    double SEMI_MINOR_AXIS_MT = 6356752.314245;
    double FLATTENING = 1 / 298.257223563;
    double ERROR_TOLERANCE = 1e-12;

    @Value("${bingsmap.api-key}")
    String bingMapsApiKey;

    public CoordinatesDto getLocation(String address) throws IOException {
        address = URLEncoder.encode(address, StandardCharsets.UTF_8).replaceAll("\\+", "%20");
        String urlString = String.format("http://dev.virtualearth.net/REST/v1/Locations?q=%s&key=%s", address, bingMapsApiKey);
        // Create URL object
        URL url = new URL(urlString);

        // Open connection
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        // Set request method to GET
        connection.setRequestMethod("GET");

        // Get response code
        int responseCode = connection.getResponseCode();

        // Read response
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();

            // Print response
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.toString());

            // Extract coordinates from the "point" object
            JsonNode pointNode = rootNode
                    .path("resourceSets")
                    .path(0)
                    .path("resources")
                    .path(0)
                    .path("point")
                    .path("coordinates");

            return new CoordinatesDto(pointNode.get(0).asDouble(), pointNode.get(1).asDouble());
        } else {
            return null;
        }
}

    public double calculateDistance(CoordinatesDto location1, CoordinatesDto location2) {
        double latitude1 = location1.getLat();
        double longitude1 = location1.getLng();
        double latitude2 = location2.getLat();
        double longitude2 = location2.getLng();

        double U1 = Math.atan((1 - FLATTENING) * Math.tan(Math.toRadians(latitude1)));
        double U2 = Math.atan((1 - FLATTENING) * Math.tan(Math.toRadians(latitude2)));

        double sinU1 = Math.sin(U1);
        double cosU1 = Math.cos(U1);
        double sinU2 = Math.sin(U2);
        double cosU2 = Math.cos(U2);

        double longitudeDifference = Math.toRadians(longitude2 - longitude1);
        double previousLongitudeDifference;

        double sinSigma, cosSigma, sigma, sinAlpha, cosSqAlpha, cos2SigmaM;

        do {
            sinSigma = Math.sqrt(Math.pow(cosU2 * Math.sin(longitudeDifference), 2) +
                    Math.pow(cosU1 * sinU2 - sinU1 * cosU2 * Math.cos(longitudeDifference), 2));
            cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * Math.cos(longitudeDifference);
            sigma = Math.atan2(sinSigma, cosSigma);
            sinAlpha = cosU1 * cosU2 * Math.sin(longitudeDifference) / sinSigma;
            cosSqAlpha = 1 - Math.pow(sinAlpha, 2);
            cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
            if (Double.isNaN(cos2SigmaM)) {
                cos2SigmaM = 0;
            }
            previousLongitudeDifference = longitudeDifference;
            double C = FLATTENING / 16 * cosSqAlpha * (4 + FLATTENING * (4 - 3 * cosSqAlpha));
            longitudeDifference = Math.toRadians(longitude2 - longitude1) + (1 - C) * FLATTENING * sinAlpha *
                    (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * Math.pow(cos2SigmaM, 2))));
        } while (Math.abs(longitudeDifference - previousLongitudeDifference) > ERROR_TOLERANCE);

        double uSq = cosSqAlpha * (Math.pow(SEMI_MAJOR_AXIS_MT, 2) - Math.pow(SEMI_MINOR_AXIS_MT, 2)) / Math.pow(SEMI_MINOR_AXIS_MT, 2);

        double A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        double B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));

        double deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * Math.pow(cos2SigmaM, 2))
                - B / 6 * cos2SigmaM * (-3 + 4 * Math.pow(sinSigma, 2)) * (-3 + 4 * Math.pow(cos2SigmaM, 2))));

        double distanceMt = SEMI_MINOR_AXIS_MT * A * (sigma - deltaSigma);
        return distanceMt / 1000;
    }

    public double calcMovingTime(CoordinatesDto coordinatesDto1, CoordinatesDto coordinatesDto2) throws IOException {
        double startLat = coordinatesDto1.getLat();
        double startLng = coordinatesDto1.getLng();
        double endLat = coordinatesDto2.getLat();
        double endLng = coordinatesDto2.getLng();
        String apiUrl = "https://dev.virtualearth.net/REST/V1/Routes/Driving?o=xml&wp.0="
                + startLat + "," + startLng + "&wp.1=" + endLat + "," + endLng + "&key=" + bingMapsApiKey;
        URL url = new URL(apiUrl);

        // Open the connection
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        // Read the response
        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;

        while ((line = reader.readLine()) != null) {
            response.append(line);
        }

        // Close the reader and connection
        reader.close();
        connection.disconnect();

        // Parse the XML response to extract driving time
        String xmlResponse = response.toString();
        int index = xmlResponse.indexOf("<TravelDurationTraffic>");
        int startIndex = xmlResponse.indexOf(">", index) + 1;
        int endIndex = xmlResponse.indexOf("<", startIndex);
        String durationString = xmlResponse.substring(startIndex, endIndex);

        // Convert the duration to minutes
        return Double.parseDouble(durationString);
    }
}
