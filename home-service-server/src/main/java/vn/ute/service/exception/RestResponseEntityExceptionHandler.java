package vn.ute.service.exception;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.ConstraintViolationException;
import lombok.extern.java.Log;
import org.hibernate.PropertyValueException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.utils.UUIDUtil;

import java.text.MessageFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.stream.Collectors;
@Log
@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    @SuppressWarnings("DataFlowIssue")
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers,
                                                                  HttpStatusCode status, WebRequest request) {
        var errorsMap = new HashMap<String, Object>();
        var globalErrors = ex.getGlobalErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());
        errorsMap.put("global_errors", globalErrors);
        var fieldErrors = ex.getBindingResult().getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        errorsMap.put("field_errors", fieldErrors);
        var responseBody = new ResponseDto<>("fail","Invalid input",errorsMap);
        return new ResponseEntity<>(responseBody, headers, status);
    }

    @ExceptionHandler(PropertyValueException.class)
    protected ResponseEntity<?> handlePropertyValueException(HttpServletResponse response, PropertyValueException e) {
        var logId = UUIDUtil.getUuid();
        response.setHeader("x-error-request", String.valueOf(1));
        response.setHeader("x-error-log-id", logId);
        log.log(Level.WARNING, MessageFormat.format("RestResponseEntityExceptionHandler >> handlePropertyValueException >> logId: {0} >> Exception: {1}", logId, e.getMessage()));
        var responseBody = new ResponseDto<>("fail","Invalid input",Map.of());
        return ResponseEntity.ok(responseBody);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    protected ResponseEntity<?> handleIllegalArgumentException(HttpServletResponse response, IllegalArgumentException e) {
        var logId = UUIDUtil.getUuid();
        response.setHeader("x-error-request", String.valueOf(1));
        response.setHeader("x-error-log-id", logId);
        log.log(Level.WARNING, MessageFormat.format("RestResponseEntityExceptionHandler >> handleIllegalArgumentException >> logId: {0} >> Exception: {1}", logId, e.getMessage()));
        var responseBody = new ResponseDto<>("fail","Invalid path variable",Map.of());
        return ResponseEntity.ok(responseBody);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    protected ResponseEntity<?> handleConstraintViolationException(HttpServletResponse response, ConstraintViolationException e) {
        var logId = UUIDUtil.getUuid();
        response.setHeader("x-error-request", String.valueOf(1));
        response.setHeader("x-error-log-id", logId);
        log.log(Level.WARNING, MessageFormat.format("RestResponseEntityExceptionHandler >> handleConstraintViolationException >> logId: {0} >> Exception: {1}", logId, e.getMessage()));
        var responseBody = new ResponseDto<>("fail","Invalid input",Map.of());
        return ResponseEntity.ok(responseBody);
    }
}
