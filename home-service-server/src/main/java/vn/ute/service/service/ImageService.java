package vn.ute.service.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.exception.ImageUploadException;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
public class ImageService {

    private final Cloudinary cloudinary;

    public ImageService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public String uploadImage(MultipartFile file) throws ImageUploadException {
        try {
            // Check if the uploaded file is an image
            if (file == null || !file.getContentType().startsWith("image/")) {
                throw new ImageUploadException("Invalid file type. Please upload an image.");
            }

            // Check if the file size exceeds 100 KB
            long fileSizeInBytes = file.getSize();
            long fileSizeInKB = fileSizeInBytes / 1024; // Convert bytes to kilobytes

            if (fileSizeInKB > 100) {
                throw new ImageUploadException("File size exceeds the limit of 100 KB.");
            }

            //Convert MultipartFile to Map for Cloudinary upload
            Map<?, ?> params = ObjectUtils.asMap(
                    "folder", "storage", // Optional: Set a specific folder
                    "name", true // Ensure unique filenames
            );

            Map<?, ?> result = cloudinary.uploader().upload(file.getBytes(), params);
            return (String) result.get("secure_url");
        } catch (IOException e){
            e.printStackTrace();
            return null;
        }

    }
}
