package vn.ute.service.utils;

import lombok.experimental.UtilityClass;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@UtilityClass
public final class ResetPasswordTokenUtil {
    public static String generateResetPasswordToken(){
        String token = UUIDUtil.getUuid();
        LocalDateTime expirationDateTime = LocalDateTime.now().plus(10, ChronoUnit.MINUTES);
        token = token + "|" + expirationDateTime;
        return token;
    }

    public static boolean validResetPasswordToken(String token){
        String[] tokenParts = splitToken(token);
        if (tokenParts.length != 2) {
            return false; // Invalid token format
        }

        String tokenString = tokenParts[0];
        LocalDateTime expirationDateTime = LocalDateTime.parse(tokenParts[1]);

        return LocalDateTime.now().isBefore(expirationDateTime);
    }

    public static String[] splitToken(String token){
        return token.split("\\|");
    }

}
