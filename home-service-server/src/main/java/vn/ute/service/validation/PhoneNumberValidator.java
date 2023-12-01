package vn.ute.service.validation;

import vn.ute.service.validation.custom.PhoneNumber;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class PhoneNumberValidator implements ConstraintValidator<PhoneNumber, String> {
    // Define the regular expression pattern for a valid phone number.
    private static final String PHONE_NUMBER_REGEX = "^[0-9]{10}$";

    @Override
    public void initialize(PhoneNumber phoneNumber) {
    }

    @Override
    public boolean isValid(String phoneNumber, ConstraintValidatorContext context) {
        if (phoneNumber == null) {
            return false; // Null values are considered invalid
        }
        return Pattern.matches(PHONE_NUMBER_REGEX, phoneNumber);
    }
}