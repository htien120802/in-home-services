package vn.ute.service.utils;

import lombok.experimental.UtilityClass;

import java.util.UUID;

@UtilityClass
public final class UUIDUtil {
    public static String getUuid(){
        return UUID.randomUUID().toString().replace("-", "");
    }
}
