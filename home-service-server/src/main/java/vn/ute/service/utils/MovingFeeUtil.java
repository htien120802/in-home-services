package vn.ute.service.utils;

import lombok.experimental.UtilityClass;
import vn.ute.service.entity.AddressEntity;
import vn.ute.service.service.BingMapsService;

@UtilityClass
public final class MovingFeeUtil {
    public static long calcMovingFee(double distance){
        distance = (double) Math.round(distance * 100) / 100;

        double cost = 0;
        if (distance <= 5) {
            cost = cost + 12000;
        }

        if (distance > 5){
            cost = cost + 12000 + (distance - 5) * 2000;
        }

        return Math.round(cost);
    }
}
