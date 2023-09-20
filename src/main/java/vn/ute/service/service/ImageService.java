package vn.ute.service.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
public class ImageService {

    @Autowired
    private Cloudinary cloudinary;

    public String uploadImage(MultipartFile file) {
        try {
            //Generatde name
            String name = UUID.randomUUID().toString().replaceAll("-","");
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
